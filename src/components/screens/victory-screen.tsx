"use client"

import { ChevronRight } from "lucide-react"
import { TrophyIcon } from "@/components/icons/robot-icon"
import Aurora from "@/components/aurora"

interface VictoryScreenProps {
  userProfile: any
  onContinue: () => void
}

export default function VictoryScreen({ userProfile, onContinue }: VictoryScreenProps) {
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
      
      <div className="flex flex-col items-center text-center space-y-6 max-w-md relative z-20">
        {/* Trophy Animation */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/50 to-transparent blur-3xl opacity-50 animate-pulse" />
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
            <TrophyIcon className="w-10 h-10 md:w-12 md:h-12 text-slate-950" />
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Parabéns!</h1>
          <p className="text-slate-200 text-base md:text-lg drop-shadow">Você zerou o jogo da dívida</p>
        </div>

        {/* Stats */}
        <div className="w-full space-y-3">
          <div className="premium-card">
            <p className="text-slate-200 text-xs md:text-sm drop-shadow">Dívidas Quitadas</p>
            <p className="text-2xl md:text-3xl font-bold text-emerald-500">100%</p>
          </div>
          <div className="premium-card">
            <p className="text-slate-200 text-xs md:text-sm drop-shadow">XP Coins Ganhos</p>
            <p className="text-2xl md:text-3xl font-bold text-purple-500">+500</p>
          </div>
        </div>

        {/* Message */}
        <div className="premium-card border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-slate-950 w-full">
          <p className="text-slate-200 text-sm md:text-base leading-relaxed drop-shadow">
            O Jogo de <span className="font-bold text-emerald-500">Investimentos</span> foi{" "}
            <span className="font-bold text-emerald-500">DESBLOQUEADO</span>! Agora você está pronto para começar sua
            jornada como investidor.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onContinue}
          className="w-full py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-base md:text-lg mt-4"
        >
          Explorar Investimentos
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
