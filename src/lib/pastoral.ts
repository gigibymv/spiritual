import type { PastoralResponse, PastoralVerse, SearchResult } from "@/types"
import { keywordPhrases } from "@/data/pastoral-phrases"

/**
 * Normalise un texte pour la comparaison :
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
 * Sélectionne le meilleur template de connexion pour un verset
 * en fonction des mots-clés correspondants.
 *
 * Les clés de connectionTemplates sont au format pipe-séparé
 * (ex: "avenir|travail"). On cherche la clé dont un segment
 * correspond à l'un des mots-clés matchés, sinon on retombe
 * sur "default".
 */
function selectConnectionMessage(
  connectionTemplates: Record<string, string>,
  matchedKeywords: string[]
): string {
  const normalizedMatched = matchedKeywords.map(normalize)

  for (const [templateKey, message] of Object.entries(connectionTemplates)) {
    if (templateKey === "default") continue

    const segments = templateKey.split("|").map(normalize)
    const hasMatch = segments.some((segment) =>
      normalizedMatched.some(
        (kw) => kw.includes(segment) || segment.includes(kw)
      )
    )

    if (hasMatch) return message
  }

  return connectionTemplates["default"] ?? ""
}

/**
 * Trouve la première phrase empathique correspondant aux mots-clés matchés
 * dans le dictionnaire global keywordPhrases.
 */
function findKeywordInsight(matchedKeywords: string[]): string | null {
  for (const keyword of matchedKeywords) {
    const normalizedKeyword = normalize(keyword)

    for (const [phraseKey, phrase] of Object.entries(keywordPhrases)) {
      const normalizedPhraseKey = normalize(phraseKey)
      if (
        normalizedKeyword.includes(normalizedPhraseKey) ||
        normalizedPhraseKey.includes(normalizedKeyword)
      ) {
        return phrase
      }
    }
  }

  return null
}

/**
 * Genere une reponse pastorale a partir des resultats de recherche.
 *
 * - Selectionne une intro pastorale aleatoire de la situation principale
 * - Cherche une phrase empathique correspondant aux mots-cles
 * - Collecte les versets des 2 meilleures situations, dedupliques par reference
 * - Trie par score combine (matchScore * relevanceScore), prend les 5 premiers
 * - Pour chaque verset, choisit le meilleur template de connexion
 */
export function generatePastoralResponse(
  _query: string,
  results: SearchResult[],
  matchedKeywords: string[]
): PastoralResponse {
  if (results.length === 0) {
    return {
      introMessage:
        "Je n'ai pas trouve de situation correspondant exactement a votre recherche, mais sachez que Dieu entend chaque priere, meme celles que nous ne savons pas formuler. N'hesitez pas a reformuler votre question ou a explorer les categories proposees.",
      keywordInsight: null,
      verses: [],
      situationName: "",
      matchedKeywords: [],
    }
  }

  const topResults = results.slice(0, 2)
  const topSituation = topResults[0].situation

  // Select a random pastoral intro from the top situation
  const randomIndex = Math.floor(
    Math.random() * topSituation.pastoralIntros.length
  )
  const introMessage = topSituation.pastoralIntros[randomIndex]

  // Look up keyword insight from the global dictionary
  const keywordInsight = findKeywordInsight(matchedKeywords)

  // Collect verses from the top 2 situations, with their context
  const verseCandidates: {
    verse: (typeof topSituation.verses)[number]
    combinedScore: number
    situationId: string
    matchedKeywords: string[]
  }[] = []

  for (const result of topResults) {
    for (const verse of result.situation.verses) {
      verseCandidates.push({
        verse,
        combinedScore: result.matchScore * verse.relevanceScore,
        situationId: result.situation.id,
        matchedKeywords: result.matchedKeywords,
      })
    }
  }

  // Deduplicate by reference (keep the one with highest combined score)
  const deduplicatedMap = new Map<
    string,
    (typeof verseCandidates)[number]
  >()

  for (const candidate of verseCandidates) {
    const existing = deduplicatedMap.get(candidate.verse.reference)
    if (!existing || candidate.combinedScore > existing.combinedScore) {
      deduplicatedMap.set(candidate.verse.reference, candidate)
    }
  }

  // Sort by combined score descending, take top 5
  const sortedCandidates = [...deduplicatedMap.values()]
    .sort((a, b) => b.combinedScore - a.combinedScore)
    .slice(0, 5)

  // Build pastoral verses with connection messages
  const verses: PastoralVerse[] = sortedCandidates.map((candidate) => ({
    verse: candidate.verse,
    connectionMessage: selectConnectionMessage(
      candidate.verse.connectionTemplates,
      candidate.matchedKeywords
    ),
    situationId: candidate.situationId,
  }))

  return {
    introMessage,
    keywordInsight,
    verses,
    situationName: topSituation.name,
    matchedKeywords,
  }
}
