"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface SignupScreenProps {
  onComplete: () => void
  userProfile: any
  setUserProfile: (profile: any) => void
  onBack?: () => void
}

export default function SignupScreen({ onComplete, userProfile, setUserProfile, onBack }: SignupScreenProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: userProfile.name || "",
    birthDate: userProfile.birthDate || "",
    income: userProfile.income || "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleNext = () => {
    if (step === 1 && formData.email && formData.password && formData.confirmPassword === formData.password) {
      setStep(2)
    } else if (step === 2 && formData.name && formData.birthDate && formData.income) {
      setUserProfile({ ...userProfile, ...formData })
      onComplete()
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
    } else if (onBack) {
      onBack()
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-4 py-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{step === 1 ? "Crie sua conta" : "Seus dados"}</h1>
          <p className="text-slate-400 text-sm">
            {step === 1 ? "Complete seus dados" : "Para melhor análise financeira"}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Senha</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Crie uma senha"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Confirmar senha</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Repita a senha"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
                />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Data de nascimento</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Renda estimada (R$)</label>
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleInputChange}
                  placeholder="5000"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
                />
              </div>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleBack}
            className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all font-medium hover:shadow-lg hover:shadow-slate-700/50 neon-button flex items-center justify-center gap-2"
          >
            <ChevronLeft size={20} />
            Voltar
          </button>
          <button
            onClick={handleNext}
            disabled={
              step === 1
                ? !formData.email || !formData.password || formData.confirmPassword !== formData.password
                : !formData.name || !formData.birthDate || !formData.income
            }
            className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 rounded-lg transition-all font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/50 neon-button"
          >
            {step === 2 ? "Continuar" : "Próximo"}
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex gap-2 justify-center">
          <div className={`h-1 w-8 rounded-full transition-colors ${step >= 1 ? "bg-emerald-500" : "bg-slate-800"}`} />
          <div className={`h-1 w-8 rounded-full transition-colors ${step >= 2 ? "bg-emerald-500" : "bg-slate-800"}`} />
        </div>
      </div>
    </div>
  )
}
