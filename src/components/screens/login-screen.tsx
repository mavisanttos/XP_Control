"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface LoginScreenProps {
  onComplete: () => void
  userProfile: any
  setUserProfile: (profile: any) => void
  onSignup?: () => void
}

export default function LoginScreen({ onComplete, userProfile, setUserProfile, onSignup }: LoginScreenProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = () => {
    if (formData.email && formData.password) {
      onComplete()
    }
  }

  const handleSignup = () => {
    if (onSignup) {
      onSignup()
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-4 py-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">XP Control</h1>
          <p className="text-slate-400 text-sm">Controle suas finanças com gamificação</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="text"
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
              placeholder="Digite sua senha"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/50 neon-input"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={!formData.email || !formData.password}
          className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 rounded-lg transition-all font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/50 neon-button"
        >
          Acessar
          <ChevronRight size={20} />
        </button>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            Não tem conta?{" "}
            <button
              onClick={handleSignup}
              className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors neon-text"
            >
              Criar conta
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
