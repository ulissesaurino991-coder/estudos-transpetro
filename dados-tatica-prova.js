/* =============================================================================
   TÁTICA DE PROVA — como terminar em 4h, sobrar 30min p/ cartão+conferência,
   e acertar mais com atenção. Baseado no desempenho real da usuária (4 provas PB):
     • termina a prova às vezes em 4h (PB2012) mas estourou na PB2011 (8 sem tempo);
     • as 8 sem tempo eram TODAS de cálculo → cálculo custa TEMPO;
     • erra mais conceitual (34%) que cálculo (27%) → conceitual custa PONTO;
     • composição típica: ~27 cálculo + ~23 conceitual por prova.
   Meta da usuária: 70 questões em 4h00 + 30min para cartão e revisão.
============================================================================= */

const META_TEMPO = {
  totalMin: 270,        // 4h30 de prova
  metaResolverMin: 240, // terminar de resolver em 4h
  reservaMin: 30,       // 30min p/ transcrever cartão + conferir
  questoes: 70,
  minPorQuestaoMeta: 3.4 // 240/70
};

// Plano de blocos de tempo (as "voltas" na prova)
const PLANO_VOLTAS = [
  {
    bloco: "1ª VOLTA — Varredura (0:00 → 1:40, ~100 min)",
    cor: "#065f46",
    meta: "Passar por TODAS as 70 questões uma vez. Resolver só o que sai rápido.",
    regras: [
      "Faça TODAS as conceituais (teoria) que você sabe — são rápidas (~1,5 min) e é onde você mais perde ponto por desatenção. LEIA a pergunta inteira: a Cesgranrio adora 'EXCETO', 'INCORRETO', 'APENAS'.",
      "Faça os cálculos CURTOS (conversão de unidade, regra de três, fórmula direta).",
      "Cálculo que não destravar em ~1 min: PULE e circule o número na prova. Não insista agora.",
      "Marque as respostas na PRÓPRIA prova (não no cartão ainda).",
      "Ao fim da 1ª volta você já garantiu ~45-50 questões e sabe exatamente quais faltam."
    ]
  },
  {
    bloco: "2ª VOLTA — Cálculos pesados (1:40 → 3:30, ~110 min)",
    cor: "#b45309",
    meta: "Voltar nas questões de cálculo que você pulou, agora com calma e sem pressa de 'e as outras?'.",
    regras: [
      "Agora o relógio não assusta: os pontos fáceis já estão garantidos.",
      "Dê no máximo ~4-5 min por cálculo pesado. Travou de novo? Chute consciente (elimine 2 alternativas absurdas) e siga.",
      "Confira a UNIDADE que a questão pede (kJ? W? kmol/h? %). É a pegadinha nº1 da Cesgranrio e custou pontos seus.",
      "Op. Unitárias e Controle (suas lacunas): se for uma delas e você não lembrar o método, chute e NÃO gaste tempo — o ponto esperado ali é baixo."
    ]
  },
  {
    bloco: "3ª VOLTA — Fechamento (3:30 → 4:00, ~30 min)",
    cor: "#1d4ed8",
    meta: "Resolver/decidir as últimas pendentes. NENHUMA questão em branco.",
    regras: [
      "Toda questão sem resposta = 0 garantido. Chute em TODAS as que sobraram (sem gabarito negativo, chutar é obrigatório).",
      "Revise rapidinho as que você marcou com dúvida na 1ª volta.",
      "Às 4:00 em ponto, PARE de resolver. Começa a reserva."
    ]
  },
  {
    bloco: "RESERVA — Cartão + conferência (4:00 → 4:30, 30 min)",
    cor: "#7c3aed",
    meta: "Transcrever para o cartão-resposta com atenção total e conferir questão por questão.",
    regras: [
      "Transcreva da prova para o cartão em blocos de 10, conferindo o NÚMERO da questão a cada bloco (erro de 'pular linha' no cartão reprova gente que sabia a matéria).",
      "Preencha a bolha com capricho — cartão lido por máquina não perdoa marcação torta/fraca.",
      "Ao terminar, confira 1×: alguma bolha dupla? alguma em branco? o número bate com a prova?",
      "NÃO mude resposta nesta fase a não ser que tenha CERTEZA de erro — a primeira intuição costuma acertar mais."
    ]
  }
];

// Regras de ouro de ATENÇÃO (atacar os 34% de erro em conceitual = desatenção/pegadinha)
const REGRAS_ATENCAO = [
  { t: "Sublinhe o comando", d: "Risque na prova as palavras EXCETO / INCORRETO / APENAS / SOMENTE / NÃO. Metade dos erros em conceitual é responder o oposto do que foi pedido." },
  { t: "Leia TODAS as alternativas", d: "Mesmo achando a resposta na letra B, leia até a E. A Cesgranrio põe 'quase certas' como pegadinha; a 'mais correta' pode estar depois." },
  { t: "Confira a unidade pedida", d: "Cálculo certo + unidade errada = questão perdida. Grife a unidade do que a questão quer ANTES de contar." },
  { t: "Cuidado com itens I-II-III", d: "Questões 'estão corretas APENAS': avalie cada item isolado com V/F ao lado antes de escolher a combinação. Não vá no 'parece'." },
  { t: "Primeira intuição", d: "Estudos de prova mostram: trocar resposta por insegurança erra mais do que acerta. Só mude com motivo concreto." }
];

// Plano de treino do tempo na reta final (como praticar isso nos sábados)
const TREINO_TEMPO = [
  "Todo SÁBADO: faça 1 simulado com TIMER visível de 4h30, mas com a meta pessoal de terminar de resolver em 4h00.",
  "Use o método das 3 voltas acima — não tente resolver na ordem 1→70.",
  "Anote quantas questões você tinha resolvido na marca de 1h40 (fim da 1ª volta). Meta: ~45-50.",
  "Se na 1ª volta você estiver gastando >2min numa questão, é sinal de que não pulou quando devia.",
  "Depois do simulado, jogue os erros no Caderno de Erros (repetição espaçada) e os 'quase' no banco por subtópico."
];
