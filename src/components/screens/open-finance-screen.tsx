"use client"

import { useState } from "react"
import { ChevronRight, TrendingUp, X, Check } from "lucide-react"
import FinanceSuccessModal from "@/components/finance-success-modal"
import Aurora from "@/components/aurora"

interface OpenFinanceScreenProps {
  onComplete: () => void
}

export default function OpenFinanceScreen({ onComplete }: OpenFinanceScreenProps) {
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleConnectClick = () => {
    setShowTerms(true)
  }

  const handleAcceptTerms = () => {
    if (acceptedTerms) {
      setShowTerms(false)
      setConnecting(true)
      setTimeout(() => {
        setConnecting(false)
        setConnected(true)
        setShowSuccess(true)
      }, 2000)
    }
  }

  const handleConnect = () => {
    setConnecting(true)
    setTimeout(() => {
      setConnecting(false)
      setConnected(true)
      setShowSuccess(true)
    }, 2000)
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 px-4 pb-8 relative">
        {/* Efeito Aurora no fundo */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
          <Aurora
            colorStops={["#10b981", "#a855f7", "#10b981"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        
        <div className="w-full max-w-md flex flex-col gap-6 relative z-20">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <TrendingUp size={32} className="text-slate-950" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Conectar seus bancos</h1>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed drop-shadow">
              Para criar sua estratégia de saída da dívida, precisamos conectar suas contas bancárias. Será seguro e
              rápido.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 py-4">
            {[
              { title: "Análise completa", desc: "Veja todos os seus débitos em um lugar" },
              { title: "Seguro", desc: "Criptografia de nível bancário" },
              { title: "Rápido", desc: "Leva menos de 5 minutos" },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-slate-950 font-bold">✓</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-white text-sm drop-shadow">{benefit.title}</p>
                  <p className="text-xs text-slate-200 drop-shadow">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleConnectClick}
            disabled={connecting || connected}
            className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all relative ${
              connected
                ? "hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group cursor-default"
                : connecting
                  ? "bg-slate-700 text-slate-300 cursor-wait"
                  : "hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group"
            }`}
          >
            {!connecting && (
              <>
                {/* Borda com gradiente */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
                {/* Fundo transparente */}
                <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
              </>
            )}
            <span className={connecting ? "" : "relative z-10 text-white flex items-center justify-center gap-2"}>
              {connecting && (
                <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-950 rounded-full animate-spin" />
              )}
              {connected ? "Conectado com sucesso" : connecting ? "Conectando..." : (
                <>
                  Conectar Bancos
                  <ChevronRight size={20} />
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      <FinanceSuccessModal isOpen={showSuccess} onContinue={onComplete} />

      {/* Modal de Termos de Consentimento LGPD */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 w-full max-w-2xl max-h-[90vh] rounded-2xl border border-slate-800 shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 pb-4 border-b border-slate-800 flex-shrink-0">
              <h2 className="text-xl md:text-2xl font-bold text-white">Termos de Consentimento - LGPD</h2>
              <button
                onClick={() => {
                  setShowTerms(false)
                  setAcceptedTerms(false)
                }}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content - Scrollável */}
            <div className="overflow-y-auto flex-1 px-4 md:px-6 py-4">
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">1. Finalidade do Tratamento</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Ao conectar suas contas bancárias, coletaremos informações financeiras necessárias para:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 ml-4">
                    <li>Análise completa de suas dívidas e obrigações financeiras</li>
                    <li>Criação de estratégias personalizadas de quitação de dívidas</li>
                    <li>Gamificação e acompanhamento do seu progresso financeiro</li>
                    <li>Fornecimento de recomendações educacionais personalizadas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">2. Dados Coletados</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Coletaremos os seguintes dados de suas contas bancárias:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 ml-4">
                    <li>Saldo de contas corrente e poupança</li>
                    <li>Histórico de transações e movimentações</li>
                    <li>Informações sobre dívidas, empréstimos e financiamentos</li>
                    <li>Dados de cartões de crédito e limites disponíveis</li>
                    <li>Informações sobre investimentos (quando aplicável)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">3. Compartilhamento de Dados</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Seus dados serão compartilhados apenas com:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 ml-4">
                    <li>Prestadores de serviço de Open Banking autorizados pelo Banco Central</li>
                    <li>Parceiros tecnológicos que garantem a segurança e funcionamento da plataforma</li>
                    <li>Nenhum dado será vendido ou compartilhado para fins comerciais sem sua autorização</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">4. Segurança dos Dados</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Implementamos medidas de segurança de nível bancário:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 ml-4">
                    <li>Criptografia end-to-end de todas as comunicações</li>
                    <li>Armazenamento seguro em servidores certificados</li>
                    <li>Autenticação de dois fatores quando disponível</li>
                    <li>Conformidade com as normas do Banco Central e LGPD</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">5. Seus Direitos</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Conforme a LGPD, você tem direito a:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 ml-4">
                    <li>Acessar seus dados pessoais a qualquer momento</li>
                    <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                    <li>Solicitar a exclusão de dados desnecessários ou excessivos</li>
                    <li>Revogar seu consentimento a qualquer momento</li>
                    <li>Solicitar a portabilidade dos seus dados</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">6. Prazo de Retenção</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Seus dados serão mantidos enquanto você utilizar nossos serviços ou enquanto necessário para cumprir obrigações legais. Você pode solicitar a exclusão a qualquer momento através das configurações da plataforma.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">7. Consentimento</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Ao aceitar estes termos, você consente expressamente com o tratamento dos seus dados pessoais conforme descrito acima, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
                  </p>
                </div>
              </div>
            </div>

            {/* Footer com Checkbox e Botões */}
            <div className="p-4 md:p-6 pt-4 border-t border-slate-800 flex-shrink-0 bg-slate-900 rounded-b-2xl">
              <label className="flex items-start gap-3 cursor-pointer mb-4">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    acceptedTerms
                      ? "bg-gradient-to-r from-emerald-500 to-purple-500 border-transparent"
                      : "border-slate-600 bg-slate-800"
                  }`}>
                    {acceptedTerms && <Check size={14} className="text-white" />}
                  </div>
                </div>
                <span className="text-sm text-slate-200 leading-relaxed">
                  Li e aceito os termos de consentimento acima e autorizo o tratamento dos meus dados pessoais conforme a LGPD.
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowTerms(false)
                    setAcceptedTerms(false)
                  }}
                  className="flex-1 relative px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-slate-700/50 group"
                >
                  {/* Borda com gradiente - cinza */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 opacity-100 group-hover:from-slate-700 group-hover:to-slate-800 transition-all" />
                  {/* Fundo transparente */}
                  <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
                  {/* Texto */}
                  <span className="relative z-10 text-white font-bold text-sm">Cancelar</span>
                </button>
                <button
                  onClick={handleAcceptTerms}
                  disabled={!acceptedTerms}
                  className="flex-1 relative px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/50 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {/* Borda com gradiente */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-500 opacity-100 group-hover:from-emerald-600 group-hover:to-purple-600 transition-all" />
                  {/* Fundo transparente */}
                  <div className="absolute inset-[1px] rounded-lg bg-slate-950/90" />
                  {/* Texto */}
                  <span className="relative z-10 text-white font-bold flex items-center justify-center gap-2 text-sm">
                    Aceitar e Conectar
                    <ChevronRight size={18} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
