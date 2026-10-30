/* =============================================================================
   ESTRATÉGIA NINJA — o plano mestre dos 37 dias até 06/12/2026
   -----------------------------------------------------------------------------
   Objetivo declarado pela usuária:
     • VER TUDO do edital até a prova (99 tópicos, 0 deixados em branco)
     • PASSAR por todas as matérias (8 específicas + Português + Inglês do zero)
     • REFAZER todas as 9 provas antigas (5 Petrobras + 4 Transpetro)
   Restrições reais:
     • 2h/dia útil (seg–sex) · Sábado = simulado 4h30 · Domingo = tempo livre
   -----------------------------------------------------------------------------
   A matemática que torna isso possível em 37 dias:
     • Simulados: 9 provas → 5 sábados + alguns domingos/dias de reta final
     • Edital: 99 tópicos ÷ ~30 dias úteis ≈ 3–4 tópicos/dia (totalmente viável
       em 1h30, já que você vê o tópico + resolve 2–3 questões dele)
     • Gerais: 30 min/dia útil garantem contato diário com Port + Inglês
============================================================================= */

const ESTRATEGIA = {
  diasRestantes: 37,     // referência em 30/10 (o app recalcula a contagem real)
  provaData: "2026-12-06",

  // AS 3 METAS-MÃE (o que define "preparação completa")
  metas: [
    { icone:"📋", titulo:"Ver 100% do edital", desc:"Marcar os 99 tópicos como 'revisei' ou 'domino' até a véspera. Nenhum item em branco.", meta:"99/99 tópicos tocados" },
    { icone:"🔁", titulo:"Refazer as 9 provas", desc:"Petrobras 2010/2011/2012/2014/2018 + Transpetro 2011/2012/2018/2023, todas cronometradas e corrigidas.", meta:"9/9 provas feitas" },
    { icone:"📚", titulo:"Passar por todas as matérias", desc:"8 específicas + Português + Inglês — inclusive as que você nunca estudou (Gerais).", meta:"10/10 matérias cobertas" }
  ],

  // AS 7 REGRAS DE OURO (a mentalidade ninja da reta final)
  regras: [
    { n:1, titulo:"Incidência manda no seu tempo", txt:"Dê o grosso das horas aos 4 pilares (Balanços, Termo, Op. Unitárias, Fluidos = ~70% da prova). Controle, que some em Eng. Química, recebe só o essencial." },
    { n:2, titulo:"Ver tudo ≠ dominar tudo", txt:"Primeiro PASSE por 100% do edital (profundidade média). Só depois aprofunde onde você erra. É melhor ter visto tudo raso do que metade fundo e metade em branco." },
    { n:3, titulo:"Toda questão errada vira anotação", txt:"Nenhum erro passa sem ir pro Diário de Erros com o PORQUÊ e o tópico a revisar. Reler o diário na véspera vale mais que estudar assunto novo." },
    { n:4, titulo:"Revisão espaçada, sempre", txt:"O que você estudou na semana 1 você relê na 2 e na 4. Memória de concurso se constrói por repetição distribuída, não por maratona." },
    { n:5, titulo:"Simulado é treino de TEMPO, não só de conteúdo", txt:"4h30 / 70 questões ≈ 3,8 min cada. Treine pular a difícil e voltar. O relógio é um adversário tão real quanto a banca." },
    { n:6, titulo:"Gerais é ponto barato — não zere nunca", txt:"Português e Inglês agora SOMAM no ranking e ainda eliminam se zerar. 30 min/dia resolvem: são matérias padronizadas e treináveis mesmo do zero." },
    { n:7, titulo:"A prova de 2023 é o oráculo", txt:"Mesma ênfase (Eng. Química), mesma banca, mais recente. Guarde-a para a reta final e disseque cada questão: é o retrato mais fiel do que vem em 06/12." }
  ],

  // AS 3 FASES DO MÊS (como os 37 dias se organizam)
  fases: [
    {
      nome:"FASE 1 — VARREDURA (semanas 1–2)",
      cor:"#0ea5e9",
      objetivo:"Passar pela 1ª vez em TODAS as matérias e cobrir a maior parte do edital.",
      acoes:[
        "Estudar os pilares na ordem de incidência: Balanços → Termo → Op. Unitárias.",
        "Marcar cada tópico visto no Edital Verticalizado (meta: sair da fase com ~60% do edital tocado).",
        "Iniciar Gerais do zero: interpretação (Port) + leitura técnica (Inglês), 30 min/dia.",
        "Simulados 1 e 2 (Transpetro 2011 e 2012) nos sábados — foco em aguentar as 4h30."
      ]
    },
    {
      nome:"FASE 2 — COBERTURA TOTAL (semanas 3–4)",
      cor:"#8b5cf6",
      objetivo:"Fechar os 100% do edital e refazer o grosso das provas.",
      acoes:[
        "Estudar Fluidos → Calor → Cinética → Química (seu diferencial) → o essencial de Controle.",
        "VARREDURA FINAL do edital: abrir o app e fechar TODO item ainda 'não vi'.",
        "Refazer as provas que faltam (Petrobras 2010, 2011, 2014, 2018; Transpetro 2018).",
        "Simulados 3 e 4 nos sábados + refazer questões ERRADAS dos simulados anteriores."
      ]
    },
    {
      nome:"FASE 3 — AFIAÇÃO (semana 5, reta final até 06/12)",
      cor:"#f59e0b",
      objetivo:"Simular o espelho (2023), revisar erros e chegar inteiro no dia.",
      acoes:[
        "Simulado 5 com a Transpetro 2023 (Eng. Química) — seu espelho — e correção minuciosa.",
        "Só revisão: refazer exclusivamente o que você errou em qualquer simulado.",
        "Blindagem de Gerais: garantir ≥50% e nunca zerar Português/Inglês.",
        "Véspera: folha única de fórmulas + releitura do Diário de Erros. Zero assunto novo. Dormir cedo."
      ]
    }
  ],

  // CHECKLIST DE COBERTURA — garante que nenhuma matéria fica de fora
  cobertura: [
    { materia:"Balanços de Massa/Energia", quando:"Semana 1", prioridade:5 },
    { materia:"Termodinâmica",             quando:"Semanas 1–2", prioridade:5 },
    { materia:"Operações Unitárias",       quando:"Semana 2", prioridade:5 },
    { materia:"Mecânica dos Fluidos",      quando:"Semana 3", prioridade:5 },
    { materia:"Transferência de Calor",    quando:"Semana 3", prioridade:4 },
    { materia:"Cinética e Reatores",       quando:"Semana 3", prioridade:4 },
    { materia:"Química (seu diferencial)", quando:"Semanas 3–4", prioridade:4 },
    { materia:"Controle de Processos",     quando:"Semana 4 (só o essencial)", prioridade:3 },
    { materia:"Português (do zero)",       quando:"Todo dia útil, 30min", prioridade:5 },
    { materia:"Inglês (do zero)",          quando:"Todo dia útil, 30min", prioridade:5 }
  ],

  // ORDEM INTELIGENTE DE REFAZER AS 9 PROVAS
  ordemProvas: [
    { pos:1, prova:"Transpetro 2011", motivo:"Simulado 1 — começar pela sua banca, treino de resistência." },
    { pos:2, prova:"Transpetro 2012", motivo:"Simulado 2 — a de Balanços pesados (~20 questões), ótima para fixar o pilar nº 1." },
    { pos:3, prova:"Petrobras 2018",  motivo:"Simulado 3 — estilo Cesgranrio recente, bom calibre de dificuldade." },
    { pos:4, prova:"Transpetro 2018", motivo:"Simulado 4 — sua banca, já com Cinética/Controle." },
    { pos:5, prova:"Petrobras 2010",  motivo:"A ÚNICA que você nunca fez — encare como simulado real, sem gabarito à mão." },
    { pos:6, prova:"Petrobras 2011",  motivo:"Você faz amanhã (31/10) — já inaugura o ciclo." },
    { pos:7, prova:"Petrobras 2012",  motivo:"Refazer para fixar Balanços + Op. Unitárias." },
    { pos:8, prova:"Petrobras 2014",  motivo:"Refazer para fechar o repertório Petrobras." },
    { pos:9, prova:"Transpetro 2023", motivo:"⭐ O ESPELHO — deixe para a reta final e disseque cada questão." }
  ]
};
