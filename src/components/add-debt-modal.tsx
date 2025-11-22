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
    <div className="fixed inset-0 bg-black/50 flex items-end z-50 md:items-center md:justify-center">
      <div className="bg-slate-900 w-full md:max-w-md rounded-t-3xl md:rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">Adicionar Dívida</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors neon-button">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Nome do Credor</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Loja XYZ, Amigo João"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30 neon-input"
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
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30 neon-input font-mono"
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
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/30 neon-input"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-slate-700/50 neon-button"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.value}
            className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 rounded-lg font-bold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/50 neon-button"
          >
            Adicionar
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
