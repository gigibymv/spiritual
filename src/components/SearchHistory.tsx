import { Clock, Trash2, ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import { useState } from "react"
import type { SearchHistoryEntry } from "@/types"

interface SearchHistoryProps {
  history: SearchHistoryEntry[]
  onSelect: (query: string) => void
  onClear: () => void
  variant?: "sidebar" | "inline"
}

function formatRelativeTime(timestamp: string): string {
  const now = Date.now()
  const then = new Date(timestamp).getTime()
  const diffMs = now - then
  const diffMin = Math.floor(diffMs / 60000)
  const diffH = Math.floor(diffMs / 3600000)
  const diffD = Math.floor(diffMs / 86400000)

  if (diffMin < 1) return "À l'instant"
  if (diffMin < 60) return `${diffMin} min`
  if (diffH < 24) return `${diffH}h`
  if (diffD < 7) return `${diffD}j`
  return new Date(timestamp).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  })
}

export function SearchHistory({
  history,
  onSelect,
  onClear,
  variant = "inline",
}: SearchHistoryProps) {
  const [expanded, setExpanded] = useState(false)

  if (history.length === 0) return null

  const isSidebar = variant === "sidebar"

  // Sidebar: show all in scrollable container
  // Inline: show 3 by default, up to 8 when expanded (never dump all 20 inline)
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
              Conversations
            </span>
          </div>
          <button
            onClick={onClear}
            className="text-[11px] text-[#8B7D6B]/40 hover:text-red-400 transition-colors"
            title="Effacer l'historique"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto sidebar-scroll py-2 px-2">
          {visible.map((entry) => (
            <button
              key={entry.id}
              onClick={() => onSelect(entry.query)}
              className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#C9A96E]/[0.06] transition-colors group mb-0.5"
            >
              <p className="text-[13px] text-[#2A2118] truncate group-hover:text-[#2C3E6B] leading-snug">
                {entry.query}
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[10px] text-[#8B7D6B]/50">
                  {formatRelativeTime(entry.timestamp)}
                </span>
                <span className="text-[#C9A96E]/30">·</span>
                <span className="text-[10px] text-[#8B7D6B]/40 truncate">
                  {entry.verseCount} verset{entry.verseCount > 1 ? "s" : ""}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Inline variant (mobile) — contained with max-height
  return (
    <div className="space-y-2 animate-reveal animate-reveal-5">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-[11px] text-[#8B7D6B]/60 uppercase tracking-wider font-medium">
          <Clock className="w-3 h-3" />
          <span>Récentes</span>
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
          <button
            key={entry.id}
            onClick={() => onSelect(entry.query)}
            className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#C9A96E]/[0.06] transition-colors group"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13px] text-[#2A2118] truncate group-hover:text-[#2C3E6B]">
                {entry.query}
              </p>
              <span className="text-[10px] text-[#8B7D6B]/40 whitespace-nowrap flex-shrink-0">
                {formatRelativeTime(entry.timestamp)}
              </span>
            </div>
          </button>
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
              Réduire
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3" />
              Voir plus ({history.length})
            </>
          )}
        </button>
      )}
    </div>
  )
}
