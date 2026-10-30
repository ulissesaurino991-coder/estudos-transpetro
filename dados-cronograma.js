/* =============================================================================
   CRONOGRAMA DE RETA FINAL — 31/out → 06/12/2026  (37 dias)
   -----------------------------------------------------------------------------
   Regras da usuária:
     • 2h/dia nos dias úteis (1h30 específicas + 30min Gerais — Port/Inglês do zero)
     • SÁBADOS = SIMULADO cronometrado 4h30 → as 4 provas TRANSPETRO (a sua banca)
     • PETROBRAS = refeitas nos DIAS DE SEMANA (treino de estilo Cesgranrio)
     • DOMINGOS = correção do simulado + reforço de pontos fracos
   Garante os 3 objetivos:
     1) ver 100% dos 99 tópicos do edital (distribuídos dia a dia)
     2) refazer as 9 provas (4 TP sábados + 5 PB dias úteis)
     3) passar por todas as matérias, inclusive Port/Inglês do zero
   -----------------------------------------------------------------------------
   PROVA_DATA é lida pelo app para a contagem regressiva.
============================================================================= */

const PROVA_DATA = "2026-12-06"; // domingo

/* -----------------------------------------------------------------------------
   MAPA DE SIMULADOS (as 9 provas com data sugerida)
   TP = sábados (4h30). PB = dias úteis (encaixe de ~1 prova a cada 5 dias úteis).
----------------------------------------------------------------------------- */
const AGENDA_SIMULADOS = [
  { data:"2026-10-31", dia:"Sáb", prova:"tp2011", nome:"SIMULADO 1 — Transpetro 2011 (4h30 cronometrado)" },
  { data:"2026-11-04", dia:"Qua", prova:"pb2011", nome:"Refazer Petrobras 2011 (dia útil — você faz amanhã)" },
  { data:"2026-11-07", dia:"Sáb", prova:"tp2012", nome:"SIMULADO 2 — Transpetro 2012 (Balanços pesados)" },
  { data:"2026-11-11", dia:"Qua", prova:"pb2010", nome:"Refazer Petrobras 2010 (a ÚNICA que você nunca fez)" },
  { data:"2026-11-14", dia:"Sáb", prova:"tp2018", nome:"SIMULADO 3 — Transpetro 2018 (Proc. Químico)" },
  { data:"2026-11-18", dia:"Qua", prova:"pb2012", nome:"Refazer Petrobras 2012" },
  { data:"2026-11-21", dia:"Sáb", prova:"pb2014", nome:"SIMULADO 4 — Petrobras 2014 (completa 4h30)" },
  { data:"2026-11-25", dia:"Qua", prova:"pb2018", nome:"Refazer Petrobras 2018" },
  { data:"2026-11-30", dia:"Seg", prova:"tp2023", nome:"⭐ SIMULADO ESPELHO — Transpetro 2023 (Eng. Química)" }
];

