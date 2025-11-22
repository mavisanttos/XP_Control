"use client"

import { useState } from "react"
import TriagePopup from "@/components/triage-popup"

interface TriageScreenProps {
  onComplete: () => void
}

export default function TriageScreen({ onComplete }: TriageScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showPopup, setShowPopup] = useState(true)

  const handleNext = () => {
    if (currentStep < 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Triagem de Dívidas</h1>
        <p className="text-slate-400 text-sm md:text-base">Respondendo às perguntas do seu agente de IA...</p>
      </div>

      <TriagePopup isOpen={showPopup} currentStep={currentStep} onNext={handleNext} onSkip={onComplete} />
    </div>
  )
}
