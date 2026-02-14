import { Flame } from "lucide-react"

interface PastoralIntroProps {
  introMessage: string
  keywordInsight: string | null
  situationName: string
}

export function PastoralIntro({
  introMessage,
  keywordInsight,
  situationName,
}: PastoralIntroProps) {
  return (
    <div className="animate-reveal animate-reveal-1">
      <div className="relative rounded-2xl border border-[#C9A96E]/20 bg-gradient-to-br from-amber-50/40 via-[#FFFDF9] to-orange-50/20 p-6 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C9A96E]/[0.06] rounded-full blur-2xl" />

        <div className="relative flex items-start gap-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Flame className="w-4 h-4 text-amber-600 animate-flame" />
          </div>
          <div className="space-y-3 flex-1 min-w-0">
            {situationName && (
              <span className="inline-block text-[11px] uppercase tracking-widest text-[#C9A96E] font-medium">
                {situationName}
              </span>
            )}
            <p className="font-serif text-[15px] md:text-base leading-relaxed text-[#2A2118]">
              {introMessage}
            </p>
            {keywordInsight && (
              <p className="text-sm italic text-[#8B7D6B] leading-relaxed border-l-2 border-[#C9A96E]/30 pl-3">
                {keywordInsight}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
