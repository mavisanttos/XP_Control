"use client"

import { BookOpen, ArrowRight, TrendingUp, PieChart, BarChart3, Target } from "lucide-react"

interface Course {
  title: string
  description: string
  icon: typeof BookOpen
  category: string
}

export default function Education() {
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
    <div className="w-full px-4 py-6 md:py-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 md:gap-3 mb-6">
        <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-emerald-500" />
        <h1 className="text-2xl md:text-3xl font-bold text-white">XP Educação</h1>
      </div>
      <p className="text-slate-400 text-sm md:text-base mb-6">Conteúdo do Instituto XP / Xpeed adaptado para você</p>

      {/* Suggested Content */}
      <div className="mb-6">
        <h3 className="text-base md:text-lg font-bold text-emerald-500 mb-3">Sugestão Inteligente</h3>
        <div className="premium-card border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950">
          <p className="text-slate-300 mb-3 text-sm">Com base em sua situação (Devedor), recomendamos:</p>
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
              <p className="text-xs md:text-sm text-slate-400 mb-4">{course.description}</p>
              <button className="w-full border border-slate-700 hover:border-emerald-500 text-emerald-500 font-semibold py-2 rounded transition-colors text-sm">
                Acessar
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
