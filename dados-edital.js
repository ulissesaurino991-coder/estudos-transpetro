/* =============================================================================
   EDITAL VERTICALIZADO — ENGENHARIA QUÍMICA (Ênfase 27)
   Transpetro / PSP / Terra / Nível Superior 2026.4 — Banca: Cesgranrio
   Prova: 06/12/2026 (NOVA data) | 70 questões (50 específicas + 10 Port + 10 Inglês) | 4h30
   Fonte: Anexo IV do Edital nº 04 - TRANSPETRO 2026.4
   -----------------------------------------------------------------------------
   MUDANÇA 2026.4: Português e Inglês agora são CLASSIFICATÓRIOS (somam pontos
   no ranking), além de eliminatórios (<50% ou zero elimina). Por isso o peso
   das duas matérias de Gerais subiu para 5 (alta prioridade de estudo).
   -----------------------------------------------------------------------------
   Estrutura: cada item tem id único (para salvar progresso no localStorage).
   O "peso" (1 a 5) é a prioridade de estudo (incidência histórica nas 9 provas
   analisadas + peso no ranking). 5 = cai muito / crítico. Ver dados-provas.js.
============================================================================= */

const EDITAL = [
  {
    bloco: "CONHECIMENTOS GERAIS (eliminatório — não pode zerar)",
    cor: "#b45309",
    materias: [
      {
        nome: "Língua Portuguesa",
        peso: 5,
        obs: "10 questões. ⚠️ AGORA CLASSIFICATÓRIA (soma no ranking) + eliminatória (zero ou <50% elimina). Cesgranrio cobra MUITA interpretação de texto, além de pontuação (vírgula), concordância, regência, crase, coesão e colocação pronominal. Você parte do zero aqui — veja a trilha na aba Análise/Cronograma.",
        topicos: [
          { id: "pt-1", t: "Compreensão e interpretação de textos" },
          { id: "pt-2", t: "Ortografia oficial" },
          { id: "pt-3", t: "Mecanismos de coesão textual" },
          { id: "pt-4", t: "Significação das palavras (sinônimos/antônimos/sentido)" },
          { id: "pt-5", t: "Emprego de tempos e modos verbais / correlação verbal" },
          { id: "pt-6", t: "Emprego das classes de palavras" },
          { id: "pt-7", t: "Coordenação e subordinação (relações semânticas: causa, condição, consequência...)" },
          { id: "pt-8", t: "Emprego dos sinais de pontuação (vírgula, dois-pontos, reticências)" },
          { id: "pt-9", t: "Concordância verbal e nominal" },
          { id: "pt-10", t: "Regência verbal e nominal" },
          { id: "pt-11", t: "Emprego do sinal indicativo de crase" },
          { id: "pt-12", t: "Colocação dos pronomes átonos (próclise/ênclise/mesóclise)" }
        ]
      },
      {
        nome: "Língua Inglesa",
        peso: 5,
        obs: "10 questões. ⚠️ AGORA CLASSIFICATÓRIA (soma no ranking) + eliminatória (zero ou <50% elimina). Texto técnico + interpretação: ideia principal/propósito, referência pronominal, conectivos (contraste/consequência/finalidade), sinônimos/antônimos, inferência, modais. Testa LEITURA, não conversação — treinável mesmo partindo do zero.",
        topicos: [
          { id: "en-1", t: "Compreensão de texto escrito em língua inglesa (main idea / purpose)" },
          { id: "en-2", t: "Referência pronominal (this/that/which/it refere-se a...)" },
          { id: "en-3", t: "Conectivos e seus sentidos (however, so, such as, in order to, while...)" },
          { id: "en-4", t: "Vocabulário: sinônimos e antônimos em contexto" },
          { id: "en-5", t: "Inferência e conclusão a partir do texto" },
          { id: "en-6", t: "Itens gramaticais relevantes (modais: can/must/may, voz passiva, comparativos)" }
        ]
      }
    ]
  },
  {
    bloco: "CONHECIMENTOS ESPECÍFICOS — ENGENHARIA QUÍMICA (50 questões, define o ranking)",
    cor: "#065f46",
    materias: [
      {
        nome: "1. Princípios Básicos / Balanços de Massa e Energia",
        peso: 5,
        obs: "ASSUNTO CAMPEÃO na Cesgranrio. Bloco 2 das provas antigas é quase todo isto. Balanços com reciclo, purga, reagente limitante/excesso, conversão global x por passe, rendimento/seletividade, umidade relativa/absoluta, saturação.",
        topicos: [
          { id: "pb-1", t: "Concentração x composição; relações massa/volume/mol; frações molar e mássica" },
          { id: "pb-2", t: "Condições-padrão (CNTP); gases e líquidos; conversões de unidades" },
          { id: "pb-3", t: "Gases saturados com vapor; umidade absoluta e relativa; pressão de vapor" },
          { id: "pb-4", t: "Balanço de massa em processos físicos e químicos (regime permanente)" },
          { id: "pb-5", t: "Reagente limitante e em excesso; % de excesso" },
          { id: "pb-6", t: "Conversão global e por passe; rendimento; seletividade" },
          { id: "pb-7", t: "Balanços com reciclo, by-pass e purga (variáveis de corte)" },
          { id: "pb-8", t: "Balanço de energia em processos contínuos; efeitos térmicos; entalpia de correntes" },
          { id: "pb-9", t: "Balanço em combustão: ar teórico/excesso, queima completa, razão N2/CO2" },
          { id: "pb-10", t: "Cristalização / solubilidade; secagem (base úmida x seca); torres de resfriamento (make-up/purga)" }
        ]
      },
      {
        nome: "2. Termodinâmica",
        peso: 5,
        obs: "Bloco 3 das provas antigas é quase todo Termo. CAI MUITO. 1ª e 2ª Leis, ciclos (Carnot, Rankine, refrigeração), relações de Maxwell, equações de estado, diagramas (PV, TS, Mollier), processo de estrangulamento/Joule-Thomson.",
        topicos: [
          { id: "td-1", t: "1ª Lei: sistemas abertos e fechados; energia interna; trabalho e calor" },
          { id: "td-2", t: "2ª Lei: entropia; processos reversíveis/irreversíveis; adiabático reversível (ΔS=0)" },
          { id: "td-3", t: "Propriedades termodinâmicas de fluidos; relações de Maxwell (dedução a partir de dU, dH, dA, dG)" },
          { id: "td-4", t: "Gases ideais e reais; equações de estado (Van der Waals, cúbicas); parâmetros a e b" },
          { id: "td-5", t: "Fator de compressibilidade Z; estados correspondentes; fator acêntrico" },
          { id: "td-6", t: "Ponto crítico: condições (∂P/∂V)=0 e (∂²P/∂V²)=0" },
          { id: "td-7", t: "Ciclos de potência: Carnot e Rankine; eficiência térmica; etapas no diagrama T-S" },
          { id: "td-8", t: "Ciclos de refrigeração por compressão; COP/coeficiente de eficácia; estrangulamento" },
          { id: "td-9", t: "Diagramas termodinâmicos: PV, TS e Mollier (H-S / P-H); isobáricas" },
          { id: "td-10", t: "Processo de estrangulamento (Joule-Thomson); compressão isentrópica; turbinas" },
          { id: "td-11", t: "Equilíbrio químico: Kp, Kc, ΔG = -RT ln K; deslocamento de equilíbrio (Le Chatelier)" },
          { id: "td-12", t: "Equilíbrio de fases; Clausius-Clapeyron; calor de fusão/vaporização via eq. de pressão de vapor" }
        ]
      },
      {
        nome: "3. Operações Unitárias (Destilação, Absorção, Extração, Secagem)",
        peso: 5,
        obs: "Bloco 2 / grande parte das provas. McCabe-Thiele, refluxo mínimo/total, Fenske-Underwood, pratos x recheios, NTU/HTU, diagramas triangulares (extração), ponto de bolha/orvalho, destilação flash e azeotrópica.",
        topicos: [
          { id: "ou-1", t: "Destilação: ponto de bolha e ponto de orvalho (via pressão de vapor / Raoult)" },
          { id: "ou-2", t: "Destilação flash (integral); binária vs multicomponente" },
          { id: "ou-3", t: "Método McCabe-Thiele (nº de estágios teóricos; só misturas binárias)" },
          { id: "ou-4", t: "Refluxo mínimo e refluxo total (significado físico: nº infinito x mínimo de pratos)" },
          { id: "ou-5", t: "Destilação multicomponente: métodos de Fenske (Nmín) e Underwood (Rmín); volatilidade relativa" },
          { id: "ou-6", t: "Destilação azeotrópica (agente separador / terceiro componente)" },
          { id: "ou-7", t: "Pratos x recheios: perda de carga, weeping (gotejamento), inundação" },
          { id: "ou-8", t: "Absorção e esgotamento (stripping); equilíbrio y = m·x; NUT e HETP/HTU" },
          { id: "ou-9", t: "Extração líquido-líquido: diagrama triangular, ponto de mistura M, linhas de amarração" },
          { id: "ou-10", t: "Secagem (base úmida x seca); umidificação/desumidificação" }
        ]
      },
      {
        nome: "4. Mecânica dos Fluidos / Escoamento",
        peso: 5,
        obs: "Bloco 1 das provas. Bernoulli, perda de carga, fator de atrito (laminar 64/Re x turbulento), Reynolds, regimes, bombas (curva, NPSH, cavitação), manômetros, análise dimensional, venturi/pitot/placa de orifício, reologia.",
        topicos: [
          { id: "mf-1", t: "Propriedades e natureza dos fluidos; viscosidade; reologia (newtoniano, pseudoplástico, dilatante, Bingham, tixotrópico)" },
          { id: "mf-2", t: "Hidrostática; manômetros (tubo em U, diferencial); Lei de Pascal (prensa)" },
          { id: "mf-3", t: "Equação de Bernoulli (hipóteses: incompressível/densidade constante)" },
          { id: "mf-4", t: "Número de Reynolds; regime laminar x turbulento; perfil de velocidades" },
          { id: "mf-5", t: "Fator de atrito: laminar (f=64/Re) x turbulento (Re + rugosidade); perda de carga" },
          { id: "mf-6", t: "Comprimento equivalente (joelhos, válvulas); perdas maiores e menores" },
          { id: "mf-7", t: "Bombas: curva característica, ponto de operação; bombas em série/paralelo" },
          { id: "mf-8", t: "NPSH disponível x requerido; cavitação (condição e consequências)" },
          { id: "mf-9", t: "Medidores de vazão: tubo de Venturi, Pitot, placa de orifício; coeficiente de descarga" },
          { id: "mf-10", t: "Análise dimensional; números adimensionais (Reynolds, Froude, Euler, Mach); Teorema Pi" },
          { id: "mf-11", t: "Escoamento compressível; velocidade do som; número de Mach" }
        ]
      },
      {
        nome: "5. Transferência de Calor",
        peso: 4,
        obs: "Bloco 1 das provas. Condução/convecção/radiação, parede composta (resistências em série), coef. global U, trocadores (correntes paralelas x contracorrente), MLDT, NUT-efetividade, número de Nusselt/Prandtl/Biot.",
        topicos: [
          { id: "tc-1", t: "Mecanismos: condução, convecção e radiação (conceitos e diferenças)" },
          { id: "tc-2", t: "Condução 1D em regime permanente; parede composta (resistências em série); fluxo de calor" },
          { id: "tc-3", t: "Convecção; coeficiente de filme h; número de Nusselt; região desenvolvida" },
          { id: "tc-4", t: "Radiação; Lei de Stefan-Boltzmann; emissividade; fluxo radiante (∝ T⁴)" },
          { id: "tc-5", t: "Coeficiente global de transferência de calor U; resistência de depósito (fouling)" },
          { id: "tc-6", t: "Trocadores: correntes paralelas x contracorrente; configurações; casco-tubo x placas" },
          { id: "tc-7", t: "Média logarítmica de diferença de temperatura (MLDT); fator de correção" },
          { id: "tc-8", t: "Método NUT-efetividade (ε-NTU)" },
          { id: "tc-9", t: "Números de Prandtl e Biot (significado físico e fórmula)" }
        ]
      },
      {
        nome: "6. Cinética Química e Reatores",
        peso: 4,
        obs: "Lei de Arrhenius (Ea via gráfico ln k x 1/T), ordem de reação, tempo espacial, reatores batelada/CSTR/PFR, projeto de reator (V via 1/(-rA)), conversão.",
        topicos: [
          { id: "cr-1", t: "Velocidade de reação; ordem de reação; reações homogêneas x heterogêneas" },
          { id: "cr-2", t: "Lei de Arrhenius; energia de ativação (determinação via gráfico ln k vs 1/T)" },
          { id: "cr-3", t: "Conversão; tempo espacial (τ) e velocidade espacial" },
          { id: "cr-4", t: "Reator batelada" },
          { id: "cr-5", t: "Reator de mistura perfeita (CSTR): projeto V = FA0·X/(-rA)" },
          { id: "cr-6", t: "Reator pistonado (PFR): projeto via integral de dX/(-rA)" },
          { id: "cr-7", t: "Reatores em série; CSTR + CSTR; uso de curva 1/(-rA) vs X (área = V)" },
          { id: "cr-8", t: "Reator de leito recheado (PBR)" },
          { id: "cr-9", t: "Catálise; fotocatálise; determinação de lei de velocidade por experimento" }
        ]
      },
      {
        nome: "7. Controle de Processos e Instrumentação",
        peso: 3,
        obs: "Bloco 1 das provas de 2011/2012. Função de transferência, 1ª/2ª ordem (overshoot, ξ, tp, ts), Laplace, controladores P/PI/PID (offset), diagrama de Bode (RA, ângulo de fase, margem de ganho), estabilidade, malha aberta/fechada.",
        topicos: [
          { id: "co-1", t: "Transformada de Laplace; função de transferência; diagrama de blocos" },
          { id: "co-2", t: "Sistemas de 1ª ordem (constante de tempo, ganho, tempo morto)" },
          { id: "co-3", t: "Sistemas de 2ª ordem (fator de amortecimento ξ, sobressinal/overshoot, tp, ts, tr)" },
          { id: "co-4", t: "Resposta ao degrau; resposta transitória (tempo de atraso, subida, acomodação, pico)" },
          { id: "co-5", t: "Controladores P, PI, PID; offset; efeito das ações proporcional/integral/derivativa" },
          { id: "co-6", t: "Diagrama de Bode: razão de amplitude e ângulo de fase; frequência crítica" },
          { id: "co-7", t: "Estabilidade; margem de ganho e margem de fase; ganho crítico Kc" },
          { id: "co-8", t: "Malha aberta x malha fechada; variável manipulada x perturbação" },
          { id: "co-9", t: "Erro estático (posição); polos e zeros" }
        ]
      },
      {
        nome: "8. Química (Geral, Inorgânica, Orgânica, Analítica, Físico-Química)",
        peso: 3,
        obs: "Ênfase 27 (Química) do edital. Cai estrutura atômica, ligações, estequiometria, oxirredução, eletroquímica (pilhas, Kps via potencial), equilíbrio iônico/solubilidade, cinética, funções/reações orgânicas, análise instrumental, corrosão.",
        topicos: [
          { id: "qu-1", t: "Estrutura atômica; ligação de valência; teoria do orbital molecular" },
          { id: "qu-2", t: "Estequiometria; propriedades de espécies puras e misturas" },
          { id: "qu-3", t: "Oxirredução; balanceamento; eletroquímica (pilhas, eletrólise, potencial de eletrodo)" },
          { id: "qu-4", t: "Produto de solubilidade (Kps); equilíbrio iônico; cálculo via potencial de célula" },
          { id: "qu-5", t: "Soluções e propriedades coligativas; gases reais e ideais" },
          { id: "qu-6", t: "Cinética química (ordem, velocidade, Arrhenius) — visão química" },
          { id: "qu-7", t: "Química orgânica: funções, isomeria, reações, estereoquímica, propriedades físicas" },
          { id: "qu-8", t: "Química analítica: gravimetria, volumetria, potenciometria, espectroscopia UV-Vis, absorção atômica, cromatografia, erros/tratamento de dados" },
          { id: "qu-9", t: "Corrosão: tipos, mecanismos, inibição (proteção catódica/anódica, anodo de sacrifício)" },
          { id: "qu-10", t: "Processos químicos de separação: precipitação, centrifugação, membranas, filtração, troca iônica, extração" },
          { id: "qu-11", t: "Química ambiental: tratamento de água/efluentes, qualidade da água, emissões atmosféricas" }
        ]
      }
    ]
  }
];

