import { useState, useCallback } from "react"
import { Header } from "@/components/Header"
import { WelcomeSection } from "@/components/WelcomeSection"
import { ConfideInput } from "@/components/ConfideInput"
import { SuggestionChips } from "@/components/SuggestionChips"
import { CategoryPills } from "@/components/CategoryPills"
import { VerseOfDay } from "@/components/VerseOfDay"
import { SearchHistory } from "@/components/SearchHistory"
import { ThinkingState } from "@/components/ThinkingState"
import { PastoralResponse } from "@/components/PastoralResponse"
import { FavoritesPanel } from "@/components/FavoritesPanel"
import { useVerseSearch } from "@/hooks/use-verse-search"
import { useFavorites } from "@/hooks/use-favorites"
import { useSearchHistory } from "@/hooks/use-search-history"
import { useVerseOfDay } from "@/hooks/use-verse-of-day"
import { useGreeting } from "@/hooks/use-greeting"
import { generatePastoralResponse } from "@/lib/pastoral"
import { categories } from "@/data/categories"
import type { PastoralResponse as PastoralResponseType } from "@/types"

type View = "home" | "thinking" | "response" | "favorites"

export default function App() {
  const [view, setView] = useState<View>("home")
  const [query, setQuery] = useState("")
  const [pastoralResponse, setPastoralResponse] =
    useState<PastoralResponseType | null>(null)

  const { search, getByCategory } = useVerseSearch()
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites()
  const { history, addEntry, clearHistory } = useSearchHistory()
  const verseOfDay = useVerseOfDay()
  const greeting = useGreeting()

  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) return

      setQuery(searchQuery)
      setView("thinking")

      setTimeout(() => {
        const results = search(searchQuery)
        const allMatchedKeywords = [
          ...new Set(results.flatMap((r) => r.matchedKeywords)),
        ]
        const response = generatePastoralResponse(
          searchQuery,
          results,
          allMatchedKeywords
        )
        setPastoralResponse(response)
        setView("response")

        if (results.length > 0) {
          addEntry(
            searchQuery,
            response.situationName,
            response.verses.length
          )
        }
      }, 600)
    },
    [search, addEntry]
  )

  const handleSubmit = useCallback(() => {
    performSearch(query)
  }, [query, performSearch])

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      const situations = getByCategory(categoryId)
      if (situations.length === 0) return

      const category = categories.find((c) => c.id === categoryId)
      const categoryLabel = category?.label ?? ""

      setQuery(categoryLabel)
      setView("thinking")

      setTimeout(() => {
        const results = search(categoryLabel)
        const allMatchedKeywords = [
          ...new Set(results.flatMap((r) => r.matchedKeywords)),
        ]
        const response = generatePastoralResponse(
          categoryLabel,
          results,
          allMatchedKeywords
        )
        setPastoralResponse(response)
        setView("response")
      }, 600)
    },
    [getByCategory, search]
  )

  const handleBack = useCallback(() => {
    setView("home")
    setQuery("")
    setPastoralResponse(null)
  }, [])

  const handleToggleFavorite = useCallback(
    (reference: string, text: string) => {
      if (isFavorite(reference)) {
        removeFavorite(reference)
      } else {
        addFavorite(reference, text)
      }
    },
    [isFavorite, removeFavorite, addFavorite]
  )

  return (
    <div className="min-h-screen">
      <Header
        onShowFavorites={() => setView("favorites")}
        favoritesCount={favorites.length}
        showFavoritesButton={view !== "favorites"}
      />

      <div className="max-w-6xl mx-auto flex">
        {/* LEFT SIDEBAR — conversations (desktop only) */}
        {history.length > 0 && (
          <aside className="hidden lg:flex w-64 xl:w-72 flex-shrink-0 border-r border-[#E5DDD0]/40 sticky top-[57px] h-[calc(100vh-57px)]">
            <SearchHistory
              history={history}
              onSelect={performSearch}
              onClear={clearHistory}
              variant="sidebar"
            />
          </aside>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0">
          <div className="max-w-2xl mx-auto px-4 lg:px-6 py-6">
            <div className="space-y-7">
              {view === "thinking" && <ThinkingState />}

              {view === "favorites" && (
                <FavoritesPanel
                  favorites={favorites}
                  onRemove={removeFavorite}
                  onClose={handleBack}
                />
              )}

              {view === "response" && pastoralResponse && (
                <PastoralResponse
                  response={pastoralResponse}
                  isFavorite={isFavorite}
                  onToggleFavorite={handleToggleFavorite}
                  onBack={handleBack}
                />
              )}

              {view === "home" && (
                <>
                  <WelcomeSection greeting={greeting} />

                  <VerseOfDay
                    verse={verseOfDay.verse}
                    situationName={verseOfDay.situationName}
                  />

                  <ConfideInput
                    value={query}
                    onChange={setQuery}
                    onSubmit={handleSubmit}
                  />

                  <SuggestionChips onSelect={performSearch} />

                  {/* Inline history (mobile only) */}
                  <div className="lg:hidden">
                    {history.length > 0 && (
                      <SearchHistory
                        history={history}
                        onSelect={performSearch}
                        onClear={clearHistory}
                        variant="inline"
                      />
                    )}
                  </div>

                  <CategoryPills
                    categories={categories}
                    onSelect={handleCategorySelect}
                  />
                </>
              )}

              <footer className="text-center pt-10 pb-6">
                <div className="ornament-separator mb-4">
                  <span className="text-[10px] text-[#C9A96E]/30">✦</span>
                </div>
                <p className="text-[11px] text-[#8B7D6B]/40 leading-relaxed">
                  Traduction Louis Segond (1910) — Domaine public
                </p>
                <p className="text-[10px] text-[#8B7D6B]/30 mt-1">
                  Base curatee et verifiee
                </p>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
