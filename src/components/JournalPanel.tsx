import { useState } from "react"
import { ArrowLeft, BookOpen, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JournalEntryCard } from "@/components/JournalEntryCard"
import { JournalEntryForm } from "@/components/JournalEntryForm"
import { useJournal } from "@/hooks/use-journal"
import { useLanguage } from "@/contexts/LanguageContext"
import type { JournalEntry } from "@/types"

interface JournalPanelProps {
  onClose: () => void
  prefillVerse?: { reference: string; text: string } | null
}

export function JournalPanel({ onClose, prefillVerse }: JournalPanelProps) {
  const { entries, addEntry, updateEntry, deleteEntry } = useJournal()
  const [showForm, setShowForm] = useState(!!prefillVerse)
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null)
  const { t } = useLanguage()

  const handleSave = (data: {
    title: string
    content: string
    verseReference?: string
    verseText?: string
    mood?: string
  }) => {
    if (editingEntry) {
      updateEntry(editingEntry.id, data)
    } else {
      addEntry(data)
    }
    setShowForm(false)
    setEditingEntry(null)
  }

  const handleEdit = (entry: JournalEntry) => {
    setEditingEntry(entry)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingEntry(null)
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-[#8B7D6B] hover:text-[#2A2118] hover:bg-[#E5DDD0]/30 gap-1.5 -ml-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("back.home")}
        </Button>
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#C9A96E]" />
          <h2 className="font-serif text-lg font-semibold text-[#2A2118]">
            {t("journal.title")}
          </h2>
        </div>
      </div>

      {showForm ? (
        <JournalEntryForm
          initial={editingEntry}
          prefillVerse={editingEntry ? null : prefillVerse}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <Button
            onClick={() => setShowForm(true)}
            className="w-full bg-[#2C3E6B] hover:bg-[#243357] text-white rounded-xl h-11 text-sm font-medium gap-2"
          >
            <Plus className="w-4 h-4" />
            {t("journal.newPrayer")}
          </Button>

          {entries.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-10 h-10 mx-auto mb-4 text-[#C9A96E]/20" />
              <p className="text-sm text-[#8B7D6B]">
                {t("journal.empty")}
              </p>
              <p className="text-xs mt-1 text-[#8B7D6B]/50">
                {t("journal.emptyHint")}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry) => (
                <JournalEntryCard
                  key={entry.id}
                  entry={entry}
                  onEdit={handleEdit}
                  onDelete={deleteEntry}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
