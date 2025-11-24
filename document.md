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

[4. Viabilidade e Futuro](#c4)
- [4.1. Viabilidade Econômica](#monetizacao)
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

<div align="center">
  <sub>Figura 1 - Persona Lucas</sub><br>
  <img src=assets\persona_lucas.png><br>
  <sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

**Biografia** <br>
 &emsp; Lucas é um jovem de 21 anos da cidade de São Paulo e é um nativo digital clássico. Cresceu com a internet na palma da mão e moldou sua visão de mundo através das redes sociais, onde a aparência de sucesso é a moeda de troca social. Ele é estudante de Engenharia em tempo integral e tem uma renda de estagiário de R$ 1.800.

 &emsp; No início da faculdade, começou a vida financeira de forma desorganizada: o primeiro cartão de crédito foi usado para parcelar um telefone e roupas de marca para se enquadrar no grupo. Sem controle, o salário de estagiário logo foi engolido pelas parcelas e pelos juros.

&emsp; Ao ver a fatura crescer descontroladamente, buscou "soluções" rápidas e, influenciado por colegas e influencias digitais, perdeu R$ 2.200 em plataformas de apostas online, agravando sua dívida total de R$ 8.200. Agora, sente vergonha e acredita que a sorte pode resolver seus problemas. O XP Control deve reverter esse mindset de azar para estratégia.

**O Ponto de Virada (A Crise)** <br>
 &emsp; Ao ver a fatura do cartão superar sua renda mensal, Lucas sentiu o pânico. Em vez de cortar gastos, buscou uma "solução mágica". Influenciado por vídeos de "Green" no TikTok, começou a fazer apostas esportivas (Bets) na esperança de dobrar seu dinheiro rápido e quitar a dívida.

 &emsp; O resultado foi catastrófico: perdeu muito dinheiro reservado para despesas básicas e entrou no Cheque Especial. Hoje, vive um ciclo de ansiedade, negação e medo de ser descoberto.


**Dores & Frustrações (O Problema)** <br>
 &emsp; **Negação Financeira:** Sente tanta vergonha e ansiedade que evita abrir o aplicativo do banco. Não sabe exatamente quanto deve, pois tem medo de encarar o número.
 
 &emsp; **Medo Social (Reputação):** Seu maior pesadelo não é a dívida em si, mas a vergonha pública. Teme que o cartão seja recusado em um encontro ou que seus pais descubram o "Nome Sujo".
 
 &emsp; **Tédio com o Tradicional:** Acha planilhas de Excel e vídeos de educação financeira de 40 minutos insuportavelmente chatos e lentos.

**Desejos & Motivações (A Solução Ideal)** <br>
&emsp; **Dopamina Rápida:** Seu cérebro é viciado em recompensas imediatas. Ele precisa sentir que está "ganhando" algo hoje, não daqui a 30 anos.

&emsp; **Redenção Heroica:** Sonha em dar a volta por cima e se tornar o "Investidor de Sucesso" que vê no Instagram. Quer provar que é esperto, apenas estava "jogando o jogo errado".

&emsp; **Agilidade:** Busca uma solução "One-Click". Se for burocrático, ele desiste.

&emsp; A análise profunda da jornada de Lucas Oliveira revela que a educação financeira tradicional falhou com ele não por falta de conteúdo, mas por inadequação de formato. Lucas não precisa de mais informações sobre juros compostos; ele precisa de uma intervenção comportamental que compita com os estímulos de dopamina que o levaram ao endividamento.

&emsp; Em essência, a solução não deve tentar mudar quem Lucas é; ela muda as regras do jogo para que as características naturais de Lucas (competitividade, agilidade e busca por recompensa) joguem a favor do seu patrimônio, e não contra ele.

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

&emsp; Esta seção aprofunda os mecanismos centrais que tornam o XP Control um sistema de intervenção eficaz, indo além da gestão passiva de finanças. A metodologia do projeto é ancorada em duas premissas: impor a disciplina antes de recompensar o ganho e automatizar a estratégia para combater o comportamento impulsivo (como o de Lucas). As funcionalidades chave e a metodologia de jogo são projetadas para criar um ciclo de feedback positivo onde o sucesso nos jogos se traduz diretamente em progresso financeiro real.

### <a name="funcionalidades-chave"></a>2.3.1. Gamificação Bimodal

&emsp; O conceito de Gamificação Bimodal é a funcionalidade mais disruptiva do projeto. Ele se baseia na separação da experiência para impor uma prioridade de aprendizado:

- **Modo Resgate (Jogo 1 Liberado)**: Ativado automaticamente quando o App identifica dívidas críticas. O foco é a estabilização e o resgate financeiro. O Jogo 1 é, na verdade, um hub que contém dois módulos didáticos distintos (Cartas Interativas e Simulador de Estratégia de Resgate), ambos focados na reversão comportamental. O acesso ao Jogo 2 (Investimentos) é bloqueado com um cadeado visível.

- **Modo Investidor (Jogo 2 Liberado)**: Liberado automaticamente (o Victory State) somente após a quitação total das dívidas críticas e a prova da disciplina. Este modo representa o prêmio e a transição do usuário: o foco é direcionado integralmente para a multiplicação e construção de patrimônio, utilizando o Jogo 2 como porta de entrada gamificada para o ecossistema de investimentos da XP Inc.

&emsp; Esta mecânica cria um incentivo não monetário poderoso, transformando a quitação de dívidas de uma obrigação dolorosa em uma missão cujo prêmio é o acesso ao status de investidor.

### <a name="funcionalidades-chave"></a>2.3.2. Metodologia do Jogo (Alocação Estratégica)

&emsp; A metodologia de jogo é o motor didático da plataforma, atuando em dois estágios distintos:

**Módulos do Jogo 1 (Modo Resgate):** Este estágio utiliza a estrutura de Missões Diárias para engajar o usuário continuamente na reversão comportamental:

- Cartas Interativas (Hack de Impulso): Este módulo usa uma mecânica de swipes (arrastar para os lados, similar ao jogo Reigns) para simular decisões financeiras sob pressão. O objetivo é treinar o controle de impulso, forçando o usuário a julgar rapidamente cenários de consumo e alocação. Cada acerto correto gera XP Coins.

- Simulador de Estratégia de Resgate (Alocação Inteligente): Este é o núcleo de matemática financeira. O simulador desafia o usuário a aplicar o conhecimento de priorização de dívidas em cenários baseados em dívidas reais. O Agente de IA fornece o cenário, e o usuário deve alocar o recurso, transformando teorias complexas em ação prática e mensurável.

**Jogo 2 (Modo Investidor): O Simulador de Mercado:** Este módulo é a recompensa final pela disciplina. O Simulador de Mercado simula operações de investimento reais (renda fixa, fundos). Os acertos e estratégias bem-sucedidas neste simulador se convertem em aportes iniciais e reais em produtos de prateleira da XP (CDB, Tesouro), reforçando a ideia de que o lucro é uma consequência da estratégia e não da sorte.

**O Agente de IA:** O Agente Sentinel é um assistente virtual baseado em LLM (Large Language Model) que garante a proatividade da intervenção e elimina a fricção da gestão de dívidas:

- Função Proativa: Monitora o fluxo de caixa em tempo real (via Open Finance) e sugere ações no momento exato (Ex: "Seu pagamento caiu. Sugiro a Estratégia X agora para economizar R$ Y em juros.").

- Geração de Script: É capaz de gerar scripts de negociação personalizados com base no perfil de dívida do usuário, que podem ser copiados e enviados diretamente aos credores via WhatsApp, reduzindo o medo e a procrastinação da negociação.

**O Cofrinho Inteligente (Geração de Custódia):** Esta funcionalidade resolve o problema da reserva de recursos e garante valor para a XP. O Cofrinho é o destino primário para dinheiro poupado para quitação de dívidas externas. Ele automatiza a retenção do dinheiro e, em vez de deixar o saldo parado, aplica o montante em um CDB de liquidez diária da XP. Assim, o usuário começa a gerar custódia e a se familiarizar com os produtos de investimento da XP Inc. antes mesmo de sair do Modo Resgate.

&emsp; As funcionalidades chave do XP Control representam um avanço metodológico, utilizando a Gamificação Bimodal para travar o risco e premiar a disciplina. A integração do Agente de IA com o Open Finance e os módulos de jogo didáticos garantem que a intervenção seja preditiva e altamente personalizada, transformando o ciclo de dívida em um funil eficiente e engajador para a aquisição de clientes qualificados para a XP Inc. O detalhamento visual dessas funcionalidades será abordado na próxima seção.

## <a name="funcionalidades-interface"></a>2.4. Funcionalidades da Interface

&emsp; A interface do XP Control é projetada para ser mais do que um meio de navegação: ela é a máquina de motivação e feedback do usuário. Cada elemento visual, desde as barras de progresso até a exibição de recompensas, é desenhado para reverter a tendência do jovem de ignorar seus números. A interface traduz a complexidade da matemática financeira em um jogo visualmente claro, com foco em três pilares: transparência imediata, recompensa tangível e progresso contínuo.

**Desenvolvimento: Design para Engajamento e Disciplina**

&emsp; As funcionalidades da interface são agrupadas por área de foco, garantindo que o usuário seja continuamente incentivado a avançar no Modo Resgate:

**1. Hub de Comando (Dashboard)**

&emsp; A tela principal é o centro de comando e visibilidade, crucial para quebrar a cegueira financeira.

- Barra de Progresso: Elemento visual fixo que quantifica o progresso da quitação de dívidas, oferecendo uma métrica clara e animadora do caminho percorrido até o Modo Investidor.

- Cards de Status: Exibem de forma proeminente o Saldo Global (visibilidade total) e o saldo de XP Coins, transformando a recompensa virtual em um ativo real e constante.

- Missões Diárias (Ofensiva): Um card dinâmico que lista as tarefas diárias (jogos, quitação), reforçando o conceito de "ofensiva" e incentivando o streak (sequência) de disciplina.

**2. Aba Jogos (Gamificação Visual)**

&emsp; Esta aba transforma a disciplina em performance.

- Métricas de Desempenho: Exibe a Pontuação Total e o número de Jogos Completos (a "ofensiva"), criando um senso de conquista e competição pessoal.

- Bloqueio Bimodal: O Simulador de Mercado (Jogo 2) é apresentado com um ícone de cadeado visível, funcionando como a principal meta aspiracional. Sua liberação é o Victory State, o ápice da jornada.

- Interação Intuitiva: O jogo de Cartas Interativas utiliza a mecânica de swipe (arrastar) para garantir a usabilidade nativa digital, tornando a tomada de decisão financeira rápida e acessível.

- Visualização Estratégica (Simulador): O Simulador de Estratégia de Resgate apresenta visualmente as dívidas e os fluxos de caixa, permitindo que o usuário arraste e aloque o dinheiro para a opção matematicamente mais vantajosa, transformando a matemática complexa em uma interface de alocação estratégica.

- Simulação de Mercado (Jogo 2): Após o desbloqueio, a interface do Jogo 2 apresenta um painel de simulação limpo e intuitivo de ativos (renda fixa e variável). O sistema traduz o sucesso nas operações simuladas em recompensas visuais claras que se materializam em custódia real em CDBs XP, reforçando visualmente a conexão entre estratégia e ganho financeiro de longo prazo.

**3. Aba Dívidas (Transparência e Ação)**

&emsp; A interface aqui é desenhada para converter o diagnóstico em ação prática.

- Diferenciação Visual: A aba separa claramente Dívidas Bancárias de Dívidas Externas, facilitando a estratégia do usuário.

- Cofrinho Integrado: O botão de "Guardar Dinheiro" (que ativa o Cofrinho Inteligente / CDB XP) é exibido ao lado de cada dívida, incentivando a aplicação imediata do recurso.

&emsp; O design da interface do XP Control é um componente metodológico fundamental. Ele usa o reforço positivo (XP Coins, Barras de Progresso) e o incentivo aspiracional (Modo Investidor) para criar um ambiente de alta motivação. Ao transformar números complexos em métricas de jogo simples e engajadoras, a interface garante que o usuário Geração Z permaneça focado na disciplina, acelerando sua conversão de devedor em investidor qualificado para a XP Inc.

# <a name="c3"></a>3. Arquitetura e Implementação

&emsp; Esta seção detalha a arquitetura técnica que será desenvolvida para o XP Control, desde a estrutura do sistema até os requisitos não funcionais. **É importante destacar que esta documentação descreve a arquitetura planejada e as tecnologias que serão implementadas**, não o estado atual do protótipo. O projeto será desenvolvido utilizando tecnologias modernas de desenvolvimento web, com foco em escalabilidade, segurança e performance. A arquitetura seguirá o padrão de aplicação web full-stack, separando claramente as responsabilidades entre frontend, backend e banco de dados.

## <a name="arquitetura"></a>3.1. Arquitetura do Sistema

&emsp; O XP Control adotará uma arquitetura de aplicação web moderna baseada em **Next.js 16** (React 19) com **TypeScript**, utilizando o padrão de **Server-Side Rendering (SSR)** e **Client-Side Rendering (CSR)** conforme necessário. A arquitetura será dividida em três camadas principais:

**1. Camada de Apresentação (Frontend)**
- **Framework**: Next.js 16 com App Router
- **Linguagem**: TypeScript 5
- **Biblioteca UI**: React 19.2.0
- **Estilização**: Tailwind CSS 4.1.9 com variáveis CSS customizadas
- **Componentes**: Radix UI para componentes acessíveis (dialogs, dropdowns, tooltips, etc.)
- **Ícones**: Lucide React
- **Animações**: CSS customizado com keyframes e biblioteca tw-animate-css

**2. Camada de Dados e Autenticação (Backend)**
- **Banco de Dados**: Supabase (PostgreSQL gerenciado)
- **Autenticação**: Supabase Auth (integração nativa com auth.users)
- **API Routes**: Next.js API Routes (serverless functions)
- **ORM/Query Builder**: Supabase Client SDK (@supabase/supabase-js 2.84.0)
- **Validação**: Zod 3.25.76 para validação de schemas TypeScript

**3. Camada de Integrações Externas**
- **Open Finance**: Integração via API externa (preparada para implementação)
- **LLM/Chat Agent**: Preparado para integração com serviços de IA (OpenAI, Anthropic, etc.)
- **Analytics**: Vercel Analytics para monitoramento de uso

**Fluxo de Dados Principal:**

<div align="center">
  <sub>Figura 2 - Fluxo de dados</sub><br>
  <img src=assets\diagrama_simples.png><br>
  <sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>

&emsp; A arquitetura utilizará **Row Level Security (RLS)** do Supabase para garantir que cada usuário acesse apenas seus próprios dados. O sistema implementará triggers automáticos no banco de dados para criar perfis e carteiras automaticamente quando um novo usuário for registrado.

## <a name="integracoes"></a>3.2. Fluxo e Integrações

&emsp; O XP Control integrar-se-á com serviços externos para fornecer funcionalidades críticas de diagnóstico financeiro e assistência inteligente. O fluxo de integração foi projetado para ser seguro, escalável e manter a privacidade dos dados do usuário.

### <a name="integracoes"></a>3.2.1. Integração Open Finance e LLM

**Integração Open Finance:**

&emsp; A integração com Open Finance é fundamental para o diagnóstico automático de dívidas bancárias. O fluxo funcionará da seguinte forma:

1. **Autorização do Usuário**: O usuário é direcionado para a tela de conexão Open Finance (`OpenFinanceScreen`), onde visualiza os termos de uso e benefícios da integração.

2. **OAuth Flow**: O sistema redireciona o usuário para o provedor Open Finance (via API externa), onde ele autoriza o acesso às suas contas bancárias. O token de acesso é armazenado de forma segura no banco de dados (`perfis.open_finance_token`).

3. **Sincronização de Dados**: Após a autorização, o sistema realiza uma sincronização inicial para:
   - Mapear todas as contas bancárias conectadas
   - Identificar dívidas ativas (cartão de crédito, empréstimos, financiamentos)
   - Rastrear transações para identificar padrões de risco (ex: transferências para casas de apostas)
   - Calcular saldo global consolidado

4. **Atualização Contínua**: O sistema pode configurar webhooks ou realizar sincronizações periódicas para manter os dados atualizados, sempre respeitando o token de expiração (`open_finance_expires_at`).

**Integração LLM (Chat Agent):**

&emsp; O Agente de IA do XP Control irá utilizar Large Language Models para fornecer assistência financeira personalizada. A implementação atual prepara a estrutura para integração com provedores como OpenAI ou Anthropic:

1. **Estrutura de Mensagens**: O sistema armazena todas as interações no banco de dados (`chat_agente`), incluindo:
   - Mensagens do usuário
   - Respostas do agente
   - Metadados contextuais (situação financeira, dívidas ativas, progresso)

2. **Contexto Personalizado**: Antes de enviar uma requisição ao LLM, o sistema enriquece o contexto com:
   - Perfil do usuário (nível, XP Coins, saldo)
   - Dívidas ativas e status
   - Histórico de atividades recentes
   - Progresso na jornada de resgate

3. **Ações Sugeridas**: O LLM pode sugerir ações específicas (ex: "Abater a dívida X primeiro", "Criar uma meta de quitação"), que são armazenadas em `acao_sugerida` para possível automação futura.

4. **Triagem Inteligente**: Durante a fase de triagem, o agente conduz uma conversa estruturada para identificar dívidas informais que não aparecem no Open Finance, utilizando técnicas de processamento de linguagem natural para extrair informações relevantes.

**Fluxo de Integração Completo:**

```
Usuário → Login/Signup → Open Finance Connection
  ↓
Supabase Auth → Criação Automática de Perfil
  ↓
Open Finance API → Sincronização de Dados Bancários
  ↓
Triagem (LLM) → Identificação de Dívidas Informais
  ↓
Dashboard → Visualização Consolidada
  ↓
Chat Agent (LLM) → Assistência Contínua
```

## <a name="db-estrutura"></a>3.3. Estrutura do Banco de Dados

&emsp; O banco de dados do XP Control foi projetado no **Supabase (PostgreSQL)** com foco em normalização, performance e segurança. A estrutura é composta por 9 tabelas principais, todas protegidas por Row Level Security (RLS). 


<div align="center">
  <sub>Figura 3 - Diagrama Relacional</sub><br>
  <img src=assets\diagrama_relacional.png><br>
  <sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>


**Tabelas Principais:**

**1. `perfis` (Perfis de Usuário)**
- **Chave Primária**: `id` (UUID, referência direta a `auth.users`)
- **Campos Principais**:
  - Dados pessoais: `nome_completo`, `cpf`, `birth_date`, `avatar_url`
  - Gamificação: `modo_atual` ('resgate' | 'investidor'), `nivel_guardiao`, `pontos_xp`, `progresso_jornada`, `investments_unlocked`
  - Diagnóstico: `renda_mensal`, `divida_total_inicial`, `saldo_global`
  - Open Finance: `open_finance_connected`, `open_finance_token`, `open_finance_expires_at`
- **Relacionamentos**: 1:1 com `carteiras`, 1:N com todas as outras tabelas

**2. `carteiras` (Carteira Digital)**
- **Chave Primária**: `id` (UUID)
- **Campos**: `saldo_cofre`, `rendimento_acumulado`, `xp_coins`
- **Relacionamento**: 1:1 com `perfis` (via `usuario_id`)

**3. `transacoes` (Histórico de Transações)**
- **Tipos**: 'deposito', 'resgate', 'bonus_jogo', 'pagamento_divida', 'income', 'expense', 'reward', 'refund'
- **Campos**: `valor`, `coins`, `descricao`, `categoria`, `open_finance_id`, `is_from_open_finance`
- **Relacionamento**: N:1 com `perfis` e `carteiras`

**4. `dividas` (Gestão de Dívidas)**
- **Campos Principais**:
  - `origem`: 'banco' | 'externa'
  - `valor_original`, `valor_atual`, `paid_value`, `remaining_value`
  - `taxa_juros_mensal`, `prioridade`, `recommended_payment`
  - `status`: 'ativa' | 'em_acordo' | 'liquidada' | 'negociando'
- **Relacionamento**: N:1 com `perfis`

**5. `metas_quitacao` (Cofrinho Inteligente)**
- **Campos**: `nome_meta`, `valor_alvo`, `valor_guardado`, `cdb_rate`, `total_earnings`
- **Status**: 'em_andamento' | 'completa' | 'cancelada'
- **Relacionamento**: N:1 com `perfis` e opcionalmente com `dividas` (via `divida_alvo_id`)

**6. `historico_jogos` (Histórico de Jogos)**
- **Tipos**: 'estrategia_divida', 'mercado_financeiro', 'decisoes_financeiras'
- **Campos**: `score`, `completed`, `recompensa_coins`, `xp_earned`, `feedback_ia`, `game_data` (JSONB)
- **Relacionamento**: N:1 com `perfis`

**7. `chat_agente` (Mensagens do Chat)**
- **Tipos**: 'USER' | 'AGENT' | 'SYSTEM'
- **Campos**: `mensagem_usuario`, `resposta_ia`, `acao_sugerida`, `metadata` (JSONB)
- **Relacionamento**: N:1 com `perfis`

**8. `atividades` (Feed de Atividades)**
- **Tipos**: 'unlock', 'reward', 'debt_reduction', 'level_up', 'achievement', 'payment', 'deposit'
- **Campos**: `titulo`, `descricao`, `metadata` (JSONB)
- **Relacionamento**: N:1 com `perfis`

**9. `triagem_sessoes` (Sessões de Triagem)**
- **Campos**: `respostas` (JSONB), `dividas_identificadas` (JSONB), `recomendacoes` (JSONB), `completed`
- **Relacionamento**: N:1 com `perfis`

**Segurança e Performance:**

- **Row Level Security (RLS)**: Todas as tabelas possuem políticas que garantem que usuários só acessem seus próprios dados (`auth.uid() = usuario_id`)
- **Índices**: Criados em campos frequentemente consultados (`usuario_id`, `status`, `criado_em`, `tipo_jogo`)
- **Triggers**: Função `handle_new_user()` cria automaticamente perfil e carteira quando um usuário é registrado no Auth
- **Constraints**: Validações de tipos (CHECK constraints) garantem integridade dos dados

## <a name="frontend-estrutura"></a>3.4. Estrutura do Frontend

&emsp; O frontend do XP Control segue uma arquitetura modular baseada em componentes React, organizados por responsabilidade e reutilização. A estrutura de pastas reflete a separação entre telas, componentes compartilhados e utilitários.

**Estrutura de Diretórios:**

```
src/
├── app/                    # Next.js App Router
│   ├── api/                # API Routes (serverless)
│   │   ├── users/          # Endpoints de usuários
│   │   ├── debts/          # Endpoints de dívidas
│   │   ├── game-sessions/  # Endpoints de jogos
│   │   └── test-connection/ # Teste de conexão
│   ├── globals.css         # Estilos globais e variáveis CSS
│   ├── layout.tsx          # Layout raiz da aplicação
│   └── page.tsx            # Página principal (gerenciador de telas)
│
├── components/             # Componentes React
│   ├── screens/           # Telas completas da aplicação
│   │   ├── splash-screen.tsx
│   │   ├── login-screen.tsx
│   │   ├── signup-screen.tsx
│   │   ├── open-finance-screen.tsx
│   │   ├── triage-screen.tsx
│   │   ├── dashboard.tsx
│   │   ├── games.tsx
│   │   ├── debts.tsx
│   │   ├── education.tsx
│   │   └── victory-screen.tsx
│   ├── icons/             # Componentes de ícones customizados
│   │   ├── robot-icon.tsx
│   │   └── xp-coin-icon.tsx
│   ├── add-debt-modal.tsx
│   ├── bottom-nav.tsx
│   ├── card-game-screen.tsx
│   ├── chat-agent.tsx
│   ├── deposit-modal.tsx
│   ├── finance-success-modal.tsx
│   ├── navbar.tsx
│   ├── profile-modal.tsx
│   ├── theme-provider.tsx
│   ├── triage-popup.tsx
│   ├── animated-card.tsx
│   └── aurora.tsx
│
├── lib/                   # Utilitários e configurações
│   ├── supabase.ts        # Cliente Supabase
│   ├── database.types.ts  # Tipos TypeScript do banco
│   └── utils.ts           # Funções utilitárias
│
├── public/                # Arquivos estáticos
│   └── [imagens e ícones]
│
└── styles/                # Estilos adicionais
    └── globals.css
```

**Gerenciamento de Estado:**

&emsp; O estado da aplicação é gerenciado principalmente através de **React Hooks** (useState, useEffect) no componente raiz (`page.tsx`). O estado global inclui:

- `currentScreen`: Controla qual tela está sendo exibida
- `userProfile`: Dados do usuário logado (nome, email, nível, XP Coins, saldo, etc.)
- `debtsCovered`: Flag que indica se todas as dívidas foram quitadas
- `showChat`: Controla a visibilidade do chat agent

**Fluxo de Navegação:**

&emsp; A navegação é controlada pelo componente `page.tsx`, que renderiza condicionalmente diferentes telas baseado no estado `currentScreen`. O fluxo segue a jornada do usuário:

```
Splash → Login → Signup → Open Finance → Triage → Dashboard
                                              ↓
                                    [Games | Debts | Education]
                                              ↓
                                         Victory (quando aplicável)
```

**Componentes Principais:**

1. **Screens**: Telas completas que representam diferentes etapas da jornada
2. **Modals**: Componentes modais reutilizáveis para ações específicas
3. **Navigation**: `BottomNav` para navegação entre seções principais
4. **Chat Agent**: Componente flutuante para assistência via IA
5. **Game Components**: Componentes específicos para os jogos gamificados

**Estilização:**

- **Tailwind CSS 4.1.9**: Framework de utilitários CSS para estilização rápida
- **Variáveis CSS**: Sistema de design tokens definido em `globals.css`
- **Tema Escuro**: Aplicação utiliza tema dark por padrão
- **Responsividade**: Design mobile-first com breakpoints para tablets e desktop
- **Animações**: Keyframes customizados para efeitos de glow, pulse e transições

## <a name="implementacao"></a>3.5. Implementação

&emsp; A implementação do XP Control seguirá boas práticas de desenvolvimento moderno, priorizando type-safety, reutilização de código e manutenibilidade. Esta seção detalha as decisões técnicas e padrões que serão implementados.

**Stack Tecnológico:**

- **Runtime**: Node.js (via Next.js)
- **Framework Frontend**: Next.js 16.0.3 com App Router
- **Linguagem**: TypeScript 5
- **UI Library**: React 19.2.0
- **Estilização**: Tailwind CSS 4.1.9
- **Componentes**: Radix UI (acessibilidade)
- **Banco de Dados**: Supabase (PostgreSQL)
- **Autenticação**: Supabase Auth
- **Validação**: Zod 3.25.76
- **Formulários**: React Hook Form 7.60.0
- **Ícones**: Lucide React 0.454.0

**Padrões de Código:**

1. **TypeScript Strict Mode**: Projeto utilizará TypeScript com configuração strict para garantir type-safety
2. **Component Pattern**: Componentes funcionais com hooks, seguindo padrões do React moderno
3. **Separation of Concerns**: Separação clara entre lógica de negócio, apresentação e dados
4. **Reusable Components**: Componentes modulares e reutilizáveis (modals, cards, buttons)
5. **Error Handling**: Tratamento de erros em chamadas de API e operações assíncronas

**Configurações Principais:**

**next.config.mjs:**
- TypeScript errors ignorados durante build (para desenvolvimento)
- Imagens não otimizadas (configurável para produção)

**tsconfig.json:**
- Target: ES6
- Module: ESNext
- JSX: react-jsx
- Path aliases: `@/*` aponta para raiz do projeto

**postcss.config.mjs:**
- Plugin Tailwind CSS para processamento de CSS

**Segurança:**

- **Environment Variables**: Variáveis sensíveis (Supabase keys) armazenadas em `.env.local`
- **RLS Policies**: Row Level Security no banco garante isolamento de dados
- **HTTPS Only**: Aplicação deve ser servida via HTTPS em produção
- **Input Validation**: Validação de dados com Zod antes de inserções no banco

**Performance:**

- **Code Splitting**: Next.js realiza code splitting automático por rota
- **Image Optimization**: Preparado para otimização de imagens (quando habilitado)
- **Lazy Loading**: Componentes carregados sob demanda
- **Database Indexing**: Índices criados em campos frequentemente consultados

**Deploy e DevOps:**

- **Plataforma**: Preparado para deploy na Vercel (otimizado para Next.js)
- **CI/CD**: Estrutura permite integração contínua
- **Analytics**: Vercel Analytics integrado para monitoramento

## <a name="requisitos-nao-funcionais"></a>3.6. Requisitos Não Funcionais

&emsp; Os requisitos não funcionais do XP Control foram definidos para garantir que a aplicação atenda aos padrões de qualidade, segurança e performance necessários para uma plataforma financeira. Esta seção detalha os requisitos técnicos e suas implementações.

**1. Segurança**

- **Autenticação e Autorização**: 
  - Sistema utilizará Supabase Auth com autenticação por email/senha
  - Tokens JWT serão gerenciados automaticamente pelo Supabase
  - Row Level Security (RLS) garantirá que usuários só acessem seus próprios dados
  
- **Proteção de Dados**:
  - Dados sensíveis (tokens Open Finance) armazenados de forma criptografada
  - Comunicação via HTTPS obrigatória em produção
  - Validação de inputs para prevenir SQL injection e XSS
  
- **Conformidade**:
  - Preparado para LGPD (Lei Geral de Proteção de Dados)
  - Termos de uso e política de privacidade serão implementados na tela de Open Finance

**2. Performance**

- **Tempo de Resposta**:
  - API Routes devem responder em menos de 500ms para operações simples
  - Queries ao banco otimizadas com índices apropriados
  - Lazy loading de componentes pesados
  
- **Otimização Frontend**:
  - Code splitting automático pelo Next.js
  - CSS minificado em produção
  - Imagens otimizadas (quando habilitado)
  
- **Escalabilidade**:
  - Arquitetura serverless permite escalonamento automático
  - Banco de dados Supabase oferece escalabilidade horizontal

**3. Usabilidade**

- **Responsividade**:
  - Design mobile-first
  - Suporte para tablets e desktop
  - Interface adaptável a diferentes tamanhos de tela
  
- **Acessibilidade**:
  - Componentes Radix UI seguem padrões WCAG
  - Navegação por teclado suportada
  - Contraste de cores adequado (tema escuro)
  
- **Feedback Visual**:
  - Animações e transições suaves
  - Estados de loading para operações assíncronas
  - Mensagens de erro claras e acionáveis

**4. Confiabilidade**

- **Disponibilidade**:
  - Meta de uptime de 99.9%
  - Deploy em infraestrutura gerenciada (Vercel + Supabase)
  
- **Tolerância a Falhas**:
  - Tratamento de erros em todas as operações assíncronas
  - Fallbacks para quando serviços externos estão indisponíveis
  - Validação de dados antes de persistência
  
- **Backup e Recuperação**:
  - Backups automáticos do Supabase
  - Versionamento de código via Git

**5. Manutenibilidade**

- **Código Limpo**:
  - TypeScript para type-safety
  - Componentes modulares e reutilizáveis
  - Comentários e documentação inline onde necessário
  
- **Testabilidade**:
  - Estrutura permite testes unitários e de integração
  - Separação de lógica facilita mocking
  
- **Versionamento**:
  - Controle de versão via Git
  - Estrutura de branches para desenvolvimento e produção

**6. Compatibilidade**

- **Navegadores**:
  - Suporte para Chrome, Firefox, Safari e Edge (últimas versões)
  - Progressive Web App (PWA) preparado para instalação
  
- **Dispositivos**:
  - Mobile: iOS e Android
  - Tablet: iPad e Android tablets
  - Desktop: Windows, macOS e Linux

**7. Monitoramento e Logging**

- **Analytics**:
  - Vercel Analytics integrado para métricas de uso
  - Tracking de eventos importantes (conexão Open Finance, conclusão de jogos)
  
- **Logging**:
  - Logs de erros para debugging
  - Histórico de atividades do usuário no banco de dados

&emsp; Em resumo, a Seção 3 estabeleceu que o XP Control está sendo arquitetado como uma aplicação web moderna, escalável e segura, utilizando tecnologias de ponta e seguindo boas práticas de desenvolvimento. A estrutura modular, o banco de dados normalizado e as integrações preparadas garantem que a plataforma possa evoluir e escalar conforme a necessidade, mantendo a qualidade e segurança necessárias para uma aplicação financeira.

# <a name="c4"></a>4. Viabilidade e Futuro

&emsp; Após estabelecer o contexto do problema, a solução proposta, a jornada do usuário e a arquitetura técnica, esta seção aborda a viabilidade econômica do XP Control e os próximos passos para sua implementação. A análise de viabilidade demonstra como o projeto não apenas resolve um problema social crítico (o endividamento da Geração Z), mas também gera valor econômico sustentável para a XP Inc através de um modelo de negócio inovador que transforma devedores em investidores qualificados. Esta seção detalha os mecanismos de monetização, a geração de custódia, o potencial de conversão de clientes e o roadmap estratégico para transformar o protótipo em uma plataforma operacional completa.

## <a name="monetizacao"></a>4.1. Viabilidade Econômica

&emsp; A viabilidade econômica do XP Control é fundamentada em um modelo de negócio que alinha valor social com geração de receita sustentável para a XP Inc. Diferente de aplicativos tradicionais de gestão financeira que dependem de assinaturas ou publicidade, o XP Control gera valor através da conversão de usuários endividados em clientes de investimentos qualificados, criando um funil de aquisição de alto valor e longo prazo. O modelo é baseado em três pilares principais: geração de custódia antecipada, conversão qualificada e redução de custos de aquisição.

**Modelo de Negócio: Conversão de Passivo em Ativo**

&emsp; O XP Control opera sob um modelo de negócio que visa transformar um público tradicionalmente visto como de alto risco (jovens endividados) em uma base de clientes qualificados e engajados. O modelo funciona como um funil de conversão em três estágios:

**1. Aquisição e Engajamento (Fase de Resgate)**
- **Custo de Aquisição (CAC) Reduzido**: O XP Control atrai usuários através de uma proposta de valor clara e imediata (resgate financeiro), diferentemente de campanhas tradicionais de investimentos que competem com múltiplos players. A natureza viral da gamificação e o compartilhamento de conquistas podem reduzir significativamente o CAC comparado a métodos tradicionais de marketing digital.
- **Engajamento Contínuo**: A mecânica de gamificação e missões diárias mantém o usuário ativo na plataforma, aumentando a probabilidade de conversão e reduzindo a taxa de churn.

**2. Geração de Custódia Antecipada (Cofrinho Inteligente)**
- **CDB de Liquidez Diária XP**: Durante a fase de resgate, o Cofrinho Inteligente aplica automaticamente os recursos poupados em CDBs de liquidez diária da XP. Este mecanismo gera custódia desde o primeiro depósito, antes mesmo do usuário entrar no Modo Investidor.
- **Projeção de Custódia Inicial**: Considerando que 12,5 milhões de jovens estão endividados no Brasil, mesmo uma captação conservadora de 0,1% desse público (12.500 usuários) com média de R$ 200 em cofrinho resultaria em R$ 2,5 milhões em custódia inicial.
- **Rendimento Acumulado**: O rendimento gerado pelo CDB cria um vínculo financeiro positivo com a XP, aumentando a probabilidade de migração para produtos de maior valor.

**3. Conversão para Produtos de Investimento (Modo Investidor)**
- **Cliente Qualificado**: Usuários que completam a jornada de resgate demonstram disciplina financeira e conhecimento básico de investimentos, tornando-os clientes de alto valor para a XP.
- **Produtos de Investimento**: Após o desbloqueio do Modo Investidor, o usuário está preparado para investir em produtos XP de maior complexidade (ações, fundos, tesouro direto), gerando receita através de taxas de administração e corretagem.
- **Lifetime Value (LTV) Elevado**: Clientes que passam pela jornada de resgate tendem a ter maior fidelidade e maior ticket médio, resultando em LTV significativamente maior que clientes adquiridos por canais tradicionais.

**Fontes de Receita**

&emsp; O XP Control gera receita através de múltiplas fontes, criando um modelo de negócio resiliente e escalável:

**1. Custódia em Produtos XP (Receita Primária)**
- **CDB de Liquidez Diária**: Taxa de administração sobre o montante aplicado no Cofrinho Inteligente.
- **Produtos de Investimento**: Após a conversão para Modo Investidor, receita através de:
  - Taxas de administração em fundos de investimento
  - Taxas de corretagem em operações de ações
  - Spread em operações de tesouro direto
  - Taxas de custódia

**2. Parcerias Estratégicas (Receita Secundária)**
- **Descontos em Negociação de Dívidas**: Parcerias com instituições financeiras para oferecer descontos em quitação de dívidas, onde a XP recebe uma comissão sobre o valor negociado.
- **Programas de Cashback**: Parcerias com fintechs e empresas para oferecer cashback em compras, onde parte do valor é direcionado para o Cofrinho Inteligente.

&emsp; Em conclusão, a viabilidade econômica do XP Control é fundamentada em um modelo de negócio inovador que transforma um problema social (endividamento jovem) em uma oportunidade de negócio sustentável. O projeto gera valor através da conversão qualificada de usuários em clientes de investimentos, criando um funil de aquisição de alto valor e longo prazo. O modelo alinha perfeitamente os objetivos sociais do projeto com a geração de receita para a XP Inc, criando uma solução win-win que beneficia tanto os jovens endividados quanto a empresa.

## <a name="proximos-passos"></a>4.2. Próximos Passos

&emsp; Com a arquitetura do produto e a metodologia didática estabelecidas, os próximos passos visam a execução técnica e a validação do impacto comportamental da Gamificação Bimodal. O plano de trabalho está dividido em três fases estratégicas, focadas em garantir o lançamento de um Produto Mínimo Viável (MVP) robusto, seguido por testes rigorosos e, por fim, a escala dentro do ecossistema XP.

**Desenvolvimento: Roadmap de Implementação e Evolução**

**Fase 1:** Desenvolvimento e Lançamento do MVP (6 Meses)

Esta fase foca na construção das funcionalidades essenciais para intervenção e resgate:

- Integração de Dados: Finalizar a integração estável com o Open Finance para diagnóstico de dívidas e rastreamento de risco (apostas).

- Núcleo Bimodal: Desenvolver o Modo Resgate, o Hub de Comando e o Jogo 1 (Cartas Interativas e Simulador de Estratégia de Resgate).

- Custódia Inicial: Implementar o Cofrinho Inteligente, garantindo a aplicação automática em CDBs XP (liquidez diária) e a geração de custódia desde o início.

- Agente de Intervenção: Desenvolver o módulo básico do Agente Sentinel para sugestões proativas de quitação.

**Fase 2:** Testes Comportamentais e Validação (3 Meses)

O objetivo é provar que a Gamificação Bimodal gera resultados comportamentais superiores:

- Testes A/B: Realizar um piloto com um grupo representativo da Geração Z (perfis de alto risco), comparando o engajamento e a taxa de quitação do XP Control versus abordagens tradicionais de educação financeira.

- Otimização do Jogo: Ajustar a dificuldade, as recompensas (XP Coins) e as regras do Jogo 1 com base no feedback dos usuários e na taxa de adesão às Missões Diárias.

- Validação da Conversão: Monitorar a taxa de clientes que, após a quitação, já possuem custódia ativa (via Cofrinho) e que demonstram interesse na migração para o Jogo 2.

**Fase 3:** Escala e Expansão (Longo Prazo)

Foco na maximização do valor para o usuário e para a XP Inc.:

- Liberação do Jogo 2: Desenvolver e lançar o Simulador de Mercado e o mecanismo de conversão de acertos em aportes reais em renda variável.

- Integração Profunda: Criar deep linking e trilhas personalizadas na tela XP Educação com base no perfil de risco e progresso do usuário.

- Expansão do Agente: Aprimorar o Agente Sentinel para incluir negociações automatizadas mais complexas e sugestões de otimização fiscal.

&emsp; Os próximos passos delineados transformam o XP Control de um conceito inovador em um funil de aquisição de clientes mensurável e de alto impacto. Ao priorizar a intervenção e a disciplina no MVP e garantir que o sucesso do usuário se traduza diretamente em custódia XP, o projeto assegura que a XP Inc. se posicione como a parceira financeira ideal para a Geração Z, redefinindo o caminho para o investimento no Brasil.

# <a name="c5"></a>5. Referências

[1] G1. *Educação financeira: número de jovens inadimplentes no Brasil é preocupante*. Santarém, 18 nov. 2022. Disponível em: <https://g1.globo.com/pa/santarem-regiao/noticia/2022/11/18/educacao-financeira-numero-de-jovens-inadiplentes-no-brasil-e-preocupante.ghtml>. Acesso em: 22 nov. 2025.</a>