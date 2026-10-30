/* =============================================================================
   ANÁLISE DE INCIDÊNCIA — 9 PROVAS ANTIGAS (Cesgranrio) 2010–2023
   Engenharia Química / Processamento — Petrobras + Transpetro
   -----------------------------------------------------------------------------
   Provas tabuladas (apenas CONHECIMENTOS ESPECÍFICOS = 50 questões cada):

     PETROBRAS
       2010 — Eng. Júnior Processamento  (PSP RH 2/2010)
       2011 — Eng. Júnior Processamento
       2012 — Eng. Júnior Processamento  (PSP RH 1/2012)
       2014 — Eng. Júnior Processamento  (2014.2)
       2018 — Eng. Júnior Processamento  (2018.1)

     TRANSPETRO  ← PRIORIDADE (é a sua banca)
       2011 — Eng. Júnior Processamento  (PSP RH 3/2011)
       2012 — Eng. Júnior Processamento  (PSP RH 2/2012)
       2018 — Eng. Júnior Proc. Químico  (2018.1)
       2023 — Engenharia Química         (Terra Nível Superior 2023.2)  ← a mais parecida com a sua

   A prova de 2023 (Transpetro Eng. Química) é o melhor espelho do que vem em
   06/12/2026, porque é a mesma ênfase. As provas da Petrobras servem para
   ENTENDER A CESGRANRIO (estilo, pegadinhas, nível de cálculo).
============================================================================= */

// Assuntos (chave) alinhados às matérias do edital verticalizado
const ASSUNTOS = {
  balancos:   "Balanços de Massa e Energia / Princípios Básicos",
  termo:      "Termodinâmica",
  opunit:     "Operações Unitárias (destilação/absorção/extração)",
  fluidos:    "Mecânica dos Fluidos / Escoamento",
  calor:      "Transferência de Calor",
  cinetica:   "Cinética e Reatores",
  controle:   "Controle de Processos",
  quimica:    "Química (geral/orgânica/analítica/físico-química/corrosão)"
};

// Nº de questões por assunto em cada prova (específicas). As provas de 2011–2023
// têm 50 específicas; a Petrobras 2010 foi só de específicas (70 questões).
// banca: "TP" = Transpetro, "PB" = Petrobras. prioridade: Transpetro.
// VALORES REAIS tabulados a partir do banco de 470 questões transcritas (dados-questoes.js)
const INCIDENCIA = [
  // PETROBRAS
  { ano: 2010, banca: "PB", balancos: 7,  termo: 12, opunit: 14, fluidos: 16, calor: 12, cinetica: 1, controle: 8, quimica: 0 },
  { ano: 2011, banca: "PB", balancos: 8,  termo: 10, opunit: 11, fluidos: 6,  calor: 7,  cinetica: 3, controle: 5, quimica: 0 },
  { ano: 2012, banca: "PB", balancos: 9,  termo: 10, opunit: 11, fluidos: 5,  calor: 7,  cinetica: 3, controle: 5, quimica: 0 },
  { ano: 2014, banca: "PB", balancos: 10, termo: 10, opunit: 9,  fluidos: 6,  calor: 7,  cinetica: 3, controle: 5, quimica: 0 },
  { ano: 2018, banca: "PB", balancos: 8,  termo: 13, opunit: 9,  fluidos: 6,  calor: 6,  cinetica: 3, controle: 5, quimica: 0 },
  // TRANSPETRO
  { ano: 2011, banca: "TP", balancos: 9,  termo: 16, opunit: 5,  fluidos: 10, calor: 5,  cinetica: 0, controle: 5, quimica: 0 },
  { ano: 2012, banca: "TP", balancos: 20, termo: 6,  opunit: 7,  fluidos: 9,  calor: 3,  cinetica: 0, controle: 5, quimica: 0 },
  { ano: 2018, banca: "TP", balancos: 6,  termo: 16, opunit: 3,  fluidos: 8,  calor: 5,  cinetica: 5, controle: 6, quimica: 1 },
  { ano: 2023, banca: "TP", balancos: 11, termo: 6,  opunit: 12, fluidos: 5,  calor: 5,  cinetica: 2, controle: 1, quimica: 8 }
];

