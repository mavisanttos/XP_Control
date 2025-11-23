"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface DepositModalProps {
  isOpen: boolean
  onClose: () => void
  onDeposit: (amount: number) => void
  debtName?: string // Nome da dívida se for cofrinho específico
  currentSavings?: number // Valor atual do cofrinho da dívida
}

export default function DepositModal({ isOpen, onClose, onDeposit, debtName, currentSavings }: DepositModalProps) {
  const [amount, setAmount] = useState("")
  const isDebtSavings = debtName !== undefined

  const handleDepositClick = () => {
    if (amount && Number(amount) > 0) {
      // amount está em centavos, converter para reais
      onDeposit(Number(amount) / 100)
      setAmount("")
      onClose()
    }
  }

  const formatCurrency = (value: string) => {
    const numValue = value.replace(/\D/g, "")
    if (!numValue) return ""

    const floatValue = (Number(numValue) / 100).toFixed(2)
    const parts = floatValue.split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return `R$ ${parts.join(",")}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setAmount(value)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 w-full max-w-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {isDebtSavings ? `Cofrinho - ${debtName}` : "Depositar no Cofrinho"}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Valor</label>
            <input
              type="text"
              value={formatCurrency(amount)}
              onChange={handleChange}
              placeholder="R$ 0,00"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
            />
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            {isDebtSavings && currentSavings !== undefined && (
              <div className="mb-3 pb-3 border-b border-slate-700">
                <p className="text-xs text-slate-400">Saldo atual do cofrinho:</p>
                <p className="text-base font-bold text-emerald-400 mt-1">
                  R$ {currentSavings.toFixed(2)}
                </p>
              </div>
            )}
            <p className="text-xs text-slate-400">
              {isDebtSavings ? "Novo saldo do cofrinho:" : "Seu novo saldo seria:"}
            </p>
            <p className="text-lg font-bold text-emerald-500 mt-2">
              R$ {((isDebtSavings ? (currentSavings || 0) : 200) + (Number(amount) || 0) / 100).toFixed(2)}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all font-medium hover:shadow-lg hover:shadow-slate-700/50 neon-button"
            >
              Cancelar
            </button>
            <button
              onClick={handleDepositClick}
              disabled={!amount || Number(amount) <= 0}
              className="flex-1 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 rounded-lg transition-all font-bold hover:shadow-lg hover:shadow-emerald-500/50 neon-button"
            >
              Depositar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
