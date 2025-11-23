"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Aurora from "@/components/aurora"

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
          <h1 className="text-3xl font-bold text-white mb-2">XP Control</h1>
          <p className="text-slate-200 text-sm drop-shadow">Controle suas finanças com gamificação</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Email</label>
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
            <label className="block text-sm font-medium text-slate-200 mb-2 drop-shadow">Senha</label>
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
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            disabled={!formData.email || !formData.password}
            className="relative px-6 py-2.5 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {/* Borda com gradiente */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
            {/* Fundo transparente */}
            <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
            {/* Texto */}
            <span className="relative z-10 text-white font-bold flex items-center justify-center gap-2 text-sm">
              Acessar
              <ChevronRight size={18} />
            </span>
          </button>
        </div>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-slate-200 text-sm drop-shadow">
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
