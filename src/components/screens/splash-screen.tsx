"use client"

import { useEffect } from "react"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-2xl opacity-75 animate-pulse" />
          <div className="absolute inset-1 bg-slate-950 rounded-xl flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
              XP
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Xp Control</h1>
          <p className="text-slate-400 text-sm md:text-base">Transforme suas dívidas em vitória</p>
        </div>

        {/* Loading Bar */}
        <div className="w-40 h-1 bg-slate-800 rounded-full overflow-hidden mt-8">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-purple-500 animate-[slideRight_2.5s_ease-in-out]" />
        </div>
      </div>
    </div>
  )
}
