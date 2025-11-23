
export interface User {
  id: string
  email: string
  password: string
  name: string
  cpf: string | null
  birth_date: string | null
  income: number
  level: number
  xp: number
  xp_coins: number
  total_xp_earned: number
  balance: number
  investments_unlocked: boolean
  debts_covered: boolean
  open_finance_connected: boolean
  open_finance_token: string | null
  open_finance_expires_at: string | null
  created_at: string
  updated_at: string
  last_login_at: string | null
}

export interface Debt {
  id: string
  user_id: string
  name: string
  value: number
  original_value: number
  interest: number
  type: 'BANK' | 'EXTERNAL'
  status: 'ACTIVE' | 'PAID' | 'NEGOTIATING' | 'DEFAULTED'
  paid_value: number
  remaining_value: number
  priority: number
  recommended_payment: number | null
  creditor: string | null
  due_date: string | null
  description: string | null
  created_at: string
  updated_at: string
  paid_at: string | null
}

export interface Transaction {
  id: string
  user_id: string
  debt_id: string | null
  type: 'INCOME' | 'EXPENSE' | 'DEBT_PAYMENT' | 'DEPOSIT' | 'WITHDRAWAL' | 'REWARD' | 'REFUND'
  amount: number
  description: string
  category: string | null
  open_finance_id: string | null
  is_from_open_finance: boolean
  created_at: string
}

export interface GameSession {
  id: string
  user_id: string
  game_type: 'STRATEGY' | 'INVESTMENTS' | 'REIGNS'
  score: number
  completed: boolean
  xp_earned: number
  coins_earned: number
  game_data: Record<string, any> | null
  created_at: string
  completed_at: string | null
}

export interface Cofrinho {
  id: string
  user_id: string
  name: string
  target_amount: number
  current_amount: number
  cdb_rate: number
  total_earnings: number
  target_debt_id: string | null
  is_active: boolean
  created_at: string
  updated_at: string
  completed_at: string | null
}

export interface ChatMessage {
  id: string
  user_id: string
  type: 'USER' | 'AGENT' | 'SYSTEM'
  content: string
  metadata: Record<string, any> | null
  created_at: string
}

export interface Activity {
  id: string
  user_id: string
  type: 'UNLOCK' | 'REWARD' | 'DEBT_REDUCTION' | 'LEVEL_UP' | 'ACHIEVEMENT' | 'PAYMENT' | 'DEPOSIT'
  title: string
  description: string | null
  metadata: Record<string, any> | null
  created_at: string
}

export interface TriageSession {
  id: string
  user_id: string
  answers: Record<string, any>
  identified_debts: Record<string, any> | null
  recommendations: Record<string, any> | null
  completed: boolean
  created_at: string
  completed_at: string | null
}

