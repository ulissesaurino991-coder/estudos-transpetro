/* =============================================================================
   PAINEL DE EXECUÇÃO — dados dirigidos pela própria usuária
   -----------------------------------------------------------------------------
   A plataforma é PAINEL DE EXECUÇÃO/PROGRESSO/PLANEJAMENTO. O estudo (correção,
   explicação) é feito fora (ChatGPT). Aqui registramos: resposta, acerto,
   confiança, tempo, motivo do erro — e a plataforma recalcula meta e domínio.
   -----------------------------------------------------------------------------
   Config da meta dinâmica (seção 2/11 do plano):
     • banco antigo total: 440 (Petrobras 2010 EXCLUÍDA — simulado fechado)
     • data de início: 2026-11-05 · data-alvo do banco: 2026-11-30
     • dias normais = seg..dom, EXCLUINDO sábados (sábado = simulado) e 01-05/12
     • meta diária = restantes ÷ dias normais restantes (recalcula sozinha)
============================================================================= */

const PAINEL_CONFIG = {
  bancoTotal: 440,
  dataAlvoBanco: "2026-11-30",
  inicio: "2026-11-05",
  revisaoGeral: ["2026-12-01","2026-12-02","2026-12-03"],
  revisaoLeve: ["2026-12-04","2026-12-05"],
  prova: "2026-12-06",
  // datas marcadas manualmente como indisponíveis (a usuária pode adicionar)
  indisponiveis: [],
  // sábado é dia de simulado (não consome meta)
  excluiSabado: true,
  // domingos CONTAM como dia normal de estudo (confirmado: 21 dias normais)
  excluiDomingo: false
};

