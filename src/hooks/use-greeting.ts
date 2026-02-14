import { useMemo } from "react"

export function useGreeting(): string {
  return useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      return "Bonjour. Que la lumière de ce matin éclaire votre cœur."
    }
    if (hour < 18) {
      return "Bonjour. Prenez un moment pour vous confier."
    }
    return "Bonsoir. Laissez la Parole de Dieu apaiser votre soirée."
  }, [])
}
