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
  }
  // Simulado 5 (Petrobras 2014, 66%, 46/70) e Simulado da Petrobras 2011 (reta de tempo)
  // entram quando você mandar as relações de acerto/erro + o gabarito oficial.
];
