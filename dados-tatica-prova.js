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

// Plano de blocos de tempo (as "voltas" na prova) — com pausas de energia embutidas
const PLANO_VOLTAS = [
  {
    bloco: "1ª VOLTA — Varredura das específicas (0:00 → 1:30, ~90 min)",
    cor: "#065f46",
    meta: "Passar pelas 50 específicas (Q21-70) resolvendo só o que sai rápido. Línguas ficam para a pausa.",
    regras: [
      "⚡ ENERGÉTICO: tome nos primeiros ~15 min (ou 30 min antes de começar), para o pico de cafeína bater lá no meio-fim da prova, quando a atenção cai. NUNCA estreie no dia — teste no sábado.",
      "Faça TODAS as conceituais que você sabe — rápidas (~1,5 min) e é onde você mais perde ponto por desatenção. LEIA a pergunta inteira: Cesgranrio adora 'EXCETO', 'INCORRETO', 'APENAS'.",
      "Faça os cálculos CURTOS (conversão de unidade, regra de três, fórmula direta).",
      "Cálculo que não destravar em ~1 min: PULE e circule o número na prova. Não insista agora.",
      "Marque as respostas na PRÓPRIA prova (não no cartão ainda)."
    ]
  },
  {
    bloco: "☕ PAUSA 1 + LÍNGUAS (1:30 → 2:05, ~35 min)",
    cor: "#0891b2",
    meta: "Descanso ativo: troca o cérebro de 'cálculo' para 'leitura'. Recupera energia sem perder tempo.",
    regras: [
      "🚻 Vá ao banheiro agora (ida planejada nº1) — você já garantiu as específicas fáceis, é o momento de menor custo.",
      "🍫 Coma 1 porção pequena (metade da barrinha OU meio sanduíche). Proteína + carbo complexo = energia estável. EVITE açúcar puro (dá pico e queda/sono).",
      "🌐 Faça AGORA Português (Q1-10) e Inglês (Q11-20). É leitura, não cálculo — 'descansa' do raciocínio pesado E garante os pontos classificatórios enquanto você ainda está fresca.",
      "Línguas bem feitas aqui = ~15-18 pontos garantidos + mente renovada para a parte mais dura."
    ]
  },
  {
    bloco: "2ª VOLTA — Cálculos pesados (2:05 → 3:40, ~95 min)",
    cor: "#b45309",
    meta: "Voltar nos cálculos que você pulou, agora com calma e sem pressa de 'e as outras?'.",
    regras: [
      "Agora o relógio não assusta: fáceis e línguas já estão garantidos.",
      "Dê no máximo ~4-5 min por cálculo pesado. Travou de novo? Chute consciente (elimine 2 alternativas absurdas) e siga.",
      "Confira a UNIDADE que a questão pede (kJ? W? kmol/h? %). É a pegadinha nº1 da Cesgranrio e custou pontos seus.",
      "🥤 Beba água em goles; se bater cansaço forte, faça a ida nº2 ao banheiro AQUI (como micro-pausa), nunca no meio de um cálculo.",
      "Op. Unitárias e Controle (suas lacunas): se não lembrar o método, chute e NÃO insista — o ponto esperado ali é baixo."
    ]
  },
  {
    bloco: "3ª VOLTA — Fechamento (3:40 → 4:00, ~20 min)",
    cor: "#1d4ed8",
    meta: "Decidir as últimas pendentes. NENHUMA questão em branco.",
    regras: [
      "🍫 Última mordida da barrinha/sanduíche se precisar de gás para o sprint final.",
      "Toda questão sem resposta = 0 garantido. Chute em TODAS as que sobraram (não há gabarito negativo, chutar é obrigatório).",
      "Revise rapidinho as que você marcou com dúvida na 1ª volta.",
      "Às 4:00 em ponto, PARE de resolver. Começa a reserva do cartão."
    ]
  },
  {
    bloco: "✅ RESERVA — Cartão + conferência (4:00 → 4:30, 30 min)",
    cor: "#7c3aed",
    meta: "Transcrever para o cartão com atenção total e revisar as de dúvida.",
    regras: [
      "Transcreva da prova para o cartão em blocos de 10, conferindo o NÚMERO da questão a cada bloco (erro de 'pular linha' reprova quem sabia a matéria).",
      "Preencha a bolha com capricho — cartão lido por máquina não perdoa marcação torta/fraca.",
      "Revise primeiro as questões que você marcou com DÚVIDA (estrela/círculo na prova).",
      "Confira 1× no fim: alguma bolha dupla? alguma em branco? o número bate com a prova?",
      "NÃO mude resposta a não ser que tenha CERTEZA de erro — a primeira intuição acerta mais."
    ]
  }
];