// Totais agregados (9 provas × 50 = 450 questões específicas no total)
function totaisPorAssunto(filtroBanca){
  const t = {};
  Object.keys(ASSUNTOS).forEach(k => t[k] = 0);
  INCIDENCIA
    .filter(p => !filtroBanca || p.banca === filtroBanca)
    .forEach(p => Object.keys(ASSUNTOS).forEach(k => t[k] += (p[k] || 0)));
  return t;
}
function nProvas(filtroBanca){
  return INCIDENCIA.filter(p => !filtroBanca || p.banca === filtroBanca).length;
}

/* -----------------------------------------------------------------------------
   ANÁLISE NINJA POR MATÉRIA — "como caiu desde 2010 e o que esperar em 2026"
   Um bloco por assunto. nivel = prioridade de estudo (1 a 5).
----------------------------------------------------------------------------- */
const ANALISE_MATERIA = [
  {
    chave: "balancos", nivel: 5,
    titulo: "Balanços de Massa e Energia",
    historia: "O assunto mais constante das 9 provas (média ~10/50). A Transpetro 2012 foi um caso extremo: ~20 das 50 questões só de balanços. A Petrobras mantém 8–11 por prova de forma muito estável. Em 2023 (sua ênfase) voltou com força (~12).",
    comoCai: "Quase sempre com RECICLO + PURGA e distinção entre conversão GLOBAL x POR PASSE. Clássicos recorrentes: síntese de benzeno (tolueno+H2), transesterificação (biodiesel), absorção de H2S por amina (DEA), FCC com reciclo de óleo pesado, torre de resfriamento (make-up/evaporação), combustão com ar em excesso.",
    ninja: "É o MELHOR custo-benefício de todos: técnica repetitiva, alta incidência, baixa variação. Monte um 'passo a passo' seu (define sistema → base de cálculo → corte de reciclo/purga → equações independentes) e aplique igual sempre. Se você automatizar balanços, garante ~10 questões em qualquer prova.",
    pbVsTp: "Petrobras: enunciados mais longos, mais 'texto de processo'. Transpetro: tende a dar o fluxograma pronto e pedir a vazão de uma corrente específica."
  },
  {
    chave: "termo", nivel: 5,
    titulo: "Termodinâmica",
    historia: "Segundo pilar e o campeão nas provas da Transpetro de 2011 (~15) e 2018 (~13). A Petrobras fica em 8–12. Em 2023 caiu para ~8, mas segue pesado. Praticamente impossível zerar Termo numa prova Cesgranrio.",
    comoCai: "Ciclos (Carnot, Rankine, refrigeração) lidos no diagrama T-S; relações de Maxwell (deduzir/identificar a verdadeira); equações de estado (Van der Waals — unidades de a e b, ponto crítico); fator Z; Joule-Thomson/estrangulamento; 1ª e 2ª Leis (sinais de ΔH e ΔS); equilíbrio ΔG=−RT·lnK.",
    ninja: "As fórmulas (Maxwell, Clausius-Clapeyron) costumam VIR no enunciado — o ponto é aplicar rápido e sem erro de sinal/unidade. Decore a geometria dos ciclos no T-S (onde é isentrópico, onde é isobárico) e as 4 relações de Maxwell pela 'regra dos quadrados'. Carnot e COP aparecem quase todo ano.",
    pbVsTp: "Transpetro ama ciclos e Maxwell. Petrobras explora mais equilíbrio químico e propriedades de fluidos reais (Z, estados correspondentes)."
  },
  {
    chave: "opunit", nivel: 5,
    titulo: "Operações Unitárias (Destilação, Absorção, Extração)",
    historia: "Sempre presente (7–12 por prova) e em ALTA na sua ênfase: a Transpetro 2023 (Eng. Química) trouxe ~12. Tendência de peso alto em 2026.",
    comoCai: "Destilação: McCabe-Thiele (nº de estágios), refluxo mínimo x total (significado físico), Fenske (Nmín) / Underwood (Rmín), pratos x recheios, weeping/inundação. Absorção: y=m·x, NTU, HETP/HTU. Extração: diagrama triangular, ponto de mistura M. Ponto de bolha/orvalho por Raoult.",
    ninja: "Treine LER o gráfico x-y do McCabe-Thiele (refluxo mínimo = ponto de pinch na curva de equilíbrio). Memorize HETP = altura/estágios e NTU vs HTU. Extração quase sempre vem com diagrama triangular — pratique localizar o ponto M por regra da alavanca.",
    pbVsTp: "Transpetro 2023 foi forte em conceitual (significado de refluxo mínimo/total, escolha prato x recheio). Petrobras cobra mais cálculo de estágios e absorção."
  },
  {
    chave: "fluidos", nivel: 5,
    titulo: "Mecânica dos Fluidos / Escoamento",
    historia: "Presença GARANTIDA em todas as 9 provas (6–11 questões). Transpetro 2011 teve ~11. É base e não falha nunca.",
    comoCai: "Bernoulli (hipótese: incompressível), Reynolds (laminar x turbulento), fator de atrito (laminar f=64/Re), perda de carga + comprimento equivalente, bombas (curva, ponto de operação, série/paralelo), NPSH/cavitação, manômetro em U, Venturi/Pitot/placa de orifício, análise dimensional (Teorema Pi), reologia (pseudoplástico/dilatante/Bingham).",
    ninja: "f=64/Re é pedido quase todo ano — é ponto de graça, não erre. Entenda cavitação como fenômeno (pressão < pressão de vapor → NPSH disp < req). Para Venturi, decore que a vazão sai da queda de pressão via Bernoulli + continuidade. Reologia: classifique a curva tensão x taxa de cisalhamento.",
    pbVsTp: "Equilibrado entre as duas. Transpetro gosta de bombas/NPSH (contexto de oleoduto/terminal); Petrobras explora mais análise dimensional e escoamento compressível."
  },
  {
    chave: "calor", nivel: 4,
    titulo: "Transferência de Calor",
    historia: "O assunto mais ESTÁVEL de todos: 5 a 7 questões em TODAS as provas. Zero surpresa. Pontos quase garantidos para quem domina o básico.",
    comoCai: "Parede composta (resistências térmicas em série), coeficiente global U, trocadores (correntes paralelas x contracorrente), MLDT + fator de correção, método ε-NTU, radiação (Stefan-Boltzmann, ∝T⁴), números de Nusselt/Prandtl/Biot, resistência de depósito (fouling).",
    ninja: "Trate condução como circuito elétrico (R em série). Decore a MLDT e saiba quando usar ε-NTU (quando falta uma temperatura de saída). Radiação cai pela Stefan-Boltzmann com emissividade. Como a variação é baixíssima, é a matéria com melhor relação 'esforço → acerto garantido'.",
    pbVsTp: "Praticamente idêntico nas duas bancas. Previsível."
  },
  {
    chave: "cinetica", nivel: 4,
    titulo: "Cinética Química e Reatores",
    historia: "Forte na Petrobras (3–5 por prova, todos os anos). Na Transpetro oscila: ausente em 2011/2012, presente em 2018 (~4) e 2023 (~2). Como sua ênfase é Química, espere que apareça.",
    comoCai: "Lei de Arrhenius (Ea pelo gráfico ln k vs 1/T), ordem de reação, tempo espacial τ, projeto de CSTR (V=FA0·X/(−rA)), PFR (integral de dX/(−rA)), reatores em série (área sob a curva 1/(−rA) vs X), catálise/fotocatálise (determinar lei de velocidade).",
    ninja: "Projeto de reator é padrão: CSTR = retângulo, PFR = área sob a curva no gráfico 1/(−rA) vs X. Arrhenius quase sempre vem como gráfico — a inclinação é −Ea/R. Treine extrair Ea de dois pontos (k1,T1)/(k2,T2).",
    pbVsTp: "Petrobras cobra cálculo de volume de reator com tabela. Transpetro 2023 trouxe reatores em série e fotocatálise (lado 'químico')."
  },
  {
    chave: "controle", nivel: 3,
    titulo: "Controle de Processos e Instrumentação",
    historia: "ATENÇÃO à virada: forte em 2010–2018 (3–6 por prova), mas na Transpetro 2023 (Eng. Química) praticamente NÃO apareceu. Como a sua é Eng. Química, o peso provável é menor — mas a Petrobras ainda cobra.",
    comoCai: "Função de transferência / Laplace, sistema de 1ª ordem (τ, resposta ao degrau), 2ª ordem (overshoot, ξ, tp, ts), controladores P/PI/PID e offset, diagrama de Bode (RA, ângulo de fase, ganho crítico Kc), estabilidade, malha aberta x fechada.",
    ninja: "Garanta o ESSENCIAL (1ª ordem resposta ao degrau; o que é offset; para que serve a ação integral) e não invista horas em Bode avançado — o retorno é baixo na sua ênfase. Priorize os 5 pilares acima deste assunto.",
    pbVsTp: "Transpetro de Eng. Química tende a cobrar POUCO (2023 ~0). Petrobras cobra mais firme (3–4/prova)."
  },
  {
    chave: "quimica", nivel: 3,
    titulo: "Química (Geral, Orgânica, Analítica, Físico-Química, Corrosão)",
    historia: "O grande DIFERENCIAL da sua ênfase. Baixo nas provas de Processamento (~2), mas EXPLODE quando a prova é 'Engenharia Química': a Transpetro 2023 trouxe eletroquímica, equilíbrio/solubilidade, corrosão, cinética química e análise instrumental.",
    comoCai: "Eletroquímica (Kps via diferença de potencial de célula), equilíbrio iônico/solubilidade, deslocamento de equilíbrio (Le Chatelier), corrosão (inibidores, proteção catódica/anódica, anodo de sacrifício), química orgânica (funções/reações), análise instrumental (UV-Vis, absorção atômica, cromatografia).",
    ninja: "Este é o assunto que te DIFERENCIA de quem veio de Processamento puro. Reforce o Anexo IV de Química: eletroquímica (Nernst/Kps), corrosão (muito relevante no contexto de petróleo/água do mar) e análise instrumental. Pode ser o que decide o seu ranking.",
    pbVsTp: "Só pesa de verdade nas provas de ênfase Química (como a Transpetro 2023 — o seu espelho). Nas de Processamento é marginal."
  }
];

