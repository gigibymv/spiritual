import { useState, useCallback, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/AuthContext"
import type { JournalEntry } from "@/types"

const STORAGE_KEY = "parole-lumiere-journal"

export function useJournal() {
  const { user } = useAuth()

  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // Sync localStorage for anonymous users
  useEffect(() => {
    if (!user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    }
  }, [entries, user])

  // Load from Supabase when user signs in
  useEffect(() => {
    if (!user || !supabase) return

    supabase
      .from("journal_entries")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) {
          setEntries(
            data.map((row) => ({
              id: row.id,
              title: row.title ?? "",
              content: row.content,
              verseReference: row.verse_reference ?? undefined,
              verseText: row.verse_text ?? undefined,
              mood: row.mood ?? undefined,
              createdAt: row.created_at,
              updatedAt: row.updated_at,
            }))
          )
        }
      })
  }, [user])

  const addEntry = useCallback(
    (entry: Omit<JournalEntry, "id" | "createdAt" | "updatedAt">) => {
      const now = new Date().toISOString()
      const newEntry: JournalEntry = {
        ...entry,
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
      }

      setEntries((prev) => [newEntry, ...prev])

      if (user && supabase) {
        supabase
          .from("journal_entries")
          .insert({
            id: newEntry.id,
            user_id: user.id,
            title: entry.title || null,
            content: entry.content,
            verse_reference: entry.verseReference || null,
            verse_text: entry.verseText || null,
            mood: entry.mood || null,
          })
          .then()
      }

      return newEntry
    },
    [user]
  )

  const updateEntry = useCallback(
    (id: string, updates: Partial<Omit<JournalEntry, "id" | "createdAt">>) => {
      const now = new Date().toISOString()

      setEntries((prev) =>
        prev.map((e) =>
          e.id === id ? { ...e, ...updates, updatedAt: now } : e
        )
      )

      if (user && supabase) {
        const dbUpdates: Record<string, unknown> = { updated_at: now }
        if (updates.title !== undefined) dbUpdates.title = updates.title || null
        if (updates.content !== undefined) dbUpdates.content = updates.content
        if (updates.verseReference !== undefined)
          dbUpdates.verse_reference = updates.verseReference || null
        if (updates.verseText !== undefined)
          dbUpdates.verse_text = updates.verseText || null
        if (updates.mood !== undefined) dbUpdates.mood = updates.mood || null

        supabase
          .from("journal_entries")
          .update(dbUpdates)
          .eq("id", id)
          .eq("user_id", user.id)
          .then()
      }
    },
    [user]
  )

  const deleteEntry = useCallback(
    (id: string) => {
      setEntries((prev) => prev.filter((e) => e.id !== id))

      if (user && supabase) {
        supabase
          .from("journal_entries")
          .delete()
          .eq("id", id)
          .eq("user_id", user.id)
          .then()
      }
    },
    [user]
  )

  return { entries, addEntry, updateEntry, deleteEntry }
}
