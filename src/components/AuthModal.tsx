import { useState } from "react"
import { X, Mail, Lock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/AuthContext"

interface AuthModalProps {
  onClose: () => void
}

export function AuthModal({ onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">("signin")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { signIn, signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)

    const result =
      mode === "signin"
        ? await signIn(email, password)
        : await signUp(email, password)

    setLoading(false)

    if (result.error) {
      setError(result.error)
    } else if (mode === "signup") {
      setSuccess("Vérifiez votre e-mail pour confirmer votre compte.")
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm mx-4 rounded-2xl border border-[#E5DDD0] bg-[#FFFDF9] shadow-xl p-6 space-y-5 animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl font-semibold text-[#2A2118]">
            {mode === "signin" ? "Se connecter" : "Créer un compte"}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#E5DDD0]/40 transition-colors"
          >
            <X className="w-4 h-4 text-[#8B7D6B]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6B]/50" />
              <Input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 bg-[#FAF7F2] border-[#E5DDD0] focus:border-[#C9A96E]/40 rounded-xl h-11"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6B]/50" />
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="pl-10 bg-[#FAF7F2] border-[#E5DDD0] focus:border-[#C9A96E]/40 rounded-xl h-11"
              />
            </div>
          </div>

          {error && (
            <p className="text-[13px] text-red-500 bg-red-50 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {success && (
            <p className="text-[13px] text-emerald-600 bg-emerald-50 rounded-lg px-3 py-2">
              {success}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2C3E6B] hover:bg-[#243357] text-white rounded-xl h-11 text-sm font-medium"
          >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {mode === "signin" ? "Se connecter" : "Créer mon compte"}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin")
              setError(null)
              setSuccess(null)
            }}
            className="text-[13px] text-[#2C3E6B]/70 hover:text-[#2C3E6B] transition-colors"
          >
            {mode === "signin"
              ? "Pas encore de compte ? Créer un compte"
              : "Déjà un compte ? Se connecter"}
          </button>
        </div>
      </div>
    </div>
  )
}
