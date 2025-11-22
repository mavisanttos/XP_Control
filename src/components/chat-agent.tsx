"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { RobotIcon } from "@/components/icons/robot-icon"

interface ChatAgentProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userProfile: any
}

interface Message {
  id: string
  type: "user" | "agent"
  text: string
}

export default function ChatAgent({ open, onOpenChange, userProfile }: ChatAgentProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "agent",
      text: "Olá! Sou seu agente de estratégia financeira. Como posso te ajudar?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), type: "user", text: input },
        {
          id: (Date.now() + 1).toString(),
          type: "agent",
          text: "Analisando sua pergunta... Tenho uma sugestão interessante para você!",
        },
      ])
      setInput("")
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => onOpenChange(true)}
        className="fixed bottom-24 md:bottom-32 right-4 md:right-6 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full p-3 md:p-4 shadow-lg transition-all hover:scale-110 z-40"
      >
        <RobotIcon className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-24 md:bottom-32 right-4 md:right-6 w-80 md:w-96 max-h-96 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl flex flex-col z-40">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-gradient-to-r from-purple-500/10 to-purple-600/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <RobotIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Agente IA</p>
                <p className="text-xs text-slate-400">Online</p>
              </div>
            </div>
            <button onClick={() => onOpenChange(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-64">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.type === "user" ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-slate-700 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-bold transition-colors text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
