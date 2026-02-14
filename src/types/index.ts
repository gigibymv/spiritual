export interface SituationCategory {
  id: string
  label: string
  icon: string
  description: string
}

export interface Situation {
  id: string
  categoryId: string
  name: string
  keywords: string[]
  description: string
  pastoralIntros: string[]
  verses: VerseRecommendation[]
}

export interface VerseRecommendation {
  reference: string
  text: string
  explanation: string
  application: string
  relevanceScore: number
  connectionTemplates: Record<string, string>
}

export interface SearchResult {
  situation: Situation
  matchScore: number
  matchedKeywords: string[]
}

export interface PastoralResponse {
  introMessage: string
  keywordInsight: string | null
  verses: PastoralVerse[]
  situationName: string
  matchedKeywords: string[]
}

export interface PastoralVerse {
  verse: VerseRecommendation
  connectionMessage: string
  situationId: string
}

export interface SearchHistoryEntry {
  id: string
  query: string
  timestamp: string
  topSituationName: string
  verseCount: number
}

export interface JournalEntry {
  id: string
  title: string
  content: string
  verseReference?: string
  verseText?: string
  mood?: string
  createdAt: string
  updatedAt: string
}
