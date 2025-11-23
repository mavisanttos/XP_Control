/**
 * =======================================================
 * GAMES - Tela de Jogos de Gamificação
 * =======================================================
 * 
 * Componente que gerencia os jogos de gamificação financeira.
 * 
 * Jogos disponíveis:
 * 1. Estratégia de Resgate - Simulador de alocação de recursos
 * 2. Investimentos - Simulador de bolsa (bloqueado até quitar dívidas)
 * 3. Decisões Financeiras - Card game estilo Reigns
 * 
 * Funcionalidades:
 * - Lista de jogos disponíveis
 * - Sistema de desbloqueio baseado em progresso
 * - Pontuação e recompensas (XP e moedas)
 * 
 * @author Equipe XP Control
 * @version 1.0.0
 */

"use client"

import { useState } from "react"
import { Lock, TrendingUp, Zap, User, ArrowLeft } from "lucide-react"
import { VaultIcon } from "@/components/icons/robot-icon"
import CardGameScreen from "@/components/card-game-screen"
import Aurora from "@/components/aurora"

/**
 * Interface do perfil do usuário para os Jogos
 */
interface UserProfile {
  name: string
  xpCoins: number
  level?: number
  email?: string
  balance?: number
}

interface GamesProps {
  userProfile: UserProfile
  onVictory: () => void
  onProfileClick?: () => void
}

/**
 * Componente Games
 * Gerencia a tela de jogos e suas funcionalidades
 */
