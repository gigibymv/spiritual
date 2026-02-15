import { Flame, Bookmark, BookOpen, User, LogOut, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { useLanguage } from "@/contexts/LanguageContext"

interface HeaderProps {
  onShowFavorites?: () => void
  onShowJournal?: () => void
  onShowAuth?: () => void
  favoritesCount?: number
  showFavoritesButton?: boolean
  showJournalButton?: boolean
}

export function Header({
  onShowFavorites,
  onShowJournal,
  onShowAuth,
  favoritesCount = 0,
  showFavoritesButton = false,
  showJournalButton = false,
}: HeaderProps) {
  const { user, signOut } = useAuth()
  const { language, setLanguage, t } = useLanguage()

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
              {t("header.title")}
            </h1>
            <p className="text-[11px] text-[#8B7D6B] tracking-wide mt-0.5">
              {t("header.subtitle")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="text-[#8B7D6B] hover:text-[#2C3E6B] hover:bg-[#C9A96E]/10 gap-1 px-2"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="text-xs font-medium uppercase">
              {language === "fr" ? "EN" : "FR"}
            </span>
          </Button>

          {showJournalButton && onShowJournal && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onShowJournal}
              className="text-[#8B7D6B] hover:text-[#2C3E6B] hover:bg-[#C9A96E]/10 gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">{t("header.journal")}</span>
            </Button>
          )}

          {showFavoritesButton && onShowFavorites && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onShowFavorites}
              className="text-[#8B7D6B] hover:text-[#2C3E6B] hover:bg-[#C9A96E]/10 gap-1.5 relative"
            >
              <Bookmark className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">{t("header.favorites")}</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-white text-[10px] font-medium rounded-full w-4.5 h-4.5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Button>
          )}

          {user ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={signOut}
              className="text-[#8B7D6B] hover:text-[#2C3E6B] hover:bg-[#C9A96E]/10 gap-1.5"
            >
              <div className="w-6 h-6 rounded-full bg-[#2C3E6B]/10 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-[#2C3E6B]" />
              </div>
              <LogOut className="w-3.5 h-3.5 hidden sm:block" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={onShowAuth}
              className="text-[#8B7D6B] hover:text-[#2C3E6B] hover:bg-[#C9A96E]/10 gap-1.5"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">{t("header.login")}</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