/* -----------------------------------------------------------------------------
   MODELOS CESGRANRIO — organizados por grande área e por MODELO (não por matéria).
   nivel inicial: "naoVisto" | "fraco" | "intermediario" | "forte" | "dominado"
   prioridade: "max" | "alta" | "media"
----------------------------------------------------------------------------- */
const MODELOS = {
  balancos: {
    nome: "Balanços de Massa e Energia",
    ordem: 1,
    modelos: [
      { id:"bal-simples", nome:"Balanço simples por componente", prio:"alta" },
      { id:"bal-etapas", nome:"Balanço em várias etapas / escolha de envoltória", prio:"alta" },
      { id:"bal-ternario", nome:"Balanço ternário", prio:"alta" },
      { id:"bal-recup", nome:"Recuperação parcial + rejeito", prio:"alta" },
      { id:"bal-limitante", nome:"Reagente limitante + excesso", prio:"max" },
      { id:"bal-conv", nome:"Conversão (restante / produto)", prio:"max" },
      { id:"bal-select", nome:"Seletividade + rendimento (reações paralelas)", prio:"alta" },
      { id:"bal-convglobal", nome:"Conversão global × por passe + reciclo", prio:"max" },
      { id:"bal-reciclo", nome:"Reciclo de material não convertido", prio:"max" },
      { id:"bal-purga", nome:"Purga + inerte (reciclo com purga)", prio:"max" },
      { id:"bal-combest", nome:"Combustão estequiométrica", prio:"alta" },
      { id:"bal-combexc", nome:"Combustão + excesso de ar", prio:"max" },
      { id:"bal-combrev", nome:"Combustão reversa (identificar combustível)", prio:"media" },
      { id:"bal-gassat", nome:"Gás saturado + pressão de vapor", prio:"alta" },
      { id:"bal-umidrel", nome:"Umidade relativa → pressão parcial", prio:"alta" },
      { id:"bal-umidabs", nome:"Umidade absoluta / razão de umidade", prio:"alta" },
      { id:"bal-torre", nome:"Torre de resfriamento (make-up/blowdown/contaminante)", prio:"alta" },
      { id:"bal-secagem", nome:"Secagem (base úmida / curva de secagem)", prio:"alta" },
      { id:"bal-crist", nome:"Cristalização + solubilidade", prio:"max" },
      { id:"bal-fracao", nome:"Fração molar/mássica a partir de massas", prio:"alta" },
      // submodelos a cobrir (seção 10) — ainda não vistos
      { id:"bal-cntp", nome:"CNTP / vazão normalizada / gás ideal em balanço", prio:"media", submodelo:true },
      { id:"bal-energia", nome:"Balanço de energia em processo contínuo / entalpia de correntes", prio:"alta", submodelo:true }
    ]
  },
  opunit: {
    nome: "Operações Unitárias",
    ordem: 2,
    modelos: [
      { id:"ou-01", nome:"Reynolds + regime de escoamento", prio:"max" },
      { id:"ou-02", nome:"Perda de carga / Darcy-Weisbach / efeito do diâmetro", prio:"max" },
      { id:"ou-03", nome:"Bernoulli + bomba + perda de carga", prio:"max" },
      { id:"ou-04", nome:"Curva da bomba × curva do sistema", prio:"max" },
      { id:"ou-05", nome:"Bombas em paralelo", prio:"max" },
      { id:"ou-06", nome:"Bombas em série", prio:"alta" },
      { id:"ou-07", nome:"NPSH + cavitação", prio:"max" },
      { id:"ou-08", nome:"Manômetros diferenciais", prio:"alta" },
      { id:"ou-09", nome:"Medidores de vazão / Pitot", prio:"media" },
      { id:"ou-10", nome:"Reologia / fluidos não newtonianos", prio:"media" },
      { id:"ou-11", nome:"Balanço térmico em trocador", prio:"max" },
      { id:"ou-12", nome:"LMTD / ΔT logarítmica média", prio:"max" },
      { id:"ou-13", nome:"Coeficiente global U / resistências térmicas", prio:"max" },
      { id:"ou-14", nome:"Área de trocador (Q=UAΔTlm)", prio:"max" },
      { id:"ou-15", nome:"Incrustação / fouling", prio:"alta" },
      { id:"ou-16", nome:"Condução / isolamento térmico", prio:"alta" },
      { id:"ou-17", nome:"Convecção e efeito de Re/velocidade", prio:"media" },
      { id:"ou-18", nome:"Trocador casco e tubos: escolha operacional", prio:"media" },
      { id:"ou-19", nome:"Flash binário", prio:"max" },
      { id:"ou-20", nome:"Equilíbrio líquido-vapor / Raoult", prio:"max" },
      { id:"ou-21", nome:"McCabe-Thiele: identificação de linhas", prio:"max" },
      { id:"ou-22", nome:"McCabe-Thiele: número de estágios", prio:"max" },
      { id:"ou-23", nome:"Refluxo mínimo × refluxo total", prio:"max" },
      { id:"ou-24", nome:"Fenske / número mínimo de estágios", prio:"alta" },
      { id:"ou-25", nome:"Nmin / Rmin / operação real", prio:"alta" },
      { id:"ou-26", nome:"Destilação azeotrópica", prio:"media" },
      { id:"ou-27", nome:"Conceitos gerais de destilação multiestágio", prio:"alta" },
      { id:"ou-28", nome:"Absorção × stripping", prio:"alta" },
      { id:"ou-29", nome:"HETP", prio:"alta" },
      { id:"ou-30", nome:"HTU × NTU", prio:"alta" },
      { id:"ou-31", nome:"Pratos × recheios", prio:"alta" },
      { id:"ou-32", nome:"Hidrodinâmica de pratos (weeping/flooding)", prio:"media" },
      { id:"ou-33", nome:"Diagrama ternário: ponto de mistura", prio:"alta" },
      { id:"ou-34", nome:"Diagrama ternário: tie-line / extrato e rafinado", prio:"alta" }
    ]
  },
  controle: {
    nome: "Controle de Processos",
    ordem: 3,
    modelos: [
      { id:"cp-01", nome:"Transformada de Laplace básica", prio:"max" },
      { id:"cp-02", nome:"Função de transferência a partir de EDO", prio:"max" },
      { id:"cp-03", nome:"Resposta temporal de 1ª ordem", prio:"max" },
      { id:"cp-04", nome:"Diagrama de blocos / redução", prio:"max" },
      { id:"cp-05", nome:"Ganho, constante de tempo e atraso", prio:"alta" },
      { id:"cp-06", nome:"Controlador P", prio:"alta" },
      { id:"cp-07", nome:"Controlador PI", prio:"max" },
      { id:"cp-08", nome:"Controlador PD / ação derivativa", prio:"alta" },
      { id:"cp-09", nome:"PID", prio:"alta" },
      { id:"cp-10", nome:"Ação direta × reversa", prio:"alta" },
      { id:"cp-11", nome:"Válvula ar-abre/ar-fecha / falha segura", prio:"alta" },
      { id:"cp-12", nome:"Sensor/transmissor como ganho", prio:"media" },
      { id:"cp-13", nome:"Erro estacionário / tipo do sistema", prio:"max" },
      { id:"cp-14", nome:"Estabilidade / equação característica", prio:"max" },
      { id:"cp-15", nome:"Routh-Hurwitz", prio:"alta" },
      { id:"cp-16", nome:"Diagrama de Bode: 1ª ordem", prio:"max" },
      { id:"cp-17", nome:"Tempo morto no Bode", prio:"alta" },
      { id:"cp-18", nome:"Identificar modelo pelo Bode", prio:"alta" }
    ]
  }
};

