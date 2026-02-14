import { ArrowLeft, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PastoralIntro } from "@/components/PastoralIntro"
import { VerseCard } from "@/components/VerseCard"
import type { PastoralResponse as PastoralResponseType } from "@/types"

interface PastoralResponseProps {
  response: PastoralResponseType
  isFavorite: (reference: string) => boolean
  onToggleFavorite: (reference: string, text: string) => void
  onBack: () => void
  onWritePrayer?: (reference?: string, text?: string) => void
}

export function PastoralResponse({
  response,
  isFavorite,
  onToggleFavorite,
  onBack,
  onWritePrayer,
}: PastoralResponseProps) {
  return (
    <div className="space-y-5">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="text-[#8B7D6B] hover:text-[#2A2118] hover:bg-[#E5DDD0]/30 gap-1.5 -ml-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Nouvelle recherche
      </Button>

      <PastoralIntro
        introMessage={response.introMessage}
        keywordInsight={response.keywordInsight}
        situationName={response.situationName}
      />

      <div className="space-y-4">
        {response.verses.map((pv, index) => (
          <VerseCard
            key={pv.verse.reference}
            verse={pv.verse}
            connectionMessage={pv.connectionMessage}
            index={index}
            isFavorite={isFavorite(pv.verse.reference)}
            onToggleFavorite={onToggleFavorite}
            onWritePrayer={onWritePrayer}
          />
        ))}
      </div>

      {response.verses.length > 0 && onWritePrayer && (
        <div className="text-center pt-2">
          <Button
            variant="ghost"
            onClick={() => onWritePrayer()}
            className="text-[13px] text-[#2C3E6B]/60 hover:text-[#2C3E6B] hover:bg-[#2C3E6B]/[0.06] gap-2 rounded-xl"
          >
            <PenLine className="w-4 h-4" />
            Écrire une prière dans votre journal
          </Button>
        </div>
      )}

      {response.verses.length > 0 && (
        <div className="ornament-separator pt-2">
          <span className="text-[11px] text-[#8B7D6B]/40 font-serif italic">
            Que la paix soit avec vous
          </span>
        </div>
      )}
    </div>
  )
}
