import { useMemo } from "react"

const allSuggestions = [
  "Je me sens anxieux",
  "J'ai besoin de pardonner",
  "Je traverse un deuil",
  "Je cherche un sens à ma vie",
  "J'ai peur de l'avenir",
  "Je suis en conflit avec quelqu'un",
  "Je doute de ma foi",
  "J'ai des difficultés financières",
  "Je me sens seul",
  "Je lutte contre une tentation",
  "Je suis triste et découragé",
  "J'ai besoin de prendre une décision",
  "Je suis jaloux de quelqu'un",
  "Je ressens de l'envie",
  "Je vis une injustice",
  "Je suis en colère",
]

interface SuggestionChipsProps {
  onSelect: (text: string) => void
}

export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  const chips = useMemo(() => {
    const shuffled = [...allSuggestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 4)
  }, [])

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
