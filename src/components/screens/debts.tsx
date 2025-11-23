"use client"

import { useState } from "react"
import { AlertCircle, Plus, User } from "lucide-react"
import { VaultIcon } from "@/components/icons/robot-icon"
import AddDebtModal from "@/components/add-debt-modal"
import DepositModal from "@/components/deposit-modal"
import Aurora from "@/components/aurora"

interface DebtItem {
  name: string
  value: number
  interest: number
  type: "bank" | "external"
  savings?: number // Valor guardado no cofrinho para esta dívida
}

interface UserProfile {
  name: string
  email?: string
  level?: number
  xpCoins?: number
  balance?: number
}

interface DebtsProps {
  onAddDebt?: () => void
  userProfile?: UserProfile
  onProfileClick?: () => void
}

export default function Debts({ onAddDebt, userProfile, onProfileClick }: DebtsProps) {
  const [debts, setDebts] = useState<DebtItem[]>([
    { name: "Cartão de Crédito", value: 2500, interest: 14, type: "bank", savings: 0 },
    { name: "Empréstimo Pessoal", value: 5000, interest: 2, type: "bank", savings: 0 },
    { name: "Loja de Eletrônicos", value: 800, interest: 10, type: "external", savings: 0 },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false)
  const [selectedDebtIndex, setSelectedDebtIndex] = useState<number | null>(null)
  const [cdbBalance, setCdbBalance] = useState(200)

  const handleAddDebt = (newDebt: DebtItem) => {
    setDebts([...debts, newDebt])
  }

  const handleDeposit = (amount: number) => {
    if (selectedDebtIndex !== null) {
      // Depositar no cofrinho da dívida específica
      setDebts(debts.map((debt, index) => 
        index === selectedDebtIndex 
          ? { ...debt, savings: (debt.savings || 0) + amount }
          : debt
      ))
      setSelectedDebtIndex(null)
    } else {
      // Depositar no cofrinho CDB geral
      setCdbBalance(cdbBalance + amount)
    }
  }

  const handleOpenDebtSavings = (debtIndex: number) => {
    setSelectedDebtIndex(debtIndex)
    setIsDepositModalOpen(true)
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
      <div className="relative z-20">
      {userProfile && (
        <div className="flex items-center justify-between mb-6">
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
      )}
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <AlertCircle className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Dívidas</h1>
            <p className="text-xs md:text-sm text-slate-200 mt-1 drop-shadow">Gerenciamento consolidado de todas suas dívidas</p>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-shrink-0 w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-full flex items-center justify-center transition-all hover:shadow-lg hover:shadow-emerald-500/50 neon-button"
          title="Adicionar nova dívida"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Total Debt */}
      <div className="premium-card border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-200 text-xs md:text-sm drop-shadow">Dívida Total</p>
            <h2 className="text-2xl md:text-3xl font-bold text-red-400 mt-1">
              R$ {debts.reduce((sum, d) => sum + d.value, 0).toFixed(2)}
            </h2>
          </div>
          <AlertCircle className="text-red-400 flex-shrink-0" size={28} />
        </div>
      </div>

      {/* Debts List */}
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-white mb-3">Dívidas Bancárias</h2>
        <div className="space-y-3">
          {debts
            .filter((d) => d.type === "bank")
            .map((debt, i) => {
              const debtIndex = debts.findIndex(d => d === debt)
              const savings = debt.savings || 0
              const remaining = debt.value - savings
              return (
                <div key={i} className="premium-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-sm md:text-base">{debt.name}</h3>
                      <p className="text-xs md:text-sm text-slate-200 drop-shadow">Juros: {debt.interest}%</p>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-red-400 flex-shrink-0">
                      R$ {debt.value.toFixed(2)}
                    </span>
                  </div>
                  
                  {/* Cofrinho da Dívida */}
                  {savings > 0 && (
                    <div className="mb-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <VaultIcon className="w-4 h-4 text-emerald-400" />
                          <p className="text-xs text-slate-200 drop-shadow">Cofrinho</p>
                        </div>
                        <p className="text-sm font-bold text-emerald-400">R$ {savings.toFixed(2)}</p>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-emerald-500 h-full rounded-full transition-all"
                          style={{ width: `${Math.min((savings / debt.value) * 100, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Restante: R$ {remaining.toFixed(2)}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenDebtSavings(debtIndex)}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 font-bold py-2 md:py-3 rounded transition-all text-sm md:text-base flex items-center justify-center gap-2"
                    >
                      <VaultIcon className="w-4 h-4" />
                      {savings > 0 ? "Adicionar" : "Cofrinho"}
                    </button>
                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2 md:py-3 rounded transition-all text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/50 neon-button">
                      Pagar
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      {/* Savings Fund */}
      <div className="mb-6">
        <div className="flex items-center gap-2 md:gap-3 mb-3">
          <VaultIcon className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
          <h2 className="text-lg md:text-xl font-bold text-white">Cofrinho CDB - Fundo de Quitação</h2>
        </div>
        <div className="premium-card border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-slate-200 text-xs md:text-sm drop-shadow">Saldo do Cofrinho</p>
              <p className="text-xl md:text-2xl font-bold text-emerald-500 mt-1">R$ {cdbBalance.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-slate-200 text-xs md:text-sm drop-shadow">Rendimento</p>
              <p className="text-xl md:text-2xl font-bold text-emerald-500 mt-1">
                +R$ {(cdbBalance * 0.005).toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDepositModalOpen(true)}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2 md:py-3 rounded transition-all text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/50 neon-button"
          >
            Depositar
          </button>
        </div>
      </div>

      {/* External Debts */}
      <div>
        <h2 className="text-lg md:text-xl font-bold text-white mb-3">Dívidas Externas</h2>
        <div className="space-y-3">
          {debts
            .filter((d) => d.type === "external")
            .map((debt, i) => {
              const debtIndex = debts.findIndex(d => d === debt)
              const savings = debt.savings || 0
              const remaining = debt.value - savings
              return (
                <div key={i} className="premium-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-sm md:text-base">{debt.name}</h3>
                      <p className="text-xs md:text-sm text-slate-200 drop-shadow">Adicionado manualmente</p>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-orange-400 flex-shrink-0">
                      R$ {debt.value.toFixed(2)}
                    </span>
                  </div>
                  
                  {/* Cofrinho da Dívida */}
                  {savings > 0 && (
                    <div className="mb-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <VaultIcon className="w-4 h-4 text-emerald-400" />
                          <p className="text-xs text-slate-200 drop-shadow">Cofrinho</p>
                        </div>
                        <p className="text-sm font-bold text-emerald-400">R$ {savings.toFixed(2)}</p>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-emerald-500 h-full rounded-full transition-all"
                          style={{ width: `${Math.min((savings / debt.value) * 100, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Restante: R$ {remaining.toFixed(2)}
                      </p>
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleOpenDebtSavings(debtIndex)}
                    className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 font-bold py-2 md:py-3 rounded transition-all text-sm md:text-base flex items-center justify-center gap-2"
                  >
                    <VaultIcon className="w-4 h-4" />
                    {savings > 0 ? "Adicionar ao Cofrinho" : "Criar Cofrinho"}
                  </button>
                </div>
              )
            })}
        </div>
      </div>

      <AddDebtModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddDebt} />
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => {
          setIsDepositModalOpen(false)
          setSelectedDebtIndex(null)
        }}
        onDeposit={handleDeposit}
        debtName={selectedDebtIndex !== null ? debts[selectedDebtIndex]?.name : undefined}
        currentSavings={selectedDebtIndex !== null ? debts[selectedDebtIndex]?.savings || 0 : undefined}
      />
      </div>
    </div>
  )
}
