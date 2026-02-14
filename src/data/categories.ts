import type { SituationCategory } from "@/types"

export const categories: SituationCategory[] = [
  {
    id: "emotional",
    label: "Emotions",
    icon: "Heart",
    description: "Anxiété, tristesse, colère, peur, solitude",
  },
  {
    id: "relational",
    label: "Relations",
    icon: "Users",
    description: "Conflits, pardon, mariage, amitié, famille",
  },
  {
    id: "spiritual",
    label: "Vie spirituelle",
    icon: "Sparkles",
    description: "Foi, doute, prière, tentation, identité",
  },
  {
    id: "practical",
    label: "Vie pratique",
    icon: "Briefcase",
    description: "Travail, finances, santé, décisions, avenir",
  },
  {
    id: "crisis",
    label: "Moments difficiles",
    icon: "Shield",
    description: "Deuil, épreuves, persécution, injustice",
  },
  {
    id: "gratitude",
    label: "Louange et gratitude",
    icon: "Sun",
    description: "Reconnaissance, joie, adoration, espérance",
  },
]
