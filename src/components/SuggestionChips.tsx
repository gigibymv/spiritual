import { useMemo } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

interface SuggestionChipsProps {
  onSelect: (text: string) => void
}

export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  const { t } = useLanguage()

  const chips = useMemo(() => {
    const allSuggestions = Array.from({ length: 16 }, (_, i) =>
      t(`suggestion.${i + 1}`)
    )
    const shuffled = [...allSuggestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 4)
  }, [t])

  return (
    <div className="animate-reveal animate-reveal-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {chips.map((text) => (
          <button
            key={text}
            onClick={() => onSelect(text)}
            className="px-4 py-2 text-[13px] rounded-full border border-[#E5DDD0] bg-[#FFFDF9] text-[#8B7D6B] hover:bg-[#C9A96E]/[0.08] hover:text-[#2A2118] hover:border-[#C9A96E]/30 transition-all duration-250 cursor-pointer"
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  )
}
