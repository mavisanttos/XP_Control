"use client"

import { useState } from "react"
import Aurora from "@/components/aurora"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    // Após 2.5 segundos, redireciona para login
    setTimeout(() => {
      onComplete()
    }, 2500)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-4 relative">
      {/* Efeito Aurora no fundo */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Aurora
          colorStops={["#10b981", "#a855f7", "#10b981"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <div className="flex flex-col items-center gap-6 relative z-20">
        {/* Animated Logo */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-2xl opacity-75 animate-pulse" />
          <div className="absolute inset-1 bg-slate-950 rounded-xl flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
              XP
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Xp Control</h1>
          <p className="text-slate-200 text-sm md:text-base drop-shadow">Transforme suas dívidas em vitória</p>
        </div>

        {/* Clique para iniciar */}
        {!isLoading && (
          <button
            onClick={handleClick}
            className="mt-8 relative px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group"
          >
            {/* Borda com gradiente */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
            {/* Fundo transparente */}
            <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
            {/* Texto */}
            <span className="relative z-10 text-white font-bold text-sm md:text-base">
              Clique para iniciar
            </span>
          </button>
        )}

        {/* Loading Bar - aparece após clicar */}
        {isLoading && (
          <div className="w-40 h-1 bg-slate-800 rounded-full overflow-hidden mt-8">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-purple-500 animate-[slideRight_2.5s_ease-in-out]" />
          </div>
        )}
      </div>
    </div>
  )
}
