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
 * Extrait les mots significatifs d'un texte (≥ 3 caractères),
 * en excluant les mots vides courants du français.
 */
function extractTokens(text: string): string[] {
  const stopWords = new Set([
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

  return normalize(text)
    .split(/\s+/)
    .filter((word) => word.length >= 3 && !stopWords.has(word))
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
    // Match exact sur un keyword → score élevé
    for (let i = 0; i < normalizedKeywords.length; i++) {
      if (normalizedKeywords[i].includes(token) || token.includes(normalizedKeywords[i])) {
        score += 3
        matchedKeywords.push(situation.keywords[i])
      }
    }

    // Match sur le nom de la situation
    if (normalizedName.includes(token)) {
      score += 2
    }

    // Match sur la description
    if (normalizedDescription.includes(token)) {
      score += 1
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

      const queryTokens = extractTokens(query)
      if (queryTokens.length === 0) return []

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
