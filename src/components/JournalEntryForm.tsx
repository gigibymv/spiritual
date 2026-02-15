import { useState } from "react"
import { X, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MoodPicker } from "@/components/MoodPicker"
import { useLanguage } from "@/contexts/LanguageContext"
import type { JournalEntry } from "@/types"

interface JournalEntryFormProps {
  initial?: JournalEntry | null
  prefillVerse?: { reference: string; text: string } | null
  onSave: (entry: {
    title: string
    content: string
    verseReference?: string
    verseText?: string
    mood?: string
  }) => void
  onCancel: () => void
}

export function JournalEntryForm({
  initial,
  prefillVerse,
  onSave,
  onCancel,
}: JournalEntryFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "")
  const [content, setContent] = useState(initial?.content ?? "")
  const [mood, setMood] = useState(initial?.mood ?? "")
  const [verseReference, setVerseReference] = useState(
    initial?.verseReference ?? prefillVerse?.reference ?? ""
  )
  const [verseText, setVerseText] = useState(
    initial?.verseText ?? prefillVerse?.text ?? ""
  )
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return
    onSave({
      title: title.trim(),
      content: content.trim(),
      verseReference: verseReference.trim() || undefined,
      verseText: verseText.trim() || undefined,
      mood: mood || undefined,
    })
  }

  return (
    <div className="rounded-2xl border border-[#E5DDD0] bg-[#FFFDF9] p-5 space-y-5 animate-in fade-in-0 slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg font-semibold text-[#2A2118]">
          {initial ? t("journal.editPrayer") : t("journal.writePrayer")}
        </h3>
        <button
          onClick={onCancel}
          className="p-1.5 rounded-lg hover:bg-[#E5DDD0]/40 transition-colors"
        >
          <X className="w-4 h-4 text-[#8B7D6B]" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder={t("journal.titlePlaceholder")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-[#FAF7F2] border-[#E5DDD0] focus:border-[#C9A96E]/40 rounded-xl h-10 text-[14px]"
        />

        <Textarea
          placeholder={t("journal.contentPlaceholder")}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[120px] bg-[#FAF7F2] border-[#E5DDD0] focus:border-[#C9A96E]/40 rounded-xl text-[14px] resize-none"
          required
        />

        <div className="space-y-2">
          <p className="text-[12px] text-[#8B7D6B]/60 uppercase tracking-wider font-medium">
            {t("journal.moodQuestion")}
          </p>
          <MoodPicker value={mood} onChange={setMood} />
        </div>

        {/* Linked verse section */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#C9A96E]" />
            <p className="text-[12px] text-[#8B7D6B]/60 uppercase tracking-wider font-medium">
              {t("journal.linkedVerse")}
            </p>
          </div>
          {verseReference ? (
            <div className="bg-[#2C3E6B]/[0.03] rounded-xl px-3 py-2.5 border-l-2 border-[#2C3E6B]/20 relative">
              <p className="text-[12px] font-semibold text-[#2C3E6B]/70">
                {verseReference}
              </p>
              {verseText && (
                <p className="text-[12px] text-[#8B7D6B]/60 italic mt-0.5 line-clamp-2">
                  {verseText}
                </p>
              )}
              <button
                type="button"
                onClick={() => {
                  setVerseReference("")
                  setVerseText("")
                }}
                className="absolute top-2 right-2 p-1 rounded hover:bg-[#E5DDD0]/40"
              >
                <X className="w-3 h-3 text-[#8B7D6B]/50" />
              </button>
            </div>
          ) : (
            <Input
              placeholder={t("journal.versePlaceholder")}
              value={verseReference}
              onChange={(e) => setVerseReference(e.target.value)}
              className="bg-[#FAF7F2] border-[#E5DDD0] focus:border-[#C9A96E]/40 rounded-xl h-9 text-[13px]"
            />
          )}
        </div>

        <div className="flex gap-2 pt-1">
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            className="flex-1 text-[#8B7D6B] hover:text-[#2A2118] hover:bg-[#E5DDD0]/30 rounded-xl h-10 text-sm"
          >
            {t("journal.cancel")}
          </Button>
          <Button
            type="submit"
            disabled={!content.trim()}
            className="flex-1 bg-[#2C3E6B] hover:bg-[#243357] text-white rounded-xl h-10 text-sm font-medium disabled:opacity-40"
          >
            {initial ? t("journal.update") : t("journal.save")}
          </Button>
        </div>
      </form>
    </div>
  )
}
