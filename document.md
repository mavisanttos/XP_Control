# Documentação XP Control - Inovacamp XP Inc

## BBG

- <a href="https://www.linkedin.com/in/maria-vit%C3%B3ria-dos-santos/">Maria Vitória</a>
- <a href="https://www.linkedin.com/in/maria-vit%C3%B3ria-dos-santos/">Matheus Ferreira</a>
- <a href="https://www.linkedin.com/in/maria-vit%C3%B3ria-dos-santos/">Paulo Henrique</a>

## Sumário

[1. Introdução e Contexto](#c1)
- [1.1. Contexto e Problema](#contexto)
- [1.2. Persona](#persona)
- [1.3. Objetivo do Projeto](#objetivo)

[2. O Produto e a Didática](#c2)
- [2.1. Jornada de Usuário](#jornada-usuario)
- [2.2. Funcionalidades Chave e Metodologia](#funcionalidades-chave)
    - [2.2.1. Gamificação Bimodal](#funcionalidades-chave)
    - [2.2.2. Metodologia do Jogo (Alocação Estratégica)](#funcionalidades-chave)
- [2.3. Funcionalidades da Interface](#funcionalidades-interface)

[3. Arquitetura e Implementação](#c3)
- [3.1. Arquitetura do Sistema](#arquitetura)
- [3.2. Fluxo e Integrações](#integracoes)
    - [3.2.1. Integração Open Finance e LLM](#integracoes)
- [3.3. Estrutura do Banco de Dados](#db-estrutura)
- [3.4. Estrutura do Frontend](#frontend-estrutura)
- [3.5. Implementação](#implementacao)
- [3.6. Requisitos Não Funcionais](#requisitos-nao-funcionais)

[4. Monetização e Futuro](#c4)
- [4.1. Monetização](#monetizacao)
- [4.2. Próximos Passos](#proximos-passos)

[5. Referências](#c5)

<br>

# <a name="c1"></a>1. Introdução e Contexto

&emsp; Esta seção estabelece o fundamento do projeto XP Control, delineando o contexto crítico que justifica sua criação. O ponto de partida é o cenário de endividamento da Geração Z, um público-alvo de alto potencial, mas que enfrenta desafios inéditos, como o vício em recompensas imediatas e a exposição a novos vetores de risco (como apostas online). Através da definição da Persona e do Objetivo do Projeto, esta documentação demonstra como o XP Control se posiciona não apenas como uma ferramenta de gestão, mas sim como um sistema de intervenção didática e comportamental desenhado para resgatar financeiramente o jovem e engajá-lo ativamente no ecossistema de investimentos da XP Inc.

## <a name="contexto"></a>1.1. Contexto e Problema

&emsp; A Geração Z (jovens entre 18 e 30 anos) representa um desafio paradoxal para o mercado financeiro. Embora sejam nativos digitais e tenham acesso irrestrito à informação, a inadimplência nessa faixa etária é alarmante: 12,5 milhões de jovens estão endividados no Brasil<sup>[1](#c5)</sup>, conforme dados apresentados pela Confederação Nacional de Dirigentes Lojistas (CNDL) e do Serviço de Proteção ao Crédito (SPC Brasil). Este problema não se limita apenas ao uso inadequado do crédito tradicional; ele migrou para novos vetores de risco, como o alto consumo impulsivo em e-commerce e, criticamente, o vício em recompensas imediatas de apostas online (bets).

&emsp; O jovem endividado cai em um ciclo de autoengano: tenta ignorar a dívida e busca "soluções" rápidas, como tentar a sorte ou fazer um novo crédito. A educação financeira tradicional falha ao ser majoritariamente teórica, lenta e desengajadora, não conseguindo competir com o alto nível de dopamina gerado pelas plataformas de jogo ou redes sociais.

&emsp; O XP Control surge para confrontar este problema. A necessidade não é apenas organizar as finanças, mas sim reverter o mindset do risco. É preciso uma solução que utilize os mecanismos de gamificação e feedback imediato para forçar o comportamento estratégico e disciplinado, transformando o impulso do jogo na lógica fria da matemática financeira.

## <a name="persona"></a>1.2. Persona

&emsp; A persona é uma representação semifictícia do nosso usuário-alvo ideal (Geração Z entre 18 e 30 anos), criada a partir da coleta e análise de dados. Ela serve como um guia fundamental para orientar as decisões de design, usabilidade e, principalmente, a didática do produto.

&emsp; A importância da persona Lucas para o projeto reside no fato de que sua espiral de dívida, que começa com o consumo compulsivo e é agravada pela busca por ganhos rápidos em plataformas de aposta, valida diretamente a necessidade dos mecanismos mais inovadores do XP Control. Ao focar na sua dor específica, garantimos que os recursos ofertados sejam não apenas tecnicamente possíveis, mas didaticamente relevantes.

COLOCAR A PERSONA NO TEMPLATE E ESTRUTURAR MELHOR ELA

| Característica       | Detalhe                                                                                                         | Relevância para o Projeto                                                                                                                        |
|----------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Nome**             | Lucas S. Oliveira                                                                                                | "Jovem adulto em formação, vivenciando a pressão social do ambiente universitário."                                                               |
| **Idade**            | 21 anos — Estudante de Engenharia / Estagiário (Renda: R$ 1.800)                                                 | —                                                                                                                                                 |
| **Situação**         | **Dívida total de R$ 8.200**. Começou com R$ 6.000 em compras compulsivas (eletrônicos e vestuário).            | O problema nasce no consumo de status. O sistema deve ajudá-lo a diferenciar desejo de necessidade e parar de fugir dos números.                 |
| **O Ponto de Virada**| Ao ver a fatura crescer, buscou “soluções rápidas” e perdeu **R$ 2.200** em apostas online.                      | Esse comportamento de risco deve ser rastreado pelo sistema (via Open Finance + Jogo 1).                                                          |
| **Comportamento**    | Busca prazer imediato, evita abrir o app do banco, sente vergonha e acredita que “sorte” resolverá seus problemas.| O Assistente Virtual precisa ser proativo. O Jogo 1 transforma o vício em sorte em habilidade estratégica.                                        |
| **Objetivo**         | Quitar dívidas em 12 meses, recuperar a confiança financeira e se tornar um investidor disciplinado usando a XP. | A jornada do **XP Control** deve guiá-lo de endividado → disciplinado → investidor.                                                              |

&emsp; Em suma, a jornada de Lucas justifica a abordagem e a arquitetura de intervenção do XP Control. O projeto deve, portanto, canalizar a busca por dopamina e recompensa imediata (que o levou ao risco) para a satisfação de resolver problemas estratégicos, guiando-o rumo à disciplina financeira e à fidelização com a XP Inc.

## <a name="objetivo"></a>1.3. Objetivo do Projeto

# <a name="c2"></a>2. O Produto e a Didática

## <a name="jornada-usuario"></a>2.1. Jornada de Usuário

## <a name="funcionalidades-chave"></a>2.2. Funcionalidades Chave e Metodologia

### <a name="funcionalidades-chave"></a>2.2.1. Gamificação Bimodal

### <a name="funcionalidades-chave"></a>2.2.2. Metodologia do Jogo (Alocação Estratégica)

## <a name="funcionalidades-interface"></a>2.3. Funcionalidades da Interface

# <a name="c3"></a>3. Arquitetura e Implementação

## <a name="arquitetura"></a>3.1. Arquitetura do Sistema

## <a name="integracoes"></a>3.2. Fluxo e Integrações

### <a name="integracoes"></a>3.2.1. Integração Open Finance e LLM

## <a name="db-estrutura"></a>3.3. Estrutura do Banco de Dados

## <a name="frontend-estrutura"></a>3.4. Estrutura do Frontend

## <a name="implementacao"></a>3.5. Implementação

## <a name="requisitos-nao-funcionais"></a>3.6. Requisitos Não Funcionais

# <a name="c4"></a>4. Viabilidade e Futuro

## <a name="monetizacao"></a>4.1. Viabilidade Econômica

## <a name="proximos-passos"></a>4.2. Próximos Passos

# <a name="c5"></a>5. Referências

[1] G1. *Educação financeira: número de jovens inadimplentes no Brasil é preocupante*. Santarém, 18 nov. 2022. Disponível em: <https://g1.globo.com/pa/santarem-regiao/noticia/2022/11/18/educacao-financeira-numero-de-jovens-inadiplentes-no-brasil-e-preocupante.ghtml>. Acesso em: 22 nov. 2025.</a>
