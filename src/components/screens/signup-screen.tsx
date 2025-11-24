"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight, ChevronLeft, ArrowLeft } from "lucide-react"
import Aurora from "@/components/aurora"

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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-4 py-6 relative">
      {/* Efeito Aurora no fundo */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Aurora
          colorStops={["#10b981", "#a855f7", "#10b981"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <div className="w-full max-w-md relative z-20">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Logo animado (mesmo da splash) */}
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-2xl opacity-75 animate-pulse" />
              <div className="absolute inset-1 bg-slate-950 rounded-xl flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
                  XP
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{step === 1 ? "Crie sua conta" : "Seus dados"}</h1>
          <p className="text-slate-200 text-sm drop-shadow">
            {step === 1 ? "Complete seus dados" : "Para melhor análise financeira"}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Email</label>
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
                <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Senha</label>
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
                <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Confirmar senha</label>
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
                <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Nome completo</label>
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
                <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Data de nascimento</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Renda estimada (R$)</label>
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
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={handleBack}
            className="relative px-6 py-2.5 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-slate-700/50 group"
          >
            {/* Borda com gradiente - cinza */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 opacity-100 group-hover:from-slate-700 group-hover:to-slate-800 transition-all" />
            {/* Fundo transparente */}
            <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
            {/* Texto */}
            <span className="relative z-10 text-white font-bold flex items-center justify-center gap-2 text-sm">
              <ChevronLeft size={18} />
              Voltar
            </span>
          </button>
          <button
            onClick={handleNext}
            disabled={
              step === 1
                ? !formData.email || !formData.password || formData.confirmPassword !== formData.password
                : !formData.name || !formData.birthDate || !formData.income
            }
            className="relative px-6 py-2.5 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {/* Borda com gradiente */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
            {/* Fundo transparente */}
            <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
            {/* Texto */}
            <span className="relative z-10 text-white font-bold flex items-center justify-center gap-2 text-sm">
              {step === 2 ? "Continuar" : "Próximo"}
              <ChevronRight size={18} />
            </span>
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
