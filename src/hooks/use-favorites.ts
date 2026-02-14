import { useState, useCallback, useEffect } from "react"

const STORAGE_KEY = "bible-guide-favorites"

export interface FavoriteVerse {
  reference: string
  text: string
  savedAt: string
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteVerse[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = useCallback((reference: string, text: string) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.reference === reference)) return prev
      return [...prev, { reference, text, savedAt: new Date().toISOString() }]
    })
  }, [])

  const removeFavorite = useCallback((reference: string) => {
    setFavorites((prev) => prev.filter((f) => f.reference !== reference))
  }, [])

  const isFavorite = useCallback(
    (reference: string) => favorites.some((f) => f.reference === reference),
    [favorites]
  )

  return { favorites, addFavorite, removeFavorite, isFavorite }
}
