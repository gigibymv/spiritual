import { useMemo, useCallback } from "react"
import { situations } from "@/data/verses"
import type { SearchResult, Situation } from "@/types"

/**
 * Normalise un texte pour la recherche :
 * supprime les accents, met en minuscules, retire la ponctuation.
 */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
}

/**
 * English-to-French keyword mapping so English queries match French situations.
 */
const englishToFrench: Record<string, string[]> = {
  anxious: ["anxieux", "anxiete"],
  anxiety: ["anxiete", "angoisse"],
  worried: ["inquiet", "inquietude"],
  worry: ["inquietude", "souci"],
  stress: ["stress", "stresse"],
  stressed: ["stresse", "tension"],
  fear: ["peur", "crainte"],
  afraid: ["peur", "crainte"],
  panic: ["panique", "angoisse"],
  nervous: ["nerveux", "tendu"],
  forgive: ["pardonner", "pardon"],
  forgiveness: ["pardon", "pardonner"],
  grief: ["deuil", "perte"],
  mourning: ["deuil", "mort"],
  death: ["mort", "deuil"],
  loss: ["perte", "deuil"],
  meaning: ["sens", "but"],
  purpose: ["sens", "but", "vocation"],
  future: ["avenir", "futur"],
  conflict: ["conflit", "dispute"],
  argument: ["conflit", "dispute"],
  faith: ["foi", "croyance"],
  doubt: ["doute", "incertitude"],
  money: ["argent", "financier"],
  financial: ["financier", "argent"],
  lonely: ["seul", "solitude"],
  loneliness: ["solitude", "seul"],
  alone: ["seul", "solitude"],
  temptation: ["tentation", "peche"],
  sad: ["triste", "tristesse"],
  sadness: ["tristesse", "triste"],
  discouraged: ["decourage", "decouragement"],
  depression: ["depression", "deprime"],
  depressed: ["deprime", "depression"],
  decision: ["decision", "choix"],
  jealous: ["jaloux", "jalousie"],
  jealousy: ["jalousie", "envie"],
  envy: ["envie", "jalousie"],
  envious: ["envie", "jalousie"],
  injustice: ["injustice"],
  angry: ["colere", "enerve"],
  anger: ["colere"],
  work: ["travail", "professionnel"],
  job: ["travail", "emploi"],
  family: ["famille", "familial"],
  illness: ["maladie", "sante"],
  sick: ["maladie", "malade"],
  health: ["sante", "maladie"],
  suffering: ["souffrance", "douleur"],
  pain: ["douleur", "souffrance"],
  marriage: ["couple", "mariage"],
  divorce: ["divorce", "separation"],
  children: ["enfants", "fils", "fille"],
  failure: ["echec", "echoue"],
  betrayal: ["trahison", "trahi"],
  guilt: ["culpabilite", "coupable"],
  addiction: ["addiction", "dependance"],
  rejection: ["rejet", "rejete"],
  sleep: ["insomnie", "sommeil"],
  insomnia: ["insomnie"],
  despair: ["desespoir", "desespere"],
  hopeless: ["desespoir", "sans espoir"],
  hope: ["esperance", "espoir"],
  peace: ["paix", "serenite"],
  patience: ["patience", "attente"],
  love: ["amour", "aimer"],
  hate: ["haine", "detester"],
  shame: ["honte", "humiliation"],
  bitterness: ["amertume", "rancune"],
  comparison: ["comparaison", "comparer"],
  rivalry: ["rivalite", "competition"],
  confusion: ["confusion", "perdu"],
  lost: ["perdu", "egare"],
  tired: ["fatigue", "epuise"],
  exhausted: ["epuise", "fatigue"],
  weak: ["faible", "faiblesse"],
  struggling: ["lutte", "combat"],
  fight: ["combat", "lutte"],
  pray: ["prier", "priere"],
  prayer: ["priere", "prier"],
  grateful: ["gratitude", "reconnaissance"],
  thankful: ["gratitude", "reconnaissant"],
  blessed: ["beni", "benediction"],
  happy: ["heureux", "joie"],
  joy: ["joie", "heureux"],
  trial: ["epreuve", "difficulte"],
  trouble: ["difficulte", "probleme"],
  problem: ["probleme", "difficulte"],
  crisis: ["crise", "epreuve"],
  help: ["aide", "secours"],
  broken: ["brise", "blessure"],
  hurt: ["blessure", "blesse"],
  worried: ["inquiet", "souci"],
  unfair: ["injuste", "injustice"],
  abuse: ["abus", "maltraite"],
  bullying: ["harcelement", "persecution"],
  regret: ["regret", "remords"],
  sorry: ["pardon", "regret"],
  relationship: ["relation", "couple"],
  breakup: ["rupture", "separation"],
  trust: ["confiance", "trahison"],
  worry: ["inquietude", "souci"],
  overwhelmed: ["submerge", "deborde"],
  burden: ["fardeau", "poids"],
  guidance: ["guidance", "direction"],
  wisdom: ["sagesse", "discernement"],
  strength: ["force", "courage"],
  courage: ["courage", "force"],
  comfort: ["reconfort", "consolation"],
}

/**
 * Translates English tokens to French equivalents for search matching.
 */
function expandWithFrench(tokens: string[]): string[] {
  const expanded = [...tokens]
  for (const token of tokens) {
    const frenchEquivalents = englishToFrench[token]
    if (frenchEquivalents) {
      expanded.push(...frenchEquivalents)
    }
  }
  return [...new Set(expanded)]
}

