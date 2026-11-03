/* =============================================================================
   CALENDÁRIO DE ESTUDOS — estilo agenda, clicável dia a dia (31/out → 06/dez/2026)
   -----------------------------------------------------------------------------
   A usuária faz SÓ o que estiver no dia. Cada dia útil tem:
     • MANHÃ (+1h30, mais produtiva): questões NOVAS da plataforma paga do assunto
       do dia + Caderno de Erros (repetição espaçada) + 3 questões de gramática.
     • TARDE (1h30): revisar um bloco fixo de questões do BANCO (provas antigas),
       listadas por id "ANO#Q" — ex.: 2018#45 = Petrobras 2018, questão 45.
   Sábados = provas TRANSPETRO cronometradas. Domingos = correção + revisão.
   -----------------------------------------------------------------------------
   Distribuição pensada para:
     1) resolver TODAS as questões do banco até a prova;
     2) dar MAIS dias às lacunas (Operações Unitárias, Controle) e menos aos
        pontos fortes (Termo, Fluidos — só manutenção);
     3) NÃO deixar nada pesado perto do dia 06/12 (última semana = leve + espelho).
   -----------------------------------------------------------------------------
   Estrutura de cada dia:
     data   : ISO "AAAA-MM-DD"
     tipo   : "sim" simulado | "prova" prova real (dia da prova) | "rev" revisão/correção | "estudo" dia útil | "leve" revisão leve
     titulo : rótulo curto do dia (aparece no quadradinho do calendário)
     materia: chave p/ filtrar questões no banco (opcional) — liga ao botão "abrir no banco"
     sub    : subtópico do edital (opcional)
     manha  : o que fazer na 1h30 da manhã (string) — opcional em dias de prova
     tarde  : o que fazer na 1h30 da tarde (string)
     questoes: lista de ids "ANO#Q" do banco p/ resolver/revisar no dia (opcional)
     obs    : observação/alerta (opcional)
============================================================================= */

