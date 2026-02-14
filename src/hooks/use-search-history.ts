import { useState, useCallback, useEffect } from "react"
import type { SearchHistoryEntry } from "@/types"

const STORAGE_KEY = "parole-lumiere-history"
const MAX_ENTRIES = 20

/**
 * Hook de gestion de l'historique des recherches.
 *
 * - Stocke jusqu'a 20 entrees dans localStorage (FIFO, plus recentes en premier)
 * - Empeche les doublons : une recherche identique remplace l'ancienne avec un timestamp mis a jour
 * - Parsing JSON securise avec fallback sur un tableau vide
 */
export function useSearchHistory() {
  const [history, setHistory] = useState<SearchHistoryEntry[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return []
      const parsed = JSON.parse(stored)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  }, [history])

  const addEntry = useCallback(
    (query: string, topSituationName: string, verseCount: number) => {
      setHistory((prev) => {
        // Remove existing entry with the same query (case-insensitive)
        const normalizedQuery = query.trim().toLowerCase()
        const filtered = prev.filter(
          (entry) => entry.query.trim().toLowerCase() !== normalizedQuery
        )

        const newEntry: SearchHistoryEntry = {
          id: crypto.randomUUID(),
          query: query.trim(),
          timestamp: new Date().toISOString(),
          topSituationName,
          verseCount,
        }

        // Add newest first, cap at MAX_ENTRIES
        return [newEntry, ...filtered].slice(0, MAX_ENTRIES)
      })
    },
    []
  )

  const clearHistory = useCallback(() => {
    setHistory([])
  }, [])

  return { history, addEntry, clearHistory }
}
