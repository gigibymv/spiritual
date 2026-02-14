import { Flame, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onShowFavorites?: () => void
  favoritesCount?: number
  showFavoritesButton?: boolean
}

export function Header({
  onShowFavorites,
  favoritesCount = 0,
  showFavoritesButton = false,
}: HeaderProps) {
  return (
    <header className="border-b border-[#E5DDD0]/60 bg-[#FFFDF9]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-amber-50 to-orange-100/80 flex items-center justify-center">
            <Flame className="w-5 h-5 text-amber-600 animate-flame" />
            <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-sm" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold tracking-tight text-[#2C3E6B] leading-none">
              Parole & Lumiere
            </h1>
            <p className="text-[11px] text-[#8B7D6B] tracking-wide mt-0.5">
              Votre guide spirituel personnel
            </p>
          </div>
        </div>
        {showFavoritesButton && onShowFavorites && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onShowFavorites}
            className="text-[#8B7D6B] hover:text-[#2C3E6B] hover:bg-[#C9A96E]/10 gap-1.5 relative"
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">Favoris</span>
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-white text-[10px] font-medium rounded-full w-4.5 h-4.5 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </Button>
        )}
      </div>
    </header>
  )
}
