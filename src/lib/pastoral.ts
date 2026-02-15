import type { PastoralResponse, PastoralVerse, SearchResult } from "@/types"
import { keywordPhrases, keywordPhrasesEn } from "@/data/pastoral-phrases"
import type { Language } from "@/data/translations"

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
 * Simple deterministic hash of a string → number.
 */
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

/**
 * Echo templates — deterministically selected by query hash.
 * These echo the user's keywords back to them in a personal way.
 */
const echoTemplatesFr = [
  (kw: string) =>
    `Vous parlez de « ${kw} », et ce sentiment est profondément humain.`,
  (kw: string) =>
    `Vous traversez quelque chose lié à « ${kw} » — Dieu voit votre cœur.`,
  (kw: string) =>
    `Votre préoccupation autour de « ${kw} » résonne avec beaucoup de croyants.`,
  (kw: string) =>
    `Ce que vous exprimez à propos de « ${kw} » mérite d'être entendu.`,
  (kw: string) =>
    `La question de « ${kw} » que vous soulevez touche au cœur de l'expérience humaine.`,
  (kw: string) =>
    `Vous n'êtes pas seul(e) à ressentir cela autour de « ${kw} ».`,
  (kw: string) =>
    `Ce que vous vivez en lien avec « ${kw} » est une épreuve que Dieu comprend.`,
  (kw: string) =>
    `Parler de « ${kw} » demande du courage — et c'est un premier pas important.`,
  (kw: string) =>
    `Votre questionnement sur « ${kw} » montre une recherche sincère de réponses.`,
  (kw: string) =>
    `Le sujet de « ${kw} » que vous abordez est au cœur de nombreux passages bibliques.`,
]

const echoTemplatesEn = [
  (kw: string) =>
    `You're speaking about "${kw}", and this feeling is deeply human.`,
  (kw: string) =>
    `You're going through something related to "${kw}" — God sees your heart.`,
  (kw: string) =>
    `Your concern about "${kw}" resonates with many believers.`,
  (kw: string) =>
    `What you're expressing about "${kw}" deserves to be heard.`,
  (kw: string) =>
    `The question of "${kw}" that you raise touches the heart of the human experience.`,
  (kw: string) =>
    `You're not alone in feeling this way about "${kw}".`,
  (kw: string) =>
    `What you're experiencing with "${kw}" is a trial that God understands.`,
  (kw: string) =>
    `Talking about "${kw}" takes courage — and it's an important first step.`,
  (kw: string) =>
    `Your questioning about "${kw}" shows a sincere search for answers.`,
  (kw: string) =>
    `The topic of "${kw}" is at the heart of many biblical passages.`,
]

/**
 * Builds a personalized intro that echoes back the user's keywords
 * before appending the situation's random pastoral intro.
 */
function buildPersonalizedIntro(
  query: string,
  situationIntro: string,
  matchedKeywords: string[],
  language: Language
): string {
  if (matchedKeywords.length === 0) return situationIntro

  // Pick the most specific keyword (longest)
  const primaryKeyword = [...matchedKeywords].sort(
    (a, b) => b.length - a.length
  )[0]

  const echoTemplates = language === "en" ? echoTemplatesEn : echoTemplatesFr

  // Deterministically select an echo template based on query hash
  const templateIndex = hashCode(query) % echoTemplates.length
  const echo = echoTemplates[templateIndex](primaryKeyword)

  return `${echo} ${situationIntro}`
}

/**
 * Sélectionne le meilleur template de connexion pour un verset
 * en fonction des mots-clés correspondants.
 */
function selectConnectionMessage(
  connectionTemplates: Record<string, string>,
  matchedKeywords: string[],
  query: string,
  language: Language
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

  const defaultMsg = connectionTemplates["default"] ?? ""

  // When falling back to default, add contextual phrasing based on query
  if (defaultMsg && query) {
    const contextPrefixes = language === "en"
      ? [
          "In your situation, ",
          "Facing what you're going through, ",
          "To address your concern, ",
          "In connection with what you're experiencing, ",
          "To shed light on your questioning, ",
        ]
      : [
          "Dans votre situation, ",
          "Face à ce que vous vivez, ",
          "Pour répondre à votre préoccupation, ",
          "En lien avec ce que vous traversez, ",
          "Pour éclairer votre questionnement, ",
        ]
    const prefixIndex = hashCode(query) % contextPrefixes.length
    const prefix = contextPrefixes[prefixIndex]
    // Lowercase the first letter of the default message to append it
    const lowerDefault =
      defaultMsg.charAt(0).toLowerCase() + defaultMsg.slice(1)
    return `${prefix}${lowerDefault}`
  }

  return defaultMsg
}

/**
 * Trouve la première phrase empathique correspondant aux mots-clés matchés
 * dans le dictionnaire global keywordPhrases.
 */
function findKeywordInsight(matchedKeywords: string[], language: Language): string | null {
  const phrases = language === "en" ? keywordPhrasesEn : keywordPhrases

  for (const keyword of matchedKeywords) {
    const normalizedKeyword = normalize(keyword)

    for (const [phraseKey, phrase] of Object.entries(phrases)) {
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
 */
export function generatePastoralResponse(
  query: string,
  results: SearchResult[],
  matchedKeywords: string[],
  language: Language = "fr"
): PastoralResponse {
  if (results.length === 0) {
    const noResultsMessage = language === "en"
      ? "I couldn't find an exact match for your search, but know that God hears every prayer, even those we can't put into words. Feel free to rephrase your question or explore the suggested topics."
      : "Je n'ai pas trouvé de situation correspondant exactement à votre recherche, mais sachez que Dieu entend chaque prière, même celles que nous ne savons pas formuler. N'hésitez pas à reformuler votre question ou à explorer les suggestions proposées."
    return {
      userQuery: query,
      introMessage: noResultsMessage,
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
  const situationIntro = topSituation.pastoralIntros[randomIndex]

  // Build personalized intro that echoes the user's keywords
  const introMessage = buildPersonalizedIntro(
    query,
    situationIntro,
    matchedKeywords,
    language
  )

  // Look up keyword insight from the global dictionary
  const keywordInsight = findKeywordInsight(matchedKeywords, language)

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
      candidate.matchedKeywords,
      query,
      language
    ),
    situationId: candidate.situationId,
  }))

  return {
    userQuery: query,
    introMessage,
    keywordInsight,
    verses,
    situationName: topSituation.name,
    matchedKeywords,
  }
}
