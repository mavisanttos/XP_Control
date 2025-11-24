"use client"

import { CheckCircle, ChevronRight } from "lucide-react"

interface FinanceSuccessModalProps {
  isOpen: boolean
  onContinue: () => void
}

export default function FinanceSuccessModal({ isOpen, onContinue }: FinanceSuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-sm border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 shadow-xl">
        <div className="p-8 text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-emerald-500" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Banco Conectado!</h2>
            <p className="text-sm text-slate-400">
              Sua conexão foi estabelecida com segurança. Agora vamos conhecer melhor suas dívidas.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={onContinue}
            className="w-full relative py-3 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group"
          >
            {/* Borda com gradiente */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
            {/* Fundo transparente */}
            <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
            {/* Texto */}
            <span className="relative z-10 text-white font-bold flex items-center justify-center gap-2">
              Continuar Triagem
              <ChevronRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