/* -----------------------------------------------------------------------------
   CRONOGRAMA SEMANAL — dia a dia, com tópicos do edital e simulados encaixados.
   Cada dia útil: ESPECÍFICAS (tópicos por id) + GERAIS (Port/Inglês).
----------------------------------------------------------------------------- */
const CRONOGRAMA = [
  {
    semana: "Semana 1 (31/out–06/nov) — Balanços + arrancada de Termo e Gerais",
    foco: "Pilar nº 1 (Balanços de massa/energia) + começar Termo e Português/Inglês do zero.",
    dias: [
      { dia:"SÁB 31/10", h:"4h30", tipo:"sim", tarefa:"🎯 SIMULADO 1: Transpetro 2011 completa (10 Port + 10 Inglês + 50 específicas), cronometrado." },
      { dia:"DOM 01/11", h:"livre", tipo:"rev", tarefa:"Correção do Simulado 1. Anotar TODO erro no Diário. Reler os 3 tópicos mais fracos." },
      { dia:"Seg 02/11", h:"2h", tarefa:"ESPECÍFICAS: Balanços — frações, base de cálculo, reagente limitante/excesso (tópicos pb-1,pb-2,pb-5). GERAIS: Português — interpretação (5 questões)." },
      { dia:"Ter 03/11", h:"2h", tarefa:"ESPECÍFICAS: Balanços com reciclo/by-pass/purga + conversão global×por passe (pb-6,pb-7). GERAIS: Inglês — 1 texto técnico (ideia principal)." },
      { dia:"Qua 04/11", h:"prova", tipo:"sim", tarefa:"🔁 Refazer PETROBRAS 2011 (dia útil). Foque em Balanços de energia e síntese de metanol com reciclo." },
      { dia:"Qui 05/11", h:"2h", tarefa:"ESPECÍFICAS: Balanço de energia + combustão (ar teórico/excesso, N2/CO2) (pb-8,pb-9). GERAIS: Português — vírgula (regras + 5 questões)." },
      { dia:"Sex 06/11", h:"2h", tarefa:"ESPECÍFICAS: Umidade/saturação + cristalização/secagem/torres de resfriamento (pb-3,pb-10). GERAIS: Inglês — referência pronominal + conectivos." }
    ]
  },
  {
    semana: "Semana 2 (07–13/nov) — Termodinâmica a fundo + Gerais",
    foco: "Pilar nº 2 (Termo): 1ª/2ª Leis, ciclos, Maxwell, equações de estado.",
    dias: [
      { dia:"SÁB 07/11", h:"4h30", tipo:"sim", tarefa:"🎯 SIMULADO 2: Transpetro 2012 completa. É a dos Balanços pesados — ótima para fixar o pilar nº 1." },
      { dia:"DOM 08/11", h:"livre", tipo:"rev", tarefa:"Correção Simulado 2. Reler erros da Semana 1. 10 questões de Português + 1 texto de Inglês." },
      { dia:"Seg 09/11", h:"2h", tarefa:"ESPECÍFICAS: Termo — 1ª/2ª Leis, entropia, adiabático reversível, Joule-Thomson (td-1,td-2,td-10). GERAIS: Inglês — vocabulário em contexto." },
      { dia:"Ter 10/11", h:"2h", tarefa:"ESPECÍFICAS: Ciclos Carnot/Rankine/refrigeração no T-S + COP (td-7,td-8). GERAIS: Português — crase e regência." },
      { dia:"Qua 11/11", h:"prova", tipo:"sim", tarefa:"🔁 Refazer PETROBRAS 2010 (a ÚNICA que você nunca fez). Encare como simulado real, sem gabarito à mão." },
      { dia:"Qui 12/11", h:"2h", tarefa:"ESPECÍFICAS: Maxwell (deduzir) + Van der Waals + fator Z + ponto crítico (td-3,td-4,td-5,td-6). GERAIS: Inglês — inferência (1 texto)." },
      { dia:"Sex 13/11", h:"2h", tarefa:"ESPECÍFICAS: Equilíbrio químico Kp/Kc/ΔG + Clausius-Clapeyron + diagramas PV/TS/Mollier (td-11,td-12,td-9). GERAIS: Português — concordância." }
    ]
  },
  {
    semana: "Semana 3 (14–20/nov) — Operações Unitárias + Fluidos + Gerais",
    foco: "Pilares nº 3 e nº 4 (Op. Unitárias e Mecânica dos Fluidos).",
    dias: [
      { dia:"SÁB 14/11", h:"4h30", tipo:"sim", tarefa:"🎯 SIMULADO 3: Transpetro 2018 (Proc. Químico) completa." },
      { dia:"DOM 15/11", h:"livre", tipo:"rev", tarefa:"Correção Simulado 3. Reler erros das Semanas 1-2. Checar % de cobertura do edital no app." },
      { dia:"Seg 16/11", h:"2h", tarefa:"ESPECÍFICAS: Destilação — bolha/orvalho, flash, McCabe-Thiele (ou-1,ou-2,ou-3). GERAIS: Português — interpretação (5 questões)." },
      { dia:"Ter 17/11", h:"2h", tarefa:"ESPECÍFICAS: Refluxo mín/total, Fenske-Underwood, pratos×recheios/weeping (ou-4,ou-5,ou-7). GERAIS: Inglês — 1 texto completo." },
      { dia:"Qua 18/11", h:"prova", tipo:"sim", tarefa:"🔁 Refazer PETROBRAS 2012. Foque em Op. Unitárias e balanços." },
      { dia:"Qui 19/11", h:"2h", tarefa:"ESPECÍFICAS: Absorção (y=mx, NTU, HETP) + Extração (diagrama triangular) + secagem (ou-6,ou-8,ou-9,ou-10). GERAIS: Português — colocação pronominal." },
      { dia:"Sex 20/11", h:"2h", tarefa:"ESPECÍFICAS: Fluidos — Bernoulli, Reynolds, fator de atrito 64/Re, perda de carga, comprimento equivalente (mf-3,mf-4,mf-5,mf-6). GERAIS: Inglês — conectivos." }
    ]
  },
  {
    semana: "Semana 4 (21–27/nov) — Fechar Fluidos + Calor + Cinética + Gerais",
    foco: "Terminar Fluidos; Pilar nº 5 (Calor) + Cinética/Reatores.",
    dias: [
      { dia:"SÁB 21/11", h:"4h30", tipo:"sim", tarefa:"🎯 SIMULADO 4: Petrobras 2014 completa (treino de tempo e estilo Cesgranrio)." },
      { dia:"DOM 22/11", h:"livre", tipo:"rev", tarefa:"Correção Simulado 4. Revisão espaçada: reler erros de todas as semanas." },
      { dia:"Seg 23/11", h:"2h", tarefa:"ESPECÍFICAS: Fluidos — bombas (curva, ponto de operação), NPSH/cavitação, manômetros, Venturi/Pitot, reologia, análise dimensional (mf-1,mf-2,mf-7,mf-8,mf-9,mf-10). GERAIS: Inglês — modais/voz passiva." },
      { dia:"Ter 24/11", h:"2h", tarefa:"ESPECÍFICAS: Calor — parede composta, U global, trocadores (paralelo×contracorrente), MLDT, ε-NTU (tc-1,tc-2,tc-5,tc-6,tc-7,tc-8). GERAIS: Português — pontuação + significação." },
      { dia:"Qua 25/11", h:"prova", tipo:"sim", tarefa:"🔁 Refazer PETROBRAS 2018. Foque em Termo, Cinética e Controle." },
      { dia:"Qui 26/11", h:"2h", tarefa:"ESPECÍFICAS: Calor — radiação (Stefan-Boltzmann), Nusselt/Prandtl/Biot (tc-3,tc-4,tc-9). GERAIS: Inglês — 1 texto + vocabulário." },
      { dia:"Sex 27/11", h:"2h", tarefa:"ESPECÍFICAS: Cinética/Reatores — Arrhenius (Ea via gráfico), tempo espacial, CSTR/PFR/batelada, projeto de volume (cr-1..cr-9). GERAIS: Português — 10 questões cronometradas." }
    ]
  },
  {
    semana: "Semana 5 (28/nov–06/dez) — Química (diferencial) + Controle + espelho + blindagem",
    foco: "Química (seu fator de desempate), o essencial de Controle, varredura do edital e o ESPELHO 2023.",
    dias: [
      { dia:"SÁB 28/11", h:"4h30", tipo:"sim", tarefa:"SIMULADO de QUÍMICA + Controle: refaça TODAS as questões de química (qu-1..qu-11) e controle das 9 provas no app. É o seu diferencial." },
      { dia:"DOM 29/11", h:"livre", tipo:"rev", tarefa:"VARREDURA do edital: abrir o verticalizado no app e fechar TODO item ainda marcado 'não vi'. Meta: 99/99 tocados." },
      { dia:"Seg 30/11", h:"2h", tipo:"sim", tarefa:"⭐ SIMULADO ESPELHO: Transpetro 2023 (Engenharia Química) — mesma ênfase/banca, a mais parecida com 06/12." },
      { dia:"Ter 01/12", h:"2h", tarefa:"Correção DETALHADA do Simulado 2023. Entenda cada erro — é o retrato mais fiel da sua prova." },
      { dia:"Qua 02/12", h:"2h", tarefa:"Química: eletroquímica/Kps, corrosão (inibidores, proteção catódica), análise instrumental (qu-3,qu-4,qu-8,qu-9). Refazer as químicas da 2023." },
      { dia:"Qui 03/12", h:"2h", tarefa:"Controle (o essencial p/ Eng. Química): função de transferência, 1ª/2ª ordem, offset (co-1,co-2,co-3,co-5). Blindagem de Gerais: 10 Port + 1 texto Inglês." },
      { dia:"Sex 04/12", h:"1h", tarefa:"Revisão leve: folha única de fórmulas-chave (Maxwell, Arrhenius, projeto de reator, Bernoulli, MLDT, 64/Re). Conferir documento + caneta. Nada de assunto novo." },
      { dia:"SÁB 05/12", h:"leve", tarefa:"Descanso ativo: reler o Diário de Erros 1×, 1 texto leve de Inglês. Preparar tudo para amanhã. Dormir cedo." },
      { dia:"DOM 06/12", h:"PROVA", tipo:"prova", tarefa:"🎯 DIA DA PROVA. Chegar 1h antes. Documento oficial com foto. Caneta preta transparente. Leia TODO o enunciado. NÃO zere Português nem Inglês." }
    ]
  }
];

// Táticas de prova (06/12) — do edital, com Gerais classificatórias
const TATICAS_PROVA = [
  "Chegue 1h antes do início (item 8.3.1 do edital).",
  "Leve documento oficial COM FOTO (original) e caneta esferográfica PRETA transparente (item 8.18).",
  "NÃO leve celular ligado, relógio, lápis, borracha, marca-texto — eliminação (item 8.21).",
  "Tempo: 4h30 / 70 questões ≈ 3,8 min por questão. Comece pelas específicas que você domina.",
  "NOVO 2026.4: Português e Inglês agora SOMAM no ranking (classificatórias), além de eliminarem (<50% ou zero).",
  "Blindagem dupla: ≥50% em Específicas E ≥50% em Gerais, e NUNCA zere Português nem Inglês.",
  "Ordem sugerida: específicas fáceis → Gerais (ponto barato) → específicas difíceis. Nunca deixe Gerais para o fim exausta.",
  "Marque o cartão com calma nos 30 min finais; não há substituição por erro seu (item 8.19).",
  "Pegadinha Cesgranrio de unidade: confira o que a questão pede (kJ? W? kmol/h?)."
];