// Plano de energia e foco ao longo das 4h30 (combate ao cansaço)
const PLANO_ENERGIA = [
  { t: "⚡ Energético — timing", d: "Tome nos primeiros 15 min da prova (ou 30 min antes). A cafeína leva ~30-45 min para agir e dura 3-4h: assim o pico cai no meio-fim, quando a concentração despenca. Tomar 'quando estiver fraca' (3h de prova) faz o efeito vir DEPOIS da prova — inútil. ⚠️ TESTE no sábado: em estômago vazio pode dar taquicardia/tremor." },
  { t: "🍫 Comida — o quê e quando", d: "Barrinha de proteína e/ou sanduíche: proteína + carboidrato complexo liberam energia devagar = foco estável. EVITE açúcar rápido (bala/chocolate ao leite): dá pico e depois queda que dá sono. Coma em porções pequenas nas pausas entre voltas, nunca tudo de uma vez (digestão pesada = sangue sai do cérebro = sono)." },
  { t: "💧 Água — hidrate antes", d: "Beba bem ANTES de entrar; durante, goles pequenos. Muita água de uma vez = mais idas ao banheiro = mais tempo perdido e mais quebra de concentração." },
  { t: "🚻 Banheiro — idas planejadas", d: "Cada ida custa ~3-5 min (com fiscal) + tempo de reconcentrar. Planeje 1 ida na transição 1ª→2ª volta (~1h30). Uma 2ª ida, se precisar, use como micro-pausa quando bater cansaço na 2ª volta — nunca no meio de uma questão." },
  { t: "🌐 Línguas como descanso", d: "Português/Inglês usam raciocínio de LEITURA, diferente do cálculo. Fazê-las no meio (após a 1ª volta) 'descansa' o cérebro de cálculo E garante pontos classificatórios enquanto você ainda tem energia. Não deixe para o fim exausta." },
  { t: "🧘 Micro-resets de atenção", d: "A cada troca de volta, respire fundo 3× e estique os ombros por 20s. Reseta a atenção e combate o erro por desatenção (seus 34% em conceitual). Barato e invisível." }
];

// Protocolo para TESTAR as táticas nos simulados de sábado (sem estrear no dia da prova)
const TESTE_SABADO = [
  { semana: "Sábado 1", foco: "Testar só o MÉTODO DAS VOLTAS. Cronômetro visível, meta 4h. NADA de energético ainda — isole a variável. Anote: quantas resolvi até 1h30? Sobrou tempo pro cartão?" },
  { semana: "Sábado 2", foco: "Repetir voltas + testar LÍNGUAS no meio (após 1ª volta). Sentiu que descansou? Rendeu mais nos cálculos depois? Anote a sensação de energia às 3h." },
  { semana: "Sábado 3", foco: "Agora testar o ENERGÉTICO (nos primeiros 15 min) + comida nas pausas. Com estômago igual ao do dia da prova. Deu taquicardia? Caiu bem? Ajuste a dose/marca." },
  { semana: "Sábado 4 (espelho)", foco: "Ensaio GERAL idêntico ao dia 06/12: mesma hora, energético, comida, idas ao banheiro, método das voltas, 30min de cartão. Nada de novo no dia da prova — tudo já testado." }
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
