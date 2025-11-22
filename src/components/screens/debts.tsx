"use client"

import { useState } from "react"
import { AlertCircle, Plus } from "lucide-react"
import { VaultIcon } from "@/components/icons/robot-icon"
import AddDebtModal from "@/components/add-debt-modal"
import DepositModal from "@/components/deposit-modal"

interface DebtItem {
  name: string
  value: number
  interest: number
  type: "bank" | "external"
}

interface DebtsProps {
  onAddDebt?: () => void
}

export default function Debts({ onAddDebt }: DebtsProps) {
  const [debts, setDebts] = useState<DebtItem[]>([
    { name: "Cartão de Crédito", value: 2500, interest: 14, type: "bank" },
    { name: "Empréstimo Pessoal", value: 5000, interest: 2, type: "bank" },
    { name: "Loja de Eletrônicos", value: 800, interest: 10, type: "external" },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false)
  const [cdbBalance, setCdbBalance] = useState(200)

  const handleAddDebt = (newDebt: DebtItem) => {
    setDebts([...debts, newDebt])
  }

  const handleDeposit = (amount: number) => {
    setCdbBalance(cdbBalance + amount)
  }

  return (
    <div className="w-full px-4 py-6 md:py-8 max-w-6xl mx-auto pb-24 md:pb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <AlertCircle className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Dívidas</h1>
            <p className="text-xs md:text-sm text-slate-400 mt-1">Gerenciamento consolidado de todas suas dívidas</p>
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
            <p className="text-slate-400 text-xs md:text-sm">Dívida Total</p>
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
            .map((debt, i) => (
              <div key={i} className="premium-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm md:text-base">{debt.name}</h3>
                    <p className="text-xs md:text-sm text-slate-400">Juros: {debt.interest}%</p>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-red-400 flex-shrink-0">
                    R$ {debt.value.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2 md:py-3 rounded transition-all text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/50 neon-button">
                  Pagar com Desconto
                </button>
              </div>
            ))}
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
              <p className="text-slate-400 text-xs md:text-sm">Saldo do Cofrinho</p>
              <p className="text-xl md:text-2xl font-bold text-emerald-500 mt-1">R$ {cdbBalance.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs md:text-sm">Rendimento</p>
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
            .map((debt, i) => (
              <div key={i} className="premium-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm md:text-base">{debt.name}</h3>
                    <p className="text-xs md:text-sm text-slate-400">Adicionado manualmente</p>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-orange-400 flex-shrink-0">
                    R$ {debt.value.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <AddDebtModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddDebt} />
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
        onDeposit={handleDeposit}
      />
    </div>
  )
}
