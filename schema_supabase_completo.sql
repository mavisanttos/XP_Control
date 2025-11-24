-- =======================================================
-- 🛠️ CONFIGURAÇÃO INICIAL
-- =======================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Limpeza para testes (Cuidado em produção!)
DROP TABLE IF EXISTS triagem_sessoes;
DROP TABLE IF EXISTS atividades;
DROP TABLE IF EXISTS chat_agente;
DROP TABLE IF EXISTS historico_jogos;
DROP TABLE IF EXISTS metas_quitacao;
DROP TABLE IF EXISTS dividas;
DROP TABLE IF EXISTS transacoes;
DROP TABLE IF EXISTS carteiras;
DROP TABLE IF EXISTS perfis;

-- Não dropamos auth.users pois é do sistema do Supabase

-- =======================================================
-- 1. PERFIS (Conectado ao Login Real do Supabase)
-- =======================================================

CREATE TABLE public.perfis (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE, -- Link direto com Auth
    nome_completo TEXT,
    avatar_url TEXT,
    cpf TEXT UNIQUE,
    birth_date DATE,
    
    -- Gamificação
    modo_atual TEXT DEFAULT 'resgate' CHECK (modo_atual IN ('resgate', 'investidor')),
    nivel_guardiao INTEGER DEFAULT 1,
    pontos_xp INTEGER DEFAULT 0,
    progresso_jornada INTEGER DEFAULT 0,
    investments_unlocked BOOLEAN DEFAULT false,

    -- Diagnóstico
    renda_mensal NUMERIC(10,2) DEFAULT 0,
    divida_total_inicial NUMERIC(10,2) DEFAULT 0,
    saldo_global NUMERIC(10,2) DEFAULT 0,

    -- Open Finance
    open_finance_connected BOOLEAN DEFAULT false,
    open_finance_token TEXT,
    open_finance_expires_at TIMESTAMPTZ,

    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_login_at TIMESTAMPTZ
);

-- =======================================================
-- 2. CARTEIRA DIGITAL
-- =======================================================

CREATE TABLE public.carteiras (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) ON DELETE CASCADE UNIQUE NOT NULL,
    saldo_cofre NUMERIC(10,2) DEFAULT 0.00,
    rendimento_acumulado NUMERIC(10,2) DEFAULT 0.00,
    xp_coins INTEGER DEFAULT 0,
    atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =======================================================
-- 3. TRANSAÇÕES
-- =======================================================

CREATE TABLE public.transacoes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) NOT NULL,
    carteira_id UUID REFERENCES public.carteiras(id) NOT NULL,
    tipo TEXT CHECK (tipo IN ('deposito', 'resgate', 'bonus_jogo', 'pagamento_divida', 'income', 'expense', 'reward', 'refund')),
    valor NUMERIC(10,2),
    coins INTEGER DEFAULT 0,
    descricao TEXT,
    categoria TEXT,
    open_finance_id TEXT,
    is_from_open_finance BOOLEAN DEFAULT false,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =======================================================
-- 4. GESTÃO DE DÍVIDAS
-- =======================================================

CREATE TABLE public.dividas (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) NOT NULL,
    origem TEXT CHECK (origem IN ('banco', 'externa')),
    nome_credor TEXT NOT NULL,
    valor_original NUMERIC(10,2) NOT NULL,
    valor_atual NUMERIC(10,2) NOT NULL,
    paid_value NUMERIC(10,2) DEFAULT 0,
    remaining_value NUMERIC(10,2) NOT NULL,
    taxa_juros_mensal NUMERIC(5,2),
    prioridade INTEGER DEFAULT 0,
    recommended_payment NUMERIC(10,2),
    status TEXT DEFAULT 'ativa' CHECK (status IN ('ativa', 'em_acordo', 'liquidada', 'negociando')),
    data_vencimento DATE,
    description TEXT,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    paid_at TIMESTAMPTZ
);

-- =======================================================
-- 5. METAS DE QUITAÇÃO (Cofrinho)
-- =======================================================

CREATE TABLE public.metas_quitacao (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) NOT NULL,
    divida_alvo_id UUID REFERENCES public.dividas(id),
    nome_meta TEXT NOT NULL,
    valor_alvo NUMERIC(10,2) NOT NULL,
    valor_guardado NUMERIC(10,2) DEFAULT 0.00,
    cdb_rate NUMERIC(5,2) DEFAULT 0.5,
    total_earnings NUMERIC(10,2) DEFAULT 0,
    status TEXT DEFAULT 'em_andamento' CHECK (status IN ('em_andamento', 'completa', 'cancelada')),
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMPTZ
);

-- =======================================================
-- 6. HISTÓRICO DE JOGOS
-- =======================================================

