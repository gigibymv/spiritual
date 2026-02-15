import { Trash2, Edit3, BookOpen } from "lucide-react"
import { getMoodInfo } from "@/components/MoodPicker"
import { useLanguage } from "@/contexts/LanguageContext"
import type { JournalEntry } from "@/types"

interface JournalEntryCardProps {
  entry: JournalEntry
  onEdit: (entry: JournalEntry) => void
  onDelete: (id: string) => void
}

export function JournalEntryCard({
  entry,
  onEdit,
  onDelete,
}: JournalEntryCardProps) {
  const { language, t } = useLanguage()
  const mood = entry.mood ? getMoodInfo(entry.mood, t) : null

  const formatDate = (timestamp: string): string => {
    return new Date(timestamp).toLocaleDateString(
      language === "en" ? "en-US" : "fr-FR",
      { day: "numeric", month: "long", year: "numeric" }
    )
  }

  return (
    <div className="group rounded-2xl border border-[#E5DDD0] bg-[#FFFDF9] overflow-hidden card-lift">
      <div className="px-5 py-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {entry.title && (
                <h3 className="font-serif text-[15px] font-semibold text-[#2A2118] truncate">
                  {entry.title}
                </h3>
              )}
              {mood && (
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${mood.color}`}
                >
                  <span>{mood.emoji}</span>
                  {mood.label}
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#8B7D6B]/50 mt-0.5">
              {formatDate(entry.createdAt)}
            </p>
          </div>

          <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(entry)}
              className="p-1.5 rounded-lg hover:bg-[#C9A96E]/10 transition-colors"
              aria-label={t("journal.edit")}
            >
              <Edit3 className="w-3.5 h-3.5 text-[#8B7D6B]" />
            </button>
            <button
              onClick={() => onDelete(entry.id)}
              className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"
              aria-label={t("journal.delete")}
            >
              <Trash2 className="w-3.5 h-3.5 text-red-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <p className="text-[13px] text-[#8B7D6B] leading-relaxed line-clamp-4">
          {entry.content}
        </p>

        {/* Linked verse */}
        {entry.verseReference && (
          <div className="flex items-start gap-2 bg-[#2C3E6B]/[0.03] rounded-xl px-3 py-2.5 border-l-2 border-[#2C3E6B]/20">
            <BookOpen className="w-3.5 h-3.5 text-[#2C3E6B]/40 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-[#2C3E6B]/70">
                {entry.verseReference}
              </p>
              {entry.verseText && (
                <p className="text-[12px] text-[#8B7D6B]/60 italic mt-0.5 line-clamp-2">
                  {entry.verseText}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
