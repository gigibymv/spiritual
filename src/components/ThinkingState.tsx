import { Flame } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function ThinkingState() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-8 animate-reveal animate-reveal-1">
      <div className="relative">
        <Flame className="w-12 h-12 text-amber-500 animate-flame" />
        <div className="absolute inset-0 w-12 h-12 bg-amber-400/20 rounded-full blur-xl" />
      </div>

      <div className="space-y-3 text-center">
        <p className="font-serif text-xl italic text-[#2A2118]/70">
          {t("thinking.message")}
        </p>
        <div className="flex items-center justify-center gap-1.5 pt-1">
          <div className="w-2 h-2 rounded-full bg-[#C9A96E] thinking-dot-1" />
          <div className="w-2 h-2 rounded-full bg-[#C9A96E] thinking-dot-2" />
          <div className="w-2 h-2 rounded-full bg-[#C9A96E] thinking-dot-3" />
        </div>
      </div>
    </div>
  )
}
