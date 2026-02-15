import { useState, useCallback, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/AuthContext"
import type { SearchHistoryEntry } from "@/types"

const STORAGE_KEY = "parole-lumiere-history"
const MAX_ENTRIES = 20

export function useSearchHistory() {
  const { user } = useAuth()

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

  // Sync localStorage for anonymous users
  useEffect(() => {
    if (!user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    }
  }, [history, user])

  // Load from Supabase when user signs in
  useEffect(() => {
    if (!user || !supabase) return

    supabase
      .from("search_history")
      .select("id, query, top_situation_name, verse_count, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(MAX_ENTRIES)
      .then(({ data }) => {
        if (data) {
          setHistory(
            data.map((row) => ({
              id: row.id,
              query: row.query,
              timestamp: row.created_at,
              topSituationName: row.top_situation_name ?? "",
              verseCount: row.verse_count ?? 0,
            }))
          )
        }
      })
  }, [user])

  const addEntry = useCallback(
    (query: string, topSituationName: string, verseCount: number) => {
      const newEntry: SearchHistoryEntry = {
        id: crypto.randomUUID(),
        query: query.trim(),
        timestamp: new Date().toISOString(),
        topSituationName,
        verseCount,
      }

      setHistory((prev) => {
        const normalizedQuery = query.trim().toLowerCase()
        const filtered = prev.filter(
          (entry) => entry.query.trim().toLowerCase() !== normalizedQuery
        )
        return [newEntry, ...filtered].slice(0, MAX_ENTRIES)
      })

      if (user && supabase) {
        supabase
          .from("search_history")
          .insert({
            user_id: user.id,
            query: query.trim(),
            top_situation_name: topSituationName,
            verse_count: verseCount,
          })
          .then()
      }
    },
    [user]
  )

  const deleteEntry = useCallback(
    (id: string) => {
      setHistory((prev) => prev.filter((entry) => entry.id !== id))

      if (user && supabase) {
        supabase
          .from("search_history")
          .delete()
          .eq("id", id)
          .eq("user_id", user.id)
          .then()
      }
    },
    [user]
  )

  const clearHistory = useCallback(() => {
    setHistory([])

    if (user && supabase) {
      supabase
        .from("search_history")
        .delete()
        .eq("user_id", user.id)
        .then()
    }
  }, [user])

  return { history, addEntry, deleteEntry, clearHistory }
}
