import { BookmarkCheck, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { FavoriteVerse } from "@/hooks/use-favorites"

interface FavoritesPanelProps {
  favorites: FavoriteVerse[]
  onRemove: (reference: string) => void
  onClose: () => void
}

export function FavoritesPanel({
  favorites,
  onRemove,
  onClose,
}: FavoritesPanelProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-[#8B7D6B] hover:text-[#2A2118] hover:bg-[#E5DDD0]/30 gap-1.5 -ml-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Button>
        <div className="flex items-center gap-2">
          <BookmarkCheck className="w-4 h-4 text-[#C9A96E]" />
          <h2 className="font-serif text-lg font-semibold text-[#2A2118]">
            Favoris
          </h2>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <BookmarkCheck className="w-10 h-10 mx-auto mb-4 text-[#C9A96E]/20" />
          <p className="text-sm text-[#8B7D6B]">Aucun verset sauvegardé</p>
          <p className="text-xs mt-1 text-[#8B7D6B]/50">
            Cliquez sur le signet d'un verset pour le sauvegarder
          </p>
        </div>
      ) : (
        <ScrollArea className="h-[65vh]">
          <div className="space-y-3 pr-2">
            {favorites.map((fav) => (
              <div
                key={fav.reference}
                className="group rounded-xl border border-[#E5DDD0] bg-[#FFFDF9] p-4 card-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#2C3E6B]">
                      {fav.reference}
                    </p>
                    <p className="font-serif text-[13px] text-[#8B7D6B] italic leading-relaxed mt-1.5">
                      {fav.text}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemove(fav.reference)}
                    className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-50 transition-all"
                    aria-label="Supprimer"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