CREATE TABLE public.historico_jogos (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) NOT NULL,
    tipo_jogo TEXT CHECK (tipo_jogo IN ('estrategia_divida', 'mercado_financeiro', 'decisoes_financeiras')),
    cenario_id TEXT,
    decisao_usuario TEXT,
    foi_correto BOOLEAN,
    score INTEGER DEFAULT 0,
    completed BOOLEAN DEFAULT false,
    recompensa_coins INTEGER DEFAULT 0,
    xp_earned INTEGER DEFAULT 0,
    feedback_ia TEXT,
    game_data JSONB,
    jogado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMPTZ
);

-- =======================================================
-- 7. CHAT AGENTE (IA)
-- =======================================================

CREATE TABLE public.chat_agente (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) NOT NULL,
    tipo TEXT CHECK (tipo IN ('USER', 'AGENT', 'SYSTEM')) DEFAULT 'USER',
    gatilho TEXT,
    mensagem_usuario TEXT,
    resposta_ia TEXT,
    acao_sugerida TEXT,
    metadata JSONB,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =======================================================
-- 8. ATIVIDADES (Histórico do Dashboard)
-- =======================================================

CREATE TABLE public.atividades (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) ON DELETE CASCADE,
    tipo TEXT CHECK (tipo IN ('unlock', 'reward', 'debt_reduction', 'level_up', 'achievement', 'payment', 'deposit')),
    titulo TEXT NOT NULL,
    descricao TEXT,
    metadata JSONB,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =======================================================
-- 9. TRIAGEM DE DÍVIDAS
-- =======================================================

CREATE TABLE public.triagem_sessoes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    usuario_id UUID REFERENCES public.perfis(id) ON DELETE CASCADE,
    respostas JSONB NOT NULL,
    dividas_identificadas JSONB,
    recomendacoes JSONB,
    completed BOOLEAN DEFAULT false,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMPTZ
);

-- =======================================================
-- ⚡ AUTOMAÇÃO (O Segredo do Backend)
-- Cria Perfil e Carteira automaticamente ao registrar usuário
-- =======================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.perfis (id, nome_completo, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  
  INSERT INTO public.carteiras (usuario_id)
  VALUES (new.id);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Dispara a função sempre que um usuário é criado no Auth
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- =======================================================
-- 🔒 SEGURANÇA (RLS - Row Level Security)
-- =======================================================

ALTER TABLE public.perfis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carteiras ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dividas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metas_quitacao ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.historico_jogos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_agente ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.atividades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.triagem_sessoes ENABLE ROW LEVEL SECURITY;

-- Política Simples: "O usuário só vê e edita os próprios dados"
CREATE POLICY "Acesso Total ao Próprio Perfil" ON public.perfis FOR ALL USING (auth.uid() = id);
CREATE POLICY "Acesso Total à Própria Carteira" ON public.carteiras FOR ALL USING (auth.uid() = usuario_id);
CREATE POLICY "Acesso Total às Próprias Dívidas" ON public.dividas FOR ALL USING (auth.uid() = usuario_id);
CREATE POLICY "Acesso Total às Transações" ON public.transacoes FOR ALL USING (auth.uid() = usuario_id);
CREATE POLICY "Acesso Total às Metas" ON public.metas_quitacao FOR ALL USING (auth.uid() = usuario_id);
CREATE POLICY "Acesso Total aos Jogos" ON public.historico_jogos FOR ALL USING (auth.uid() = usuario_id);
CREATE POLICY "Acesso Total ao Chat" ON public.chat_agente FOR ALL USING (auth.uid() = usuario_id);
CREATE POLICY "Acesso Total às Atividades" ON public.atividades FOR ALL USING (auth.uid() = usuario_id);
CREATE POLICY "Acesso Total à Triagem" ON public.triagem_sessoes FOR ALL USING (auth.uid() = usuario_id);

-- =======================================================
-- 📊 ÍNDICES PARA PERFORMANCE
-- =======================================================

CREATE INDEX idx_dividas_usuario_id ON public.dividas(usuario_id);
CREATE INDEX idx_dividas_status ON public.dividas(status);
CREATE INDEX idx_transacoes_usuario_id ON public.transacoes(usuario_id);
CREATE INDEX idx_transacoes_created_at ON public.transacoes(criado_em);
CREATE INDEX idx_historico_jogos_usuario_id ON public.historico_jogos(usuario_id);
CREATE INDEX idx_historico_jogos_tipo ON public.historico_jogos(tipo_jogo);
CREATE INDEX idx_chat_agente_usuario_id ON public.chat_agente(usuario_id);
CREATE INDEX idx_atividades_usuario_id ON public.atividades(usuario_id);
CREATE INDEX idx_metas_quitacao_usuario_id ON public.metas_quitacao(usuario_id);
CREATE INDEX idx_triagem_sessoes_usuario_id ON public.triagem_sessoes(usuario_id);

