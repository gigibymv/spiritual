import { Clock, Trash2, ChevronDown, ChevronUp, MessageCircle, PanelLeftClose, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import type { SearchHistoryEntry } from "@/types"

interface SearchHistoryProps {
  history: SearchHistoryEntry[]
  onSelect: (query: string) => void
  onClear: () => void
  onDelete?: (id: string) => void
  onClose?: () => void
  variant?: "sidebar" | "inline"
}

function formatRelativeTime(timestamp: string, t: (key: string) => string, language: string): string {
  const now = Date.now()
  const then = new Date(timestamp).getTime()
  const diffMs = now - then
  const diffMin = Math.floor(diffMs / 60000)
  const diffH = Math.floor(diffMs / 3600000)
  const diffD = Math.floor(diffMs / 86400000)

  if (diffMin < 1) return t("history.justNow")
  if (diffMin < 60) return `${diffMin} min`
  if (diffH < 24) return `${diffH}h`
  if (diffD < 7) return `${diffD}${t("time.days")}`
  const locale = language === "en" ? "en-US" : "fr-FR"
  return new Date(timestamp).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
  })
}

export function SearchHistory({
  history,
  onSelect,
  onClear,
  onDelete,
  onClose,
  variant = "inline",
}: SearchHistoryProps) {
  const [expanded, setExpanded] = useState(false)
  const { t, language } = useLanguage()

  if (history.length === 0) return null

  const isSidebar = variant === "sidebar"

  const visible = isSidebar
    ? history
    : expanded
      ? history.slice(0, 8)
      : history.slice(0, 3)

  if (isSidebar) {
    return (
      <div className="flex flex-col h-full min-h-0">
        <div className="flex-shrink-0 px-4 py-3 flex items-center justify-between border-b border-[#E5DDD0]/40">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span className="text-[12px] font-semibold text-[#2A2118] uppercase tracking-wider">
              {t("history.conversations")}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClear}
              className="text-[11px] text-[#8B7D6B]/40 hover:text-red-400 transition-colors p-1 rounded"
              title={t("history.clearHistory")}
            >
              <Trash2 className="w-3 h-3" />
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="text-[#8B7D6B]/40 hover:text-[#2A2118] transition-colors p-1 rounded"
                title={t("history.collapse")}
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto sidebar-scroll py-2 px-2">
          {visible.map((entry) => (
            <div
              key={entry.id}
              className="relative group mb-0.5"
            >
              <button
                onClick={() => onSelect(entry.query)}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#C9A96E]/[0.06] transition-colors pr-8"
              >
                <p className="text-[13px] text-[#2A2118] truncate group-hover:text-[#2C3E6B] leading-snug">
                  {entry.query}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[10px] text-[#8B7D6B]/50">
                    {formatRelativeTime(entry.timestamp, t, language)}
                  </span>
                  <span className="text-[#C9A96E]/30">·</span>
                  <span className="text-[10px] text-[#8B7D6B]/40 truncate">
                    {entry.verseCount} {entry.verseCount > 1 ? t("history.verses") : t("history.verse")}
                  </span>
                </div>
              </button>
              {onDelete && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onDelete(entry.id)
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-[#8B7D6B]/0 group-hover:text-[#8B7D6B]/40 hover:!text-red-400 hover:bg-red-50 transition-all"
                  title={t("history.delete")}
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2 animate-reveal animate-reveal-5">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-[11px] text-[#8B7D6B]/60 uppercase tracking-wider font-medium">
          <Clock className="w-3 h-3" />
          <span>{t("history.recent")}</span>
        </div>
        <button
          onClick={onClear}
          className="text-[11px] text-[#8B7D6B]/40 hover:text-red-400 transition-colors flex items-center gap-1"
        >
          <Trash2 className="w-3 h-3" />
        </button>
      </div>

      <div
        className={`space-y-0.5 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          expanded ? "max-h-[400px] overflow-y-auto sidebar-scroll" : "max-h-[180px]"
        }`}
      >
        {visible.map((entry) => (
          <div
            key={entry.id}
            className="relative group"
          >
            <button
              onClick={() => onSelect(entry.query)}
              className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#C9A96E]/[0.06] transition-colors pr-8"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] text-[#2A2118] truncate group-hover:text-[#2C3E6B]">
                  {entry.query}
                </p>
                <span className="text-[10px] text-[#8B7D6B]/40 whitespace-nowrap flex-shrink-0">
                  {formatRelativeTime(entry.timestamp, t, language)}
                </span>
              </div>
            </button>
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete(entry.id)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-[#8B7D6B]/0 group-hover:text-[#8B7D6B]/40 hover:!text-red-400 hover:bg-red-50 transition-all"
                title={t("history.delete")}
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}
      </div>

      {history.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-[12px] text-[#8B7D6B]/50 hover:text-[#2A2118] transition-colors mx-auto"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3 h-3" />
              {t("history.collapse")}
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3" />
              {t("history.showMore")} ({history.length})
            </>
          )}
        </button>
      )}
    </div>
  )
}
