"use client"

import { useState } from "react"
import { ChevronRight, TrendingUp } from "lucide-react"
import FinanceSuccessModal from "@/components/finance-success-modal"

interface OpenFinanceScreenProps {
  onComplete: () => void
}

export default function OpenFinanceScreen({ onComplete }: OpenFinanceScreenProps) {
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleConnect = () => {
    setConnecting(true)
    setTimeout(() => {
      setConnecting(false)
      setConnected(true)
      setShowSuccess(true)
    }, 2000)
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-4 pb-8">
        <div className="w-full max-w-md flex flex-col gap-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <TrendingUp size={32} className="text-slate-950" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Conectar seus bancos</h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Para criar sua estratégia de saída da dívida, precisamos conectar suas contas bancárias. Será seguro e
              rápido.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 py-4">
            {[
              { title: "Análise completa", desc: "Veja todos os seus débitos em um lugar" },
              { title: "Seguro", desc: "Criptografia de nível bancário" },
              { title: "Rápido", desc: "Leva menos de 5 minutos" },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-slate-950 font-bold">✓</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-white text-sm">{benefit.title}</p>
                  <p className="text-xs text-slate-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleConnect}
            disabled={connecting || connected}
            className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
              connected
                ? "bg-emerald-500 text-slate-950 cursor-default"
                : connecting
                  ? "bg-slate-700 text-slate-300 cursor-wait"
                  : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950"
            }`}
          >
            {connecting && (
              <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-950 rounded-full animate-spin" />
            )}
            {connected ? "Conectado com sucesso" : connecting ? "Conectando..." : "Conectar Bancos"}
            {!connecting && !connected && <ChevronRight size={20} />}
          </button>
        </div>
      </div>

      <FinanceSuccessModal isOpen={showSuccess} onContinue={onComplete} />
    </>
  )
}
