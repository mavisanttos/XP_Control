"use client"

import type React from "react"

import { useState, useRef } from "react"

interface CardData {
  id: number
  title: string
  description: string
  leftOption: string
  rightOption: string
  leftScore: number
  rightScore: number
  category: string
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "Cartão de Crédito",
    description: "Gastou R$ 500 extras este mês. Pagar juros ou deixar rolar?",
    leftOption: "Deixar rolar (juros)",
    rightOption: "Pagar agora",
    leftScore: -30,
    rightScore: 50,
    category: "Decisão",
  },
  {
    id: 2,
    title: "Oportunidade",
    description: "Surgiu uma promoção para investir R$ 200. Fazer ou guardar?",
    leftOption: "Guardar",
    rightOption: "Investir",
    leftScore: 20,
    rightScore: 40,
    category: "Investimento",
  },
  {
    id: 3,
    title: "Emergência",
    description: "Seu carro apresentou problemas. Quanto gastar no conserto?",
    leftOption: "Reparação cara",
    rightOption: "Orçamento careta",
    leftScore: -20,
    rightScore: 60,
    category: "Emergência",
  },
  {
    id: 4,
    title: "Renda Extra",
    description: "Recebeu R$ 300 de bônus. Para onde vai?",
    leftOption: "Diversão",
    rightOption: "Investir",
    leftScore: -10,
    rightScore: 70,
    category: "Renda",
  },
  {
    id: 5,
    title: "Dívida Externa",
    description: "Parcelada em 5x. Pagar antecipado ou manter as parcelas?",
    leftOption: "Manter parcelas",
    rightOption: "Quitar agora",
    leftScore: 10,
    rightScore: 80,
    category: "Dívida",
  },
]

interface CardGameScreenProps {
  onComplete: () => void
}

export default function CardGameScreen({ onComplete }: CardGameScreenProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [animatingOut, setAnimatingOut] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [dragX, setDragX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)

  const currentCard = CARDS[currentCardIndex]

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startXRef.current === 0) return
    const currentX = e.clientX
    const diff = currentX - startXRef.current
    setDragX(diff)
  }

  const handleMouseUp = () => {
    const threshold = 50
    if (Math.abs(dragX) > threshold) {
      handleChoice(dragX > 0)
    }
    setDragX(0)
    startXRef.current = 0
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startXRef.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startXRef.current === 0) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startXRef.current
    setDragX(diff)
  }

  const handleTouchEnd = () => {
    const threshold = 50
    if (Math.abs(dragX) > threshold) {
      handleChoice(dragX > 0)
    }
    setDragX(0)
    startXRef.current = 0
  }

  const handleChoice = (isRight: boolean) => {
    setAnimatingOut(true)
    setDirection(isRight ? "right" : "left")

    const newScore = isRight ? currentCard.rightScore : currentCard.leftScore
    setScore(score + newScore)

    setTimeout(() => {
      if (currentCardIndex < CARDS.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1)
        setAnimatingOut(false)
        setDirection(null)
      } else {
        onComplete()
      }
    }, 500)
  }

  const dragOpacity = Math.min(Math.abs(dragX) / 100, 1)
  const dragRotation = (dragX / 100) * 10

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px]">
      <div className="mb-8 text-center">
        <p className="text-slate-400 text-sm">Pontuação</p>
        <p className="text-4xl font-bold text-emerald-500 mt-1">{Math.max(0, score)}</p>
        <p className="text-slate-400 text-xs mt-2">
          Carta {currentCardIndex + 1} de {CARDS.length}
        </p>
      </div>

      <div className="w-full max-w-sm px-4">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`relative w-full transition-all duration-500 cursor-grab active:cursor-grabbing ${
            animatingOut
              ? direction === "right"
                ? "translate-x-96 opacity-0 rotate-12"
                : "-translate-x-96 opacity-0 -rotate-12"
              : `translate-x-[${dragX}px] opacity-100`
          }`}
          style={{
            transform: animatingOut
              ? direction === "right"
                ? "translateX(24rem) rotate(12deg)"
                : "translateX(-24rem) rotate(-12deg)"
              : `translateX(${dragX}px) rotate(${dragRotation}deg)`,
          }}
        >
          <div className="premium-card border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-slate-950 p-6 md:p-8 min-h-72">
            <div className="mb-4">
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
                {currentCard.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{currentCard.title}</h2>
            </div>

            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">{currentCard.description}</p>

            <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-6">
              <span>Arraste esquerda</span>
              <span className="flex-1 h-px bg-slate-700" />
              <span>Arraste direita</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleChoice(false)}
                className="bg-red-500/20 border border-red-500/50 hover:bg-red-500/30 text-red-300 hover:text-red-200 font-bold py-3 md:py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-red-500/30 neon-button text-sm md:text-base"
              >
                Esquerda
              </button>
              <button
                onClick={() => handleChoice(true)}
                className="bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500/30 text-emerald-300 hover:text-emerald-200 font-bold py-3 md:py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/30 neon-button text-sm md:text-base"
              >
                Direita
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 text-xs text-slate-400">
              <span className="text-center">{currentCard.leftOption}</span>
              <span className="text-center">{currentCard.rightOption}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm px-4 mt-8">
        <div className="flex gap-1">
          {CARDS.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-colors ${
                i <= currentCardIndex ? "bg-emerald-500" : "bg-slate-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
