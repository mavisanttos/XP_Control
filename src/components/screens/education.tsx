"use client"

import { BookOpen, ArrowRight, TrendingUp, PieChart, BarChart3, Target, User } from "lucide-react"
import Aurora from "@/components/aurora"

interface Course {
  title: string
  description: string
  icon: typeof BookOpen
  category: string
}

interface UserProfile {
  name: string
  email?: string
  level?: number
  xpCoins?: number
  balance?: number
}

interface EducationProps {
  userProfile?: UserProfile
  onProfileClick?: () => void
}

export default function Education({ userProfile, onProfileClick }: EducationProps) {
  const courses: Course[] = [
    {
      title: "Como Negociar Dívidas",
      description: "Estratégias de comunicação com credores para obter descontos",
      icon: TrendingUp,
      category: "Devedor",
    },
    {
      title: "Introdução à Bolsa de Valores",
      description: "Fundamentos para começar a investir com segurança",
      icon: BarChart3,
      category: "Investidor",
    },
    {
      title: "Educação Financeira Pessoal",
      description: "Organize seu dinheiro e crie um orçamento inteligente",
      icon: PieChart,
      category: "Devedor",
    },
    {
      title: "Diversificação de Investimentos",
      description: "Reduza riscos distribuindo seu capital",
      icon: Target,
      category: "Investidor",
    },
  ]

  return (
    <div className="w-full px-4 py-6 md:py-8 max-w-6xl mx-auto relative min-h-screen">
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
      
      <div className="flex items-center gap-2 md:gap-3 mb-6">
        <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-emerald-500" />
        <h1 className="text-2xl md:text-3xl font-bold text-white">XP Educação</h1>
      </div>
      <p className="text-slate-200 text-sm md:text-base mb-6 drop-shadow">Conteúdo do Instituto XP / Xpeed adaptado para você</p>

      {/* Suggested Content */}
      <div className="mb-6">
        <h3 className="text-base md:text-lg font-bold text-emerald-500 mb-3">Sugestão Inteligente</h3>
        <div className="premium-card border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950">
          <p className="text-slate-200 mb-3 text-sm drop-shadow">Com base em sua situação (Devedor), recomendamos:</p>
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">Como Negociar Dívidas</h3>
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-2 md:py-3 rounded transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
            Começar Curso <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* All Courses */}
      <h2 className="text-lg md:text-xl font-bold text-white mb-3">Todos os Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course, i) => {
          const Icon = course.icon
          return (
            <div key={i} className="premium-card">
              <div className="flex items-start justify-between mb-3">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-emerald-500 flex-shrink-0" />
                <span
                  className={`text-xs font-bold px-2 py-1 rounded flex-shrink-0 ${
                    course.category === "Devedor"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-purple-500/20 text-purple-400"
                  }`}
                >
                  {course.category}
                </span>
              </div>
              <h3 className="font-bold text-white mb-2 text-sm md:text-base">{course.title}</h3>
              <p className="text-xs md:text-sm text-slate-200 mb-4 drop-shadow">{course.description}</p>
              <button className="w-full border border-slate-700 hover:border-emerald-500 text-emerald-500 font-semibold py-2 rounded transition-colors text-sm">
                Acessar
              </button>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}