/* -----------------------------------------------------------------------------
   TRILHA DIAGNÓSTICA DE BALANÇOS — 28 questões com registro COMPLETO da usuária.
   q: id interno (1..28) · ref: "prova-n" (liga ao banco) · modelo: id em MODELOS
   reg: { resp, gab, correta, confianca(0-3), tempoSeg, motivoErro, obs, status }
     confianca: 0 nenhuma/zero · 1 baixa · 2 média · 3 alta
     status: "forte" | "intermediario" | "reforco" | "fraco" | "recuperacao"
----------------------------------------------------------------------------- */
function t(mmss){ const [m,s]=String(mmss).split(":").map(Number); return (m||0)*60+(s||0); }
const DIAG_BALANCOS = [
  { q:1, ref:"pb2018-25", modelo:"bal-simples", reg:{resp:"C",gab:"C",correta:true,confianca:3,tempoSeg:t("3:04"),status:"forte"} },
  { q:2, ref:"tp2018-55", modelo:"bal-etapas", reg:{resp:"C",gab:"C",correta:true,confianca:3,tempoSeg:t("3:22"),status:"forte"} },
  { q:3, ref:"pb2014-25", modelo:"bal-ternario", reg:{resp:"B",gab:"B",correta:true,confianca:3,tempoSeg:t("3:57"),status:"intermediario",obs:"Quase errei por pressa; percebi e corrigi antes de marcar.",tag:"atenção à pressa"} },
  { q:4, ref:"tp2012-35", modelo:"bal-recup", reg:{resp:"E",gab:"E",correta:true,confianca:1,tempoSeg:t("5:46"),status:"reforco",obs:"Desconfiei de pegadinha. Dos 200 kg/h de açúcar, 90% extraídos e 10% no rejeito — rejeito não é só a fração não açucarada."} },
  { q:5, ref:"tp2012-33", modelo:"bal-conv", reg:{resp:"B",gab:"B",correta:true,confianca:2,tempoSeg:t("2:01"),status:"forte"} },
  { q:6, ref:"tp2018-56", modelo:"bal-limitante", reg:{resp:"C",gab:"C",correta:true,confianca:3,tempoSeg:t("2:10"),status:"forte"} },
  { q:7, ref:"pb2012-37", modelo:"bal-limitante", reg:{resp:"B",gab:"B",correta:true,confianca:3,tempoSeg:t("2:00"),status:"forte"} },
  { q:8, ref:"pb2011-26", modelo:"bal-select", reg:{resp:"B",gab:"B",correta:true,confianca:3,tempoSeg:t("3:05"),status:"intermediario",obs:"Já tinha errado antes e aprendido o método. Receio se a estequiometria mudar.",jaVista:true} },
  { q:9, ref:"tp2011-42", modelo:"bal-select", reg:{resp:"D",gab:"D",correta:true,confianca:2,tempoSeg:t("3:25"),status:"intermediario",obs:"Boa transferência para nova estequiometria; quero mais uma variação."} },
  { q:10, ref:"tp2011-44", modelo:"bal-convglobal", reg:{resp:"C",gab:"C",correta:true,confianca:3,tempoSeg:t("2:12"),status:"forte"} },
  { q:11, ref:"pb2014-26", modelo:"bal-convglobal", reg:{resp:"A",gab:"A",correta:true,confianca:2,tempoSeg:t("6:52"),status:"reforco",obs:"Demorei muito para entender o fluxograma diferente.",tag:"fluxograma diferente"} },
  { q:12, ref:"tp2023-51", modelo:"bal-reciclo", reg:{resp:"E",gab:"E",correta:true,confianca:3,tempoSeg:t("2:03"),status:"forte"} },
  { q:13, ref:"pb2011-28", modelo:"bal-purga", reg:{resp:"E",gab:"E",correta:true,confianca:2,tempoSeg:t("2:05"),status:"reforco",obs:"Acertei mas com insegurança conceitual. A purga não contém só o inerte — leva também reagentes não convertidos na mesma composição.",jaVista:true,prioridade:"alta"} },
  { q:14, ref:"pb2011-29", modelo:"bal-purga", reg:{resp:"A",gab:"A",correta:true,confianca:3,tempoSeg:t("1:18"),status:"intermediario",obs:"Rápida porque usava o mesmo fluxograma já estudado. Tempo baixo não = domínio.",jaVista:true} },
  { q:15, ref:"tp2011-45", modelo:"bal-purga", reg:{resp:"B",gab:"C",correta:false,confianca:0,tempoSeg:t("9:54"),status:"fraco",motivoErro:"conteúdo",obs:"Não consegui montar o balanço de purga e inerte. Regra: inerte que entra fresco = inerte que sai pela purga.",prioridade:"max"} },
  { q:16, ref:"tp2012-34", modelo:"bal-purga", reg:{resp:"D",gab:"D",correta:true,confianca:2,tempoSeg:t("6:52"),status:"recuperacao",obs:"Já tinha errado antes; desta vez corrigi a lógica mas ainda insegura. Metano formado sai pela purga em regime permanente.",prioridade:"max"} },
  { q:17, ref:"pb2006-23", modelo:"bal-combest", reg:{resp:"B",gab:"B",correta:true,confianca:2,tempoSeg:t("5:00"),status:"intermediario",obs:"Insegurança matemática (contas grandes).",semBanco:true} },
  { q:18, ref:"pb2014-28", modelo:"bal-combexc", reg:{resp:"E",gab:"E",correta:true,confianca:3,tempoSeg:t("3:54"),status:"forte",obs:"Só receio de pegadinha."} },
  { q:19, ref:"tp2012-32", modelo:"bal-combrev", reg:{resp:"D",gab:"D",correta:true,confianca:3,tempoSeg:t("8:19"),status:"reforco",obs:"Demorei para perceber a lógica — reconhecimento lento do modelo.",tag:"ganhar velocidade",prioridade:"media"} },
  { q:20, ref:"pb2006-22", modelo:"bal-gassat", reg:{resp:"D",gab:"D",correta:true,confianca:1,tempoSeg:0,status:"intermediario",obs:"Já tinha feito. Se há água líquida em equilíbrio: P_H2O = P_sat.",jaVista:true,semBanco:true,tempoDesconhecido:true} },
  { q:21, ref:"pb2018-24", modelo:"bal-umidrel", reg:{resp:"B",gab:"B",correta:true,confianca:3,tempoSeg:t("1:32"),status:"forte",obs:"UR = Pv/Psat. Muito bem dominado."} },
  { q:22, ref:"tp2012-24", modelo:"bal-umidabs", reg:{resp:"B",gab:"B",correta:true,confianca:1,tempoSeg:t("7:05"),status:"reforco",obs:"Montei de forma intuitiva. ω = (M_H2O/M_ar)·Pv/(P−Pv), em kg água/kg ar seco.",prioridade:"alta"} },
  { q:23, ref:"tp2023-44", modelo:"bal-torre", reg:{resp:"D",gab:"D",correta:true,confianca:1,tempoSeg:t("8:20"),status:"fraco",obs:"Dificuldade com a dureza. Balanço de contaminante: M·C_makeup=P·C_purga; C_purga=5C_makeup ⇒ M=5P; água: M=P+E.",prioridade:"alta"} },
  { q:24, ref:"tp2023-48", modelo:"bal-torre", reg:{resp:"C",gab:"C",correta:true,confianca:1,tempoSeg:t("2:40"),status:"reforco",obs:"Já tinha feito mas não lembrava. Sem purga: make-up=evaporada; ar úmido Pv=UR·Psat.",jaVista:true,prioridade:"alta"} },
  { q:25, ref:"tp2011-51", modelo:"bal-secagem", reg:{resp:"D",gab:"D",correta:true,confianca:2,tempoSeg:t("2:44"),status:"forte",obs:"Massa de sólido seco constante. Testar outra variação."} },
  { q:26, ref:"pb2012-49", modelo:"bal-secagem", reg:{resp:"C",gab:"C",correta:true,confianca:2,tempoSeg:t("1:33"),status:"intermediario",obs:"Primeira exposição a curva de secagem; achei simples demais."} },
  { q:27, ref:"tp2011-41", modelo:"bal-crist", reg:{resp:"C",gab:"B",correta:false,confianca:0,tempoSeg:t("6:24"),status:"fraco",motivoErro:"conteúdo",obs:"Erro central: solubilidade = soluto/SOLVENTE, não soluto/solução. s=0,20 kg S/kg H2O ⇒ S=0,20W.",prioridade:"max"} },
  { q:28, ref:"tp2012-21", modelo:"bal-fracao", reg:{resp:"E",gab:"E",correta:true,confianca:3,tempoSeg:t("0:49"),status:"forte",obs:"Converter massa→mol, xi=ni/Σni."} }
];

