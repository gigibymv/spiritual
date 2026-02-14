import { useState, useCallback, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/AuthContext"

const STORAGE_KEY = "bible-guide-favorites"

export interface FavoriteVerse {
  reference: string
  text: string
  savedAt: string
}

export function useFavorites() {
  const { user } = useAuth()

  const [favorites, setFavorites] = useState<FavoriteVerse[]>(() => {
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    }
  }, [favorites, user])

  // Load from Supabase when user signs in
  useEffect(() => {
    if (!user || !supabase) return

    supabase
      .from("favorites")
      .select("reference, text, saved_at")
      .eq("user_id", user.id)
      .order("saved_at", { ascending: false })
      .then(({ data }) => {
        if (data) {
          setFavorites(
            data.map((row) => ({
              reference: row.reference,
              text: row.text,
              savedAt: row.saved_at,
            }))
          )
        }
      })
  }, [user])

  const addFavorite = useCallback(
    (reference: string, text: string) => {
      const savedAt = new Date().toISOString()

      setFavorites((prev) => {
        if (prev.some((f) => f.reference === reference)) return prev
        return [...prev, { reference, text, savedAt }]
      })

      if (user && supabase) {
        supabase
          .from("favorites")
          .upsert(
            { user_id: user.id, reference, text, saved_at: savedAt },
            { onConflict: "user_id,reference" }
          )
          .then()
      }
    },
    [user]
  )

  const removeFavorite = useCallback(
    (reference: string) => {
      setFavorites((prev) => prev.filter((f) => f.reference !== reference))

      if (user && supabase) {
        supabase
          .from("favorites")
          .delete()
          .eq("user_id", user.id)
          .eq("reference", reference)
          .then()
      }
    },
    [user]
  )

  const isFavorite = useCallback(
    (reference: string) => favorites.some((f) => f.reference === reference),
    [favorites]
  )

  return { favorites, addFavorite, removeFavorite, isFavorite }
}
