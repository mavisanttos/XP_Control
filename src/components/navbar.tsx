"use client"

import { useState } from "react"
import { LogOut, ChevronDown } from "lucide-react"

interface UserProfile {
  name: string
  email: string
  level: number
  xpCoins: number
  balance: number
}

interface NavbarProps {
  userProfile: UserProfile
}

export default function Navbar({ userProfile }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 px-3 md:px-4 py-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent">
          Xp Control
        </h1>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 px-2 md:px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-slate-950 font-bold text-sm">
              {userProfile.name.charAt(0)}
            </div>
            <ChevronDown size={18} className="text-slate-400 hidden sm:block" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
              <div className="px-4 py-3 border-b border-slate-700">
                <p className="font-bold text-white text-sm md:text-base">{userProfile.name}</p>
                <p className="text-xs md:text-sm text-slate-400">{userProfile.email}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 px-4 py-3 border-b border-slate-700">
                <div className="text-center">
                  <p className="text-xs text-slate-400">Nível</p>
                  <p className="text-lg font-bold text-emerald-500">{userProfile.level}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">Saldo</p>
                  <p className="text-lg font-bold text-emerald-500">R$ {userProfile.balance.toFixed(2)}</p>
                </div>
              </div>

              <div className="px-4 py-3 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">XP Coins</span>
                  <span className="font-bold text-purple-500">{userProfile.xpCoins}</span>
                </div>
              </div>

              <button className="w-full px-4 py-3 flex items-center gap-2 text-red-400 hover:bg-slate-700 transition-colors rounded-b-lg text-sm">
                <LogOut size={18} />
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