const CALENDARIO = [
  // ===== SEMANA 1 (31/out – 06/nov) — Balanços + arrancada =====
  { data:"2026-10-31", tipo:"sim", titulo:"🎯 Simulado TP 2011",
    tarde:"SIMULADO 1 cronometrado (4h30): Transpetro 2011 completa — 10 Port + 10 Inglês + 50 específicas. Já treine o MÉTODO DAS VOLTAS (veja aba Tática de Prova). Sem energético ainda — isole o método.",
    obs:"Sábado de simulado. Faça como se fosse o dia da prova: timer visível, meta terminar em 4h." },
  { data:"2026-11-01", tipo:"rev", titulo:"Correção Simulado 1",
    manha:"Correção do Simulado 1: marque acerto/erro na aba Meu Desempenho. Jogue TODO erro no Caderno de Erros.",
    tarde:"Releia os 3 tópicos mais fracos do simulado. 1 texto de Inglês + 10 questões de Português (gramática)." },
  { data:"2026-11-02", tipo:"estudo", titulo:"Balanços I — composição", materia:"balancos",
    manha:"NOVAS (plataforma paga): 15-20 questões de Balanços de massa. + Caderno de Erros (cards que vencem hoje) + 3 questões de gramática.",
    tarde:"BANCO — Balanços (composição pb-1/pb-2): frações molar/mássica, densidade, CNTP.",
    questoes:["2012#31","2012#33","2014#21","2014#27","2011#22","2018#21","2018#22"] },
  { data:"2026-11-03", tipo:"estudo", titulo:"Balanços II", materia:"balancos",
    manha:"Se ainda não corrigiu o simulado de sábado, faça isso primeiro (Meu Desempenho + Caderno de Erros). Depois: NOVAS — 15-20 questões de Balanços.",
    tarde:"BANCO — Balanços (bloco 2): reciclo, by-pass, conversão global×por passe, umidade. Resolva BASTANTE questão de balanço hoje, como você quer.",
    questoes:["2011#21","2011#22","2011#23","2011#24","2011#25","2011#26","2011#28","2011#29"],
    obs:"Se você ainda está pegando o ritmo da Semana 1, tudo bem: a barra de progresso no topo te mostra se está em dia. Balanços é a base — vale investir hoje." },
  { data:"2026-11-04", tipo:"estudo", titulo:"Balanços III", materia:"balancos",
    manha:"NOVAS: 15-20 questões de Balanços. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Balanços (bloco 3): fechar a matéria (2012 + 2014).",
    questoes:["2012#23","2012#30","2012#31","2012#32","2012#33","2012#36","2012#37","2012#39","2012#40","2014#21","2014#22","2014#23"] },
  { data:"2026-11-05", tipo:"sim", titulo:"🎯 Simulado PB 2010 (você vai à plataforma)",
    tarde:"SIMULADO: Petrobras 2010 completa (você disse que terá tempo a mais hoje p/ ir fazer). Trate como prova real, cronometrado, MÉTODO DAS VOLTAS. É a ÚNICA que você nunca fez — ótimo ensaio 'virgem' da tática nova.",
    obs:"Depois, traga a relação de acertos/erros: a PB2010 eu tenho gabarito oficial, diagnóstico sai 100%." },
  { data:"2026-11-06", tipo:"estudo", titulo:"Correção PB2010 + Balanços resto", materia:"balancos",
    manha:"Correção da PB2010 (jogue erros no Caderno). NOVAS: 10 questões de Balanços.",
    tarde:"BANCO — Balanços (fechar): questões restantes de 2014.",
    questoes:["2014#24","2014#25","2014#26","2014#27","2014#28","2014#29","2014#30"] },

  // ===== SEMANA 2 (07–13/nov) — Termodinâmica (forte: manutenção) =====
  { data:"2026-11-07", tipo:"sim", titulo:"🎯 Simulado TP 2012",
    tarde:"SIMULADO 2 cronometrado (4h30): Transpetro 2012. Teste agora o MÉTODO DAS VOLTAS + LÍNGUAS NO MEIO (após a 1ª volta). Anote se descansou e rendeu mais depois.",
    obs:"Sábado de simulado. 2ª tática a testar: línguas no meio como descanso ativo." },
  { data:"2026-11-08", tipo:"rev", titulo:"Correção Simulado 2",
    manha:"Correção do Simulado 2 (Meu Desempenho + Caderno de Erros).",
    tarde:"Releia erros da Semana 1 + 2. 10 questões de Português + 1 texto de Inglês." },
  { data:"2026-11-09", tipo:"estudo", titulo:"Termo I (manutenção)", materia:"termo",
    manha:"NOVAS: 15-20 questões de Termo. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Termo (bloco 1): 1ª/2ª Leis, energia interna, ciclos.",
    questoes:["2018#29","2018#30","2018#31","2018#32","2018#33","2018#34","2018#35","2018#36"] },
  { data:"2026-11-10", tipo:"estudo", titulo:"Termo II (manutenção)", materia:"termo",
    manha:"NOVAS: 15-20 questões de Termo. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Termo (bloco 2): Maxwell, estagnação, equilíbrio, refrigeração.",
    questoes:["2018#37","2018#38","2018#39","2018#40","2018#60","2012#21","2012#22","2012#24","2012#25","2012#26"] },
  { data:"2026-11-11", tipo:"estudo", titulo:"Termo III (fechar)", materia:"termo",
    manha:"NOVAS: 10 questões de Termo. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Termo (bloco 3): fechar a matéria (2011 + 2014).",
    questoes:["2012#27","2012#28","2012#29","2012#34","2012#50","2011#27","2011#32","2011#33","2011#34","2011#35"] },
  { data:"2026-11-12", tipo:"estudo", titulo:"Termo IV (fechar)", materia:"termo",
    manha:"NOVAS: 10 de Termo. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Termo (resto 2011 + 2014) — encerra Termo.",
    questoes:["2011#36","2011#37","2011#38","2011#39","2011#40","2014#31","2014#32","2014#33","2014#34","2014#35","2014#36","2014#37","2014#38","2014#39","2014#40"] },
  { data:"2026-11-13", tipo:"estudo", titulo:"Calor I", materia:"calor",
    manha:"NOVAS: 15-20 questões de Transferência de Calor. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Calor (bloco 1): condução, parede composta, convecção, radiação.",
    questoes:["2018#56","2018#57","2018#58","2018#59","2018#66","2018#67","2012#56","2012#57"] },

  // ===== SEMANA 3 (14–20/nov) — Operações Unitárias (LACUNA: mais dias) =====
  { data:"2026-11-14", tipo:"sim", titulo:"🎯 Simulado TP 2018",
    tarde:"SIMULADO 3 cronometrado (4h30): Transpetro 2018 (Proc. Químico). Agora teste ENERGÉTICO (1os 15 min) + comida nas pausas, com estômago igual ao do dia da prova.",
    obs:"Sábado de simulado. 3ª tática: energético + comida — veja se cai bem." },
  { data:"2026-11-15", tipo:"rev", titulo:"Correção Simulado 3",
    manha:"Correção do Simulado 3. Cheque a % de cobertura do edital no app.",
    tarde:"Releia erros das Semanas 1-3. 10 Português + 1 texto Inglês." },
  { data:"2026-11-16", tipo:"estudo", titulo:"Op. Unitárias I ⭐", materia:"opunit",
    manha:"NOVAS: 20 questões de Operações Unitárias (SUA LACUNA nº1). + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Op. Unitárias (bloco 1): destilação, bolha/orvalho, flash, McCabe.",
    questoes:["2018#43","2018#44","2018#45","2018#46","2018#47","2018#48","2018#49","2018#50","2018#51"] },
  { data:"2026-11-17", tipo:"estudo", titulo:"Op. Unitárias II ⭐", materia:"opunit",
    manha:"NOVAS: 20 questões de Operações Unitárias. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Op. Unitárias (bloco 2): absorção, extração, azeotrópica (2012).",
    questoes:["2012#35","2012#38","2012#41","2012#42","2012#43","2012#44","2012#45","2012#46","2012#47","2012#48","2012#49"] },
  { data:"2026-11-18", tipo:"estudo", titulo:"Op. Unitárias III ⭐", materia:"opunit",
    manha:"NOVAS: 20 questões de Operações Unitárias. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Op. Unitárias (bloco 3): fechar (2011 + 2014).",
    questoes:["2011#30","2011#31","2011#41","2011#42","2011#43","2011#44","2011#45","2011#46","2011#47","2011#48","2011#51"] },
  { data:"2026-11-19", tipo:"estudo", titulo:"Op. Unitárias IV ⭐ (fechar)", materia:"opunit",
    manha:"NOVAS: 15 questões de Op. Unitárias. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Op. Unitárias (resto 2014) — encerra a matéria.",
    questoes:["2014#41","2014#42","2014#43","2014#44","2014#45","2014#46","2014#47","2014#48","2014#51"] },
  { data:"2026-11-20", tipo:"estudo", titulo:"Fluidos I (manutenção)", materia:"fluidos",
    manha:"NOVAS: 15 questões de Mecânica dos Fluidos. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Fluidos (bloco 1): Bernoulli, Reynolds, perda de carga, bombas.",
    questoes:["2018#41","2018#42","2018#52","2018#53","2018#54","2018#55","2012#51","2012#52"] },

  // ===== SEMANA 4 (21–27/nov) — Fluidos + Calor + Cinética + Controle (LACUNA) =====
  { data:"2026-11-21", tipo:"sim", titulo:"🎯 Simulado TP 2023 ⭐ (espelho)",
    tarde:"SIMULADO 4 cronometrado (4h30): Transpetro 2023 — ENGENHARIA QUÍMICA. É o ESPELHO: mesma ênfase/banca, a mais parecida com 06/12. ENSAIO GERAL de TODAS as táticas juntas.",
    obs:"Sábado. Ensaio geral: método das voltas + línguas no meio + energético + comida. Nada novo no dia da prova." },
  { data:"2026-11-22", tipo:"rev", titulo:"Correção espelho 2023",
    manha:"Correção DETALHADA do espelho 2023 — é o retrato mais fiel da sua prova. Jogue tudo no Caderno.",
    tarde:"Revisão espaçada: releia erros de todas as semanas." },
  { data:"2026-11-23", tipo:"estudo", titulo:"Fluidos II (fechar)", materia:"fluidos",
    manha:"NOVAS: 15 de Fluidos. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Fluidos (fechar): NPSH, cavitação, Venturi, reologia (2011+2012+2014).",
    questoes:["2012#53","2012#54","2012#55","2011#49","2011#50","2011#52","2011#53","2011#54","2011#55","2014#49","2014#50","2014#52","2014#53","2014#54","2014#55"] },
  { data:"2026-11-24", tipo:"estudo", titulo:"Calor II (fechar)", materia:"calor",
    manha:"NOVAS: 15 de Calor. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Calor (fechar): trocadores, MLDT, ε-NUT (2012+2011+2014).",
    questoes:["2012#58","2012#59","2012#60","2012#61","2012#62","2011#56","2011#57","2011#58","2011#59","2011#60","2011#64","2011#65","2014#56","2014#57","2014#58","2014#59","2014#60","2014#64","2014#65"] },
  { data:"2026-11-25", tipo:"estudo", titulo:"Cinética e Reatores", materia:"cinetica",
    manha:"NOVAS: 15 de Cinética/Reatores. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Cinética (toda a matéria): Arrhenius, CSTR, PFR, projeto de reator.",
    questoes:["2018#68","2018#69","2018#70","2012#64","2012#69","2012#70","2011#66","2011#67","2011#68","2014#66","2014#67","2014#68"] },
  { data:"2026-11-26", tipo:"estudo", titulo:"Controle I ⭐", materia:"controle",
    manha:"NOVAS: 20 de Controle (SUA LACUNA nº2). Foco: função de transferência / Laplace. + Caderno + 3 de gramática.",
    tarde:"BANCO — Controle (bloco 1): Laplace, 1ª/2ª ordem, malha aberta×fechada.",
    questoes:["2018#61","2018#62","2018#63","2018#64","2018#65","2012#63","2012#65","2012#66"] },
  { data:"2026-11-27", tipo:"estudo", titulo:"Controle II ⭐ (fechar)", materia:"controle",
    manha:"NOVAS: 20 de Controle. + Caderno de Erros + 3 de gramática.",
    tarde:"BANCO — Controle (fechar): PID, offset, estabilidade (2012+2011+2014).",
    questoes:["2012#67","2012#68","2011#61","2011#62","2011#63","2011#69","2011#70","2014#61","2014#62","2014#63","2014#69","2014#70"] },

  // ===== SEMANA 5 (28/nov – 06/dez) — Química + revisão leve + blindagem (nada pesado) =====
  { data:"2026-11-28", tipo:"estudo", titulo:"Química (diferencial)", materia:"quimica",
    manha:"NOVAS: 15 de Química (eletroquímica/Kps, corrosão, análise instrumental — seu diferencial da ênfase 27). + Caderno + 3 de gramática.",
    tarde:"BANCO — Química: abra o filtro 'Química' no banco e faça TODAS (são 9, aparecem nas TP 2018/2023). Poucas, mas valem no desempate.",
    questoes:["tp2023#21","tp2023#22","tp2023#65","tp2023#66","tp2023#67","tp2023#68","tp2023#69","tp2023#70","tp2018#37"],
    obs:"Química cai sobretudo na TRANSPETRO (sua banca-alvo). Priorize." },
  { data:"2026-11-29", tipo:"rev", titulo:"Varredura do edital",
    manha:"VARREDURA: abra o Edital no app e feche TODO item ainda 'não vi'. Meta: 99/99 tocados.",
    tarde:"Revisão espaçada do Caderno de Erros (todos os cards que venceram). 10 Português.",
    obs:"ATENÇÃO: ~12 tópicos do edital NUNCA caíram nas 9 provas (ex.: ponto crítico td-6, reator batelada cr-4, PBR cr-8, química orgânica qu-7, estequiometria qu-2, oxirredução qu-3). Não têm questão no banco — veja a TEORIA desses hoje (pode cair em 06/12) e use questões NOVAS da plataforma paga." },
  { data:"2026-11-30", tipo:"leve", titulo:"Revisão leve — lacunas",
    manha:"NOVAS: 15 questões SÓ de Operações Unitárias e Controle (suas lacunas), ritmo de prova.",
    tarde:"Refaça no banco só as que você ERROU de Op. Unitárias e Controle (filtro por matéria, veja as marcadas ❌)." },
  { data:"2026-12-01", tipo:"leve", titulo:"Revisão leve — Termo/Fluidos",
    manha:"NOVAS: 10 questões de Termo e Fluidos (manutenção dos fortes). + Caderno.",
    tarde:"Releia a folha de fórmulas-chave. 1 texto de Inglês + 10 de Português." },
  { data:"2026-12-02", tipo:"leve", titulo:"Revisão leve — Balanços/Calor",
    manha:"NOVAS: 10 questões de Balanços e Calor. + Caderno de Erros.",
    tarde:"Refaça as que errou de Balanços e Calor no banco. Revisão do Caderno." },
  { data:"2026-12-03", tipo:"leve", titulo:"Revisão leve — Cinética/Química + Gerais",
    manha:"NOVAS: 10 de Cinética e Química. + Caderno.",
    tarde:"Blindagem de Gerais: 10 Português (gramática) + 1 texto de Inglês. Nada de assunto novo." },
  { data:"2026-12-04", tipo:"leve", titulo:"Folha de fórmulas + logística",
    manha:"Revisão LEVE: folha única de fórmulas-chave (Maxwell, Arrhenius, projeto de reator, Bernoulli, MLDT, 64/Re). Sem assunto novo.",
    tarde:"Confira documento oficial com foto + caneta preta transparente. Releia a aba Tática de Prova 1×." },
  { data:"2026-12-05", tipo:"leve", titulo:"Descanso ativo",
    manha:"Descanso ativo: releia o Caderno de Erros 1× (só leitura, sem resolver). 1 texto leve de Inglês.",
    tarde:"Prepare tudo para amanhã (roupa, documento, caneta, energético, barrinha/sanduíche, água). Durma cedo." },
  { data:"2026-12-06", tipo:"prova", titulo:"🎯 DIA DA PROVA",
    tarde:"PROVA TRANSPETRO 06/12. Chegue 1h antes. MÉTODO DAS VOLTAS + línguas no meio + energético nos 1os 15min + 30min finais p/ cartão e revisão. Você treinou tudo. Confia.",
    obs:"Não zere Português nem Inglês (classificatórios + eliminatórios). Nenhuma questão em branco." }
];

// Helper: pega o plano de um dia pelo ISO
function diaCalendario(iso){ return CALENDARIO.find(d=>d.data===iso) || null; }