/* -----------------------------------------------------------------------------
   PADRÕES DA BANCA (CESGRANRIO) — leitura transversal das 9 provas.
----------------------------------------------------------------------------- */
const PADROES_BANCA = [
  {
    titulo: "A prova de 2023 é o seu espelho — estude-a por último e com lupa",
    txt: "Entre as 9, a Transpetro 2023 (Engenharia Química) é a MAIS parecida com 06/12/2026: mesma ênfase, mesma banca, mais recente. Op. Unitárias e Balanços pesados, Química entrando forte, Controle sumindo. Use as provas da Petrobras para treinar estilo; use a 2023 para calibrar o que REALMENTE vem."
  },
  {
    titulo: "Os 4 pilares somam ~70% da prova",
    txt: "Em média nas 9 provas: Balanços (~10) + Termo (~10) + Op. Unitárias (~8) + Fluidos (~8) = ~36 das 50 questões. Dominar esses quatro já coloca você com folga acima do corte. Calor (~6) é o 5º pilar, estável e barato de garantir."
  },
  {
    titulo: "Balanço com reciclo/purga é o tema nº 1 de incidência",
    txt: "Aparece em todas as 9 provas; na Transpetro 2012 foram ~20/50. Técnica repetitiva (conversão global x por passe, reagente limitante, corte de reciclo). O melhor investimento isolado de estudo."
  },
  {
    titulo: "Controle encolhe nas provas de Engenharia Química",
    txt: "Forte em 2010–2018 (3–6 questões), mas ~0 na Transpetro 2023. Como sua ênfase é Química, não gaste horas em Bode avançado: garanta o básico e realoque o tempo para Química e Op. Unitárias."
  },
  {
    titulo: "Química é o seu fator de desempate",
    txt: "A Transpetro 2023 trouxe eletroquímica (Kps via potencial), equilíbrio/solubilidade, corrosão e análise instrumental. Quem vem de Processamento costuma ser fraco nisso. Reforçar Química pode te colocar à frente no ranking."
  },
  {
    titulo: "Estilo Cesgranrio: metade conta direta, metade pegadinha conceitual",
    txt: "Uma parte é aplicar fórmula com os dados do enunciado; a outra é conceitual com alternativas 'quase certas'. Treine LER o enunciado inteiro — os dados vêm em caixas e a UNIDADE pedida engana (kJ? W? kmol/h?)."
  },
  {
    titulo: "Fórmulas e tabelas vêm no enunciado",
    txt: "Maxwell, Arrhenius, projeto de reator, pressão de vapor, tabela de vapor d'água — a banca costuma FORNECER. O ponto não é decorar, é aplicar rápido e sem erro de unidade."
  },
  {
    titulo: "AGORA Português e Inglês CONTAM no ranking (2026.4)",
    txt: "Mudança crítica: nesta edição as 10 de Português e as 10 de Inglês são CLASSIFICATÓRIAS (somam pontos), além de eliminatórias (<50% ou zero elimina). Como você ainda não estudou essas duas, elas viraram oportunidade de ganhar colocação barata — Cesgranrio é padronizada e treinável. Veja a aba Cronograma."
  }
];

