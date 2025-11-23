"use client"

import { Home, Gamepad2, CreditCard, BookOpen, Lock } from "lucide-react"

interface BottomNavProps {
  currentScreen: "home" | "games" | "debts" | "education"
  onScreenChange: (screen: "home" | "games" | "debts" | "education") => void
  investmentsUnlocked?: boolean
}

export default function BottomNav({ currentScreen, onScreenChange, investmentsUnlocked }: BottomNavProps) {
  const navItems = [
    { id: "home" as const, label: "Home", icon: Home },
    { id: "games" as const, label: "Jogos", icon: investmentsUnlocked ? Gamepad2 : Lock },
    { id: "debts" as const, label: "Dívidas", icon: CreditCard },
    { id: "education" as const, label: "Educação", icon: BookOpen },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-2 md:px-4 py-2 md:py-3 z-50">
      <div className="flex items-center justify-around gap-1 md:gap-2 max-w-6xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={`flex flex-col items-center gap-1 px-2 md:px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive ? "scale-105" : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon 
                size={20} 
                className={`md:size-6 ${
                  isActive 
                    ? "text-emerald-400" 
                    : ""
                }`}
                style={isActive ? {
                  filter: 'drop-shadow(0 0 3px rgba(16, 185, 129, 0.8)) drop-shadow(0 0 6px rgba(168, 85, 247, 0.6))'
                } : {}}
              />
              <span 
                className={`text-xs font-semibold ${
                  isActive 
                    ? "bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent" 
                    : ""
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
