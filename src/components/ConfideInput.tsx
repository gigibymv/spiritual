import { Flame, Send, X } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ConfideInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled?: boolean
}

export function ConfideInput({
  value,
  onChange,
  onSubmit,
  disabled,
}: ConfideInputProps) {
  return (
    <div className="animate-reveal animate-reveal-3">
      <div className="relative rounded-2xl border border-[#E5DDD0] bg-[#FFFDF9] shadow-sm shadow-[#2A2118]/[0.04] p-5 space-y-4 transition-shadow duration-300 focus-within:shadow-md focus-within:shadow-[#C9A96E]/[0.08] focus-within:border-[#C9A96E]/30">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
              <Flame className="w-4 h-4 text-amber-600/80" />
            </div>
          </div>
          <div className="flex-1 relative">
            <Textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  onSubmit()
                }
              }}
              placeholder="Parlez-moi de ce que vous vivez..."
              className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-[15px] placeholder:text-[#8B7D6B]/40 focus-visible:ring-0 focus-visible:outline-none shadow-none"
              disabled={disabled}
            />
            {value && (
              <button
                onClick={() => onChange("")}
                className="absolute top-0 right-0 text-[#8B7D6B]/40 hover:text-[#2A2118] transition-colors p-0.5"
                aria-label="Effacer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
        <Button
          onClick={onSubmit}
          disabled={!value.trim() || disabled}
          className="w-full bg-[#2C3E6B] hover:bg-[#243357] text-white rounded-xl h-11 text-sm font-medium tracking-wide transition-all duration-200 disabled:opacity-40"
        >
          <Send className="w-4 h-4 mr-2.5" />
          Chercher une parole de réconfort
        </Button>
      </div>
    </div>
  )
}
