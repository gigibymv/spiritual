import { Bookmark, BookmarkCheck, Share2, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { VerseRecommendation } from "@/types"

interface VerseCardProps {
  verse: VerseRecommendation
  connectionMessage?: string
  index: number
  isFavorite: boolean
  onToggleFavorite: (reference: string, text: string) => void
}

export function VerseCard({
  verse,
  connectionMessage,
  index,
  isFavorite,
  onToggleFavorite,
}: VerseCardProps) {
  const [copied, setCopied] = useState(false)
  const [showDetails, setShowDetails] = useState(index === 0)

  const handleCopy = async () => {
    const textToCopy = `${verse.reference}\n\n"${verse.text}"\n\n${verse.explanation}`
    await navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    const shareText = `${verse.reference}\n\n"${verse.text}"`
    if (navigator.share) {
      await navigator.share({ title: verse.reference, text: shareText })
    } else {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      className={`animate-reveal animate-reveal-${Math.min(index + 2, 6)}`}
    >
      <div className="rounded-2xl border border-[#E5DDD0] bg-[#FFFDF9] overflow-hidden card-lift">
        {/* Header */}
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#2C3E6B]">
                {verse.reference}
              </span>
              {index === 0 && (
                <span className="text-[10px] uppercase tracking-wider text-[#C9A96E] font-medium bg-[#C9A96E]/[0.08] px-2 py-0.5 rounded-full">
                  Recommande
                </span>
              )}
            </div>
            <button
              onClick={() => onToggleFavorite(verse.reference, verse.text)}
              className="p-1.5 rounded-lg hover:bg-[#C9A96E]/10 transition-colors"
              aria-label={
                isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
              }
            >
              {isFavorite ? (
                <BookmarkCheck className="w-4 h-4 text-[#C9A96E]" />
              ) : (
                <Bookmark className="w-4 h-4 text-[#8B7D6B]/40 hover:text-[#C9A96E]" />
              )}
            </button>
          </div>
        </div>

        {/* Verse text */}
        <div className="px-5 pb-4 space-y-4">
          <blockquote className="relative font-serif text-[15px] md:text-base leading-relaxed text-[#2A2118] italic pl-5 verse-quote">
            {verse.text}
          </blockquote>

          {/* Pastoral connection */}
          {connectionMessage && (
            <div className="bg-[#2C3E6B]/[0.03] rounded-xl px-4 py-3 border-l-2 border-[#2C3E6B]/20">
              <p className="text-[13px] text-[#2C3E6B]/80 leading-relaxed">
                {connectionMessage}
              </p>
            </div>
          )}

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-[13px] text-[#2C3E6B]/70 hover:text-[#2C3E6B] font-medium transition-colors"
          >
            {showDetails ? "Masquer l'explication ↑" : "Lire l'explication →"}
          </button>

          {showDetails && (
            <div className="space-y-4 animate-in fade-in-0 slide-in-from-top-2 duration-200">
              <Separator className="bg-[#E5DDD0]/60" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B7D6B] mb-2">
                  Comprendre ce verset
                </h4>
                <p className="text-[13px] text-[#8B7D6B] leading-relaxed">
                  {verse.explanation}
                </p>
              </div>
              <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E5DDD0]/40">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B7D6B] mb-2">
                  Comment l'appliquer
                </h4>
                <p className="text-[13px] text-[#8B7D6B] leading-relaxed">
                  {verse.application}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-5 pb-4 flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-[12px] text-[#8B7D6B]/60 hover:text-[#2A2118] hover:bg-[#E5DDD0]/30 h-8 px-3 rounded-lg"
          >
            {copied ? (
              <Check className="w-3 h-3 mr-1.5" />
            ) : (
              <Copy className="w-3 h-3 mr-1.5" />
            )}
            {copied ? "Copie" : "Copier"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="text-[12px] text-[#8B7D6B]/60 hover:text-[#2A2118] hover:bg-[#E5DDD0]/30 h-8 px-3 rounded-lg"
          >
            <Share2 className="w-3 h-3 mr-1.5" />
            Partager
          </Button>
        </div>
      </div>
    </div>
  )
}
