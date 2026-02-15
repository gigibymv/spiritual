import { Flame } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface WelcomeSectionProps {
  greeting: string
}

export function WelcomeSection({ greeting }: WelcomeSectionProps) {
  const { t } = useLanguage()

  return (
    <div className="text-center space-y-5 py-6 animate-reveal animate-reveal-1">
      <div className="relative inline-block">
        <Flame className="w-9 h-9 text-amber-500/80 animate-flame mx-auto" />
        <div className="absolute inset-0 w-9 h-9 bg-amber-400/15 rounded-full blur-lg mx-auto" />
      </div>
      <div className="space-y-2">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#2A2118] tracking-tight leading-snug">
          {greeting}
        </h2>
        <p className="text-[#8B7D6B] text-sm max-w-sm mx-auto leading-relaxed">
          {t("welcome.subtitle")}
        </p>
      </div>
    </div>
  )
}
