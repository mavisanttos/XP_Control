"use client"

import { useState } from "react"
import { TrendingUp, Zap, User } from "lucide-react"
import { XpCoinIcon } from "@/components/icons/xp-coin-icon"
import ProfileModal from "@/components/profile-modal"
import Aurora from "@/components/aurora"

interface UserProfile {
  name: string
  email: string
  level: number
  xpCoins: number
  balance: number
}

interface DashboardProps {
  userProfile: UserProfile
  onNavigate: (screen: string) => void
  debtsCovered: boolean
  onLogout: () => void
}

export default function Dashboard({ userProfile, onNavigate, debtsCovered, onLogout }: DashboardProps) {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <div className="w-full px-4 py-6 md:py-8 max-w-6xl mx-auto pb-24 md:pb-8 relative min-h-screen">
        {/* Efeito Aurora no fundo */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
          <Aurora
            colorStops={["#10b981", "#a855f7", "#10b981"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        
        {/* Header com Logo XP, Saudação e Ícone de Perfil */}
        <div className="relative z-20">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Logo animado (mesmo da splash e login) */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-2xl opacity-75 animate-pulse" />
              <div className="absolute inset-1 bg-slate-950 rounded-xl flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                  XP
                </span>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Olá, {userProfile.name.split(" ")[0]}</h1>
          </div>
          <button
            onClick={() => setShowProfile(true)}
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all"
          >
            <User size={20} className="text-white" />
          </button>
        </div>

        {/* Level Bar */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-200 drop-shadow">Progresso</h2>
            <span className="text-base md:text-lg font-bold text-emerald-500">Nível {userProfile.level}</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 md:h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full" style={{ width: "65%" }} />
          </div>
          <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow">1250 / 2000 XP</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Global Balance Card */}
          <div className="premium-card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-slate-200 text-xs md:text-sm drop-shadow">Saldo Global</p>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-500">R$ {userProfile.balance.toFixed(2)}</h3>
              </div>
              <TrendingUp className="text-emerald-500 flex-shrink-0" size={24} />
            </div>
            <p className="text-xs text-slate-200 drop-shadow">Contas conectadas via Open Finance</p>
          </div>

          {/* XP Coins Card with custom XP coin icon */}
          <div className="premium-card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-slate-200 text-xs md:text-sm drop-shadow">XP Coins</p>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-500">{userProfile.xpCoins}</h3>
              </div>
              <XpCoinIcon className="text-purple-500 flex-shrink-0 w-8 h-8" />
            </div>
            <p className="text-xs text-slate-200 drop-shadow">Moeda do jogo - Use em missões</p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="premium-card border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 mb-6">
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" />
              <h3 className="text-lg md:text-xl font-bold text-white">Missão Diária</h3>
            </div>
          </div>
          <p className="text-slate-200 mb-4 text-sm md:text-base drop-shadow">Otimize seus recursos para ganhar bônus especiais</p>
          <button
            onClick={() => onNavigate("games")}
            className="w-full relative py-2 md:py-3 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group text-sm md:text-base"
          >
            {/* Borda com gradiente */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
            {/* Fundo transparente */}
            <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
            {/* Texto */}
            <span className="relative z-10 text-white font-bold">Iniciar Jogos</span>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="premium-card">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">Atividade Recente</h3>
          <div className="space-y-3">
            {[
              { title: "Acesso Investimentos", desc: "Jogo 2 desbloqueado", type: "unlock" },
              { title: "+250 XP Coins", desc: "Estratégia Perfeita", type: "reward" },
              { title: "Dívida Reduzida", desc: "Cartão de Crédito -R$ 50", type: "debt" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-slate-800 last:border-0">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-slate-200 drop-shadow">{item.desc}</p>
                </div>
                <div
                  className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                    item.type === "unlock"
                      ? "bg-purple-500/20 text-purple-400"
                      : item.type === "reward"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {item.type === "unlock" ? "Desbloqueado" : item.type === "reward" ? "Recompensa" : "Progresso"}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <ProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        userProfile={userProfile}
        onLogout={onLogout}
      />
    </>
  )
}
