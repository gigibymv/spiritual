import { useMemo } from "react"
import { situations } from "@/data/verses"
import type { VerseRecommendation } from "@/types"

export function useVerseOfDay(): {
  verse: VerseRecommendation
  situationName: string
} {
  return useMemo(() => {
    const today = new Date().toISOString().split("T")[0]
    const hash = today
      .split("")
      .reduce((acc, c) => acc + c.charCodeAt(0), 0)
    const situationIndex = hash % situations.length
    const situation = situations[situationIndex]
    const verseIndex = hash % situation.verses.length
    return { verse: situation.verses[verseIndex], situationName: situation.name }
  }, [])
}
