import {
  Heart,
  Users,
  Sparkles,
  Briefcase,
  Shield,
  Sun,
} from "lucide-react"
import type { SituationCategory } from "@/types"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Users,
  Sparkles,
  Briefcase,
  Shield,
  Sun,
}

interface CategoryPillsProps {
  categories: SituationCategory[]
  onSelect: (categoryId: string) => void
}

export function CategoryPills({ categories, onSelect }: CategoryPillsProps) {
  return (
    <div className="space-y-3 animate-reveal animate-reveal-6">
      <div className="ornament-separator">
        <span className="text-[11px] uppercase tracking-widest text-[#8B7D6B]/60 font-medium whitespace-nowrap">
          Explorez un theme
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 justify-center flex-wrap">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon]
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E5DDD0] bg-[#FFFDF9] text-[13px] text-[#8B7D6B] hover:bg-[#2C3E6B] hover:text-white hover:border-[#2C3E6B] transition-all duration-250 whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              {Icon && (
                <Icon className="w-3.5 h-3.5 text-[#C9A96E] group-hover:text-amber-200 transition-colors" />
              )}
              {cat.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