/* -----------------------------------------------------------------------------
   PORTUGUÊS & INGLÊS — trilha do zero (classificatórias em 2026.4)
   O que a Cesgranrio MAIS cobra, para quem está começando essas matérias.
----------------------------------------------------------------------------- */
const TRILHA_GERAIS = {
  portugues: {
    titulo: "Português — padrão Cesgranrio (10 questões, agora classificatórias)",
    oqueCai: [
      "Interpretação de texto é a MAIORIA (ideia principal, inferência, propósito do autor, sentido de palavra no contexto).",
      "Coesão e coesão referencial (a que termo 'isso/lhe/o qual' se refere).",
      "Pontuação — principalmente a vírgula (isolar aposto, oração adjetiva explicativa, adjunto deslocado).",
      "Concordância verbal e nominal (casos clássicos: sujeito posposto, 'haver' impessoal, 'fazer' tempo).",
      "Regência verbal/nominal + crase (consequência direta da regência).",
      "Colocação pronominal (próclise por palavra atrativa; ênclise/mesóclise).",
      "Significação: sinônimo/antônimo e sentido conotativo x denotativo."
    ],
    comoEstudar: "Como você parte do zero: 70% do tempo em INTERPRETAÇÃO (é o que mais cai e dá mais ponto) resolvendo questões Cesgranrio comentadas, e 30% nas regras objetivas (vírgula, crase, concordância) que são 'decoráveis'. Faça 10 questões/dia e releia os comentários dos erros.",
    pontoDeGraca: "Vírgula, crase e concordância seguem regras fixas — são pontos 'de graça' se você treinar o padrão da banca. Não deixe NENHUMA em branco (zerar Português ELIMINA)."
  },
  ingles: {
    titulo: "Inglês — padrão Cesgranrio (10 questões, agora classificatórias)",
    oqueCai: [
      "Compreensão de TEXTO técnico (a prova é toda baseada em 1–2 textos): ideia principal e propósito.",
      "Referência pronominal (this/that/it/which → a que se refere no texto).",
      "Conectivos e seus sentidos: however/nevertheless (contraste), so/thus/therefore (consequência), such as (exemplo), in order to (finalidade), while (contraste/tempo).",
      "Vocabulário em contexto: sinônimo/antônimo de uma palavra sublinhada.",
      "Inferência e conclusão (o que PODE ser concluído do texto).",
      "Gramática pontual: modais (can/must/may/should), voz passiva, comparativos/superlativos."
    ],
    comoEstudar: "Não precisa ser fluente: a prova testa LEITURA, não conversação. Treine skimming (ler rápido pela ideia geral) e scanning (achar a informação específica). Foque em: mapear referência pronominal, reconhecer conectivos e deduzir vocabulário pelo contexto. 1 texto Cesgranrio comentado por dia resolve muito.",
    pontoDeGraca: "Conectivos e referência pronominal são MUITO padronizados na Cesgranrio — treináveis em poucos dias. Não zere Inglês (zerar ELIMINA) e lembre: agora cada acerto ainda SOMA no ranking."
  }
};

