# Documentação XP Control - Inovacamp XP Inc

## BBG

- <a href="https://www.linkedin.com/in/maria-vit%C3%B3ria-dos-santos/">Maria Vitória</a>
- <a href="https://www.linkedin.com/in/matheusferreirads-/">Matheus Ferreira</a>
- <a href="https://www.linkedin.com/in/paulo-henrique0601/">Paulo Henrique</a>

## Sumário

[1. Introdução e Contexto](#c1)
- [1.1. Contexto e Problema](#contexto)
- [1.2. Persona e Público-Alvo](#persona)
- [1.3. Objetivo do Projeto](#objetivo)

[2. O Produto e a Didática](#c2)
- [2.1. Solução Proposta](#solucao)
- [2.2. Jornada de Usuário](#jornada-usuario)
- [2.3. Funcionalidades Chave e Metodologia](#funcionalidades-chave)
    - [2.3.1. Gamificação Bimodal](#funcionalidades-chave)
    - [2.3.2. Metodologia do Jogo (Alocação Estratégica)](#funcionalidades-chave)
- [2.4. Funcionalidades da Interface](#funcionalidades-interface)

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

## <a name="persona"></a>1.2. Persona e Público-Alvo

&emsp; A persona é uma representação semifictícia do nosso usuário-alvo ideal: a Geração Z (jovens entre 18 e 30 anos). Este público, altamente exposto ao crédito digital e à cultura de recompensas imediatas, como as apostas (bets), exige uma abordagem de educação financeira que seja igualmente digital, imediata e estratégica. A persona serve como um guia fundamental para orientar as decisões de design, usabilidade e, principalmente, a didática do produto.

&emsp; A importância da persona Lucas reside no fato de que sua espiral de dívida, que começa com o consumo compulsivo e é agravada pela busca por ganhos rápidos em plataformas de aposta, valida diretamente a necessidade dos mecanismos do XP Control. Ao focar na dor específica desse público-alvo, garantimos que os recursos ofertados sejam não apenas tecnicamente possíveis, mas didaticamente relevantes e capazes de gerar a mudança comportamental desejada.

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

&emsp; O objetivo primário do XP Control é reverter o ciclo de endividamento da Geração Z, transformando um passivo de alto risco (como a persona Lucas) em uma base sólida de futuros investidores qualificados. O projeto se posiciona como uma Plataforma de Intervenção Comportamental, desenhada para ser o ponto de virada na jornada financeira do jovem, utilizando a tecnologia para combater a impulsividade e a desorganização.

&emsp; A meta é clara: guiar o usuário da crise à custódia. Para tal, a solução busca cumprir um duplo propósito: primeiro, fornecer ferramentas tecnológicas para um diagnóstico financeiro transparente e imediato; e segundo, aplicar princípios de gamificação para forçar a disciplina e o comportamento estratégico, revertendo o vício em recompensas rápidas para a satisfação do progresso real.

&emsp; Em resumo, a Seção 1 estabeleceu que o problema do endividamento jovem é um desafio comportamental que exige uma solução inovadora que hackeie o sistema de dopamina. Ao definir o Contexto de risco e o perfil vulnerável da Persona Lucas, o XP Control solidifica sua missão de ser a ferramenta didática e tecnológica que guia o jovem da crise à carteira de investimentos. A próxima seção detalhará O Produto e a Didática que materializam estes objetivos, explicando a Jornada de Usuário e a Metodologia de Jogo de forma prática.

# <a name="c2"></a>2. O Produto e a Didática

&emsp; Após estabelecer o contexto da crise e o perfil da persona, esta seção detalha a arquitetura da solução: o XP Control. O projeto se baseia na Gamificação Bimodal, um mecanismo de intervenção didática que divide a experiência do usuário em dois estados (Modo Resgate e Modo Investidor), instruindo-o a disciplina antes de permitir o acesso à multiplicação de patrimônio. Esta seção guiará o leitor através da Jornada de Usuário completa, desde o diagnóstico de crise até a libertação financeira, e aprofundará a Metodologia de Jogo e as Funcionalidades Chave que sustentam o sucesso do cliente e a geração de custódia para a XP Inc.

## <a name="solucao"></a>2.1. Solução Proposta

&emsp; A solução XP Control não é um aplicativo de finanças tradicional, mas sim uma Plataforma de Intervenção Comportamental e Gamificação Bimodal desenvolvida para quebrar o ciclo de dívida da Geração Z. Sua arquitetura foi criada para hackear o comportamento de risco da persona Lucas, transformando o impulso por recompensas imediatas em disciplina estratégica. O sistema atua como um firewall didático, utilizando princípios de nudge (empurrão suave) para guiar o usuário da crise à disciplina, o que se materializa na integração de três pilares estratégicos.

&emsp; A eficácia e a inovação do XP Control são garantidas pela interconexão dos seguintes pilares:

**1. Intervenção Tecnológica e Diagnóstico** <br>
Este pilar foca na atuação rápida para quebrar a negação e o autoengano financeiro. O sistema utiliza a conexão Open Finance para mapear passivos bancários e, crucialmente, identificar padrões de risco, como o fluxo de transferências para casas de apostas. Esse rastreamento é complementado pelo Assistente Virtual Proativo, que conduz uma triagem no chat para registrar dívidas informais (familiares, agiotas, etc.), gerando um diagnóstico real e transparente que serve de base para toda a jornada.

**2. Reversão Comportamental via Gamificação Bimodal** <br>
Este é o núcleo didático da solução, projetado para substituir o vício em sorte pela disciplina estratégica. O XP Control impõe o Modo Resgate para qualquer usuário com dívidas, bloqueando o acesso ao simulador de investimentos (Jogo 2). O engajamento é canalizado para dois módulos gamificados (Jogo 1) que criam uma "ofensiva" de disciplina diária:

- Cartas Interativas (Treinamento de Impulso): Um jogo baseado em swipes (arrastar para os lados, similar ao jogo Reigns) onde o usuário deve tomar decisões financeiras. Este módulo treina o controle de impulso, simulando cenários como "Comprar o eletrônico novo vs. Abater a parcela menor", ensinando o custo real da impulsividade.

- Simulador de Estratégia de Resgate (Alocação Inteligente): Um jogo mais analítico que funciona como um simulador de alocação de recursos. O usuário é desafiado a aplicar métodos matemáticos de priorização de pagamentos em cenários reais de dívidas, traduzindo teoria complexa em ação prática.

Esta barreira didática e a mecânica de recompensa são essenciais para substituir o vício em sorte pela satisfação em resolver problemas estratégicos e obter progresso financeiro real.

**3. Conversão de Valor e Geração de Custódia XP** <br>
Este pilar assegura que a disciplina do usuário se traduza em valor de negócio para a XP Inc. As recompensas conquistadas (XP Coins) são convertidas em descontos para abater dívidas bancárias. O Cofrinho Inteligente é o mecanismo de poupança para qualquer dívida que o usuário decida pagar no futuro (em vez de imediatamente). Contudo, ele é a única opção para dívidas externas, automatizando a retenção de recursos e aplicando o montante em um CDB de liquidez diária da XP. Isso garante que o usuário comece a gerar custódia e fidelidade à XP Inc. desde a fase de resgate.

&emsp; Em conclusão, o XP Control é uma solução que une Fintech e EdTech através de uma arquitetura de intervenção projetada para o perfil da Geração Z. Ao automatizar o diagnóstico, impor a disciplina via gamificação e canalizar os recursos para produtos XP, a plataforma não apenas resgata o usuário da dívida, mas o converte em um cliente qualificado e engajado, gerando valor social e econômico.

## <a name="jornada-usuario"></a>2.2. Jornada de Usuário

&emsp; A Jornada de Usuário no XP Control tem o propósito de garantir que o usuário-alvo (como Lucas) seja guiado de forma coercitiva e didática da negação financeira à disciplina de investimento. O fluxo é essencialmente condicional e reflete o conceito da Gamificação Bimodal: a progressão só é liberada mediante a quitação das dívidas e a demonstração de disciplina, o que garante a conversão de devedores em investidores qualificados para a XP Inc.

**As Quatro Fases da Jornada** <br>
&emsp; A jornada é dividida em duas grandes etapas ditadas pela situação financeira do usuário, com fases específicas de intervenção:

- **Fase 1: Triagem de Dívidas** <br>

Esta é a fase de diagnóstico e intervenção. O usuário realiza a Conexão Open Finance para que o sistema possa mapear passivos e, crucialmente, identificar padrões de alto risco (como o histórico de transações para plataformas de apostas). Imediatamente, o Agente de IA entra em ação, conduzindo a "Triagem de Dívidas" no chat para registrar dívidas externas e informais que não aparecem no banco. O resultado desta fase é a imposição do Modo Resgate.

- **Fase 2: O Hub de Comando** <br>

Uma vez no Modo Resgate, o usuário é direcionado ao Hub de Comando (Dashboard). A interface foca no progresso e no engajamento:

- Métricas: São exibidos o Saldo Global, a barra de progresso e o saldo de XP Coins.
- Disciplina: O sistema incentiva a recorrência através das Missões Diárias, desafios únicos que criam uma "ofensiva" de dias ativos, fundamental para reverter a procrastinação.
- Suporte: O Agente de IA flutuante atua de forma proativa, monitorando o fluxo de caixa em tempo real e sugerindo a melhor alocação estratégica do dinheiro que entra, além de auxiliar o usuário com dúvidas financeiras durante seu processo, seja ele de resgate ou de investimento.

- **Fase 3: Gamificação da Estratégia e Dívidas** <br>

Esta fase é dedicada à ação e ao aprendizado. A Aba Jogos monitora a pontuação total e a ofensiva (dias completos), liberando o acesso a dois jogos didáticos:

- Cartas Interativas: Jogo swipe que treina o controle de impulso através de decisões financeiras rápidas.
- Simulador de Estratégia de Resgate: Jogo analítico que desafia o usuário a aplicar métodos de priorização em suas dívidas reais.

Na Aba Dívidas, a organização é crucial, diferenciando os passivos: dívidas bancárias permitem que o usuário escolha entre o pagamento imediato ou a poupança. Já as dívidas externas (informais) são canalizadas para o Cofrinho Inteligente. O Cofrinho é o mecanismo de reserva da plataforma, aplicando o dinheiro economizado em um CDB XP automático até que o valor de quitação seja atingido, garantindo a geração de custódia desde a fase de resgate.

- **Fase 4: Modo Investimento** <br>

Este é o ponto de conversão e a recompensa máxima pela disciplina: quando a última dívida crítica é paga, o sistema reconhece o esforço e concede o Victory State (estado de vitória). O cadeado da Aba de Investimentos se quebra, liberando o Simulador de Mercado (Jogo 2). Neste momento, a mudança de mentalidade é completa e o foco migra da quitação para a multiplicação. O usuário aprende na prática que é possível ganhar dinheiro de forma estruturada e previsível, contrastando com a ilusão de ganhos rápidos das apostas. Os acertos no simulador se convertem em aportes reais em produtos XP (CDBs/Tesouro), provando que o lucro é uma consequência da estratégia e da paciência. Isso consolida o usuário como um cliente fiel e qualificado da plataforma.

&emsp; Em conclusão, a Jornada de Usuário do XP Control é o motor do projeto, transformando o problema de endividamento em um funil de aquisição de clientes para a XP Inc. Ao impor barreiras comportamentais e recompensar a disciplina com progresso financeiro tangível, o sistema garante que o usuário saia do ciclo de risco com conhecimento e custódia em produtos XP. A próxima seção detalhará as Funcionalidades Chave e a Metodologia que tornam essa jornada tecnicamente viável e didaticamente eficaz.

## <a name="funcionalidades-chave"></a>2.3. Funcionalidades Chave e Metodologia

### <a name="funcionalidades-chave"></a>2.3.1. Gamificação Bimodal

### <a name="funcionalidades-chave"></a>2.3.2. Metodologia do Jogo (Alocação Estratégica)

## <a name="funcionalidades-interface"></a>2.4. Funcionalidades da Interface

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
