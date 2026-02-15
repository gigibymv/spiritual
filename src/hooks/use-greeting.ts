import { useMemo } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export function useGreeting(): string {
  const { t } = useLanguage()

  return useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return t("greeting.morning")
    if (hour < 18) return t("greeting.afternoon")
    return t("greeting.evening")
  }, [t])
}