/* -----------------------------------------------------------------------------
   AMOSTRA DE QUESTÕES REAIS (p/ treino dirigido) extraídas das 9 provas.
   type: 'calc' (cálculo) ou 'conc' (conceitual). banca: PB/TP.
----------------------------------------------------------------------------- */
const QUESTOES = [
  // ---- BALANÇOS ----
  { ano:2010, banca:"PB", assunto:"balancos", type:"calc", t:"Combustão de gás natural com excesso de ar: calcular a composição dos gases de combustão (base seca) e o % de excesso." },
  { ano:2012, banca:"PB", assunto:"balancos", type:"calc", t:"Reator + separador com reciclo: conversão global de A dada a conversão por passe e a recuperação no separador." },
  { ano:2014, banca:"PB", assunto:"balancos", type:"calc", t:"Secagem de sólido (base úmida → base seca): água evaporada por kg de produto final." },
  { ano:2012, banca:"TP", assunto:"balancos", type:"calc", t:"Produção de benzeno a partir de tolueno com reciclo e purga: vazão de H2 na purga p/ 150 kmol/h de benzeno (H2/tolueno=5, metano 0,20, conversão por passe 75%)." },
  { ano:2012, banca:"TP", assunto:"balancos", type:"calc", t:"Transesterificação (300 kmol triglicerídeo + 1200 kmol álcool): reagente em excesso ao final com conversão 100% do limitante." },
  { ano:2012, banca:"TP", assunto:"balancos", type:"calc", t:"Absorção de H2S por DEA (gás 3 t/h com 15% H2S; solvente 2 t/h): fração mássica de H2S no líquido efluente." },
  { ano:2012, banca:"TP", assunto:"balancos", type:"calc", t:"Torre de resfriamento: reposição máxima (make-up) considerando resfriamento só por evaporação." },
  { ano:2023, banca:"TP", assunto:"balancos", type:"calc", t:"Conversão global de A em sistema reator+separador com reciclo (conversão por passe 40%, recuperação 0,5)." },
  { ano:2023, banca:"TP", assunto:"balancos", type:"calc", t:"FCC com reciclo de 40% do óleo pesado não convertido: conversão global de óleo pesado." },

  // ---- TERMODINÂMICA ----
  { ano:2010, banca:"PB", assunto:"termo", type:"calc", t:"Ciclo de Rankine: eficiência térmica a partir das entalpias dos pontos (tabela de vapor fornecida)." },
  { ano:2011, banca:"PB", assunto:"termo", type:"conc", t:"Fator de compressibilidade Z e estados correspondentes: interpretação do desvio da idealidade." },
  { ano:2014, banca:"PB", assunto:"termo", type:"calc", t:"Equilíbrio químico: Kp a partir de ΔG e temperatura (ΔG = −RT ln Kp)." },
  { ano:2018, banca:"PB", assunto:"termo", type:"calc", t:"Compressão isentrópica de gás: trabalho do compressor (processo adiabático reversível)." },
  { ano:2011, banca:"TP", assunto:"termo", type:"conc", t:"Expansão adiabática e reversível em turbina: sinais de ΔH e ΔS (ΔH<0, ΔS=0)." },
  { ano:2011, banca:"TP", assunto:"termo", type:"calc", t:"Máquina de Carnot absorve 2,0 kJ a 350°C e rejeita a 40°C: trabalho realizado." },
  { ano:2011, banca:"TP", assunto:"termo", type:"conc", t:"Relação de Maxwell a partir de dU = TdS − PdV." },
  { ano:2018, banca:"TP", assunto:"termo", type:"calc", t:"Ciclo de refrigeração a ar: coeficiente de eficácia dado o diagrama/temperaturas." },
  { ano:2018, banca:"TP", assunto:"termo", type:"conc", t:"Energia de Gibbs: ΔG a partir de Kp e pressões parciais (SO2→SO3 a 960K, Kp=10)." },
  { ano:2023, banca:"TP", assunto:"termo", type:"conc", t:"Relações de Maxwell: identificar qual(is) é(são) verdadeira(s)." },
  { ano:2023, banca:"TP", assunto:"termo", type:"conc", t:"Van der Waals: unidades SI das constantes a e b." },

  // ---- OPERAÇÕES UNITÁRIAS ----
  { ano:2010, banca:"PB", assunto:"opunit", type:"calc", t:"Destilação McCabe-Thiele: nº de estágios teóricos a partir do diagrama x-y e da razão de refluxo." },
  { ano:2014, banca:"PB", assunto:"opunit", type:"conc", t:"Destilação multicomponente: papel dos métodos de Fenske (Nmín) e Underwood (Rmín)." },
  { ano:2018, banca:"PB", assunto:"opunit", type:"calc", t:"Absorção gás-líquido: NTU/HTU para atingir a recuperação especificada." },
  { ano:2011, banca:"TP", assunto:"opunit", type:"calc", t:"McCabe-Thiele: razão de refluxo externa mínima a partir do gráfico x-y." },
  { ano:2011, banca:"TP", assunto:"opunit", type:"calc", t:"Extração líquido-líquido (ácido acético–água–éter isopropílico): composição do extrato via diagrama triangular." },
  { ano:2011, banca:"TP", assunto:"opunit", type:"calc", t:"Absorção (acetona-ar-água, y=2,53x): composição molar de acetona no produto líquido." },
  { ano:2011, banca:"TP", assunto:"opunit", type:"conc", t:"Gotejamento (weeping) em coluna recheada: causa (velocidade de vapor muito baixa)." },
  { ano:2023, banca:"TP", assunto:"opunit", type:"conc", t:"Refluxo mínimo x total (significado físico; Nmín x N infinito)." },
  { ano:2023, banca:"TP", assunto:"opunit", type:"calc", t:"HETP = altura do recheio / nº de estágios (ou nº de estágios / NTU)." },
  { ano:2023, banca:"TP", assunto:"opunit", type:"conc", t:"Pratos x recheios: critérios de escolha; perda de carga." },

  // ---- MECÂNICA DOS FLUIDOS ----
  { ano:2010, banca:"PB", assunto:"fluidos", type:"calc", t:"Perda de carga em tubulação com acessórios: usar comprimento equivalente e fator de atrito." },
  { ano:2014, banca:"PB", assunto:"fluidos", type:"conc", t:"Análise dimensional (Teorema Pi de Buckingham): nº de grupos adimensionais do problema." },
  { ano:2018, banca:"PB", assunto:"fluidos", type:"calc", t:"NPSH disponível x requerido: vazão limite para não cavitar." },
  { ano:2011, banca:"TP", assunto:"fluidos", type:"conc", t:"Cavitação: afirmativas sobre pressão de vapor, NPSH requerido, aumento de velocidade." },
  { ano:2011, banca:"TP", assunto:"fluidos", type:"calc", t:"Ponto de operação de bomba: interseção da curva da bomba com a do sistema." },
  { ano:2011, banca:"TP", assunto:"fluidos", type:"conc", t:"Reologia: fluido pseudoplástico (viscosidade aparente cai com taxa de cisalhamento)." },
  { ano:2011, banca:"TP", assunto:"fluidos", type:"conc", t:"Bernoulli: hipótese necessária (densidade constante / incompressível)." },
  { ano:2011, banca:"TP", assunto:"fluidos", type:"calc", t:"Manômetro de tubo em U: diferença de pressão p1−p2." },
  { ano:2023, banca:"TP", assunto:"fluidos", type:"conc", t:"Fator de atrito 64/Re → regime laminar." },
  { ano:2023, banca:"TP", assunto:"fluidos", type:"calc", t:"Venturi: vazão volumétrica a partir da queda de pressão (manômetro)." },

  // ---- TRANSFERÊNCIA DE CALOR ----
  { ano:2010, banca:"PB", assunto:"calor", type:"calc", t:"Parede composta plana (3 camadas): fluxo de calor por m² e temperaturas das interfaces." },
  { ano:2014, banca:"PB", assunto:"calor", type:"calc", t:"Trocador contracorrente: área necessária via MLDT e U global." },
  { ano:2011, banca:"TP", assunto:"calor", type:"calc", t:"Parede composta (tubo isolado): taxa de calor com resistências em série + convecção." },
  { ano:2011, banca:"TP", assunto:"calor", type:"conc", t:"Mecanismos de transferência de calor: condução/convecção/radiação (afirmativas)." },
  { ano:2012, banca:"TP", assunto:"calor", type:"calc", t:"Parede de forno (2 camadas): fluxo de calor e temperatura da interface." },
  { ano:2012, banca:"TP", assunto:"calor", type:"calc", t:"Trocador correntes paralelas com resistências de depósito: Q transferido." },
  { ano:2018, banca:"TP", assunto:"calor", type:"calc", t:"Radiação: fluxo emitido por corpo (Stefan-Boltzmann, emissividade 0,8)." },
  { ano:2023, banca:"TP", assunto:"calor", type:"calc", t:"Trocador contracorrente: temperatura de saída e efetividade (ε-NTU)." },

  // ---- CINÉTICA E REATORES ----
  { ano:2010, banca:"PB", assunto:"cinetica", type:"calc", t:"PFR 1ª ordem: volume para atingir a conversão dada (integral de dX/(−rA))." },
  { ano:2014, banca:"PB", assunto:"cinetica", type:"calc", t:"Tempo espacial τ em CSTR para conversão especificada." },
  { ano:2018, banca:"PB", assunto:"cinetica", type:"calc", t:"Energia de ativação via dois pontos (k1,T1)/(k2,T2) — forma integrada de Arrhenius." },
  { ano:2018, banca:"TP", assunto:"cinetica", type:"calc", t:"Energia de ativação via gráfico ln k vs 1/T (Arrhenius)." },
  { ano:2018, banca:"TP", assunto:"cinetica", type:"calc", t:"Volume de CSTR para conversão de 80% usando tabela 1/(−rA)." },
  { ano:2018, banca:"TP", assunto:"cinetica", type:"calc", t:"Volume de PFR para reduzir concentração a 20% (reação elementar 1ª ordem)." },
  { ano:2023, banca:"TP", assunto:"cinetica", type:"calc", t:"Volume total de 2 CSTR em série (curva 1/r vs X) para conversão 80%." },

  // ---- CONTROLE ----
  { ano:2010, banca:"PB", assunto:"controle", type:"conc", t:"Ação integral: efeito sobre o offset (erro estacionário) em malha fechada." },
  { ano:2014, banca:"PB", assunto:"controle", type:"calc", t:"Sistema de 1ª ordem: valor da saída após t = τ para entrada em degrau." },
  { ano:2012, banca:"TP", assunto:"controle", type:"calc", t:"Instrumento de temperatura (1ª ordem, τ=0,5 min): leitura após 0,5 min (degrau 30→70°C)." },
  { ano:2012, banca:"TP", assunto:"controle", type:"conc", t:"Malha aberta x fechada: requisitos de desempenho em regime transitório." },
  { ano:2011, banca:"TP", assunto:"controle", type:"calc", t:"2ª ordem subamortecido: desvio máximo a partir do overshoot (0,6) e ganho (2)." },
  { ano:2011, banca:"TP", assunto:"controle", type:"calc", t:"Diagrama de Bode: ganho crítico Kc para o sistema não oscilar." },
  { ano:2018, banca:"TP", assunto:"controle", type:"conc", t:"Função de transferência de sistema de nível (laminar): Qo(s)/Qi(s)." },

  // ---- QUÍMICA ----
  { ano:2014, banca:"PB", assunto:"quimica", type:"conc", t:"Corrosão: proteção catódica por anodo de sacrifício (qual metal usar)." },
  { ano:2018, banca:"TP", assunto:"quimica", type:"calc", t:"Primeiro Princípio: trabalho e ΔU numa expansão a pressão constante." },
  { ano:2023, banca:"TP", assunto:"quimica", type:"calc", t:"Kps do AgCl a partir de diferença de potencial de célula eletroquímica." },
  { ano:2023, banca:"TP", assunto:"quimica", type:"conc", t:"Formação de HNO3 (endotérmica): como deslocar o equilíbrio para formar mais produto." },
  { ano:2023, banca:"TP", assunto:"quimica", type:"conc", t:"Fotocatálise (C-TiO2): lei de velocidade (1ª ordem em CH3Hg)." },
  { ano:2023, banca:"TP", assunto:"quimica", type:"conc", t:"Inibidores de corrosão por água do mar: qual NÃO é adequado." }
];