const stopWordsFr = new Set([
  "les", "des", "une", "mon", "mes", "ton", "tes", "son", "ses",
  "nos", "vos", "leur", "leurs", "que", "qui", "quoi", "dont",
  "dans", "avec", "pour", "par", "sur", "sous", "entre", "vers",
  "chez", "sans", "mais", "donc", "car", "pas", "plus", "moins",
  "tout", "tous", "toute", "toutes", "autre", "autres", "quel",
  "quelle", "quels", "quelles", "est", "suis", "sont", "etre",
  "avoir", "fait", "faire", "dit", "dire", "elle", "lui", "eux",
  "nous", "vous", "ils", "elles", "cette", "ces", "cet",
  "aussi", "alors", "comme", "bien", "tres", "trop", "peu",
])

const stopWordsEn = new Set([
  "the", "and", "but", "for", "are", "not", "you", "all",
  "can", "has", "her", "was", "one", "our", "out", "had",
  "have", "been", "some", "them", "than", "its", "over",
  "such", "that", "this", "with", "will", "each", "from",
  "they", "been", "said", "very", "when", "what", "your",
  "about", "would", "there", "their", "which", "could",
  "other", "into", "more", "just", "also", "feel", "feeling",
  "going", "through", "need", "really", "someone",
])

/**
 * Extrait les mots significatifs d'un texte (≥ 3 caractères),
 * en excluant les mots vides courants du français et de l'anglais.
 */
function extractTokens(text: string): string[] {
  return normalize(text)
    .split(/\s+/)
    .filter((word) => word.length >= 3 && !stopWordsFr.has(word) && !stopWordsEn.has(word))
}

/**
 * Simple French stem: strips common suffixes to improve partial matching.
 */
function stem(word: string): string {
  if (word.length <= 4) return word
  return word
    .replace(/(ement|ement|ation|ition|ment|eux|euse|iste|ique|ible|able|eur|eurs|ence|ance|ite|ites|esse|ie|ies|ement)$/, "")
    .replace(/(ing|tion|ness|ment|ful|less|ous|ive|able|ible|ment|ally|ity)$/, "")
}

/**
 * Calcule un score de correspondance entre les tokens de la requête
 * et les keywords d'une situation.
 */
function computeMatchScore(
  queryTokens: string[],
  situation: Situation
): { score: number; matchedKeywords: string[] } {
  const normalizedKeywords = situation.keywords.map(normalize)
  const normalizedName = normalize(situation.name)
  const normalizedDescription = normalize(situation.description)

  let score = 0
  const matchedKeywords: string[] = []

  for (const token of queryTokens) {
    const tokenStem = stem(token)
    let matched = false

    // Match on keywords
    for (let i = 0; i < normalizedKeywords.length; i++) {
      const kw = normalizedKeywords[i]
      const kwStem = stem(kw)

      // Exact or substring match → highest score
      if (kw.includes(token) || token.includes(kw)) {
        score += 3
        matchedKeywords.push(situation.keywords[i])
        matched = true
      }
      // Stem match → slightly lower score
      else if (tokenStem.length >= 4 && (kwStem.includes(tokenStem) || tokenStem.includes(kwStem))) {
        score += 2
        matchedKeywords.push(situation.keywords[i])
        matched = true
      }
    }

    if (!matched) {
      // Match on situation name
      if (normalizedName.includes(token) || normalizedName.includes(tokenStem)) {
        score += 2
      }

      // Match on description
      if (normalizedDescription.includes(token) || normalizedDescription.includes(tokenStem)) {
        score += 1
      }
    }

    // Also check pastoral intros for broader matching (lower weight)
    if (!matched) {
      for (const intro of situation.pastoralIntros) {
        if (normalize(intro).includes(token)) {
          score += 0.5
          break
        }
      }
    }
  }

  return {
    score,
    matchedKeywords: [...new Set(matchedKeywords)],
  }
}

export function useVerseSearch() {
  const allSituations = useMemo(() => situations, [])

  const search = useCallback(
    (query: string): SearchResult[] => {
      if (!query.trim()) return []

      const rawTokens = extractTokens(query)
      if (rawTokens.length === 0) return []

      // Expand English tokens with French equivalents
      const queryTokens = expandWithFrench(rawTokens)

      const results: SearchResult[] = []

      for (const situation of allSituations) {
        const { score, matchedKeywords } = computeMatchScore(
          queryTokens,
          situation
        )

        if (score > 0) {
          results.push({
            situation,
            matchScore: score,
            matchedKeywords,
          })
        }
      }

      // If no results, try matching against verse texts and explanations as a fallback
      if (results.length === 0) {
        for (const situation of allSituations) {
          let fallbackScore = 0
          for (const verse of situation.verses) {
            const normalizedText = normalize(verse.text)
            const normalizedExplanation = normalize(verse.explanation)
            for (const token of queryTokens) {
              if (normalizedText.includes(token)) fallbackScore += 0.5
              if (normalizedExplanation.includes(token)) fallbackScore += 0.3
            }
          }
          if (fallbackScore > 0) {
            results.push({
              situation,
              matchScore: fallbackScore,
              matchedKeywords: rawTokens,
            })
          }
        }
      }

      return results.sort((a, b) => b.matchScore - a.matchScore)
    },
    [allSituations]
  )

  const getByCategory = useCallback(
    (categoryId: string): Situation[] => {
      return allSituations.filter((s) => s.categoryId === categoryId)
    },
    [allSituations]
  )

  const getById = useCallback(
    (id: string): Situation | undefined => {
      return allSituations.find((s) => s.id === id)
    },
    [allSituations]
  )

  return { search, getByCategory, getById, allSituations }
}