export default function Games({ userProfile, onVictory, onProfileClick }: GamesProps) {
  // Estado do jogo ativo (list = lista de jogos)
  const [activeGame, setActiveGame] = useState<"list" | "strategy" | "investments" | "reigns">("list")
  
  // Estados do jogo de estratégia (valores de alocação)
  const [debtA, setDebtA] = useState(300)
  const [debtB, setDebtB] = useState(100)

  const handleGameComplete = () => {
    onVictory()
  }

  // Game 3: Card Game (Reigns)
  if (activeGame === "reigns") {
    return (
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
        
        <button
          onClick={() => setActiveGame("list")}
          className="mb-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all relative z-20"
        >
          <ArrowLeft size={18} />
          Voltar
        </button>
        <div className="relative z-20">
          <CardGameScreen onComplete={handleGameComplete} />
        </div>
      </div>
    )
  }

  if (activeGame === "strategy") {
    return (
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
        
        <button
          onClick={() => setActiveGame("list")}
          className="mb-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all relative z-20"
        >
          <ArrowLeft size={18} />
          Voltar
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-20">Estratégia de Resgate</h1>

        <div className="space-y-6 relative z-20">
          <div className="premium-card">
            <h2 className="text-lg font-bold text-white mb-4">Cenário do Jogo</h2>
            <p className="text-slate-300 mb-4">
              Você tem R$ 400 para pagar. Distribua entre as dívidas e maximize sua economia!
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Dívida A: Cartão (14% juros)</label>
                  <span className="text-emerald-500 font-bold">R$ {debtA.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="400"
                  value={debtA}
                  onChange={(e) => {
                    const val = Number.parseFloat(e.target.value)
                    setDebtA(val)
                    setDebtB(400 - val)
                  }}
                  className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Dívida B: Empréstimo (2% juros)</label>
                  <span className="text-purple-500 font-bold">R$ {debtB.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="400"
                  value={debtB}
                  onChange={(e) => {
                    const val = Number.parseFloat(e.target.value)
                    setDebtB(val)
                    setDebtA(400 - val)
                  }}
                  className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>
          </div>

          {debtA >= 300 && debtB <= 100 && (
            <div className="premium-card border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-slate-950">
              <h3 className="text-lg font-bold text-emerald-500 mb-2">Estratégia Perfeita!</h3>
              <p className="text-emerald-300 mb-4">
                Você vai economizar aproximadamente R$ 45 em juros com essa alocação.
              </p>
              <button
                onClick={handleGameComplete}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2 md:py-3 rounded-lg transition-colors"
              >
                Confirmar e Ganhar Recompensas
              </button>
            </div>
          )}

          {(debtA < 300 || debtB > 100) && (
            <div className="premium-card border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-slate-950">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Dica do Agente</h3>
              <p className="text-blue-300">Concentre mais recursos na dívida com juros mais altos (Cartão - 14%).</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
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
      <div className="flex items-center justify-between mb-6 relative z-20">
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
        {onProfileClick && (
          <button
            onClick={onProfileClick}
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all"
          >
            <User size={20} className="text-white" />
          </button>
        )}
      </div>
      
      {/* Barra de Progresso (igual à home) */}
      <div className="mb-6 md:mb-8 relative z-20">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-slate-200 drop-shadow">Progresso</h2>
          <span className="text-base md:text-lg font-bold text-emerald-400 drop-shadow">Nível {userProfile.level || 1}</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 md:h-3 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full" style={{ width: "65%" }} />
        </div>
        <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow">1250 / 2000 XP</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6 relative z-20">
        <div className="premium-card text-center">
          <p className="text-slate-400 text-xs md:text-sm mb-2">Pontuação Total</p>
          <p className="text-2xl md:text-3xl font-bold text-emerald-500">8,450</p>
        </div>
        <div className="premium-card text-center">
          <p className="text-slate-400 text-xs md:text-sm mb-2">Jogos Completos</p>
          <p className="text-2xl md:text-3xl font-bold text-purple-500">12</p>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2 relative z-20">
        <Zap className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />
        Jogos
      </h1>

      {/* Game 3: Card Game (Reigns) */}
      <div className="premium-card border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 mb-4 relative z-20 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">Decisões Financeiras</h2>
            <p className="text-sm text-slate-400 mt-1">Jogo de cartas interativo</p>
          </div>
          <Zap className="text-purple-500 flex-shrink-0 w-6 h-6" />
        </div>
        <p className="text-slate-300 mb-4 text-sm">
          Arraste as cartas para esquerda ou direita e tome decisões financeiras inteligentes!
        </p>
        <button
          onClick={() => setActiveGame("reigns")}
          className="w-full bg-purple-500 hover:bg-purple-600 text-slate-950 font-bold py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
        >
          Jogar Agora
        </button>
      </div>

      {/* Game 1: Strategy */}
      <div className="premium-card border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 mb-4 relative z-20 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">Estratégia de Resgate</h2>
            <p className="text-sm text-slate-400 mt-1">Simulador de alocação inteligente</p>
          </div>
          <VaultIcon className="text-emerald-500 flex-shrink-0 w-6 h-6" />
        </div>
        <p className="text-slate-300 mb-4 text-sm">
          Cenário: Você tem R$ 400. Distribua entre dívidas e maximize economia!
        </p>
        <button
          onClick={() => setActiveGame("strategy")}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
        >
          Jogar Agora
        </button>
      </div>

      {/* Game 2: Investments - Locked */}
      <div className="premium-card opacity-60 border-slate-700 relative z-20 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-500 flex items-center gap-2">
              <Lock size={20} />
              Investimentos
            </h2>
            <p className="text-sm text-slate-500 mt-1">Simulador de bolsa - Modo devedor</p>
          </div>
          <TrendingUp className="text-slate-500 flex-shrink-0" size={24} />
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center mb-4">
          <Lock className="w-8 h-8 text-slate-500 mx-auto mb-2" />
          <p className="text-slate-400 font-medium">Acesso Negado</p>
          <p className="text-sm text-slate-500 mt-1">Quite dívidas críticas para desbloquear este jogo</p>
        </div>
        <button
          disabled
          className="w-full bg-slate-700 text-slate-500 font-bold py-2 md:py-3 rounded-lg cursor-not-allowed opacity-50"
        >
          Bloqueado
        </button>
      </div>
    </div>
  )
}