/* -----------------------------------------------------------------------------
   AS 9 PROVAS — para o módulo "Refazer Provas" (status por prova).
   status inicial: 'resolvido' | 'proxima' | 'afazer'  (editável no app)
----------------------------------------------------------------------------- */
const PROVAS = [
  { id:"pb2010", ano:2010, banca:"PB", nome:"Petrobras 2010 — Eng. Proc. Jr", obs:"PSP RH 2/2010. Única que você ainda NÃO fez.", statusInicial:"afazer" },
  { id:"pb2011", ano:2011, banca:"PB", nome:"Petrobras 2011 — Eng. Proc. Jr", obs:"Você vai fazer amanhã.", statusInicial:"proxima" },
  { id:"pb2012", ano:2012, banca:"PB", nome:"Petrobras 2012 — Eng. Proc. Jr", obs:"PSP RH 1/2012. Já resolvida.", statusInicial:"resolvido" },
  { id:"pb2014", ano:2014, banca:"PB", nome:"Petrobras 2014 — Eng. Proc. Jr", obs:"Edição 2014.2. Já resolvida.", statusInicial:"resolvido" },
  { id:"pb2018", ano:2018, banca:"PB", nome:"Petrobras 2018 — Eng. Proc. Jr", obs:"Edição 2018.1. Já resolvida.", statusInicial:"resolvido" },
  { id:"tp2011", ano:2011, banca:"TP", nome:"Transpetro 2011 — Eng. Proc. Jr", obs:"PSP RH 3/2011. Já resolvida.", statusInicial:"resolvido" },
  { id:"tp2012", ano:2012, banca:"TP", nome:"Transpetro 2012 — Eng. Proc. Jr", obs:"PSP RH 2/2012. Já resolvida.", statusInicial:"resolvido" },
  { id:"tp2018", ano:2018, banca:"TP", nome:"Transpetro 2018 — Eng. Proc. Químico", obs:"Edição 2018.1. Já resolvida.", statusInicial:"resolvido" },
  { id:"tp2023", ano:2023, banca:"TP", nome:"Transpetro 2023 — ENGENHARIA QUÍMICA ⭐", obs:"Seu espelho: mesma ênfase/banca, a mais recente. Refaça por último.", statusInicial:"resolvido" }
];
