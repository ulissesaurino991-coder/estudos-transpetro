/* =============================================================================
   RESULTADOS DOS SIMULADOS JÁ FEITOS pela usuária (plataforma externa + reais)
   -----------------------------------------------------------------------------
   Usado pela aba "Meu Desempenho" para diagnosticar lacunas reais: cruza cada
   questão ERRADA com o subtópico do edital (campo sub do banco de questões),
   gerando ranking de pontos fracos para focar na reta final.
   -----------------------------------------------------------------------------
   Cada simulado:
     prova   : id da prova no banco (pb2018, pb2012...) — liga às questões p/ achar o subtópico
     rotulo  : nome amigável
     data    : quando foi feito (ISO)
     tempo   : tempo gasto (min) — para análise de ritmo
     nota    : acertos / total
     erros   : nºs das questões ERRADAS (1..70)
     naoFiz  : nºs que NÃO deu tempo de fazer (lacuna de TEMPO, não de conteúdo)
     obs     : observação livre
   -----------------------------------------------------------------------------
   IMPORTANTE sobre confiabilidade do diagnóstico por questão:
     • gabarito OFICIAL confirmado: pb2010, pb2012, pb2018 → cruzamento 100% confiável.
     • demais provas (pb2011, pb2014, tp*) → subtópico vem da classificação do banco,
       confiável para a MATÉRIA; o número exato por subtópico é provisório até os
       gabaritos oficiais dessas provas serem carregados.
============================================================================= */

const SIMULADOS_FEITOS = [
  {
    prova: "pb2018", rotulo: "Simulado 3 — Petrobras 2018", data: "2026-09-05",
    tempo: 270, // 4h30
    nota: { acertos: 52, total: 70 },
    erros: [4,11,12,16,19,22,37,44,45,46,47,50,51,61,62,63,64,65],
    naoFiz: [],
    obs: "74%. Forte em Balanços/Termo/Fluidos; travou em Controle e Operações Unitárias."
  },
  {
    prova: "pb2012", rotulo: "Simulado 4 — Petrobras 2012", data: "2026-09-12",
    tempo: 240, // 4h
    nota: { acertos: 48, total: 70 },
    erros: [4,5,7,24,32,34,36,40,41,42,44,47,48,50,52,55,57,58,59,65,66,67],
    naoFiz: [],
    obs: "69%. Operações Unitárias e Controle de novo fracos; alguns erros de Calor e Termo."
  },
  {
    prova: "pb2011", rotulo: "Petrobras 2011 (feita ontem)", data: "2026-10-29",
    tempo: 270, // 4h30
    // nota: acertos aproximados — 8 'chutes' foram questões SEM TEMPO (contadas como não feitas).
    // Alguns chutes acertaram na sorte, mas tratamos como não resolvidas para o diagnóstico.
    nota: { acertos: 47, total: 70 },
    // erros de CONTEÚDO (X sem 'chute') — Q64 é anulada, não entra:
    erros: [6,7,9,10,19,22,24,26,42,43,45,60,61,67,70],
    // 'chute' = NÃO deu tempo de fazer (lacuna de tempo, não de conteúdo):
    naoFiz: [28,29,30,31,37,38,39,51],
    anuladasMarcadas: [64],
    obs: "⚠️ 8 questões (28-31, 37-39, 51) ficaram sem tempo — TODAS de cálculo (Balanços, Op. Unitárias, Termo). Problema de ritmo, não de conteúdo. Erros reais: Português 4/10 (ponto fraco!), Inglês 1/10 (forte)."
  }
  // Simulado 5 (Petrobras 2014, 66%, 46/70) entra quando você mandar a relação + gabarito oficial.
];
