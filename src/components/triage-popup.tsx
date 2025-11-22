"use client"

import { useState } from "react"
import { ChevronRight, X } from "lucide-react"
import { RobotIcon } from "@/components/icons/robot-icon"

interface TriagePopupProps {
  isOpen: boolean
  currentStep: number
  onNext: (data?: { name?: string; value?: string }) => void
  onSkip: () => void
}

const triageQuestions = [
  {
    message: "Olá! Analisei seus bancos conectados.",
    type: "message",
  },
  {
    message: "Agora preciso saber: você tem dívidas externas ou gastos recorrentes com apostas?",
    type: "question",
  },
]

export default function TriagePopup({ isOpen, currentStep, onNext, onSkip }: TriagePopupProps) {
  const [newDebt, setNewDebt] = useState({ name: "", value: "" })
  const [debtsAdded, setDebtsAdded] = useState<Array<{ name: string; value: string }>>([])

  if (!isOpen) return null

  const currentQuestion = triageQuestions[Math.min(currentStep, triageQuestions.length - 1)]
  const isAddingDebt = currentStep === 1
  const showSkipButton = currentStep > 1

  const handleAddDebt = () => {
    if (newDebt.name && newDebt.value) {
      setDebtsAdded([...debtsAdded, newDebt])
      setNewDebt({ name: "", value: "" })
    }
  }

  const handleFinish = () => {
    onNext()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50 md:items-center md:justify-center">
      <div className="bg-slate-900 w-full md:max-w-md rounded-t-3xl md:rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <RobotIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-400">Agente XP Control</span>
          </div>
          {showSkipButton && (
            <button onClick={onSkip} className="text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          )}
        </div>

        {/* Message */}
        <div className="bg-slate-800 rounded-lg p-4 mb-6">
          <p className="text-white text-sm md:text-base leading-relaxed">{currentQuestion.message}</p>
        </div>

        {/* Debt Form */}
        {isAddingDebt && (
          <div className="space-y-4 mb-6">
            {debtsAdded.length > 0 && (
              <div className="space-y-2 mb-4">
                <p className="text-xs font-semibold text-slate-400">Dívidas Adicionadas:</p>
                {debtsAdded.map((debt, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                    <span className="text-sm text-white">{debt.name}</span>
                    <span className="text-sm font-bold text-emerald-500">
                      R$ {Number.parseFloat(debt.value).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Nome do Credor</label>
              <input
                type="text"
                value={newDebt.name}
                onChange={(e) => setNewDebt({ ...newDebt, name: e.target.value })}
                placeholder="Ex: Credor XYZ"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Valor (R$)</label>
              <input
                type="number"
                value={newDebt.value}
                onChange={(e) => setNewDebt({ ...newDebt, value: e.target.value })}
                placeholder="0.00"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30"
              />
            </div>

            <button
              onClick={handleAddDebt}
              disabled={!newDebt.name || !newDebt.value}
              className="w-full bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-slate-700/50"
            >
              Adicionar Dívida
            </button>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {showSkipButton && (
            <button
              onClick={onSkip}
              className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:shadow-slate-700/50"
            >
              Pular
            </button>
          )}
          <button
            onClick={handleFinish}
            className={`${showSkipButton ? "flex-1" : "w-full"} py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/50 neon-button`}
          >
            {isAddingDebt ? "Continuar" : "Começar"}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
