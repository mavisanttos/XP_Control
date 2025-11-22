"use client"

import { X } from "lucide-react"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  userProfile: {
    name: string
    email: string
    level: number
    xpCoins: number
    balance: number
  }
  onLogout: () => void
}

export default function ProfileModal({ isOpen, onClose, userProfile, onLogout }: ProfileModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-sm border border-slate-800 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white">Perfil</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* User Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full">
              <span className="text-2xl font-bold text-white">{userProfile.name.charAt(0)}</span>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white">{userProfile.name}</h3>
              <p className="text-sm text-slate-400">{userProfile.email}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
              <span className="text-sm text-slate-400">Nível</span>
              <span className="text-lg font-bold text-emerald-500">{userProfile.level}</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
              <span className="text-sm text-slate-400">XP Coins</span>
              <span className="text-lg font-bold text-purple-500">{userProfile.xpCoins}</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
              <span className="text-sm text-slate-400">Saldo</span>
              <span className="text-lg font-bold text-emerald-500">R$ {userProfile.balance.toFixed(2)}</span>
            </div>
          </div>

          {/* Score Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Progresso</span>
              <span className="text-xs text-slate-500">1.250 / 2.000 XP</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full" style={{ width: "62.5%" }} />
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="w-full py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold rounded-lg transition-colors border border-red-500/50"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}