// Regra conceitual associada a modelos (lembrete curto mostrado no painel).
const REGRAS_MODELO = {
  "bal-purga": "⚠️ Comece pelo BALANÇO GLOBAL DO INERTE. Em regime permanente: inerte que entra fresco = inerte que sai do processo pela purga. A purga leva inerte + reagentes não convertidos (mesma composição do reciclo).",
  "bal-crist": "⚠️ Solubilidade = massa de soluto / massa de SOLVENTE (não da solução). Se s=0,20 kg S/kg H₂O ⇒ S=0,20·W. Após cristalizar: recalcule S/W e volte na equação da solubilidade.",
  "bal-umidabs": "ω = (M_H₂O/M_ar)·Pv/(P−Pv), em kg água/kg ar seco.",
  "bal-torre": "Balanço de contaminante: M·C_makeup = P·C_purga. Evaporada NÃO leva contaminante. Água: M = P + E."
};

// Ordem da próxima etapa (revisão guiada) — seção 6 do plano.
const REVISAO_GUIADA_BALANCOS = [
  { ref:"tp2011-45", obj:"Fechar PURGA + INERTE (era Q15, errada)" },
  { ref:"pb2011-28", obj:"Consolidar purga (era Q13, dúvida conceitual)" },
  { ref:"tp2012-34", obj:"Consolidar purga (era Q16, ainda insegura)" },
  { ref:"tp2011-41", obj:"Reconstruir CRISTALIZAÇÃO do zero (era Q27, errada)" },
  { ref:"tp2012-24", obj:"Fixar UMIDADE ABSOLUTA (era Q22, improvisada)" },
  { ref:"tp2023-44", obj:"Fixar TORRE de resfriamento (era Q23, difícil)" },
  { ref:"tp2023-48", obj:"Fixar TORRE de resfriamento (era Q24)" },
  { ref:"pb2014-26", obj:"Leitura de reciclo em fluxograma diferente (era Q11)" },
  { ref:"tp2012-32", obj:"Ganhar velocidade em combustão reversa (era Q19)" },
  { ref:"tp2012-35", obj:"Fixar recuperação parcial/rejeito (era Q4)" }
];
