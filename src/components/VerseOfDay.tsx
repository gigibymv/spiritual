import { Sun } from "lucide-react"
import type { VerseRecommendation } from "@/types"

interface VerseOfDayProps {
  verse: VerseRecommendation
  situationName: string
}

export function VerseOfDay({ verse, situationName }: VerseOfDayProps) {
  return (
    <div className="animate-reveal animate-reveal-2">
      <div className="relative rounded-2xl border border-[#C9A96E]/20 bg-gradient-to-r from-[#2C3E6B]/[0.03] via-transparent to-[#C9A96E]/[0.06] p-5 md:p-6 card-lift overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C9A96E]/[0.06] to-transparent rounded-bl-full" />

        <div className="relative space-y-3">
          <div className="flex items-center gap-2 text-[11px] text-[#8B7D6B] uppercase tracking-widest">
            <Sun className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span className="font-medium">Verset du jour</span>
            <span className="text-[#C9A96E]/40">•</span>
            <span className="normal-case tracking-normal text-xs">{situationName}</span>
          </div>

          <blockquote className="font-serif text-base md:text-lg italic leading-relaxed text-[#2A2118] relative verse-quote pl-5">
            {verse.text}
          </blockquote>

          <p className="text-sm font-semibold text-[#2C3E6B] tracking-wide">
            — {verse.reference}
          </p>
        </div>
      </div>
    </div>
  )
}