/* =============================================================================
   MAPA DE SUBTÓPICOS — liga cada id (pb-1, td-3, mf-5...) ao texto e à matéria.
   Usado pelo Banco de Questões para filtrar/estudar por ponto do edital e para
   mostrar desempenho por subtópico na aba Edital.
   -----------------------------------------------------------------------------
   MATERIA_SUB: chave "materia" das questões (balancos, termo...) -> prefixo id.
============================================================================= */
const MATERIA_SUB = {
  balancos: "pb", termo: "td", opunit: "ou", fluidos: "mf",
  calor: "tc", cinetica: "cr", controle: "co", quimica: "qu"
};

// id do subtópico -> { t: texto, materiaNome, materiaKey, prefixo }
const SUBTOPICOS = (function(){
  const map = {};
  const invMat = {}; // prefixo -> materiaKey
  Object.keys(MATERIA_SUB).forEach(k => invMat[MATERIA_SUB[k]] = k);
  EDITAL.forEach(bloco => bloco.materias.forEach(m => {
    (m.topicos || []).forEach(t => {
      const prefixo = t.id.split("-")[0];
      map[t.id] = {
        t: t.t,
        materiaNome: m.nome,
        materiaKey: invMat[prefixo] || null,
        prefixo
      };
    });
  }));
  return map;
})();

// Lista ordenada de subtópicos de uma matéria (pela chave das questões).
function subtopicosDaMateria(materiaKey){
  const pref = MATERIA_SUB[materiaKey];
  if (!pref) return [];
  return Object.keys(SUBTOPICOS)
    .filter(id => SUBTOPICOS[id].prefixo === pref)
    .sort((a,b)=>{
      const na = parseInt(a.split("-")[1],10), nb = parseInt(b.split("-")[1],10);
      return na - nb;
    })
    .map(id => ({ id, ...SUBTOPICOS[id] }));
}
