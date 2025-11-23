/**
 * =======================================================
 * TOP NAVBAR - Barra de Navegação Superior
 * =======================================================
 * 
 * Componente reutilizável que exibe o logo XP e saudação
 * em todas as telas principais da aplicação.
 * 
 * @author Equipe XP Control
 * @version 1.0.0
 */

"use client"

import { User } from "lucide-react"

interface UserProfile {
  name: string
  email?: string
  level?: number
  xpCoins?: number
  balance?: number
}

interface TopNavbarProps {
  userProfile: UserProfile
  onProfileClick?: () => void
  onLogout?: () => void
}

/**
 * Componente TopNavbar
 * Exibe logo XP, saudação e botão de perfil
 */
export default function TopNavbar({ userProfile, onProfileClick, onLogout }: TopNavbarProps) {
  return (
    <nav className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 px-4 py-3 mb-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo XP e Saudação */}
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
          <h1 className="text-xl md:text-2xl font-bold text-white">Olá, {userProfile.name.split(" ")[0]}</h1>
        </div>
        
        {/* Botão de Perfil */}
        {onProfileClick && (
          <button
            onClick={onProfileClick}
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all flex-shrink-0"
            title="Ver Perfil"
          >
            <User size={20} className="text-white" />
          </button>
        )}
      </div>
    </nav>
  )
}

