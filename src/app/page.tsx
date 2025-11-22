"use client"

import { useState } from "react"
import SplashScreen from "@/components/screens/splash-screen"
import LoginScreen from "@/components/screens/login-screen"
import SignupScreen from "@/components/screens/signup-screen"
import OpenFinanceScreen from "@/components/screens/open-finance-screen"
import TriageScreen from "@/components/screens/triage-screen"
import Dashboard from "@/components/screens/dashboard"
import Games from "@/components/screens/games"
import Debts from "@/components/screens/debts"
import Education from "@/components/screens/education"
import VictoryScreen from "@/components/screens/victory-screen"
import BottomNav from "@/components/bottom-nav"
import ChatAgent from "@/components/chat-agent"

type AppScreen =
  | "splash"
  | "login"
  | "signup"
  | "openfinance"
  | "triage"
  | "home"
  | "games"
  | "debts"
  | "education"
  | "victory"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("splash")
  const [showChat, setShowChat] = useState(false)
  const [debtsCovered, setDebtsCovered] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    cpf: "123.456.789-00",
    birthDate: "15/01/1990",
    income: 5000,
    level: 12,
    xpCoins: 2450,
    balance: 1200.5,
    investmentsUnlocked: false,
  })

  const showBottomNav = !["splash", "login", "signup", "openfinance", "triage"].includes(currentScreen)
  const showChatButton = !["splash", "login", "signup", "openfinance", "triage"].includes(currentScreen)

  return (
    <div className="flex flex-col h-screen w-full bg-slate-950 text-white overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-20 md:pb-24">
        {currentScreen === "splash" && <SplashScreen onComplete={() => setCurrentScreen("login")} />}
        {currentScreen === "login" && (
          <LoginScreen
            onComplete={() => setCurrentScreen("home")}
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            onSignup={() => setCurrentScreen("signup")}
          />
        )}
        {currentScreen === "signup" && (
          <SignupScreen
            onComplete={() => setCurrentScreen("openfinance")}
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            onBack={() => setCurrentScreen("login")}
          />
        )}
        {currentScreen === "openfinance" && <OpenFinanceScreen onComplete={() => setCurrentScreen("triage")} />}
        {currentScreen === "triage" && <TriageScreen onComplete={() => setCurrentScreen("home")} />}
        {currentScreen === "home" && (
          <Dashboard
            userProfile={userProfile}
            onNavigate={setCurrentScreen}
            debtsCovered={debtsCovered}
            onLogout={() => setCurrentScreen("login")}
          />
        )}
        {currentScreen === "games" && (
          <Games
            userProfile={userProfile}
            onVictory={() => {
              setDebtsCovered(true)
              setCurrentScreen("victory")
            }}
          />
        )}
        {currentScreen === "debts" && <Debts userProfile={userProfile} />}
        {currentScreen === "education" && <Education userProfile={userProfile} />}
        {currentScreen === "victory" && (
          <VictoryScreen
            userProfile={userProfile}
            onContinue={() => {
              setUserProfile({ ...userProfile, investmentsUnlocked: true })
              setCurrentScreen("home")
            }}
          />
        )}
      </div>

      {showBottomNav && (
        <BottomNav
          currentScreen={currentScreen}
          onScreenChange={setCurrentScreen}
          investmentsUnlocked={userProfile.investmentsUnlocked}
        />
      )}

      {showChatButton && <ChatAgent open={showChat} onOpenChange={setShowChat} userProfile={userProfile} />}
    </div>
  )
}
