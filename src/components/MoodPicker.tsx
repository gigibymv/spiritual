const moods = [
  { value: "gratitude", label: "Gratitude", emoji: "\u{1F64F}", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { value: "peace", label: "Paix", emoji: "\u{1F54A}\uFE0F", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { value: "struggle", label: "Combat", emoji: "\u{1F4AA}", color: "bg-red-100 text-red-700 border-red-200" },
  { value: "hope", label: "Espérance", emoji: "\u{1F31F}", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { value: "praise", label: "Louange", emoji: "\u{1F3B6}", color: "bg-purple-100 text-purple-700 border-purple-200" },
]

interface MoodPickerProps {
  value?: string
  onChange: (mood: string) => void
}

export function MoodPicker({ value, onChange }: MoodPickerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {moods.map((mood) => (
        <button
          key={mood.value}
          type="button"
          onClick={() => onChange(value === mood.value ? "" : mood.value)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all duration-200 ${
            value === mood.value
              ? mood.color + " shadow-sm scale-105"
              : "bg-[#FAF7F2] text-[#8B7D6B] border-[#E5DDD0] hover:border-[#C9A96E]/30"
          }`}
        >
          <span>{mood.emoji}</span>
          {mood.label}
        </button>
      ))}
    </div>
  )
}

export function getMoodInfo(value: string) {
  return moods.find((m) => m.value === value)
}
