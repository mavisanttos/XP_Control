"use client"

import type React from "react"
import { useState } from "react"
import { X, ChevronRight } from "lucide-react"

interface AddDebtModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (debt: { name: string; value: number; interest: number; type: "external" }) => void
}

export default function AddDebtModal({ isOpen, onClose, onAdd }: AddDebtModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    interest: "",
  })

  const formatCurrency = (value: string) => {
    const numValue = value.replace(/\D/g, "")
    if (!numValue) return ""
    const floatValue = (Number.parseInt(numValue) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    return floatValue
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "value") {
      setFormData({ ...formData, [name]: value.replace(/\D/g, "") })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = () => {
    if (formData.name && formData.value) {
      onAdd({
        name: formData.name,
        value: Number.parseFloat(formData.value) / 100,
        interest: Number.parseFloat(formData.interest || "0"),
        type: "external",
      })
      setFormData({ name: "", value: "", interest: "" })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-slate-800 shadow-xl flex flex-col max-h-[85vh]">
        {/* Header - Fixo no topo */}
        <div className="flex items-center justify-between p-4 md:p-6 pb-4 border-b border-slate-800 flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-bold text-white">Adicionar Dívida</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1">
            <X size={24} />
          </button>
        </div>

        {/* Form - Scrollável */}
        <div className="overflow-y-auto flex-1 px-4 md:px-6 py-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nome do Credor</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Loja XYZ, Amigo João"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30 text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Valor (R$)</label>
              <input
                type="text"
                name="value"
                value={formatCurrency(formData.value)}
                onChange={handleChange}
                placeholder="R$ 0,00"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30 font-mono text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Taxa de juros (%)</label>
              <input
                type="number"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="0"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30 text-sm md:text-base"
              />
            </div>
          </div>
        </div>

        {/* Actions - Fixo na parte inferior */}
        <div className="flex gap-3 p-4 md:p-6 pt-4 border-t border-slate-800 flex-shrink-0 bg-slate-900 rounded-b-2xl">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-slate-700/50 text-sm md:text-base"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.value}
            className="flex-1 relative py-3 px-4 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm md:text-base"
          >
            {/* Borda com gradiente */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
            {/* Fundo transparente */}
            <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
            {/* Texto */}
            <span className="relative z-10 text-white font-bold flex items-center justify-center gap-2">
              Adicionar
              <ChevronRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
