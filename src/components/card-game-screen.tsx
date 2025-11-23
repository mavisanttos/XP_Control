"use client"

import type React from "react"

import { useState, useRef } from "react"
import AnimatedCard from "@/components/animated-card"

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
    <div className="w-full flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px] relative z-10">
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
          <AnimatedCard
            className="w-full"
            enableTilt={true}
            enableMobileTilt={false}
            innerGradient="linear-gradient(145deg, rgba(168, 85, 247, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)"
            behindGlowColor="rgba(168, 85, 247, 0.3)"
          >
            <div className="p-8 md:p-10 min-h-80 w-full flex flex-col items-center justify-center text-center relative">
              {/* Categoria no topo centralizado */}
              <div className="absolute top-6 md:top-8 inset-x-0 flex justify-center items-center">
                <span className="text-xs md:text-sm font-semibold text-purple-400 uppercase tracking-widest">
                  {currentCard.category}
                </span>
              </div>

              {/* Pergunta centralizada no meio da carta */}
              <div className="flex-1 flex items-center justify-center mt-12 md:mt-16">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-md">
                  {currentCard.description}
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>

      {/* Botões de decisão fora da carta */}
      <div className="w-full max-w-sm px-4 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleChoice(false)}
            className="bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 text-slate-300 hover:text-white font-bold py-4 md:py-5 rounded-lg transition-all hover:shadow-lg hover:shadow-slate-700/30 neon-button text-sm md:text-base relative z-20"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">Arraste para esquerda</span>
              <span>{currentCard.leftOption}</span>
            </div>
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 text-slate-300 hover:text-white font-bold py-4 md:py-5 rounded-lg transition-all hover:shadow-lg hover:shadow-slate-700/30 neon-button text-sm md:text-base relative z-20"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">Arraste para direita</span>
              <span>{currentCard.rightOption}</span>
            </div>
          </button>
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
