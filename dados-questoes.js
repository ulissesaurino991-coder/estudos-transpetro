/* =============================================================================
   BANCO DE QUESTÕES REAIS — 9 provas Cesgranrio (2010–2023)
   Transcrição fiel: enunciado + 5 alternativas + gabarito + matéria.
   -----------------------------------------------------------------------------
   Estrutura de cada questão:
     { prova, ano, banca, n, materia, enun, alt:[A,B,C,D,E], gab, tipo }
       prova  : id da prova (pb2010, pb2011, ... tp2023)
       materia: chave do assunto (ver dados-provas.js ASSUNTOS) ou "port"/"ingles"
       gab    : letra correta "A".."E" (quando confirmada; "" se pendente)
       tipo   : "calc" (cálculo) | "conc" (conceitual)
   -----------------------------------------------------------------------------
   OBS. de integridade: os gabaritos foram preenchidos a partir da resolução
   técnica de cada questão. Onde há incerteza, o campo gab fica "" e a questão
   é marcada com dica:"verificar gabarito oficial Cesgranrio".
============================================================================= */

const BANCO = [];

// Helper para empurrar questões de forma legível
function Q(o){ BANCO.push(o); }

/* =============================================================================
   PETROBRAS 2018.1 — ENG. PROCESSAMENTO JR  (prova 8)  — ESPECÍFICAS q21-70
   Bloco1 q21-40 (Balanços/Termo) · Bloco2 q41-55 (Op.Unit/Fluidos) · Bloco3 q56-70 (Calor/Cinética)
============================================================================= */
Q({prova:"pb2018",ano:2018,banca:"PB",n:21,materia:"balancos",tipo:"calc",
  enun:"A 40ºC a densidade do etanol é 0,8 kg/L. Uma solução foi preparada diluindo 200 mL de etanol em água até completar 1 L de solução. A concentração da solução (mol/L) é aproximadamente: (massa molar etanol 46 g/mol)",
  alt:["1,84","3,48","11,5","17,4","86,9"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:22,materia:"balancos",tipo:"calc",
  enun:"CO2 armazenado a 273 K e 100 kPa (gás ideal). Sua densidade (kg/m³) é aprox.: (MM CO2=44 g/mol; R=8,31 Pa·m³/mol·K)",
  alt:["0,40","0,51","1,00","1,94","2,12"],gab:"D"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:23,materia:"balancos",tipo:"calc",
  enun:"Em equilíbrio, 3 mol de N2 estão saturados com 2 mol de vapor d'água a 333 K. Pvap da água = 20 kPa. A pressão parcial do N2 (kPa) é:",
  alt:["13","23","30","40","80"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:24,materia:"balancos",tipo:"calc",
  enun:"Pvap da água a 30ºC = 4,30 kPa. Em ambiente com umidade relativa 60%, a pressão parcial do vapor no ar (kPa) é:",
  alt:["2,15","2,58","5,50","7,17","7,82"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:25,materia:"balancos",tipo:"calc",
  enun:"Corrente líquida 20,0 kg/h (60% óleo, 40% água) separada em duas correntes: uma 95,4% óleo e outra 1,00% óleo. Vazão mássica da corrente com menor teor de óleo (kg/h):",
  alt:["3,20","5,60","7,50","12,5","15,8"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:26,materia:"balancos",tipo:"calc",
  enun:"Corrente aquosa 10 kg/h com sal pouco solúvel. Filtração dá filtrado só de água 6 kg/h; o concentrado vai a evaporação dando 1 kg/h de vapor d'água e outra corrente só com o sal. Concentração % de sal na corrente inicial:",
  alt:["10%","30%","50%","70%","90%"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:27,materia:"balancos",tipo:"calc",
  enun:"Combustão completa de 220 kg/h de propano (C3H8) com ar (20% O2 em massa). Vazão mássica de ar necessária (kg/h): (MM C3H8=44; O2=32)",
  alt:["400","800","2000","4000","8000"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:28,materia:"balancos",tipo:"calc",
  enun:"Descarbonatação: 200 kg/h de gás com 22% m/m de CO2 borbulhado em Ca(OH)2. Rendimento 90%. Taxa de formação de CaCO3 (kg/h): (MM CO2=44; CaCO3=100)",
  alt:["50","90","100","200","450"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:29,materia:"termo",tipo:"conc",
  enun:"Expansão isotérmica de gás ideal recebendo 300 kJ. Trabalho de expansão e variação de energia interna, respectivamente:",
  alt:["−300 kJ e 0 kJ","−300 kJ e 300 kJ","0 kJ e −300 kJ","−600 kJ e 0 kJ","−600 kJ e −300 kJ"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:30,materia:"termo",tipo:"calc",
  enun:"Elevar 200 kg de etanol de 30 para 40ºC. Cp=2,4 J/(g·K). Calor necessário (kJ):",
  alt:["2,4×10³","4,8×10³","6,4×10³","8,2×10³","8,8×10³"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:31,materia:"termo",tipo:"calc",
  enun:"Ciclo frigorífico ideal com freon-12: vazão 0,02 kg/s, coef. de eficácia 3,5 kJ/kg e trabalho no compressor 30 kJ/kg. Capacidade de refrigeração (kW):",
  alt:["0,6","2,1","2,4","3,0","4,2"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:32,materia:"termo",tipo:"conc",
  enun:"Sobre 1ª e 2ª Leis: I-integral cíclica do calor ∝ integral cíclica da energia interna; II-energia interna é extensiva e soma cinética+potencial; III-bomba de calor opera em ciclo, requer trabalho e transfere calor de corpo frio para quente. Correto APENAS:",
  alt:["I","II","III","I e III","II e III"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:33,materia:"termo",tipo:"calc",
  enun:"Cilindro-pistão: volume 0,5 m³ suportando massa de 10 kg; transfere-se calor até volume 0,7 m³; trabalho realizado 500 N·m. Área do pistão (m²): (g=10 m/s²)",
  alt:["0,02","0,03","0,04","0,05","0,06"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:34,materia:"termo",tipo:"calc",
  enun:"Pneu: ar inicial 25ºC e pressão manométrica 200 kPa; no fim pressão 220 kPa; Patm local 98 kPa; volume constante, gás ideal. Variação aproximada de temperatura (ºC):",
  alt:["330","30","20","−20","−30"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:35,materia:"termo",tipo:"calc",
  enun:"H2O(g) ⇌ 2H2 + O2 a 25ºC. ΔG° aproximado (kJ): (dados de entalpia/entropia de formação fornecidos)",
  alt:["457166","457","145","−457","−145"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:36,materia:"termo",tipo:"calc",
  enun:"Ar escoa a 400 m/s, 27ºC (gás ideal). Temperatura de estagnação isentrópica (K): (Cp0=1,004 kJ/kg·K)",
  alt:["452,14","379,68","241,34","120,76","87,5"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:37,materia:"termo",tipo:"conc",
  enun:"Equações de Maxwell. Dado dG=−sdT+VdP, a relação (∂s/∂P)_T para gás com equação P(v−a)=RT corresponde a:",
  alt:["R/T","−R/T","R/P","−R/P","0"],gab:"D"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:38,materia:"termo",tipo:"calc",
  enun:"Equilíbrio químico: ΔG°=−630.000 kJ/kmol a 27ºC. Valor aproximado de ln(K): (R=8,3145 kJ/kmol·K)",
  alt:["252,58","195,60","−190,73","−195,60","−252,58"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:39,materia:"termo",tipo:"calc",
  enun:"Difusor isentrópico: T ambiente 250 K, Patm 60 kPa, T estagnação 500 K. Pressão de estagnação na entrada do coletor (kPa): (k=1,4; (2)^3,5=11,30)",
  alt:["945,3","867,1","678,8","336,4","128,9"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:40,materia:"termo",tipo:"conc",
  enun:"Diagrama P×T de uma substância (eixos log p / θ). Sobre o estado físico, é correto afirmar que:",
  alt:["estado gasoso para p<0,1 MPa e T=−120ºC","estado líquido mantendo p=1 MPa e T acima de 0ºC","o processo mantendo p=0,1 MPa e T de −120 para −40ºC é fusão","ponto triplo abaixo de 1 MPa e abaixo de −40ºC","ponto crítico abaixo de −40ºC"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:41,materia:"fluidos",tipo:"calc",
  enun:"Manômetro em U com pistão (área 0,1 m²); h1=0,05, h2=0,12, h3=0,02 m; Patm=100000 Pa; ρágua=1000, ρHg=13600 kg/m³. Força no pistão para equilibrar a atmosfera: (g=10 m/s²)",
  alt:["11.582 N","11.562 N","115.620 N","1.582 N","115.820 N"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:42,materia:"fluidos",tipo:"conc",
  enun:"Medidor baseado em redução de área, custo de aquisição elevado mas baixo custo operacional. Tipo de medidor e dependência vazão×queda de pressão:",
  alt:["Placa de orifício e linear","Placa de orifício e não linear","Bocal medidor e linear","Tubo de Venturi e linear","Tubo de Venturi e não linear"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:43,materia:"opunit",tipo:"conc",
  enun:"Dois diagramas Txy (benzeno-tolueno) em pressões P e P* diferentes, regiões I a V. A região de coexistência de 2 fases para a MAIOR das duas pressões é:",
  alt:["I","II","III","IV","V"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:44,materia:"opunit",tipo:"conc",
  enun:"Separação gás-sólido em ciclone. É correto afirmar que a:",
  alt:["força centrífuga (forte) atua radialmente e a gravitacional (fraca) verticalmente","força centrífuga diminui com aumento da velocidade tangencial","formação de vórtice conduz partículas ao overflow","eficiência aumenta com aumento do diâmetro da torre","eficiência aumenta com diminuição do tamanho da partícula"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:45,materia:"opunit",tipo:"conc",
  enun:"Absorção gasosa em coluna recheada (vapor diluído). Sobre NTU e HTU:",
  alt:["HTU ∝ coef. global de transf. de massa na fase gasosa","HTU ∝ área de empacotamento por volume","HTU ∝ inversamente à vazão de gás","NTU aumenta quando a conc. de saída do gás se aproxima do equilíbrio","NTU diminui quando a conc. de entrada do gás se aproxima do equilíbrio"],gab:"D"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:46,materia:"opunit",tipo:"conc",
  enun:"Parâmetros mínimos em destilação multicomponente (estágios de equilíbrio):",
  alt:["o Nmín é obtido a Rmín","Nmín independe da volatilidade relativa entre os chaves","Nmín depende do grau de separação entre os componentes chave","obtenção de Nmín supõe retirada total de produto","uma coluna real pode operar a Rmín"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:47,materia:"opunit",tipo:"conc",
  enun:"Destilação azeotrópica etanol-água com benzeno (arrastador). A corrente de fundo da 1ª coluna pode ser descrita como:",
  alt:["água (~100%)","azeótropo binário etanol-água","azeótropo binário benzeno-água","azeótropo ternário","etanol (~100%)"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:48,materia:"opunit",tipo:"calc",
  enun:"Destilação flash binária 50/50 a 0,101 MPa, curva de equilíbrio dada. Se V/F=0,2, as composições xB e yD aproximadas são:",
  alt:["xB=0,80; yD=0,90","xB=0,50; yD=0,50","xB=0,46; yD=0,66","xB=0,32; yD=0,54","xB=0,10; yD=0,20"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:49,materia:"opunit",tipo:"conc",
  enun:"Colunas de pratos — característica típica:",
  alt:["ocorrência de 'formação de canais'","operar com taxas elevadas de líquido sem inundação","lidar bem com sistemas que formam espuma","dificuldade de limpeza com líquidos com sólidos dispersos","menor queda de pressão do gás vs colunas recheadas"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:50,materia:"opunit",tipo:"calc",
  enun:"Diagrama triangular (A soluto, B diluente, S solvente), ponto nominal sobre uma linha de amarração. % mássico de B na fase de extrato é aprox.:",
  alt:["0%","16%","42%","97%","64%"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:51,materia:"opunit",tipo:"calc",
  enun:"McCabe-Thiele benzeno-tolueno, alimentação líquido em ponto de bolha, condensador total. Reta de retificação intercepta y=x em x=0,98; reta de esgotamento em (0,44;0,56). Razão de refluxo L/D:",
  alt:["0,0","1,5","2,5","3,5","4,5"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:52,materia:"fluidos",tipo:"conc",
  enun:"Números adimensionais (VD/μ; V²/Lg; V/c; V²L/σ; P/ρV²). É correto que:",
  alt:["o número de Weber é o único que contém P","o número de Reynolds é o único que contém σ","o Reynolds dá a razão entre força de gravidade e inércia","um adimensional muda de valor se calculado em sistemas de unidades diferentes","os cinco adimensionais são independentes"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:53,materia:"fluidos",tipo:"calc",
  enun:"Escoamento em tubo D=0,1 m, Q=0,1 m³/s, ρ=1000 kg/m³, μ=0,00001 Pa·s. Regime e Reynolds:",
  alt:["laminar, Re=1×10⁷","turbulento, Re=1×10⁸","turbulento, Re=1,27×10⁸","transição, Re=1,27×10⁸","transição, Re=1×10⁸"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:54,materia:"fluidos",tipo:"calc",
  enun:"Bomba H=H0−aQ² (H0=100 m, a=10⁵ s²/m⁵) transporta fluido entre tanques com 10 m de desnível; perdas desprezíveis; diâmetro constante. Vazão (m³/s) e carga no ponto de operação (m):",
  alt:["3×10⁻³ e 10","3×10⁻¹ e 100","9×10⁻² e 10","9×10⁻³ e 90","3×10⁻² e 10"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:55,materia:"fluidos",tipo:"conc",
  enun:"Cavitação em bombas. I-maior altura manométrica de sucção → maior NPSH requerido; II-NPSH disponível aumenta quando a vazão aumenta; III-para evitar cavitação, NPSH disponível > NPSH requerido. Correto:",
  alt:["II, apenas","III, apenas","I e II, apenas","I e III, apenas","I, II e III"],gab:"B"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:56,materia:"calor",tipo:"calc",
  enun:"Corpo negro a 127ºC emite por radiação. Energia radiante (kW/m²): (σ=5,7×10⁻⁸ W/m²K⁴)",
  alt:["0,28","0,50","0,84","1,12","1,46"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:57,materia:"calor",tipo:"calc",
  enun:"Placa 2 m², superfície a 180ºC, ar a 30ºC, só convecção, h=25 W/m²·ºC. Fluxo de calor (W):",
  alt:["1.200","1.500","3.000","5.000","7.500"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:58,materia:"calor",tipo:"conc",
  enun:"Tubulação cilíndrica (raios ri, re; comprimento L; k). A resistência térmica associada corresponde a:",
  alt:["ln(re/ri)/(2πkL)","2πkL/ln(re/ri)","2π·ln(re/ri)/(kL)","(re/ri)/(2πkL)","2πkL/(re/ri)"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:59,materia:"calor",tipo:"calc",
  enun:"Permutador contracorrente: fluido quente M0 kg/s, refrigerante 4M0 kg/s, construído para que |ΔTq|=ΔTf. Razão CQ/CF:",
  alt:["0,25","1,00","3,00","4,00","5,00"],gab:"D"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:60,materia:"termo",tipo:"calc",
  enun:"Refrigerador com COP η0 quando TQ=3·TF. Se TQ passa a 5·TF, o novo COP é:",
  alt:["η0/2","3η0/5","5η0/6","η0","5η0/3"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:61,materia:"controle",tipo:"conc",
  enun:"Sistema de controle com FTMA que possui um zero positivo; para elevados ganhos de malha aberta, em malha fechada será:",
  alt:["instável","estável","subamortecido","oscilatório puro","sobreamortecido"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:62,materia:"controle",tipo:"conc",
  enun:"G(s)=k(s+z)/(s+p), k>1 e z<p. Resposta a sinal senoidal para altas frequências:",
  alt:["atenuada com fase negativa","atenuada com fase nula","amplificada com fase positiva","amplificada com fase negativa","amplificada com fase nula"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:63,materia:"controle",tipo:"calc",
  enun:"G(s)=kωn²/(s²+2ξωn s+ωn²). Valor inicial da resposta a um doublê unitário, sistema em repouso:",
  alt:["kωn/2ξ","kωn²","k","1","0"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:64,materia:"controle",tipo:"calc",
  enun:"Malha fechada: controlador ganho 1, planta 1/(2s). Erro em regime permanente para entrada rampa unitária:",
  alt:["0","1","2","3","∞"],gab:"C"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:65,materia:"controle",tipo:"conc",
  enun:"Sistema linear com dois polos nulos e ganho unitário positivo. Com realimentação negativa e controlador proporcional, o comportamento em malha fechada é:",
  alt:["subamortecido","superamortecido","exponencial crescente","criticamente amortecido","oscilatório não amortecido"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:66,materia:"calor",tipo:"calc",
  enun:"Depósito de espessura D num tubo (raio R), condutividade 5× menor que a do fluido. Razão D/R para depósito e fluido terem a mesma resistência térmica:",
  alt:["36","6","1","1/6","1/36"],gab:"D"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:67,materia:"calor",tipo:"calc",
  enun:"Fluxo forçado de fluido frio atinge parede quente. Número de Nusselt = 0,20. Razão h/k (1/m) para parede de 10 cm:",
  alt:["2,0","0,5","0,2","0,1","0,02"],gab:"A"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:68,materia:"cinetica",tipo:"calc",
  enun:"Reação X+Y; dados de velocidade inicial: (−rX)=5 p/ (1,1); 10 p/ (1,2); 20 p/ (2,1) [CX0,CY0]. A equação de velocidade pode ser:",
  alt:["−rX=2KCy²","−rX=KCx²","−rX=KCxCy","−rX=2KCy²Cx","−rX=KCx²Cy"],gab:"E"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:69,materia:"cinetica",tipo:"calc",
  enun:"Arrhenius: k=5×10⁻⁴/s a 20ºC, Ea=100 kJ/mol. k a 27ºC (s⁻¹): (R=8,31; ln(5×10⁻⁴)=−7,6)",
  alt:["e^−12,4","e^−10,2","e^−8,8","e^−6,4","e^−4,7"],gab:"D"});
Q({prova:"pb2018",ano:2018,banca:"PB",n:70,materia:"cinetica",tipo:"conc",
  enun:"Sobre reatores. É correto afirmar que os reatores:",
  alt:["Batch permitem produção contínua","CSTR têm escoamento não contínuo","Tubulares (PFR) têm reagentes fluidos bombeados por tubulação","CSTR e Batch permitem entrada de reagente durante a reação","CSTR apresentam taxas de reação diferentes ao longo do reator"],gab:"C"});

/* =============================================================================
   PETROBRAS 2010 (PSP RH 2/2010) — ENG. PROCESSAMENTO JR — ESPECÍFICAS q1-70
   (prova só de conhecimentos específicos; pesos variavam, mas aqui tratamos 1 ponto)
============================================================================= */
Q({prova:"pb2010",ano:2010,banca:"PB",n:1,materia:"calor",tipo:"conc",
  enun:"Sobre o coeficiente global de transferência de calor U: I-sempre calculado na área externa do tubo interno; II-calculado diretamente pelo nº de Nusselt; III-inverso do somatório das resistências × áreas; IV-com incrustação, U e a resistência à condução diminuem; V-taxa = U × área perpendicular × ΔT. Correto APENAS:",
  alt:["I e II","II e V","III e IV","III e V","I, II e IV"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:2,materia:"opunit",tipo:"conc",
  enun:"Escolha de solvente na extração líquido-líquido. São corretas APENAS as características: I-alta seletividade; II-alta capacidade de solubilização; III-baixa viscosidade; IV-elevada pressão de vapor; V-baixa diferença de densidade entre fases.",
  alt:["I e II","I e V","II e IV","III e IV","II, III e V"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:3,materia:"calor",tipo:"conc",
  enun:"Leis da termodinâmica em trocadores. É correto que:",
  alt:["se um fluido muda de fase, o outro fica sujeito à menor diferença de temperatura","num trocador contracorrente de comprimento infinito, se Cfrio<Cquente, o fluido frio é aquecido até a T de entrada do quente","o fluido que experimenta maior variação de T é o de maior capacidade calorífica","a MLDT negativa é possível de ser obtida","a máxima taxa de calor é dada pela maior capacidade calorífica × máxima diferença de T"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:4,materia:"opunit",tipo:"calc",
  enun:"Destilar 200 mol/h benzeno-tolueno (60/40), destilado 95% benzeno, fundo 5% benzeno, alimentação líq. saturado, volatilidade relativa=5. Pelo McCabe-Thiele, a razão de refluxo mínima é:",
  alt:["menor que 1","entre 1 e 2","entre 2 e 3","entre 3 e 4","entre 4 e 5"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:5,materia:"opunit",tipo:"calc",
  enun:"(mesma coluna) Vazões molares aproximadas (mol/h) dos produtos de topo e fundo, respectivamente:",
  alt:["78 e 122","80 e 121","111 e 90","121 e 80","122 e 78"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:6,materia:"opunit",tipo:"calc",
  enun:"(mesma coluna) Pela equação de Fenske, o nº de estágios a refluxo total é:",
  alt:["menor que 5","6","7","8","maior que 9"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:7,materia:"controle",tipo:"conc",
  enun:"Variável em malha fechada com overshoots elevados; controlador PI Gc=Kc(1+1/τI·s). A resposta fica MENOS oscilatória com:",
  alt:["diminuição de Kc e de τI","diminuição de Kc e aumento de τI","aumento de Kc, mantendo τI fixo","aumento de Kc e de τI","aumento de Kc e diminuição de τI"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:8,materia:"controle",tipo:"calc",
  enun:"Malha fechada com controlador P: Y(s)/L(s)=−4/(s²+2s+2); L(s)=3/s; set-point constante. O offset é:",
  alt:["0","3","6","12","∞"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:9,materia:"termo",tipo:"conc",
  enun:"Ciclo de potência a vapor sem irreversibilidades, sem perda de carga, turbina e bomba isentrópicas. Trata-se de ciclo:",
  alt:["regenerativo","de Carnot","de reaquecimento","supercrítico","ideal de Rankine"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:10,materia:"termo",tipo:"conc",
  enun:"Fluido escoa por restrição (orifício/válvula/tampão poroso) sem variação de energia cinética/potencial e sem troca de calor. O processo é:",
  alt:["isotérmico","isentálpico","isentrópico","isobárico","isocórico"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:11,materia:"termo",tipo:"conc",
  enun:"Sobre pressão de vapor de um líquido, é INCORRETO afirmar que:",
  alt:["a Pvap aumenta linearmente com a temperatura","a curva Pvap×T separa fases; acima dela há líquido e vapor","Pvap pode ser estimada por equações empíricas","a equação de Clapeyron relaciona Pvap e entalpia de vaporização","o líquido ferve quando sua Pvap iguala a pressão a que está submetido"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:12,materia:"termo",tipo:"calc",
  enun:"Gás ideal comprimido isotermicamente de (p1,V1) para (p2,V2). Variação de energia interna (J/mol):",
  alt:["p2·V1 − p1·V2","p1·V2 − p2·V1","0","R·T","(p2V1/p1V2)·RT"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:13,materia:"fluidos",tipo:"conc",
  enun:"Quatro recipientes abertos com o mesmo líquido e mesma altura de coluna. Conclui-se que a pressão no fundo:",
  alt:["X é maior","Y é maior","Z é maior","W é maior","X, Y, Z e W são iguais"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:14,materia:"fluidos",tipo:"calc",
  enun:"Oleoduto 6 km, gradiente 40 Pa/m, ρ=800 kg/m³, saída 14 m acima da entrada, g=10 m/s². Perda de carga total (m):",
  alt:["−44","−16","16","28","E) 44"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:15,materia:"fluidos",tipo:"conc",
  enun:"Fluido newtoniano incompressível escoa para cima (queda de pressão x, perda de carga y) e depois para baixo (z e w). Conclui-se que:",
  alt:["x < z","x = z","x > z","y > w","y < w"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:16,materia:"calor",tipo:"calc",
  enun:"Tanque com água a 100ºC; parede 20 cm, k=10 W/m·K; ambiente 20ºC; h interno 50, h externo 25 W/m²·K. Perda de calor (W/m²):",
  alt:["900","1.000","1.333","1.500","2.000"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:17,materia:"opunit",tipo:"conc",
  enun:"Sobre colunas de recheio. São corretas APENAS: I-diâmetro <2,5 ft deve ser recheada; II-misturas corrosivas em recheio; III-misturas com espuma em recheio; IV-diâmetro ~5× a dimensão do recheio; V-eficiência depende de vazão e distribuição do líquido.",
  alt:["I, II e IV","I, II e V","I, III e IV","III, IV e V","II, III, IV e V"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:18,materia:"controle",tipo:"calc",
  enun:"Reator CSTR: entrada/saída 295/320 K; em t=0 entrada sobe a 300 K; saída estaciona em 330 K. Ganho de processo (adimensional):",
  alt:["33/30","1/3","1","2","66"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:19,materia:"controle",tipo:"conc",
  enun:"Equação característica 4s³+8s²+5s+5=0; arranjo de Routh construído. Pelo critério de Routh, o sistema tem:",
  alt:["par de raízes no semiplano direito e uma no esquerdo","uma raiz no esquerdo e um par sobre o eixo imaginário","uma raiz no direito e um par no esquerdo","três raízes no direito","três raízes no esquerdo"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:20,materia:"controle",tipo:"conc",
  enun:"Diagrama de blocos malha fechada com controlador P (Kc>0). Para degraus em L(t), a resposta Y(t) será:",
  alt:["mais rápida e menos sensível ao distúrbio que em malha aberta","mais rápida e mais sensível que em malha aberta","mais lenta e mais sensível que em malha aberta","mais lenta e menos sensível que em malha aberta","tão rápida e sensível quanto em malha aberta"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:21,materia:"termo",tipo:"conc",
  enun:"Refrigerador ideal em ciclo de Carnot (absorve QF em TF, rejeita QQ em TQ). Coeficiente de performance ω:",
  alt:["TQ/(TQ−TF)","(TQ+TF)/TF","(TQ−TF)/TQ","(TQ−TF)/TF","TF/(TQ−TF)"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:22,materia:"fluidos",tipo:"conc",
  enun:"Ponto de trabalho de bomba. Para modificá-lo, são corretas APENAS as ações: I-fechar parcialmente válvula; II-mudar pressão do reservatório de descarga; III-instalar a bomba em nível mais baixo; IV-aumentar rotação do rotor.",
  alt:["I e II","I e IV","II e III","III e IV","I, II e IV"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:23,materia:"termo",tipo:"conc",
  enun:"Van der Waals para NH3 (a=4.233, b=3,73×10⁻⁵ m³/mol). Unidades SI do parâmetro a:",
  alt:["J·m³·mol⁻²","Pa·mol²·m⁻³","Pa·m³·mol⁻²... na verdade","N·m³·mol⁻²","J·m⁶·mol⁻² (na forma P=... o produto a/V² tem unidade de pressão → a em Pa·m⁶·mol⁻²=J·m³·mol⁻²)"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:24,materia:"fluidos",tipo:"calc",
  enun:"Dois reservatórios abertos; furo de diâmetro x a altura HA; furo 3x a altura HB. Líquido ideal. Razão QA/QB:",
  alt:["(HA/HB)^0,5 / 9","(HA/HB)/9","((HA/HB)/3)^0,5","(HA/HB)/3","3·(HA/HB)^0,5"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:25,materia:"fluidos",tipo:"conc",
  enun:"Piezômetro, Tubo de Pitot e Tubo de Venturi medem, respectivamente:",
  alt:["densidade, pressão estática e velocidade média","densidade, pressão dinâmica e vazão","viscosidade, pressão dinâmica e velocidade média","viscosidade, pressão total e velocidade média","pressão estática, pressão de estagnação e vazão"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:26,materia:"fluidos",tipo:"calc",
  enun:"Fluido newtoniano entre placas (2h), perfil v=vmax[1−(y/h)²]. Módulo da tensão cisalhante a h/10 das placas:",
  alt:["0,1·vmax/h","0,2·μ·vmax/h","1,8·μ·vmax/h","2,0·vmax·μ/h","2,2·vmax·μ/h"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:27,materia:"calor",tipo:"conc",
  enun:"Parede composta (sólidos A,B,C,D), fluxo em x. Hipóteses: I-superfícies normais a x isotérmicas; II-paralelas a x adiabáticas; III-normais a x adiabáticas. Correta(s):",
  alt:["I, apenas","III, apenas","I e II, apenas","II e III, apenas","I, II e III"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:28,materia:"calor",tipo:"conc",
  enun:"Métodos MLDT e ε-NUT. Correto APENAS: I-efetividade >2 p/ viabilidade; II-maior NUT → maior área; III-MLDT é a mesma independente da orientação; IV-MLDT em ºC precisa somar 273,15; V-contracorrente requer menor área.",
  alt:["II e V","III e IV","I, II, e III","I, IV e V","II, III e V"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:29,materia:"controle",tipo:"conc",
  enun:"Sistema de 1ª ordem, degrau unitário em t=0. A constante de tempo τp corresponde ao tempo em que Y(t):",
  alt:["começou a responder","sofreu ~63% da variação total","sofreu ~87% da variação total","sofreu ~99% da variação total","alcançou ±5% do estacionário e permaneceu"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:30,materia:"controle",tipo:"conc",
  enun:"G1=1/(s+1) e G2=2/(5s+1) somados (Y=G1·U+G2·U). A função Y(s)/U(s) tem polinômios no numerador e denominador de ordens, respectivamente:",
  alt:["0 e 1","0 e 2","1 e 1","1 e 2","2 e 2"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:31,materia:"balancos",tipo:"calc",
  enun:"Combustão de etanol com 20% de excesso de O2, 100 kmol de etanol. Conclui-se que:",
  alt:["consumidos 120 kmol de O2","consumidos 360 kmol de O2","produzidos 100 kmol de CO2","produzidos 120 kmol de água","kmol de CO2 = kmol de O2 consumido"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:32,materia:"balancos",tipo:"calc",
  enun:"Mistura 52% propano e 48% butano (base molar). Composição mássica aproximada:",
  alt:["38,2% propano / 61,8% butano","45,1% / 54,9%","49,5% / 50,5%","50,0% / 50,0%","52,0% / 48,0%"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:33,materia:"balancos",tipo:"conc",
  enun:"Trocador aquece ar e resfria gás (metano + vapor d'água); ataque corrosivo na parte fria. Correto APENAS: I-parte fria na menor T possível, não atingindo orvalho; II-T da parte fria tal que Pvap água não iguale a parcial; III-T da parte quente tal que Pvap CH4 não iguale a parcial; IV-sempre há condensação de CH4 e água.",
  alt:["I","II","IV","I e III","II e III"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:34,materia:"fluidos",tipo:"conc",
  enun:"Reograma (tensão × taxa de cisalhamento) para X(15 e 85ºC), Y e Z. Correto APENAS: I-X é newtoniano; II-X é líquido; III-Y é dilatante; IV-Z é pseudoplástico.",
  alt:["I e II","I e III","II e IV","III e IV","I, II e IV"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:35,materia:"termo",tipo:"conc",
  enun:"Entalpia de vaporização ΔHvap (vapor ideal, volume do líquido desprezível). Expressão correta:",
  alt:["−R·d(lnPsat)/dT","−R·dPsat/dT","−R·dPsat/d(1/T)","−R·d(lnPsat)/d(1/T)","−R·d(lnPsat)/d(lnT)"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:36,materia:"fluidos",tipo:"conc",
  enun:"Escoamento irreversível adiabático de fluido incompressível em tubo de seção constante, estacionário. Conclui-se que a:",
  alt:["temperatura diminui no sentido do escoamento","pressão aumenta no sentido do escoamento","variação de entalpia é maior que zero","velocidade do fluido é constante","variação de entropia do fluido é zero"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:37,materia:"fluidos",tipo:"calc",
  enun:"Reservatório com sifão (descarga a Patm), superfície a altura H acima da descarga, líquido ideal com Pvap=pv. Para não interromper o escoamento, o líquido deve ficar abaixo de um plano cuja cota em relação à superfície livre é:",
  alt:["2H−(pv−patm)/(ρg)","H−(patm−pv)/(ρg)","H−(pv−patm)/(ρg)","(patm−pv)/(ρg)","(pv−patm)/(ρg)"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:38,materia:"calor",tipo:"conc",
  enun:"Sobre condução. Correto APENAS: I-k é intrínseca e independe da T; II-Fourier q=−k dT/dx, sinal negativo pois calor vai no sentido de T decrescente; III-k anisotrópica quando independe da direção; IV-k em sólidos > líquidos > gases (espaçamento intermolecular).",
  alt:["I e II","II e IV","III e IV","I, III e IV","II, III e IV"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:39,materia:"calor",tipo:"calc",
  enun:"Serpentina 5 m² com vapor saturado a 120ºC; fluido no tanque a 40ºC; resistência condutiva ~nula; hv=10 kW/m²K, hs=200 W/m²K; ΔHvap=2 MJ/kg. Consumo de vapor (kg/min):",
  alt:["1,5","2,4","3,5","4,1","8,3"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:40,materia:"balancos",tipo:"calc",
  enun:"Ar úmido 75ºC, 1 bar, 30% umidade relativa, 1.000 m³/h. Pvap água a 75ºC=0,386 bar; R=0,0831. Vazão molar de ar seco (kmol/h) está entre:",
  alt:["20 e 23","23,1 e 26","26,1 e 29","29,1 e 32","32,1 e 35"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:41,materia:"balancos",tipo:"calc",
  enun:"CH4 + ½O2 → CH3OH, com 1,5 kmol CH4 e 1,0 kmol O2. Rendimento teórico de CH3OH e reagente limitante:",
  alt:["1,0 kmol e O2","1,5 kmol e O2","1,0 kmol e CH4","1,5 kmol e CH4","2,0 kmol e CH4"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:42,materia:"balancos",tipo:"conc",
  enun:"Ar com composição mássica 21% O2 / 79% N2, MM média ~29 kg/kmol. Conclui-se que:",
  alt:["a composição volumétrica é ar respirável","composição mássica e volumétrica são sempre iguais no ar","massa de N2 em 50 kmol de ar ≈ 2.230 kg","massa de O2 em 100 kmol de ar < 580 kg","% volumétricos ≈ 19% O2 e 81% N2"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:43,materia:"opunit",tipo:"conc",
  enun:"Coluna 100 kg/h (50% A/B), destilado 98% A, resíduo 94% B, vapor que sai = 80% da alimentação, com refluxo. Conclui-se que o(a):",
  alt:["refluxo pode ser determinado pelo balanço global","refluxo de destilado ≈ 20 kg/h","vazão de destilado > vazão de cauda","razão de refluxo R/D ≈ 0,7","vazão de fundo da coluna é 48 kg/h"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:44,materia:"termo",tipo:"conc",
  enun:"Turbocompressor adiabático comprime ar antes da câmara de combustão. O trabalho requerido é dado pela variação da função termodinâmica:",
  alt:["Entropia","Entalpia","Energia livre de Helmholtz","Energia livre de Gibbs","Energia interna"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:45,materia:"fluidos",tipo:"conc",
  enun:"Escoamento de fluidos. São corretas APENAS: I-turbulento tem perfil paraboloide; II-laminar transfere momento só por difusão; III-turbulento é sempre transiente; IV-flutuações máximas no eixo central em tubo plenamente turbulento.",
  alt:["I e II","I e IV","II e III","III e IV","I, II e IV"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:46,materia:"fluidos",tipo:"conc",
  enun:"Dois fluidos newtonianos incompressíveis, mesma vazão/tubulação, regime turbulento; segundo tem 1/3 da viscosidade e metade da densidade. O fator de atrito é:",
  alt:["maior para o mais viscoso","maior para o menos viscoso","maior para o mais denso","menor para o menos denso","o mesmo para os dois fluidos"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:47,materia:"calor",tipo:"conc",
  enun:"Convecção forçada interna em tubos circulares. É INCORRETO afirmar que a(o):",
  alt:["parede aquecida eletricamente impõe fluxo de calor constante","velocidade e diâmetro afetam o coef. de convecção interna","imposição simultânea de fluxo e temperatura constantes aumenta o coef. de convecção","rugosidade na parede intensifica a transferência","coef. local independe da posição axial no escoamento plenamente desenvolvido"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:48,materia:"calor",tipo:"conc",
  enun:"Trocadores de calor (contracorrente/cocorrente). É INCORRETO afirmar que num arranjo:",
  alt:["contracorrente, T quente entrada > T frio saída sempre","contracorrente, impossível T quente saída < T frio entrada","contracorrente, T quente saída pode ser < T frio saída","cocorrente, as T de saída podem ser iguais se comprimento infinito","cocorrente, T quente saída pode ser < T frio saída"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:49,materia:"controle",tipo:"conc",
  enun:"Resposta Y(t) a degrau unitário mostra overshoot; Y(s)/U(s)=2/(s²+2ξs+1). Conclui-se que:",
  alt:["ξ<0","ξ=0","0<ξ<1","ξ=1","ξ>1"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:50,materia:"opunit",tipo:"calc",
  enun:"100 mol/h mistura amônia-ar (15% amônia) em absorção contracorrente, recuperar 95% da amônia, L/G=2. Razão molar de amônia no produto líquido e vazão do solvente (mol/h):",
  alt:["0,009 e 85","0,077 e 85","0,084 e 170","0,084 e 200","0,850 e 100"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:51,materia:"opunit",tipo:"calc",
  enun:"Extrator 100 kg/h solução 2% soluto → rafinado 1%; solvente e água imiscíveis; K=4; aprox. 98/0,99≈99. Vazão de solvente (kg/h):",
  alt:["21","22","23","24","25"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:52,materia:"termo",tipo:"calc",
  enun:"Reator com 100 mol de gás ideal a 10⁵ Pa e T1; (∂S/∂V)=100 J·m·K⁻¹; R=8,3. Temperatura T1 (K):",
  alt:["100","200","273","1.000","2.000"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:53,materia:"termo",tipo:"conc",
  enun:"Trabalho de expansão de gás ideal em sistema fechado, γ=Cp/Cv. Expressão de W:",
  alt:["(P2V2−P1V1)/(γ−1)","(P1V1−P2V2)/(γ−1)","(γ−1)/(P2V2−P1V1)","(P2V2−P1V1)/(γ−1)^γ","(P2V2−P1V1)/(γ·Cp)"],gab:"B"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:54,materia:"cinetica",tipo:"calc",
  enun:"Reação exotérmica A+B→C em CSTR; ΔHr=500 kJ/kmol; entrada 25ºC estequiométrica; conversão 100%; 100 kmol/h de C, Cp=20 kJ/kmol·K; área 20 m², ambiente 15ºC, U=400 kJ/h·m²·K. Temperatura de saída (ºC):",
  alt:["16","18","22","27","30"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:55,materia:"fluidos",tipo:"calc",
  enun:"Recipiente com água (1000), óleo (800) e ar (1,2 kg/m³); Patm=10⁵ Pa, g=10 m/s²; coluna de 1 m água e 2 m total. Pressão manométrica no fundo da coluna de óleo (Pa):",
  alt:["1.400","12.000","26.000","30.000","130.000"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:56,materia:"fluidos",tipo:"conc",
  enun:"Oleoduto com tubos D1,D2,D3 em série; D1/D2=3, D2/D3=1/2; mesma vazão. Sobre os Reynolds:",
  alt:["Re1/Re2=1/3 e Re2/Re3=1/2","Re1/Re3=2/3 e Re2/Re1=3","Re3/Re2=1/2 e Re1/Re3=3","Re2/Re3=2 e Re1/Re3=1/3","Re1/Re2=1/3 e Re3/Re2=3"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:57,materia:"calor",tipo:"conc",
  enun:"Escoamento forçado de ar sobre placa aquecida (camada limite térmica). Compreende-se que:",
  alt:["a movimentação do fluido é a única responsável pelo transporte de calor em toda a camada","o escoamento forçado impede convecção livre","efeitos difusivos predominam perto da placa e aumentam ao longo da espessura","radiação surge com T alta e varia linearmente com T","convecção térmica é transporte por difusão molecular e movimentação global do fluido"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:58,materia:"opunit",tipo:"conc",
  enun:"Coluna de pratos. É INCORRETO afirmar que:",
  alt:["flooding ocorre com líquido acima do aceitável (espuma/perda de carga)","weeping ocorre com velocidade de vapor muito baixa (gotejamento)","o líquido circula horizontalmente e a composição varia ao longo do prato","o arraste de líquido pela fase vapor é fator positivo que aumenta a variação de concentração","a operabilidade é definida pelas velocidades/fluxos de líquido e vapor"],gab:"D"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:59,materia:"calor",tipo:"calc",
  enun:"Forno aquece água em CT 1-2 contracorrente; água 3 kg/s, gases 2 kg/s; 100 tubos D=25 mm; Tent água 300 K, gases 800 K; cp 4200 e 1000; resistência da parede desprezível; hi=60, he=200 W/m²K; NUT=0,90; π≈3. U externo e comprimento por tubo:",
  alt:["40 W/m²K e 2,5 m","40 W/m²K e 5,0 m","46 W/m²K e 1,5 m","46 W/m²K e 3,0 m","46 W/m²K e 5,0 m"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:60,materia:"opunit",tipo:"conc",
  enun:"Coluna de destilação com NTU global líquida da seção de absorção Nox=∫dx/(x*−x). É correto que:",
  alt:["x* é a composição líquida em equilíbrio com o gás na interface","x é a composição líquida em equilíbrio com o vapor","xS = (V·y − D·xD)/L","xe = (V·y − D·xD)/L","xs é igual à composição do produto líquido da coluna"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:61,materia:"opunit",tipo:"calc",
  enun:"Tambor de flash 600 kmol/h mistura equimolar (1 e 2); fração molar do comp.1 na fase líquida 0,3; K=3. Vazões totais das fases vapor e líquido:",
  alt:["200 e 400","250 e 350","300 e 300","350 e 250","400 e 200"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:62,materia:"balancos",tipo:"conc",
  enun:"Reator catalítico 200 kmol/h C2H6 → C2H4 + H2, com reciclo; conversão global 100%, por passe 90%. Conclui-se que:",
  alt:["composição de P é 50% H2, 20% C2H6, 30% C2H4","vazão de P é 10 kmol/h de C2H6","vazão de C2H6 na entrada do reator = vazão de C2H4 em P","vazão de reciclo R ≈ 28 kmol/h","vazão E que alimenta o reator ≈ 220 kmol/h de C2H6"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:63,materia:"termo",tipo:"conc",
  enun:"Compressor adiabático reversível no diagrama de Mollier é representado por uma linha:",
  alt:["horizontal da T inicial à final","horizontal da P inicial à final","horizontal da entalpia inicial à final","inclinada da T inicial à final","vertical da P inicial à final (isentrópica = S constante → vertical no H-S)"],gab:"E"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:64,materia:"fluidos",tipo:"calc",
  enun:"Curva da bomba dada; curva do sistema H=10.000Q−10. Vazão de operação (m³/s):",
  alt:["1,5×10⁻³","2,3×10⁻³","3,7×10⁻³","4,0×10⁻³","5,0×10⁻³"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:65,materia:"fluidos",tipo:"conc",
  enun:"Escoamento/cavitação. São corretas APENAS: I-cavitação ocorre nas regiões de maior pressão; II-em bombas centrífugas ocorre na entrada do impelidor; III-NPSH requerido é energia mínima acima da Pvap no flange de sucção; IV-basta NPSH requerido > disponível.",
  alt:["I e II","I e IV","II e III","III e IV","I, II e IV"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:66,materia:"opunit",tipo:"calc",
  enun:"100 g ácido acético/água (60% água) + 140 g éter isopropílico, 20ºC/1 atm, diagrama ternário com linhas de amarração. Composições (fração mássica) das fases rafinado e extrato:",
  alt:["Rafinado 0,04 água/0,11 ác./0,85 éter — Extrato 0,30/0,65/0,05","Rafinado 0,11/0,04/0,85 — Extrato 0,30/0,05/0,65","Rafinado 0,04/0,30/0,66 — Extrato 0,70/0,05/0,25","Rafinado 0,70/0,25/0,05 — Extrato 0,04/0,11/0,85","Rafinado 0,04/0,11/0,85 — Extrato 0,70/0,25/0,05"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:67,materia:"opunit",tipo:"calc",
  enun:"Flash 200 mol/h (20% B, 50% P, 30% H); 90% do n-hexano na corrente líquida; KB=1,8, KP=0,9, KH=0,5. Vazão da corrente vapor (mol/h):",
  alt:["36,4","50,8","100","163,6","200"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:68,materia:"opunit",tipo:"calc",
  enun:"(mesmo flash) Composição molar da corrente líquida:",
  alt:["17% butano, 51% pentano, 32% hexano","32/17/51","51/32/17","60/20/20","70/10/20"],gab:"A"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:69,materia:"termo",tipo:"conc",
  enun:"Processo com variação NULA de entropia do sistema:",
  alt:["Reação HCl+NH3→NH4Cl em reator fechado e isolado","Vaporização de hidrocarboneto na T normal de ebulição","Expansão adiabática de refrigerante em uma turbina","Mistura de 2 gases ideais em recipiente isolado, volume total constante","Geração de energia elétrica em uma pilha"],gab:"C"});
Q({prova:"pb2010",ano:2010,banca:"PB",n:70,materia:"calor",tipo:"calc",
  enun:"Integração energética: corrente 1 (W1=100 kg/h, 200ºC, Cp=10) aquece correntes 2 e 3 em paralelo. Dados no fluxograma. Temperatura T7 da corrente 7 (ºC):",
  alt:["110","120","130","140","150"],gab:"B"});

/* =============================================================================
   TRANSPETRO 2023 — ENGENHARIA QUÍMICA (prova 26) — ESPELHO — ESPECÍFICAS q21-70
============================================================================= */
Q({prova:"tp2023",ano:2023,banca:"TP",n:21,materia:"quimica",tipo:"calc",
  enun:"AgCl(s)⇌Ag⁺+Cl⁻. Kps a partir de ΔE° de célula (E°AgCl/Ag,Cl⁻=+0,22; E°Ag⁺/Ag=+0,80; F/RT=38,91 V⁻¹). Kps aprox.:",
  alt:["0","1,6×10⁻¹⁰","1,6×10⁻¹","1,6×10⁹","1,6×10¹⁰"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:22,materia:"quimica",tipo:"conc",
  enun:"Etapa do tratamento de água que pode formar trihalometanos (THMs) como subprodutos de desinfecção:",
  alt:["adição de reagentes para coagulação e desinfecção","aeração para oxigenação","decantação de sólidos","filtração para remoção de microrganismos","monitoramento microbiológico"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:23,materia:"termo",tipo:"conc",
  enun:"Ciclo de refrigeração por compressão de vapor. Conclui-se que:",
  alt:["entalpia diminui durante a compressão isentrópica","T aumenta durante a expansão adiabática no evaporador","pressão constante durante a expansão no evaporador","o ciclo é mais eficiente quando T do condensador é mais baixa","o estrangulamento remove calor do espaço refrigerado"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:24,materia:"termo",tipo:"conc",
  enun:"Ciclo de Rankine (usina térmica). Conclui-se que a(o):",
  alt:["eficiência aumenta exclusivamente com aumento da pressão da caldeira","eficiência aumenta à medida que a T de entrada da água na caldeira aumenta","eficiência é sempre 100%","ciclo de Rankine é exemplo de ciclo de refrigeração","ciclo é mais eficiente quando a turbina opera adiabaticamente"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:25,materia:"opunit",tipo:"conc",
  enun:"Pontos de bolha e de orvalho na destilação etanol-água. Verifica-se que o ponto:",
  alt:["de bolha ocorre quando o vapor tem a mesma composição do líquido","de bolha ocorre quando o vapor é mais rico em etanol que o líquido","de bolha e orvalho são irrelevantes","de orvalho ocorre quando o vapor tem a mesma composição do líquido","de orvalho ocorre quando o vapor é mais rico em etanol que o líquido"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:26,materia:"opunit",tipo:"conc",
  enun:"Destilação flash em refinaria. Constata-se que a(o):",
  alt:["flash não envolve mudanças de T ou pressão","flash é usado para produzir produtos de alta viscosidade","líquido no fundo é enriquecido em componentes mais leves","vapor e líquido têm a mesma composição","vapor no topo é enriquecido em componentes mais leves, como a gasolina"],gab:"E"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:27,materia:"calor",tipo:"conc",
  enun:"Trocadores casco-tubo vs placas. Constata-se que o trocador de:",
  alt:["casco e tubos é geralmente mais eficiente que o de placas","placas é sempre mais eficiente, independente das condições","casco e tubos e de placas têm limitações semelhantes de faixa de T","casco e tubos é melhor para alta pressão; placas para baixa pressão","casco e tubos e de placas têm eficiências dependentes só do tempo de residência"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:28,materia:"controle",tipo:"conc",
  enun:"Objetivo principal do Diagrama de Bode no controle de temperatura de um reator:",
  alt:["analisar a resposta em diferentes frequências e avaliar estabilidade/desempenho do controlador","avaliar a concentração de produtos no reator","avaliar o consumo de energia","calcular a quantidade de reagente","determinar a eficiência do trocador"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:29,materia:"opunit",tipo:"conc",
  enun:"Princípio fundamental da destilação multicomponente:",
  alt:["temperatura de ebulição dos componentes, apenas","pressão constante durante todo o processo","diferença de densidade entre componentes","equilíbrio de fases entre vapor e líquido","uso de agentes separadores"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:30,materia:"opunit",tipo:"conc",
  enun:"Destilação azeotrópica (etanol-água). Conclui-se que é um processo que:",
  alt:["obtém produtos de alta pureza independentemente das condições","permite separação sem agente separador","envolve adição de um terceiro componente para modificar o azeótropo","é ineficaz pois misturas azeotrópicas são imiscíveis","é usado só em laboratórios"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:31,materia:"opunit",tipo:"conc",
  enun:"Fator que influencia diretamente a eficiência da extração líquido-líquido:",
  alt:["viscosidade da fase líquida","cor do solvente","temperatura do sistema de extração","pressão do sistema de extração","densidade do componente I"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:32,materia:"opunit",tipo:"conc",
  enun:"Utilidade principal do diagrama triangular (mistura ternária acetona/etanol/água):",
  alt:["determinar a T exata de ebulição de cada componente","determinar o diâmetro da coluna","determinar a concentração ótima de aditivos","fornecer a pressão necessária","visualizar a relação entre composições líquidas e vapor em equilíbrio nos estágios"],gab:"E"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:33,materia:"opunit",tipo:"conc",
  enun:"Destilação binária multiestágios (acetona/água). Verifica-se que a(o):",
  alt:["corrente líquida é mais rica em acetona que a de vapor em cada estágio","é mais eficiente quando a diferença de T fonte/entrada é maior","pressão de operação não afeta a eficiência","nº de estágios não afeta a separação","objetivo é separar os componentes em frações com alto grau de pureza"],gab:"E"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:34,materia:"opunit",tipo:"conc",
  enun:"Refluxo mínimo e refluxo total. Observa-se que o refluxo:",
  alt:["mínimo ocorre quando a taxa de condensado = taxa de vapor no topo e todo vapor é condensado","mínimo ocorre quando todo vapor é condensado e devolvido","mínimo é o estado sem líquido ou vapor","total é o estado sem líquido condensado, só vapor","total é quando o vapor é totalmente condensado e devolvido (reflete coluna de ∞ pratos)"],gab:"E"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:35,materia:"opunit",tipo:"conc",
  enun:"Método McCabe-Thiele (etanol-água, pureza ≥95%). O método é:",
  alt:["aplicável só a sistemas ideais","usado para determinar o nº mínimo de estágios para a pureza desejada","usado para calcular a taxa de refluxo ideal","usado para calcular o diâmetro da coluna","utilizado sem considerar a temperatura da coluna"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:36,materia:"opunit",tipo:"conc",
  enun:"Remoção de SO2 do gás de exaustão por absorção. Verifica-se que, no processo de:",
  alt:["absorção, o SO2 é removido do gás e absorvido por um líquido","absorção, o SO2 é introduzido no gás para reagir com poluentes","absorção/esgotamento, não há relação com remoção de poluentes","esgotamento, adiciona-se mais líquido absorvente","esgotamento, ocorre enriquecimento do líquido absorvente com SO2"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:37,materia:"opunit",tipo:"calc",
  enun:"Coluna com 20 estágios teóricos e NTU=2. A altura equivalente ao estágio teórico (HETP) é:",
  alt:["0,1 estágio teórico","0,2 estágio teórico","2 estágios teóricos","10 estágios teóricos","40 estágios teóricos"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:38,materia:"opunit",tipo:"conc",
  enun:"Pratos vs recheios em coluna de destilação. O engenheiro deve considerar que:",
  alt:["pratos fornecem maior área de superfície que recheios","recheios para alta pressão, pratos para baixa pressão","a escolha não afeta a eficiência","pratos redistribuem melhor o líquido; recheios separam melhor","a escolha depende só da preferência pessoal"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:39,materia:"termo",tipo:"conc",
  enun:"Expansão isotérmica de 1 mol: gás monoatômico (W1) e diatômico (W2), mesmas T e volumes V0→3V0. Razão W2/W1:",
  alt:["5/2","3/2","1","5/3","3/5"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:40,materia:"termo",tipo:"conc",
  enun:"Três relações de Maxwell propostas (I, II, III). É(são) verdadeira(s) APENAS:",
  alt:["I","II","III","I e II","II e III"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:41,materia:"termo",tipo:"conc",
  enun:"Van der Waals (P+aN²/V²)(V−Nb)=NkBT. Unidades SI de a e b, respectivamente:",
  alt:["Pa e m⁻²","J·m³ e m³","J e K","J·m³ e m","Pa e m³"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:42,materia:"balancos",tipo:"calc",
  enun:"Fracionamento com 2 trocadores; Cp~5 kJ/kg·ºC; M2=0,4·M1; (T2−T1)=−30ºC; (T3−T1)=40ºC; |QTr1|/M1=25 kJ/kg. Razão QTr2/M1 (kJ/kg) aprox.:",
  alt:["30","45","60","85","90"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:43,materia:"cinetica",tipo:"conc",
  enun:"Reator de reforma de metano (tubos reacionais, endotérmico, entra 500ºC/15 atm, sai ~890ºC). Conclui-se que:",
  alt:["a pressão no reator aumenta pelo aumento do nº de mols e da T","a razão volume dos tubos/vazão de entrada ≈ tempo que o metano não reagido leva para atravessar","a velocidade de escoamento é praticamente constante ao longo do leito","a seção com catalisador escoa mais lento que sem catalisador","os tubos devem experimentar perdas de carga próximas"],gab:"E"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:44,materia:"balancos",tipo:"calc",
  enun:"Água de resfriamento 100 t/h; dureza da purga = 5× a do make up; 8% evapora; impurezas não saem na evaporada. Vazão de make up (t/h) aprox.:",
  alt:["1,4","6,4","8,4","10,0","12,0"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:45,materia:"balancos",tipo:"calc",
  enun:"Poço: 700 m³/dia óleo e 12.000 m³/dia gás (medidos a 300 K, 1 atm). Condição de escoamento 360 K e 15 atm; densidade do líquido constante. Vazão volumétrica total (m³/dia) aprox.:",
  alt:["960","1.660","3.270","7.200","15.100"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:46,materia:"balancos",tipo:"calc",
  enun:"Reator (XA por passe 40%) + separador (recA=0,5) com reciclo. Conversão global de A aprox.:",
  alt:["73%","75%","78%","80%","83%"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:47,materia:"cinetica",tipo:"calc",
  enun:"Reação A→Produtos em CSTR, curva 1/r×X dada; FA0=2 kmol/min, conversão atual 40%. Adicionar 2º CSTR em série para chegar a ~80%. Volume total dos dois reatores (m³) aprox.:",
  alt:["1,6","4,8","5,3","6,4","8,2"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:48,materia:"balancos",tipo:"calc",
  enun:"Torre de resfriamento: 6.660 kmol/h água, make up ~500 kmol/h, sem purga; ar úmido a 80% umidade relativa; Pvap saturação=0,05 atm. Vazão de ar seco (kmol/h) aprox.:",
  alt:["8.000","10.000","12.000","14.000","16.000"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:49,materia:"balancos",tipo:"calc",
  enun:"Poços A e B produzem 180 m³/dia (óleo+água). Poço A: 75 óleo e 35 água m³/dia. Poço B: razão mássica óleo/água=4 (ρóleo=800, ρágua=1000). Vazão mássica de óleo do poço B (t/dia) aprox.:",
  alt:["46,67","53,33","56","63,33","73,67"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:50,materia:"balancos",tipo:"calc",
  enun:"Cilindros A,B,C (composições e pressões dadas); A recebe de B até 5 atm, depois de C até 10 atm. Fração molar de H2S em A ao final aprox.:",
  alt:["1,7%","2,1%","2,6%","3,2%","3,8%"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:51,materia:"balancos",tipo:"calc",
  enun:"FCC reciclando 40% do óleo pesado não convertido; composições mássicas de saída dadas (óleo pesado 25%). Conversão global de óleo pesado aprox.:",
  alt:["75%","77%","79%","81%","83%"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:52,materia:"balancos",tipo:"conc",
  enun:"Associar características de sistemas fluidos a processos (I-redução conc. molar; II-aumento conc. mássica; III-constância fração volumétrica; IV-composição da espécie não volátil ≈ Pvap). Associações corretas:",
  alt:["I–S, II–P, III–Q, IV–T","I–R, II–S, III–Q, IV–T","I–P, II–S, III–Q, IV–R","I–Q, II–T, III–S, IV–R","I–T, II–S, III–Q, IV–R"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:53,materia:"balancos",tipo:"conc",
  enun:"Líquido acumulado em gasoduto (28 atm) analisado: H2+CH4=0,14; C2=0,20; C3=0,33; C4+=0,33 (mássico). Em relação ao gás que atravessa o gasoduto, conclui-se que:",
  alt:["C2 é mais abundante que C1","C3 é mais abundante que C2","C3 é mais abundante que C4+","C3 é o componente mais abundante","a composição de C4+ no gás é maior que 0,33"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:54,materia:"balancos",tipo:"calc",
  enun:"Combustão total CxHy com y/x=2 e 100% de excesso de O2; N2/O2 no ar≈3,7. Razão molar N2/CO2 no gás de exaustão aprox.:",
  alt:["8","9","11","13","15"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:55,materia:"fluidos",tipo:"conc",
  enun:"Fator de fricção f=64/Re medido num trecho horizontal. Isso só é possível se o regime de escoamento é:",
  alt:["turbulento e transiente","de transição, se Re>10000","laminar","turbulento, se Re=1500","de transição, se Re=100000"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:56,materia:"termo",tipo:"conc",
  enun:"Volume específico: modelo gás perfeito dá 0,012 m³/kg; modelo com fator Z dá 0,006 m³/kg. Verifica-se que:",
  alt:["como Z<1, a densidade real é menor que a do gás perfeito","o fator de compressibilidade é igual a 0,5","para pressões muito baixas, gás perfeito se afasta muito do fator Z","se Z=1 a modelagem de gás perfeito é correta para outras condições","se Z=2 a modelagem de gás perfeito é correta para outras condições"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:57,materia:"calor",tipo:"calc",
  enun:"Trocador aquece água (entra 35ºC, C=3,6 kJ/K·s). Óleo entra 180ºC, sai 75ºC, C=3,6 kJ/K·s. T de saída da água (ºC):",
  alt:["80","90","110","120","140"],gab:"E"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:58,materia:"calor",tipo:"calc",
  enun:"Trocador: quente cp=4,5, m=1,5 kg/s, 200→100ºC; frio cp=4,0, m=2,5 kg/s, entra 15ºC. Efetividade (%):",
  alt:["34,1%","42,2%","48,1%","54,1%","60,2%"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:59,materia:"fluidos",tipo:"calc",
  enun:"Velocidade do som c=(kRT)^0,5. Para M=0,3 de um gás (R=300 J/kg·K), c=106,5 m/s a 27ºC. Velocidade (m/s) para 927ºC:",
  alt:["145","213","360","521","580"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:60,materia:"fluidos",tipo:"calc",
  enun:"Dois tanques abertos, desnível 5 m; tubulação 18 m: 8 m de D=100 mm e 10 m de D=50 mm; perdas menores desprezadas; f=0,02; g=10. Vazão (m³/s):",
  alt:["0,0087","0,0098","0,0110","0,0125","0,0132"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:61,materia:"fluidos",tipo:"conc",
  enun:"Sobre cavitação. São corretas APENAS: I-ocorre sempre que Re>200000; II-ocorre quando pressão local < Pvap; III-bolhas aumentam resistência à corrosão; IV-bolhas colapsam em regiões de pressão > Pvap.",
  alt:["I e II","I e IV","II e III","II e IV","I, II e III"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:62,materia:"calor",tipo:"conc",
  enun:"Placa vertical: face esquerda em vácuo (TQ), face direita em convecção (Tinf, h). Biot=hL/k. Constata-se que:",
  alt:["se Biot muito pequeno, TF→Tinf","se Biot muito grande, TF→Tinf","o calor trocado não é afetado pelo Biot","o calor trocado depende só do material","o perfil de T dentro da placa é parabólico"],gab:"B"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:63,materia:"fluidos",tipo:"conc",
  enun:"Instalação com válvula fechada; Pg pressão manométrica do reservatório fechado; h1=7, h2=1, h3=4 m; ρ=1000; g=10; Patm=100 kPa. Após abrir a válvula, o escoamento irá acontecer:",
  alt:["da esquerda para a direita, se Pg<30 kPa","da direita para a esquerda, se Pg<30 kPa","não haverá escoamento, independente de Pg","da esquerda para a direita, independente de Pg","da direita para a esquerda, independente de Pg"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:64,materia:"calor",tipo:"calc",
  enun:"Placa: transmissividade 0,25, refletividade 0,3; recebe 320 W/m² por cima e 400 W/m² por baixo; poder emissivo 200 W/m² em cada face. Sobre as radiosidades:",
  alt:["as duas são iguais a 200 W/m²","as duas são iguais sempre, por definição","a radiosidade inferior é 200 W/m²","a radiosidade inferior é 400 W/m²","a radiosidade superior é 406 W/m²"],gab:"E"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:65,materia:"quimica",tipo:"conc",
  enun:"Inibidores de corrosão por água do mar. NÃO é adequado:",
  alt:["nitrito de cálcio","nitrito de sódio","sulfato de sódio","molibdato de sódio","tungstato de sódio"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:66,materia:"quimica",tipo:"conc",
  enun:"Tipo de corrosão que ocorre por mecanismo exclusivamente químico:",
  alt:["Atmosférica","Em água/soluções aquosas","Em sais fundidos","Em solventes orgânicos sem água","No solo"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:67,materia:"quimica",tipo:"conc",
  enun:"2NO2+½O2+H2O⇌2HNO3 (endotérmica). Desloca-se o equilíbrio para formar mais HNO3 quando:",
  alt:["a temperatura é diminuída","reduz-se a quantidade relativa de oxigênio","o volume do reator é aumentado","a quantidade relativa de água for aumentada","reduz-se a quantidade relativa de óxido nítrico"],gab:"D"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:68,materia:"quimica",tipo:"calc",
  enun:"Fotocatálise (C-TiO2), ordem 1; ao dobrar [CH3Hg] a velocidade dobrou. A lei de velocidade é:",
  alt:["v=k[CH3Hg]","v=k[CH3Hg]²","v=k[C-TiO2]","v=k[CH3Hg]²[C-TiO2]","v=k[CH3Hg][C-TiO2]"],gab:"A"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:69,materia:"quimica",tipo:"calc",
  enun:"Solubilidade do cromo: Cr(OH)3⇌Cr³⁺+3OH⁻ (Kps=10⁻³⁰); Cr(OH)3+OH⁻⇌Cr(OH)4⁻ (Ks=10⁻⁰·⁴); conc. analítica 0,010 mol/L. Conclui-se que o cromo estará quantitativamente:",
  alt:["precipitado em toda a faixa de pH alcalino","precipitado apenas em meio muito ácido","solúvel na medida em que se desloca para os extremos de pH","solúvel só na medida em que o pH se torna mais elevado","precipitado em toda a faixa de pH"],gab:"C"});
Q({prova:"tp2023",ano:2023,banca:"TP",n:70,materia:"quimica",tipo:"conc",
  enun:"Equação de Arrhenius. Para reação em meio gasoso, a constante de velocidade:",
  alt:["aumenta com o aumento da temperatura","diminui na presença de catalisador","é constante independente da T","independe da fração de colisões com geometria apropriada","guarda relação linear com a temperatura"],gab:"A"});

/* =============================================================================
   TRANSPETRO 2011 (PSP RH 3/2011) — ENG. PROC. JR — ESPECÍFICAS q21-70
   Bloco1 q21-40 (Controle/Fluidos/Calor) · Bloco2 q41-55 (Balanços/OpUnit) · Bloco3 q56-70 (Termo)
============================================================================= */
Q({prova:"tp2011",ano:2011,banca:"TP",n:21,materia:"controle",tipo:"calc",
  enun:"Reator 2ª ordem subamortecido, ganho estático 2; degrau 0,5ºC na entrada; overshoot 0,6. Desvio máximo em relação ao estacionário inicial:",
  alt:["0,6ºC","1,0ºC","1,3ºC","1,6ºC","2,6ºC"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:22,materia:"controle",tipo:"conc",
  enun:"G1=5/(50s+1) e G2=5/(50s+1)·e^(−10s), em ω=0,1 rad/s. Comparando RA e |φ|:",
  alt:["RA1=RA2 e |φ1|=|φ2|","RA1=RA2 e |φ1|<|φ2|","RA1<RA2 e |φ1|<|φ2|","RA1<RA2 e |φ1|>|φ2|","RA1>RA2 e |φ1|>|φ2|"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:23,materia:"controle",tipo:"calc",
  enun:"GMA(s)=0,25Kc/[(s+1)(0,5s+1)]. Maior Kc para o sistema não oscilar em malha fechada (degrau no set point):",
  alt:["0,25","0,50","0,75","1,00","1,25"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:24,materia:"controle",tipo:"calc",
  enun:"GMA com 3 raízes reais negativas; RA na frequência crítica ωc vale 0,5. Em malha fechada o sistema será:",
  alt:["estável, margem de ganho 1,0","estável, margem de ganho 1,7","estável, margem de ganho 2,0","estável, margem de ganho 4,0","instável"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:25,materia:"calor",tipo:"calc",
  enun:"Tubo de aço (k=60) com magnésia (2,7 cm; k=0,08) e sílica (3 cm; k=0,2); parede como plana de 1 m²; T interna 65ºC, água 5ºC, h=100 W/m²K. Taxa de calor (W) aprox.:",
  alt:["4","120","180","400","1,2"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:26,materia:"fluidos",tipo:"conc",
  enun:"Sobre cavitação. I-pressão abaixo da Pvap forma bolhas que colapsam gerando ondas de choque; II-mais provável onde há aumento de velocidade (queda de pressão); III-NPSH requerido é a energia mínima acima da Pvap no flange de sucção. Correto:",
  alt:["I, apenas","I e II, apenas","I e III, apenas","II e III, apenas","I, II e III"],gab:"E"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:27,materia:"fluidos",tipo:"conc",
  enun:"Escoamento. Correto APENAS: I-laminar, f ∝ Re; II-turbulento, f função de Re e rugosidade; III-perda de carga ∝ comprimento equivalente; IV-mantida vazão, perda de carga ∝ 1/D².",
  alt:["I e III","I e IV","II e III","II e IV","III e IV"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:28,materia:"fluidos",tipo:"conc",
  enun:"Regimes de escoamento. Correto APENAS: I-turbulento, turbilhões fazem transferência convectiva de momento; II-laminar permanente, flutuações máximas no eixo central; III-laminar, perfil paraboloide; IV-laminar, transferência de momento só convectiva.",
  alt:["I e III","I e IV","II e III","II e IV","III e IV"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:29,materia:"fluidos",tipo:"conc",
  enun:"Para as previsões de Bernoulli serem corretas, o fluido em escoamento deve ter:",
  alt:["densidade constante","densidade independente de temperatura","pressão de vapor baixa","viscosidade constante","viscosidade independente de temperatura"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:30,materia:"fluidos",tipo:"calc",
  enun:"Bomba H=−Q²+2Q+8; sistema WB=Q²+2Q. Vazão de operação (m³/s):",
  alt:["5,0","4,0","2,8","2,0","1,5"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:31,materia:"fluidos",tipo:"conc",
  enun:"Líquido cuja viscosidade aparente diminui com o aumento da taxa de cisalhamento, sem histerese. É um fluido:",
  alt:["de Bingham","dilatante","pseudoplástico","reopético","tixotrópico"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:32,materia:"calor",tipo:"calc",
  enun:"Trocador casco-tubo contracorrente; tubos D 2,0/2,5 cm; água fria 0,5 m/s, 30→50ºC; quente entra 80ºC; 15 e 30 kg/s; U externo=250 W/m²K; π≈3; F=1. Comprimento máx 2,4 m → nº passagens e tubos:",
  alt:["16 passagens e 64 tubos","13 passagens e 64 tubos","10 passagens e 100 tubos","8 passagens e 100 tubos","4 passagens e 200 tubos"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:33,materia:"fluidos",tipo:"conc",
  enun:"Bomba centrífuga TQ1→TQ2. Correto APENAS sobre aumento da vazão: I-aumentar pressão em TQ2 aumenta a vazão; II-fechar parcialmente válvula aumenta a vazão; III-aumentar rotação do impelidor aumenta a vazão; IV-aumentar nível em TQ1 aumenta a vazão.",
  alt:["I e II","I e IV","II e III","III e IV","I, II e IV"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:34,materia:"calor",tipo:"calc",
  enun:"Água em tubo (paredes 80ºC), entra 40 sai 60ºC, 0,03 kg/s, MLDT~30ºC; D 10/12 cm; L=10 m; laminar Nu=3,66 ou turbulento Nu=0,02(Re/200)(Pr/2); dados fornecidos. Taxa de calor trocado (W):",
  alt:["1.976,40","2.371,68","64.800","197.640","6.480.000"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:35,materia:"calor",tipo:"conc",
  enun:"Configurações de permutadores. Correto APENAS: I-correntes paralelas (mesmo sentido) têm inconsistência termodinâmica pois T saída quente poderia ser < T saída frio; II-contracorrente permite T quente saída < T frio saída; III-NUT independe da configuração.",
  alt:["I","II","I e II","I e III","II e III"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:36,materia:"calor",tipo:"conc",
  enun:"Mecanismos de transferência de calor. Correto APENAS: I-condução ocorre por movimento global do fluido; II-convecção entre sólido e fluido em movimento; III-radiação relacionada à radiação eletromagnética; IV-troca radiante ∝ (T1−T2)⁴; V-coef. de convecção = T/(A·D).",
  alt:["II e IV","III e V","I, II e IV","I, III e V","I, IV e V"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:37,materia:"fluidos",tipo:"calc",
  enun:"Manômetro em U ligando tanques T1 (p1) e T2 (p2), mesmo líquido ρ; líquido manométrico ρm; nível no ramo direito H acima do esquerdo. Valor de p1−p2:",
  alt:["ρm·g·H","−ρm·g·H","−2ρm·g·H","−(ρm−ρ)·g·H","(ρm−ρ)·g·H"],gab:"E"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:38,materia:"fluidos",tipo:"calc",
  enun:"Bernoulli: queda de pressão em tubo horizontal uniforme. Relação entre Δp5 (5 m) e Δp10 (10 m):",
  alt:["0,025·Δp10 ≠ 0","0,25·Δp10 ≠ 0","0,50·Δp10 ≠ 0","Δp10 = 0","Δp10 ≠ 0"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:39,materia:"fluidos",tipo:"calc",
  enun:"Grupo adimensional P·H/(V·S); P=queda de pressão, H=distância, V=viscosidade absoluta. Dimensões físicas de S (L comprimento, M massa, T tempo):",
  alt:["L/T","L³/T","L/T²","M/L³","M·L/T²"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:40,materia:"controle",tipo:"conc",
  enun:"Processo com controle proporcional tem offset para degraus no set point e carga (sem ruído de medida); adiciona-se modo derivativo. O offset:",
  alt:["não sofrerá qualquer efeito","será reduzido, mas não eliminado","será eliminado","aumentará na forma de um degrau","aumentará na forma de uma rampa"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:41,materia:"balancos",tipo:"calc",
  enun:"Cristalizar 1.000 kg de sólido S a partir de 10.000 kg de solução saturada a 80ºC; solubilidade s=0,04+0,002T (g S/g H2O, T em ºC). Até que temperatura resfriar?",
  alt:["15ºC","20ºC","25ºC","30ºC","35ºC"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:42,materia:"balancos",tipo:"calc",
  enun:"Desidrogenação do etano: (1) C2H6→C2H4+H2; (2) C2H6+H2→2CH4. Seletividade etileno/metano=4; 125 kmol/h de CH4 no efluente. Rendimento de etileno em relação ao etano consumido aprox.:",
  alt:["0,5","0,75","0,8","0,9","0,95"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:43,materia:"balancos",tipo:"calc",
  enun:"A+B→C, conversão por passe 50%; alimentação 100 kmol/h de A; efluente 20% A, 60% B, 20% C, total 250 kmol/h. Sobre excesso:",
  alt:["B com excesso de 25%","B com excesso de 20%","A com excesso de 50%","A com excesso de 20%","não há reagente em excesso"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:44,materia:"balancos",tipo:"calc",
  enun:"Reator R + separador S, reciclo com 50% purgado; alimentação 100 kmol/h de A + inerte I; conversão por passe 60%. Conversão global de A:",
  alt:["55%","60%","75%","80%","90%"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:45,materia:"balancos",tipo:"calc",
  enun:"(mesmo sistema) Alimentação com 1 kmol/h de inerte I; para fração molar de I na entrada do reator = 0,10, a fração da corrente de saída do separador a ser purgada deve ser:",
  alt:["50%","60%","70%","80%","90%"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:46,materia:"balancos",tipo:"calc",
  enun:"Ar entra no desumidificador com UR 60%, sai com UR 40%, P e T constantes. Razão entre pressão parcial do vapor na saída e na entrada aprox.:",
  alt:["0,50","0,67","1,50","2,00","2,40"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:47,materia:"balancos",tipo:"calc",
  enun:"Solução com A, B, C: CB=2CA, CC=4CA; MA=MC/4, MB=MC/2. Fração molar de A na mistura aprox.:",
  alt:["0,14","0,17","0,33","0,39","0,67"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:48,materia:"balancos",tipo:"calc",
  enun:"Secagem de polímero com ar; secador a 1×10⁵ Pa, T constante; ar de saída saturado com tolueno, fração molar 0,11. Pvap do tolueno (Pa):",
  alt:["0,06×10⁵","0,11×10⁵","0,13×10⁵","0,89×10⁵","1,11×10⁵"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:49,materia:"opunit",tipo:"calc",
  enun:"McCabe-Thiele da separação AB (gráfico x-y dado). Mínima razão de refluxo externa de topo:",
  alt:["1,5","2,0","3,5","4,0","5,5"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:50,materia:"termo",tipo:"conc",
  enun:"Armazenamento de amônia condensada. Forma de diminuir a pressão de vapor da amônia:",
  alt:["aumentar a altura do tanque","injetar gás inerte insolúvel na fase líquida","instalar válvula para retirar amônia líquida","diminuir a área de contato líquido-vapor","diminuir a temperatura de armazenamento"],gab:"E"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:51,materia:"balancos",tipo:"calc",
  enun:"Secagem em batelada: 50 kg de sólido úmido com 99% de umidade (base úmida) seca até 98%. Massa total do sólido (kg) após a secagem:",
  alt:["49,5","49","45","25","24,5"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:52,materia:"opunit",tipo:"calc",
  enun:"Extração 1.000 kg/h solução (35% ác. acético, 65% água) com 1.335 kg/h éter isopropílico; rafinado 10% ác. acético; diagrama dado. Composição mássica de éter isopropílico no extrato aprox.:",
  alt:["0,06","0,18","0,24","0,76","0,97"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:53,materia:"opunit",tipo:"calc",
  enun:"Absorção: 40 kmol/h gás (5% acetona), remover 80%, 300 K/101,3 kPa, 100 kmol/h água, y=2,53x. Composição molar de acetona no produto líquido aprox.:",
  alt:["0,40%","1,04%","1,57%","5,00%","99,98%"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:54,materia:"opunit",tipo:"conc",
  enun:"Gotejamento (weeping) em coluna recheada/pratos é causado quando a fase:",
  alt:["vapor tem velocidade muito baixa","vapor tem velocidade muito alta","líquida tem vazão muito baixa","líquida tem velocidade muito alta","líquida e vapor têm a mesma velocidade"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:55,materia:"opunit",tipo:"calc",
  enun:"Mistura A/B a 120 kPa; primeira bolha a 100ºC; curvas de Pvap de A e B dadas. Composições aproximadas da fase líquida e vapor (em relação a A) a 100ºC:",
  alt:["0,375 e 0,625","0,625 e 0,250","0,625 e 0,375","0,750 e 0,250","0,750 e 0,625"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:56,materia:"termo",tipo:"conc",
  enun:"dU=TdS−PdV. Relação de Maxwell correspondente:",
  alt:["(∂P/∂T)V=(∂S/∂V)T","(∂T/∂V)S=−(∂P/∂S)V","(∂T/∂V)S=−(∂S/∂V)T","(∂T/∂P)S=(∂V/∂S)P","(∂V/∂T)P=(∂S/∂P)T"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:57,materia:"termo",tipo:"conc",
  enun:"Parâmetros a e b em Van der Waals representam, respectivamente:",
  alt:["atração molecular e polaridade","atração molecular e tamanho molecular","peso molecular e polaridade","tamanho molecular e peso molecular","tamanho molecular e velocidade molecular"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:58,materia:"termo",tipo:"conc",
  enun:"Turbina isolada, expansão adiabática e reversível de vapor d'água. Sinais de ΔH e ΔS:",
  alt:["ΔH=0 e ΔS=0","ΔH>0 e ΔS=0","ΔH<0 e ΔS=0","ΔH<0 e ΔS<0","ΔH<0 e ΔS>0"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:59,materia:"termo",tipo:"calc",
  enun:"Gás ideal, expansão isentrópica de (T1,P1) a (T2,P2); γ=Cp/Cv. A razão P1/P2 é:",
  alt:["T2/T1","(T1/T2)^γ","(T2/T1)^γ","(T1/T2)^(γ/(γ−1))","(T2/T1)^(γ/(γ−1))"],gab:"E"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:60,materia:"termo",tipo:"conc",
  enun:"Diagrama de Mollier (H×S). A inclinação de uma linha isobárica é dada por:",
  alt:["(∂H/∂S)P","(∂H/∂P)S","(∂S/∂P)H","zero","infinito"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:61,materia:"termo",tipo:"conc",
  enun:"Substância pura nas condições críticas (Pc,Tc,Vc). Relações que devem ser satisfeitas:",
  alt:["(∂²P/∂V²)T=(∂P/∂V)T=0","(∂²P/∂V²)T<0 e (∂P/∂V)T=0","(∂²P/∂V²)T>0 e (∂P/∂V)T=0","(∂²P/∂V²)T<0 e (∂P/∂V)T<0","(∂²P/∂V²)T>0 e (∂P/∂V)T>0"],gab:"A"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:62,materia:"termo",tipo:"conc",
  enun:"Teorema dos Estados Correspondentes a Três Parâmetros: dois gases com mesmo fator:",
  alt:["acêntrico, nas mesmas Tc e Pc, têm ~mesmo Z","acêntrico, nas mesmas Tr e Pr, têm ~mesmo Z","acêntrico, nas mesmas T e P, têm ~mesmo Z","compressibilidade, nas mesmas Tc e Pr, têm ~mesmo acêntrico","compressibilidade, nas mesmas Tr e Pr, têm ~mesmo acêntrico"],gab:"B"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:63,materia:"termo",tipo:"conc",
  enun:"Caldeira alimentada com água abaixo da ebulição gera vapor superaquecido. No diagrama P×H, o processo é uma linha:",
  alt:["vertical ~ ΔH da caldeira","inclinada ~ ΔH da caldeira","inclinada ~ pressão da caldeira","horizontal ~ pressão da caldeira","horizontal ~ temperatura da caldeira"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:64,materia:"termo",tipo:"calc",
  enun:"Máquina térmica com eficiência 75% da máxima; TQ/TF=5/3 (em Kelvin). Fração do calor da fonte quente convertida em trabalho:",
  alt:["0,20","0,25","0,30","0,50","0,75"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:65,materia:"termo",tipo:"conc",
  enun:"Ciclo de refrigeração: sai do evaporador como vapor saturado (P1,T1) e do condensador como líquido saturado (P2,T2). Na saída da válvula de estrangulamento (isolada), o fluido está:",
  alt:["vapor saturado a P1 e T1","vapor superaquecido a P2 e T2","líquido saturado a P2 e T2","líquido e vapor em equilíbrio a P2 e T2","líquido e vapor em equilíbrio a P1 e T1"],gab:"E"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:66,materia:"termo",tipo:"calc",
  enun:"Ciclo de potência: entrada da turbina 6.000 kJ/kg, saída 2.000 kJ/kg; eficiência da turbina 90%; água que alimenta a caldeira 1.000 kJ/kg, saída do condensador 500 kJ/kg. Eficiência térmica do ciclo:",
  alt:["50%","60%","70%","80%","90%"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:67,materia:"termo",tipo:"conc",
  enun:"O ciclo de uma máquina de Carnot é representado por (análise dos diagramas P-V, V-T, T-S, S-P, S-H):",
  alt:["diagrama P×V (retângulo com duas isotérmicas e duas adiabáticas)","diagrama V×T","diagrama T×S (retângulo: 2 isotérmicas + 2 isentrópicas)","diagrama S×P","diagrama S×H"],gab:"C"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:68,materia:"termo",tipo:"conc",
  enun:"Nitrogênio (gás ideal) passa por válvula isolada (estrangulamento), energias cinética/potencial desprezíveis. Comparando montante (P1,T1) e jusante (P2,T2):",
  alt:["P1=P2 e T1=T2","P1=P2 e T1<T2","P1>P2 e T1>T2","P1>P2 e T1<T2","P1>P2 e T1=T2"],gab:"E"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:69,materia:"termo",tipo:"calc",
  enun:"Mistura adiabática: corrente 1 (100 kg/h, vapor saturado, h=2.500 kJ/kg) + corrente 2 (vapor superaquecido, h=3.500 kJ/kg) → corrente 3 (h=3.000 kJ/kg). Vazão da corrente 3 (kg/h):",
  alt:["125","150","175","200","225"],gab:"D"});
Q({prova:"tp2011",ano:2011,banca:"TP",n:70,materia:"termo",tipo:"conc",
  enun:"Substância pura em transformação adiabática e reversível. A variação de entropia do sistema é:",
  alt:["maior que zero","igual a zero","menor que zero","igual à variação da energia interna","igual à variação de entalpia"],gab:"B"});

/* =============================================================================
   TRANSPETRO 2012 (PSP RH 2/2012) — ENG. PROC. JR — ESPECÍFICAS q21-70
   Bloco1 q21-40 (Balanços pesados) · Bloco2 q41-55 (Termo/Calor/Controle) · Bloco3 q56-70 (Fluidos/OpUnit)
============================================================================= */
Q({prova:"tp2012",ano:2012,banca:"TP",n:21,materia:"balancos",tipo:"calc",
  enun:"Solução: 360 g água + 184 g etanol + 120 g NaH2(PO4). Fração molar de NaH2(PO4): (MM etanol=46, água=18, sal=120)",
  alt:["0,80","0,70","0,50","0,16","0,04"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:22,materia:"balancos",tipo:"calc",
  enun:"300 kmol de propileno a 5 atm e 0ºC. À pressão atmosférica e mesma T, volume e massa armazenados: (MM propeno=42; 1 mol a 0ºC/1atm = 22,4 L)",
  alt:["1.344 m³ e 2.520 kg","1.344 m³ e 12.600 kg","6.720 m³ e 2.520 kg","6.720 m³ e 12.600 kg","13.440 m³ e 2.520 kg"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:23,materia:"balancos",tipo:"calc",
  enun:"ZnO + 2NaOH → Na2ZnO2 + H2O. 3.000 t de minério com 25% ZnO; solução NaOH 50% m/m. Toneladas de solução de NaOH: (Zn=65, Na=23, O=16, H=1)",
  alt:["300","740","1480","2052","2910"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:24,materia:"balancos",tipo:"calc",
  enun:"Florianópolis 18ºC, UR 50%. Umidade absoluta (g água/kg ar seco) aprox.: (MM água=18, ar=29; usar tabela de vapor)",
  alt:["3","6","10","12","16"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:25,materia:"balancos",tipo:"calc",
  enun:"Refervedor: 25.000 kg/h de orgânico (ΔHvap≈350 kJ/kg) aquecido por 2.000 kg/h de vapor saturado (P man. 4 atm) que se condensa; T do vapor 20ºC acima do orgânico. Vazão vaporizada do orgânico e T de saída:",
  alt:["12 t/h e 132ºC","12 t/h e 152ºC","8 t/h e 124ºC","5 t/h e 132ºC","5 t/h e 124ºC"],gab:"A"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:26,materia:"balancos",tipo:"conc",
  enun:"Resolução de balanços em fluxogramas. Correto APENAS: I-reciclos dificultam, mas só em poucos casos precisa de métodos numéricos; II-estratégia modular resolve grande conjunto de equações simultaneamente; III-pela estratégia modular, variáveis dos reciclos são de abertura, com estimativas iniciais, iterando até convergir.",
  alt:["I","II","III","I e II","II e III"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:27,materia:"balancos",tipo:"calc",
  enun:"Reator R→Separador, R→P, separação total; tabela de FR alimentado × FR não convertido; custo C=0,2(FR+FP), lucro L=FP. Condição que fornece maior L−C:",
  alt:["I","II","III","IV","V"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:28,materia:"balancos",tipo:"calc",
  enun:"Transesterificação: 300 kmol triglicerídeo + 1.200 kmol álcool; conversão 100% do limitante. Quantidade do reagente em excesso ao final:",
  alt:["zero (alimentação estequiométrica)","600 kmol do álcool","300 kmol do álcool","100 kmol do triglicerídeo","60 kmol do triglicerídeo"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:29,materia:"balancos",tipo:"calc",
  enun:"Absorção de H2S por DEA, eficiência 98%; gás 3 t/h com 15% H2S; solvente 2 t/h (água+DEA). Fração mássica de H2S no líquido efluente aprox.:",
  alt:["14%","18%","22%","25%","27%"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:30,materia:"balancos",tipo:"calc",
  enun:"Reforma do etanol: C2H5OH+3H2O→2CO2+6H2; alimentação só água+etanol+inerte. Na saída H2/água=3, conversão do etanol 80%. Razão molar água/etanol na alimentação:",
  alt:["2","3,6","4","5","7"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:31,materia:"balancos",tipo:"conc",
  enun:"Efeitos térmicos e balanços de energia. Correto: I-trechos aquecidos têm maior vazão volumétrica de gás; II-T de saída de forno adiabático com queima completa independe da vazão, só da composição; III-trabalho de compressão agrupado à energia interna na forma de entalpia das correntes.",
  alt:["I, apenas","II, apenas","I e II, apenas","II e III, apenas","I, II e III"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:32,materia:"balancos",tipo:"calc",
  enun:"Queima completa de 100 kmol/h de mistura alcano+alceno → 410 kmol/h CO2 e 500 kmol/h água; fração molar alcano 0,90, alceno 0,10. Par de compostos compatível:",
  alt:["propano-propeno","pentano-propeno","butano-buteno","butano-penteno","hexano-buteno"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:33,materia:"balancos",tipo:"calc",
  enun:"C4H9OH+HCl→C4H9Cl+H2O; 740 kg álcool terc-butílico + 432 kg HCl; após 1 h restam 4 kmol de HCl. Conversão: (Cl=35, H=1, O=16, C=12)",
  alt:["100%","80%","67%","60%","40%"],gab:"D"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:34,materia:"balancos",tipo:"calc",
  enun:"Produção de benzeno: C6H5CH3+H2→C6H6+CH4, com purga; H2/tolueno=5 na entrada, fração de metano 0,20; conversão por passe 75%; produção 150 kmol/h benzeno. Vazão molar de H2 na purga aprox.:",
  alt:["126 kmol/h","203 kmol/h","263 kmol/h","283 kmol/h","306 kmol/h"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:35,materia:"balancos",tipo:"calc",
  enun:"Extração de açúcar da beterraba: 1.000 kg/h (20% açúcar), extrai 90%; solução final 25% açúcar; na polpa processada água=3× o rejeito de beterraba. Água total que deixa o processo (kg/h):",
  alt:["540","600","2.400","2.460","3.000"],gab:"D"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:36,materia:"balancos",tipo:"calc",
  enun:"Torre de resfriamento: 1.000 kg/min água saturada a 76ºC, sai a 46ºC; reposição (make up) por evaporação. Valor máximo de reposição, resfriamento só por evaporação (kg/min):",
  alt:["15","20","35","55","100"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:37,materia:"balancos",tipo:"calc",
  enun:"Craqueamento do etano: (1) C2H6→C2H4+H2; (2) C2H4+C2H6→C3H6+CH4; cromatografia na saída: CH4 área 15, C2H4 50, C2H6 25; alimentação metano-etano com 95% etano. Razão nº mols H2/propeno na saída:",
  alt:["6","5","4","3,33","2,5"],gab:"A"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:38,materia:"balancos",tipo:"calc",
  enun:"Múltiplos reatores adiabáticos R→P intercalados com resfriadores; T de entrada/saída indicadas; ΔHr=−25.000 J/mol; Cp inerte=10 J/mol·K; fração molar de R na alimentação 0,1. Conversão total de R:",
  alt:["30%","40%","50%","60%","80%"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:39,materia:"balancos",tipo:"calc",
  enun:"Processo SOLVAY (6 etapas com rendimentos dados). Para 1.000 kmol de CO2 na etapa 2, quantidade de carbonato de sódio formado (kmol):",
  alt:["140","189","220","378","420"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:40,materia:"balancos",tipo:"calc",
  enun:"Saturadores em paralelo (água e metanol) em He; reator precisa de água/metanol=3; F2/F1=5; Pvap metanol no saturador=0,05 atm. Temperatura do saturador de água aprox.:",
  alt:["15ºC","18ºC","20ºC","25ºC","35ºC"],gab:"D"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:41,materia:"termo",tipo:"calc",
  enun:"Máquina térmica entre 600 K e 200 K; tabela com QH, QC e W de 5 ciclos. O único fisicamente possível é o ciclo:",
  alt:["A","B","C","D","E"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:42,materia:"termo",tipo:"conc",
  enun:"Ciclo de Rankine ideal (figura T-s). Durante a etapa 3→4 do ciclo, a(o):",
  alt:["máquina cede calor para a fonte fria","máquina realiza trabalho girando a turbina","máquina absorve calor da fonte quente","bomba recebe trabalho de fonte externa","vapor é condensado no condensador"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:43,materia:"termo",tipo:"calc",
  enun:"1 mol de gás ideal monoatômico, transformação LMN reversível (diagrama PV). Calor trocado (kJ): (Cv=3R/2, Cp=5R/2, R=8,3 J/mol·K)",
  alt:["6,0","15","24","30","36"],gab:"D"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:44,materia:"termo",tipo:"conc",
  enun:"Energia interna U=C·S³/V. Uma equação de estado do sistema (P=pressão):",
  alt:["T=6CS/V","T=3CS³/V²","T=3CS²/V","P=CS³/V","P=CS²/V"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:45,materia:"calor",tipo:"calc",
  enun:"Parede de forno (10 m²): 30 cm refratário (k=1,5) + 15 cm isolante (k=0,1); T interna 955ºC, externa 105ºC. Calor perdido (kcal/h) e T da interface (ºC):",
  alt:["50 e 945","566 e 841,8","5.000 e 855","50.000 e 855","56.666 e 841,8"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:46,materia:"termo",tipo:"conc",
  enun:"Equação de estado p=RT/(v−b)−a/[√T·v(v+b)]. A derivada (∂s/∂v)T é dada por:",
  alt:["R/(v−b) + a/[2v(v+b)√T³]","−RT/(v−b)²+a/[√T(v+b)²]+a/[√T(v+b)v²]","RT²/[2(v−b)]−2√T·a/[v(v+b)]","RT/(v−b)²+a/[√T·v(v+b)²]","−1/[√T·v(v+b)]"],gab:"A"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:47,materia:"controle",tipo:"conc",
  enun:"Resposta transitória a degrau unitário (gráfico com td, tr, tp, ts). É INCORRETO que o tempo:",
  alt:["de atraso td = 60 min (metade do valor final)","de acomodação ts relacionado à maior constante de tempo","de subida tr = 60 min (10% a 90%)","de acomodação ts = 200 min","de pico tp = 140 min"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:48,materia:"controle",tipo:"conc",
  enun:"Respostas de sistemas de 1ª e 2ª ordem (figuras 1,2,3). Correto: I-1ª ordem atinge 63,2% em t=τ e ~100% em 4τ; II-mesmo sistema com tempo morto; III-2ª ordem sobreamortecido, maior fator de amortecimento demora mais (ζ curva1>curva2>curva3).",
  alt:["I, apenas","II, apenas","I e III, apenas","II e III, apenas","I, II e III"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:49,materia:"controle",tipo:"conc",
  enun:"Sistema de 2 tanques agitados com aquecimento Q; entrada T, saídas T1 e T2 (diagrama de blocos Gp e GM). A função de transferência é:",
  alt:["T2=Gp·T + GM·Q, T manipulada e T2 perturbação","T2=Gp·T × GM·Q, Q manipulada e T perturbação","T2=Gp·T + GM·Q, Q manipulada e T perturbação","T2=Gp·Q + GM·T, Q perturbação e T manipulada","T2=Gp·Q × GM·T, Q perturbação e T manipulada"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:50,materia:"controle",tipo:"calc",
  enun:"Instrumento de temperatura (1ª ordem, τ=0,5 min), estacionário 30ºC, colocado em sistema a 70ºC. Leitura após 0,5 min (ºC) aprox.: (tabela de e^x; e^−1=0,37)",
  alt:["70","55","50","45","30"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:51,materia:"controle",tipo:"conc",
  enun:"Sistemas de controle em malhas. É correto que as malhas:",
  alt:["fechadas devem ter estabilidade, baixo tempo de resposta e amortecimento adequado","fechadas têm maior sensibilidade a variações do sistema","fechadas têm menor tendência a oscilação e instabilidade","abertas têm ação dependente do valor da saída","abertas têm o controlador apenas como ganho K, erro pode ser muito grande"],gab:"A"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:52,materia:"calor",tipo:"calc",
  enun:"Trocador correntes paralelas: quente 160→80ºC, frio 20→60ºC; U limpo 200 W/m²K; resistências de depósito 0,001 e 0,002 m²K/W; área 3 m². Calor transferido (W): (tabela de ln)",
  alt:["15.000","22.500","30.000","36.000","48.000"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:53,materia:"calor",tipo:"conc",
  enun:"Tanques de aço fechados com combustível, fundo em contato com solo de cimento. Ocorre transferência de calor por:",
  alt:["condução, somente","convecção, somente","condução e radiação, somente","convecção e radiação, somente","condução, convecção e radiação"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:54,materia:"fluidos",tipo:"calc",
  enun:"Gás natural (90% CH4, 7% C2H6, 3% C3H8) em tubo 0,1 m², v=0,56 m/s, 25ºC, 200 kPa; gás ideal. Vazão mássica (kg/s): (R=8,31; MM 16/30/44)",
  alt:["8×10⁻²","7,2×10⁻²","8×10⁻⁴","8×10⁻⁵","7,2×10⁻⁵"],gab:"A"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:55,materia:"termo",tipo:"conc",
  enun:"Diagramas de Mollier usualmente têm como ordenada a:",
  alt:["temperatura, abcissa pressão, adequado a refrigeração","temperatura, abcissa entalpia, adequado a refrigeração","temperatura, abcissa entalpia, não adequado a refrigeração","pressão absoluta, abcissa entalpia, adequado a refrigeração","pressão absoluta, abcissa entalpia, não adequado a refrigeração"],gab:"D"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:56,materia:"fluidos",tipo:"conc",
  enun:"Força de arraste F de esfera: depende de V, D, ρ, μ. No Teorema Pi, n parâmetros, k dimensões, Π grupos:",
  alt:["n=4, k=3, Π=2, Π=μ/ρVD","n=4, k=4, Π=2, Π=μρ/VD","n=5, k=3, Π=2, Π=μ/ρVD","n=5, k=4, Π=2, Π=μρ/VD","n=5, k=3, Π=1, Π=μ/VD"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:57,materia:"fluidos",tipo:"conc",
  enun:"Número de Froude e número de Euler representam, respectivamente, a razão entre as forças:",
  alt:["de inércia e gravidade | viscosa e inércia","de pressão e inércia | viscosa e compressibilidade","de inércia e compressibilidade | pressão e inércia","viscosa e atrito | compressibilidade e gravidade","de inércia e gravidade | de pressão e inércia"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:58,materia:"fluidos",tipo:"conc",
  enun:"Propriedades aplicadas ao estudo dos fluidos. NÃO se aplica a(o):",
  alt:["viscosidade absoluta/dinâmica","capacidade térmica","massa específica/densidade absoluta","volume específico","peso específico"],gab:"B"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:59,materia:"fluidos",tipo:"calc",
  enun:"Prensa hidráulica: razão entre diâmetros dos êmbolos = 8; objeto de massa m no êmbolo maior equilibrado por força de 500 N. Massa m (kg): (g=10 m/s²; Lei de Pascal)",
  alt:["400","800","3.200","4.000","32.000"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:60,materia:"fluidos",tipo:"calc",
  enun:"NPSH requerido=0,4Q+2; NPSH disponível=−0,005Q²+12 (Q em L/s). Valor limite de vazão a partir do qual ocorre cavitação (L/s):",
  alt:["2","20","40","80","100"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:61,materia:"fluidos",tipo:"calc",
  enun:"Manômetro diferencial (M=água, N=óleo, manométrico=mercúrio); h1=0,3, h2=1,2, h4=0,2 m; ΔP(M,N)=16 kPa. Altura h3 (cm): (ρágua=1000, ρHg=13600, ρóleo=775, g=10)",
  alt:["0,8","17","20","40","80"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:62,materia:"opunit",tipo:"conc",
  enun:"Relação nº de pratos × razão de refluxo. Para atingir o fracionamento desejado, o refluxo:",
  alt:["total → coluna com nº infinito de pratos","total → coluna com retirada máxima de produtos","mínimo → menor número possível de pratos","mínimo → coluna com nº infinito de pratos","mínimo → projeto de maior viabilidade econômica"],gab:"D"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:63,materia:"opunit",tipo:"conc",
  enun:"Destilação flash: apresenta boa eficiência e pode ser aplicada a misturas binárias:",
  alt:["somente, se a diferença de volatilidade for baixa","somente, se a diferença de volatilidade for elevada","ou multicomponentes, independente da volatilidade","ou multicomponentes, se a volatilidade for baixa","ou multicomponentes, se a diferença de volatilidade for elevada"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:64,materia:"opunit",tipo:"conc",
  enun:"Colunas de pratos vs recheio. Correto: I-recheios têm menor perda de carga que pratos; II-projetos de recheio menos econômicos por serem sofisticados; III-recheios mais suscetíveis à formação de espuma.",
  alt:["I, apenas","II, apenas","I e III, apenas","II e III, apenas","I, II e III"],gab:"A"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:65,materia:"opunit",tipo:"conc",
  enun:"Diagrama ternário de equilíbrio líquido-líquido (A,B,C; regiões 1 e 2; curva QPR; ponto P). Conclui-se que:",
  alt:["o diagrama se refere a sistema com duas zonas de miscibilidade parcial","a região 1 representa duas fases líquidas imiscíveis","a região 2 representa uma fase líquida homogênea","a região 2 representa duas fases líquidas imiscíveis","as solubilidades de A em B e de B em C se igualam no ponto crítico P"],gab:"D"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:66,materia:"fluidos",tipo:"calc",
  enun:"Venturi (μ=1,28×10⁻² Pa·s, ρ=0,80 g/cm³); seções 1 e 2 com D 8 e 4 cm; manômetro de Hg (13,6 g/cm³) com desnível h=20 cm; perdas desprezíveis; g=10, π=3. Vazão (L/s) e regime na seção 1:",
  alt:["9,6 e turbulento","9,6 e laminar","24 e turbulento","24 e laminar","96 e turbulento"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:67,materia:"fluidos",tipo:"conc",
  enun:"Tubulação DN 25 mm: 2 joelhos retos (Leq 1,5 m) + 2 válvulas borboleta (0,3 m) trocados por 1 válvula globo (5 m) + 3 joelhos curvos R=2d (0,3 m). A perda de carga, após as modificações:",
  alt:["diminuiu, pela diminuição do número de válvulas","diminuiu, pela substituição dos joelhos e diminuição de válvulas","aumentou, principalmente pela válvula globo","aumentou pela presença de mais um joelho","não foi alterada"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:68,materia:"opunit",tipo:"conc",
  enun:"Métodos de Fenske e Underwood. Correto APENAS: I-Nmín por Fenske em refluxo mínimo; II-Nmín por Fenske em refluxo total; III-Underwood para refluxo mínimo com vazões constantes; IV-ambos usam volatilidade relativa.",
  alt:["I e II","I e III","II e IV","I, III e IV","II, III e IV"],gab:"E"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:69,materia:"opunit",tipo:"calc",
  enun:"Remover 87% do etanol de corrente de ar (30% etanol molar) com água pura; solução aquosa 25% etanol em massa; solubilidade do ar e evaporação da água desprezíveis. Razão molar água/ar: (MM etanol=46, ar=29)",
  alt:["1,1","2,0","2,6","2,9","3,3"],gab:"C"});
Q({prova:"tp2012",ano:2012,banca:"TP",n:70,materia:"opunit",tipo:"conc",
  enun:"Método McCabe-Thiele é usado para cálculo, a partir da curva de equilíbrio, do número de estágios ou pratos:",
  alt:["teóricos, misturas multicomponentes","teóricos, misturas binárias","teóricos, torres de recheio","reais, misturas multicomponentes","reais, misturas binárias"],gab:"B"});

/* =============================================================================
   TRANSPETRO 2018.1 — ENG. PROC. (QUÍMICO) (prova 27) — ESPECÍFICAS q21-70
============================================================================= */
Q({prova:"tp2018",ano:2018,banca:"TP",n:21,materia:"termo",tipo:"calc",
  enun:"Ar a 290 K comprimido de 101,3 para 2065 kN/m² em compressor de 2 estágios, eficiência mecânica 85%, PV^1,25=cte, taxas iguais, intercooler 100% eficiente. Trabalho de compressão (kJ/kg): (v específico=0,826 m³/kg)",
  alt:["355,7","345,5","293,7","249,5","172,5"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:22,materia:"termo",tipo:"calc",
  enun:"Pvap benzeno e tolueno a 293 K: 0,1 e 0,03 bar; solução 1,2 mol benzeno + 1,3 mol tolueno; ideal. Composição da fase vapor em equilíbrio (benzeno, tolueno):",
  alt:["0,369 e 0,631","0,405 e 0,595","0,500 e 0,500","0,635 e 0,365","0,755 e 0,245"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:23,materia:"termo",tipo:"calc",
  enun:"SO2+½O2⇌SO3 a 960 K, Kp=10. Energia de Gibbs (kJ/mol): pressões parciais SO2=10⁻³, O2=0,20, SO3=10⁻⁴; R=8,314; ln5=1,609, ln10=2,303.",
  alt:["−5,1","−12,8","−18,4","−36,8","−42,3"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:24,materia:"termo",tipo:"calc",
  enun:"Máquina de Carnot reversível absorve 2,0 kJ a 350ºC e rejeita a 40ºC. Trabalho realizado (kJ):",
  alt:["0,51","0,71","1,01","2,50","3,90"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:25,materia:"termo",tipo:"calc",
  enun:"NH3⇌3/2 H2+1/2 N2 a 1 bar, Kp=1,36×10⁻³ a 298 K. Valor de Kc (estado padrão 1 mol/L): (R=0,083145 L·bar/mol·K)",
  alt:["1,1×10⁻⁴","1,4×10⁻³","4,01×10⁻²","5,5×10⁻⁵","13,6×10⁻⁴"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:26,materia:"termo",tipo:"calc",
  enun:"Ciclo-padrão a ar de refrigeração: ar entra no compressor a 0,1 MPa/253 K, sai a 0,5 MPa; entra na turbina a 288 K; Cp=1,0035, Cv=0,7165. Coeficiente de eficácia aprox.:",
  alt:["0,5","0,6","0,8","1,7","2,7"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:27,materia:"termo",tipo:"calc",
  enun:"Metal (1 kg) sob processo isotérmico reversível de 0,5 a 100 MPa a 298 K. Calor transferido (J/kg): (β=5,0×10⁻⁵ K⁻¹; v=0,000114 m³/kg)",
  alt:["55,5","102,5","150,5","163,9","1200,3"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:28,materia:"termo",tipo:"conc",
  enun:"U=U(S,V), dU=TdS−pdV; H=H(S,P), H=U+PV. A relação de Maxwell correspondente:",
  alt:["(∂P/∂V)S=(∂S/∂P)V","(∂T/∂V)P=(∂V/∂S)V","(∂T/∂V)S=−(∂T/∂S)V","(∂P/∂U)V=(∂V/∂P)P","(∂T/∂P)S=(∂V/∂S)P"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:29,materia:"termo",tipo:"calc",
  enun:"Central termoelétrica entre 823 K e 300 K; calor do reservatório 1 MW; potência 450 kW. Eficiência da máquina:",
  alt:["0,36","0,45","0,55","0,64","0,81"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:30,materia:"fluidos",tipo:"conc",
  enun:"Gás em escoamento adiabático, vazão mássica constante, tubo horizontal de área constante; v específico e velocidade aumentam. Expressão da velocidade máxima umax:",
  alt:["umax²=V²(∂S/∂V)P","umax²=−gc(∂P/∂V)U","umax²=−gcV²(∂P/∂V)S","umax²=gcT²(∂P/∂T)S","umax²=−V²(∂P/∂V)S"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:31,materia:"termo",tipo:"calc",
  enun:"Diagrama de fases do NaF; ponto triplo a 1260 K; equações de Pvap sólido (34450/T...) e líquido (31090/T...). Calor de fusão ΔH no ponto triplo (kJ): (R=8,3144)",
  alt:["27,7","32,1","33,3","298,8","314,4"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:32,materia:"termo",tipo:"calc",
  enun:"Bola com 0,005 L de gás ideal na superfície da água; T constante 25ºC; 1 atm=10 m. Volume da bola a 50 m de profundidade:",
  alt:["1 L","1 cm³","0,025 L","1 m³","0,01 m³"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:33,materia:"termo",tipo:"conc",
  enun:"Entropia na reação 2A(l)+B(s)→2C(g). A entropia varia do seguinte modo:",
  alt:["ΔS>0 no sentido reagentes→produtos","ΔS>0 no sentido produtos→reagentes","ΔS=0, não há variação","reagentes têm maior entropia que o produto","o produto tem menor entropia que os reagentes"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:34,materia:"cinetica",tipo:"calc",
  enun:"Tempo espacial: reator tubular 200 L alimentado com 5 L/s. Tempo espacial (minutos):",
  alt:["0,35","0,40","0,55","0,70","0,66"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:35,materia:"cinetica",tipo:"calc",
  enun:"Arrhenius ln k vs 1/T (dados tabelados: ln k de 5,0 a −5,0; 1/T de 0,0023 a 0,0030). Energia de ativação (J/mol): (R=8,314)",
  alt:["120.000","118.771","135.000","143.250","131.259"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:36,materia:"cinetica",tipo:"calc",
  enun:"CSTR A→B+C; mistura equimolar A/inerte a 400 K, 10 atm; vazão entrada 8 L/s; tabela 1/(−rA)×X. Volume do CSTR (L) para conversão 80%: (R=0,082; gases ideais)",
  alt:["820","750","535","795","640"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:37,materia:"quimica",tipo:"calc",
  enun:"Primeiro Princípio: gás em cilindro a 6,0×10⁴ N/m²; fornecidos 10 kJ a pressão constante; expansão de 50 L. Trabalho e variação de energia interna (J):",
  alt:["−5000 e 5000","−2000 e 8000","−3000 e 7000","−4000 e 6000","−6000 e 4000"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:38,materia:"cinetica",tipo:"calc",
  enun:"PFR, reação elementar A→B; vazão 6 L/min; k=0,25 min⁻¹. Volume para reduzir a concentração de saída a 20% da entrada (L): (ln0,2=−1,609)",
  alt:["38","45","32","50","28"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:39,materia:"calor",tipo:"calc",
  enun:"Trocador passe único contracorrente: óleo 70→50ºC, carga 150 kW; água 20→40ºC; U=100 W/m²·ºC. Área de transferência (m²):",
  alt:["45 m²","50 m²","55 m²","65 m²","70 m²"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:40,materia:"controle",tipo:"calc",
  enun:"Sistema de nível laminar: RC·dh/dt + h = R·qi; qo=h/R. Função de transferência Qo(s)/Qi(s):",
  alt:["C/(RC+1)","R/(RC+1)","1/(RC+1)","1/(RC−1)","RC/(RC+1)"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:41,materia:"calor",tipo:"calc",
  enun:"Fluxo de radiação de corpo a 426,85ºC, emissividade 0,8 (σ=5,67×10⁻⁸). Fluxo (kW/m²):",
  alt:["16,63","13,63","12,00","10,90","8,50"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:42,materia:"controle",tipo:"calc",
  enun:"Realimentação unitária negativa, ganho K=7: margens de fase e ganho 20º e 10 dB. Limite de aumento do ganho K (dB) até instabilidade:",
  alt:["5","10","15","20","25"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:43,materia:"termo",tipo:"calc",
  enun:"Ciclo frigorífico ideal (freon-12): capacidade de refrigeração 4 kW; coef. de eficácia 4 kJ/kg; trabalho compressor 20 kJ/kg. Vazão de refrigeração (kg/s):",
  alt:["0,01","0,02","0,03","0,04","0,05"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:44,materia:"controle",tipo:"calc",
  enun:"Sistema 1ª ordem cadeia aberta, ganho impróprio e polo 6 e −2; realimentação unitária negativa para tornar mais rápido. Nova constante de tempo:",
  alt:["0,125","0,25","0,5","1","3"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:45,materia:"calor",tipo:"calc",
  enun:"Ar atm. em duto circular raio 2,5 cm, v=0,4 m/s, paredes T constante. Coef. de transferência de calor na região desenvolvida: (k=0,03; NuT=3,657)",
  alt:["6,29 W/m²ºC","4,39 W/m²ºC","3,35 W/m²ºC","2,50 W/m²ºC","1,75 W/m²ºC"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:46,materia:"controle",tipo:"calc",
  enun:"Sistema 2ª ordem H=100/(s²+16s+100); freq. amortecida 6 rad/s, tempo de pico 0,5236 s. Tempo de acomodação (critério 2%):",
  alt:["0,125","0,25","0,5","1,15","1,5"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:47,materia:"controle",tipo:"calc",
  enun:"H=K/[s(s+0,5)(s+2)]. Erro estático de posição se a T do forno for constante e o ganho K dobrado:",
  alt:["0","K/2","K/4","K/8","K/16"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:48,materia:"calor",tipo:"calc",
  enun:"Parede 2 camadas: 9 cm fibra de vidro (k=0,03) + 14 cm tijolo (k=0,7); área 4 m²; T interna 85ºC, externa 35ºC. Fluxo de calor (J/s):",
  alt:["10","20","40","60","80"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:49,materia:"termo",tipo:"calc",
  enun:"4 g de H2 expandem isotérmica e reversivelmente de 5 para 10 L a 300 K (gás ideal). Trabalho de expansão (kJ): (R=8,31; ln2=0,69; MM H2=2)",
  alt:["−3,44","−6,88","−13,76","−17,20","−20,64"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:50,materia:"calor",tipo:"conc",
  enun:"Número de Prandtl (μ=viscosidade dinâmica, Cp, K=condutividade). A expressão que define Pr:",
  alt:["μ·K/Cp","K/(Cp·μ)","K·Cp/μ","μ·Cp/K","Cp/(μ·K)"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:51,materia:"balancos",tipo:"calc",
  enun:"CO2 saturado com vapor d'água, P total 100 kPa a 363 K; Pvap água=70 kPa. Fração molar do CO2 na mistura:",
  alt:["0,1","0,3","0,5","0,7","0,9"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:52,materia:"balancos",tipo:"calc",
  enun:"N2 líquido a 60 K vaporizado nas CNTP ocupa 0,112 m³; v molar=2,24×10⁻² m³/mol. Massa de N2 (g): (MM N2=28)",
  alt:["140","200","280","400","560"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:53,materia:"balancos",tipo:"calc",
  enun:"40 m³ de solução aquosa de H2S a 0,02 mol/L. Massa de H2S (kg): (MM H2S=34)",
  alt:["0,82","4,64","13,6","27,2","34,6"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:54,materia:"balancos",tipo:"calc",
  enun:"Mistura gasosa 0,4 mol CH4 + 0,7 mol C2H6 + 0,9 mol C3H8, P total 200 kPa. Pressão parcial de CH4 (kPa):",
  alt:["20","40","50","70","90"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:55,materia:"balancos",tipo:"calc",
  enun:"Alimentação A+B separada: etapa 1 → X e Y (Y=300 kg/h, 20% A). Etapa 2: X → W (80 kg/h, 95% A) e Z (20 kg/h, 20% A). Concentração % de A na alimentação:",
  alt:["15%","20%","35%","70%","85%"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:56,materia:"balancos",tipo:"calc",
  enun:"Hidrogenação de C2H4: 56 kg/h C2H4 + 10 kg/h H2; só o limitante é consumido; excesso recuperado. Vazão de reagente recuperado (kg/h): (MM C2H4=28, H2=2)",
  alt:["2","4","6","8","10"],gab:"C"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:57,materia:"termo",tipo:"conc",
  enun:"Função de Helmholtz da=−sdT−Pdv; gás ideal PV=RT. A relação (∂s/∂V)T para gás ideal:",
  alt:["−R/T","R/V","−R/P","T/V","1"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:58,materia:"controle",tipo:"conc",
  enun:"G1(s)=(2+0,4s)/(8+0,2s); G2(s)=(1−0,1s)/(4+0,1s). Em relação às funções de transferência:",
  alt:["ambos G1 e G2 são estáveis","G1 tem polo −5 e zero 40; estável","G1 tem polo 40 e zero −5; instável","G2 tem polo 10 e zero −40; estável","G2 tem polo −40 e zero 10; instável"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:59,materia:"cinetica",tipo:"calc",
  enun:"CSTR hidrólise do anidrido acético (1ª ordem), excesso de água, 25ºC/1 atm; produzir 20 kg/h de ácido acético; k≈0,05 min⁻¹; C0 anidrido=100 g/L; conversão 80%. Volume do reator (L) aprox.: (MM ácido=60, anidrido=102)",
  alt:["550,6","253,1","128,4","103,7","96,5"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:60,materia:"termo",tipo:"conc",
  enun:"Diagrama de fase PT (sólido/líquido/vapor; pontos X,Y em pressões; U,V em temperaturas). A passagem de:",
  alt:["XU para XV corresponde à solidificação","XV para XU corresponde à fusão","YU para YV corresponde à sublimação","YV para XV corresponde à solidificação","YU para XU corresponde à vaporização"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:61,materia:"fluidos",tipo:"calc",
  enun:"CO2 (gás ideal) a 127ºC e 1000 kPa sofre aceleração isentrópica até Mach 0,5. Temperatura após (K) aprox.: (k=1,25 a 400 K)",
  alt:["989,76","832,85","712,89","558,72","387,88"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:62,materia:"fluidos",tipo:"calc",
  enun:"Transporte de fluido (ρ=1000, μ=0,00001); tubo 100 m, D=0,1 m; reservatório aberto a 10 m de altura; 2 válvulas (Leq/D=8) + 2 cotovelos 90º (Leq/D=52); turbulento f=0,02; Q=7,85×10⁻³ m³/s. Pressão na saída da bomba (kPa): (Patm=101,325 kPa)",
  alt:["201 kPa","222 kPa","100 kPa","444 kPa","402 kPa"],gab:"B"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:63,materia:"fluidos",tipo:"calc",
  enun:"Duas bombas em série H=H0−AQ² (H0=15 m, A=10⁵ s²/m⁵); dois tanques abertos, desnível 10 m; tubo D=0,1 m, L=10 m; perdas desprezadas. Vazão de operação (m³/s):",
  alt:["0,05","1,0","0,1","0,5","0,01"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:64,materia:"fluidos",tipo:"calc",
  enun:"Re=10000 (turbulento pleno) em tubo D=0,1 m (ρ=1000, μ=0,00001). Vazão volumétrica (m³/s):",
  alt:["7,9×10⁻⁶","3,1×10⁻⁵","1,9×10⁻⁵","3,1×10⁻⁶","7,9×10⁻⁴"],gab:"E"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:65,materia:"fluidos",tipo:"calc",
  enun:"Venturi D=0,125 m em tubo D=0,25 m; ΔP medido como 100 mm de água; ρágua=1000, g=10, ρfluido=790, Cv=0,8. Vazão volumétrica (m³/s) aprox.:",
  alt:["0,3","0,15","0,12","0,015","0,5"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:66,materia:"fluidos",tipo:"calc",
  enun:"Cavitação: Q=0,0123 m³/s, D=0,125 m; tanque na mesma altura, pressão de sucção 34 kPa; perdas desprezadas; NPSH requerido 4 m; Pvap=4,25 kPa; ρ=1000. NPSH disponível (m) e se a vazão é adequada:",
  alt:["3,0, não adequada","4,0, não adequada","2,0, adequada","3,0, adequada","4,0, adequada"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:67,materia:"opunit",tipo:"calc",
  enun:"Extração líquido-líquido: corrente orgânica (30% soluto, 70% diluente) F kg/s + solvente puro 0,5F kg/s. Composição % do ponto de mistura M (soluto, diluente, solvente) aprox.:",
  alt:["0,20; 0,47; 0,33","0,2; 0,8; 0,0","0,33; 0,2; 0,47","0,47; 0,2; 0,33","0,8; 0,2; 0,0"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:68,materia:"opunit",tipo:"calc",
  enun:"Absorção: altura l=(G/Kya)·[1/(1−m*G/L)]·ln(...). Dados: G/Kya=0,3; termo [1/(1−m*G/L)]=4,0; ln(...)=2,0. Pelo conceito NTU/HTU:",
  alt:["l=0,3 m; NTU=8,0; HTU=2,4 m","l=1,2 m; NTU=2,0; HTU=2,4 m","l=2,4 m; NTU=8,0; HTU=0,3 m","l=2,4 m; NTU=2,0; HTU=1,2 m","l=2,4 m; NTU=4,0; HTU=0,6 m"],gab:"D"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:69,materia:"fluidos",tipo:"conc",
  enun:"Modelo empírico q=Cv·√(P1−P2); constante Cv estimada. Dimensão de Cv (M,L,t) para consistência dimensional:",
  alt:["M⁻¹ᐟ²·L⁷ᐟ²","M¹ᐟ²·L¹ᐟ²","M⁻¹ᐟ²·L⁵ᐟ²","M⁻¹ᐟ²·L⁷ᐟ²·t¹ᐟ²","L⁷ᐟ²·t¹ᐟ²"],gab:"A"});
Q({prova:"tp2018",ano:2018,banca:"TP",n:70,materia:"opunit",tipo:"conc",
  enun:"Filtração: 5 experimentos, (t/V) × V, cada reta para um Δp. Pelos coeficientes linear e angular, o experimento com MENOR Δp foi o:",
  alt:["5","4","3","2","1"],gab:"E"});

/* =============================================================================
   PETROBRAS 2012 (PSP RH 1/2012) — ENG. PROC. JR — ESPECÍFICAS q21-70
============================================================================= */
Q({prova:"pb2012",ano:2012,banca:"PB",n:21,materia:"termo",tipo:"conc",
  enun:"Estrangulamento adiabático de gás; diâmetro de entrada 2× o de saída; entalpia não se altera (h1=h2). Então:",
  alt:["h01=h02 e V1=½V2","h01=h02 e V1=2V2","h01=h02 e V1=V2","h01>h02 e V1=½V2","h01<h02 e V1=½V2"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:22,materia:"termo",tipo:"calc",
  enun:"Turbina de avião: ar entra no difusor a T1=300 K, P1=60 kPa, V1=250 m/s; Cp=1,00 kJ/kg·K; isentrópico. Temperatura na entrada do compressor T01 (K):",
  alt:["330,125","330,25","331,25","362,50","425"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:23,materia:"balancos",tipo:"calc",
  enun:"Psicrometria: ar passa por névoa de água; T1=50ºC, T2=35ºC, T água=25ºC. Eficiência de saturação:",
  alt:["1,40","1,33","0,72","0,60","0,50"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:24,materia:"termo",tipo:"calc",
  enun:"Diagrama T×S de transformação cíclica reversível (gráfico com T de 0 a 450 K, S de 0 a 8). Eficiência do ciclo:",
  alt:["25%","30%","40%","75%","100%"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:25,materia:"termo",tipo:"calc",
  enun:"Gás ideal, transformação AB reversível isotérmica (diagrama P×V: de 5×10⁵ Pa/4×10⁻³ m³ para ~2×10⁵/10×10⁻³). Calor trocado (J): (ln2,5=0,9)",
  alt:["6,4×10³","5,8×10³","3,2×10³","2,5×10³","1,8×10³"],gab:"E"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:26,materia:"termo",tipo:"conc",
  enun:"Gás Van der Waals p=RT/(v−b)−a/v²; transformação reversível a volume molar constante. Inclinação da reta T×p:",
  alt:["v²/a","(v−b)/R","(v−b)/R·(1+a/v²)","2a/v³−RT/(v−b)²","(pv³−av+2ab)/(v³R)"],gab:"B"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:27,materia:"termo",tipo:"conc",
  enun:"Modelo de Van der Waals: o parâmetro b passa a considerar:",
  alt:["energia cinética média das moléculas","forças de atração entre moléculas","transformações irreversíveis","volume ocupado pelas moléculas","moléculas poliatômicas"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:28,materia:"termo",tipo:"conc",
  enun:"Equação P·(v−b)=RT. Derivada (∂s/∂P)T da entropia específica a T constante:",
  alt:["−R/P","−P/R","−R/(v−b)","(v−b)/R","v−b"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:29,materia:"termo",tipo:"calc",
  enun:"Refrigerador: calor removido do interior 5,0 kJ/s; potência líquida 2,0 kW. Coeficiente de performance:",
  alt:["0,40","0,80","2,5","5,0","7,0"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:30,materia:"balancos",tipo:"calc",
  enun:"Reservatório nas CNTP contém 220 g de propano. Volume (L) e massa (g) de metano que pode ser armazenado nas mesmas condições: (MM propano=44, metano=16)",
  alt:["56 e 40","56 e 80","112 e 40","112 e 80","220 e 110"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:31,materia:"balancos",tipo:"calc",
  enun:"Solução de bissulfito de sódio a 316 g/L em 2,5 L. Quantidade em mols e concentração (mol/L): (Na=23, S=32, O=16; NaHSO3=104)",
  alt:["5 mol e 5 mol/L","5 mol e 2,5 mol/L","5 mol e 2 mol/L","2,5 mol e 5 mol/L","2,5 mol e 2 mol/L"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:32,materia:"balancos",tipo:"calc",
  enun:"No Rio de Janeiro (nível do mar), umidade absoluta 62,2%. Razão entre pressão atmosférica e da umidade:",
  alt:["0,622","0,5","1","1,5","2"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:33,materia:"balancos",tipo:"calc",
  enun:"Lixiviação: Al2O3+2NaOH→2NaAlO2+H2O; soda 50% m/m; bauxita com 50% Al2O3, 1.020 t a tratar. Toneladas de solução de soda: (Al=27, Na=23, H=1, O=16)",
  alt:["200","400","510","800","1.020"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:34,materia:"termo",tipo:"conc",
  enun:"Equilíbrio de fase. O equilíbrio de fase:",
  alt:["é inversamente proporcional ao potencial químico","é alcançado quando Pvap = Patm","ocorre quando o potencial químico das fases é zero","depende da igualdade do potencial químico entre as fases","depende da entropia ser nula"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:35,materia:"opunit",tipo:"calc",
  enun:"Destilação: 390 kg/h benzeno + 460 kg/h tolueno; destilado 10% tolueno; fundo 80% tolueno; razão de refluxo 3. Refluxo (kmol/h) e composição (% molar):",
  alt:["4,3 e 10% tolueno","4,3 e 90% benzeno","12,9 e 10% tolueno","12,9 e 10% benzeno","12,9 e 50% benzeno"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:36,materia:"balancos",tipo:"conc",
  enun:"Transesterificação (óleo + álcool, catalisada por hidróxido). Agente limitante e reagente em excesso, respectivamente:",
  alt:["etanol e NaOH","etanol e óleo","NaOH e etanol","óleo e NaOH","óleo e etanol"],gab:"E"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:37,materia:"balancos",tipo:"calc",
  enun:"C6H6+HNO3→C6H5NO2+H2O; 5 mol benzeno + 6 mol ácido nítrico; conversão 60% após 1 h. Mols de reagente limitante restantes e massa de produto (g): (C=12, O=16, N=14, H=1)",
  alt:["2 e 246","2 e 369","2,4 e 369","3 e 246","3 e 369"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:38,materia:"opunit",tipo:"conc",
  enun:"Produção de xileno; tabela de catalisadores (conversão, o-, m-, p-xileno %). Melhor catalisador para formar p-xileno em maior quantidade:",
  alt:["Atual","X","Y","W","Z"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:39,materia:"balancos",tipo:"calc",
  enun:"Evaporação de solução de NaOH 10% m/m; alimentação 5.000 kg/h; 3.000 kg/h de vapor. Concentração da solução, vapor formado (kg/h) e entalpia do vapor (kJ/kg):",
  alt:["40%, 4.000 e 1.375","40%, 3.000 e 1.300","50%, 4.000 e 1.375","50%, 3.000 e 1.300","60%, 4.000 e 1.300"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:40,materia:"balancos",tipo:"calc",
  enun:"Concentração de melaço (3 evaporadores); alimentação 20.000 kg/h (15% açúcares); 1º estágio 2.000 kg/h vapor; razão vapores recuperados 2:2:1; saída 40% açúcares. Total de vapor recuperado e volume de solução final (kg/h):",
  alt:["2.500 e 7.500","2.500 e 1.200","5.000 e 5.000","12.500 e 7.500","12.500 e 1.200"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:41,materia:"opunit",tipo:"conc",
  enun:"Ponto de bolha e orvalho a temperatura constante. Numa mistura, o ponto de bolha:",
  alt:["e o de orvalho têm pressões iguais a zero","e o de orvalho têm pressões iguais, diferentes de zero","tem pressão menor que o ponto de orvalho","tem pressão maior que o ponto de orvalho","tem temperatura menor que o ponto de orvalho"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:42,materia:"opunit",tipo:"calc",
  enun:"Flash: mistura P/Q; alimentação 1.200 kg/h (50% m/m Q); topo 98% molar P; fundo 3% molar P. Vazões molares de topo e fundo (kmol/h): (MM P=100, Q=200)",
  alt:["3,06 e 5,94","4,45 e 4,55","4,54 e 4,45","5,94 e 3,06","6 e 3"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:43,materia:"opunit",tipo:"conc",
  enun:"McCabe-Thiele: a reta q, além de separar áreas do destilador:",
  alt:["descreve a condição da alimentação e do prato respectivo","indica quando há misturas azeotrópicas","determina o número de pratos mínimos","determina as condições de operação da zona de retificação","determina os parâmetros do condensador"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:44,materia:"opunit",tipo:"conc",
  enun:"Separação de misturas azeotrópicas por destilação. Procedimento possível:",
  alt:["aumento das temperaturas de operação","destilação com inclusão de terceiro componente não solvente","diminuição da pressão de trabalho","separação por secagem posterior","mudança nas condições do condensador e refluxo"],gab:"B"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:45,materia:"opunit",tipo:"calc",
  enun:"Absorção NH3-ar (30% amônia volumétrica), recuperar 99%, água limpa, 1 bar; gráfico y*×x dado. Nº mínimo de mols de água por 100 mols de gás de entrada:",
  alt:["427","415,3","408,4","396,8","394,6"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:46,materia:"opunit",tipo:"conc",
  enun:"Debutanização (destilação multicomponente); método empírico de Fenske-Underwood-Gilliland. Sequência de equações no algoritmo:",
  alt:["Fenske–Underwood–Gilliland–Kirkbride–Balanço de energia","Fenske–Gilliland–Underwood–Kirkbride–Balanço","Fenske–Kirkbride–Gilliland–Underwood–Balanço","Balanço–Fenske–Gilliland–Underwood–Kirkbride","Balanço–Fenske–Underwood–Gilliland–Kirkbride"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:47,materia:"opunit",tipo:"calc",
  enun:"Extração de etilenoglicol+água por furfural; alimentação 1.520 kg/h; diagrama ternário. Quilogramas de solvente necessários e suficientes:",
  alt:["480","507","760","4.750","4.813"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:48,materia:"opunit",tipo:"conc",
  enun:"Absorção: indica-se o uso de:",
  alt:["recheio para líquidos viscosos, baixa ΔP, D>2 ft","recheio para líquidos de baixa viscosidade, baixa ΔP, D>2 ft... na verdade D<2 ft","recheio para baixa viscosidade, alta ΔP, D>2 ft","pratos, quando se requer limpeza, troca térmica e D<4 ft","pratos, quando se requer limpeza, troca térmica e D>4 ft"],gab:"E"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:49,materia:"opunit",tipo:"calc",
  enun:"Curva de secagem (gráfico umidade livre × tempo); X1=0,40 → X2=0,18 (kg H2O/kg sólido seco). Tempo estimado de secagem (horas):",
  alt:["1","2","3","4","5"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:50,materia:"termo",tipo:"calc",
  enun:"Cp do H2SO4 = 33,25 + 0,033·T (cal/mol·ºC, T em ºC). Convertendo para cal/mol·K:",
  alt:["Cp=297,241+9,009·T","Cp=297,241+0,033·T","Cp=24,241+9,009·T","Cp=24,241+0,033·T","Cp=33,25+9,009·T"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:51,materia:"fluidos",tipo:"calc",
  enun:"Curvas do sistema e da bomba (gráfico). Vazão estimada (m³/h) com DUAS bombas idênticas em paralelo:",
  alt:["5","10","14","16","20"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:52,materia:"fluidos",tipo:"calc",
  enun:"Fluido viscosidade cinemática 21 mm²/s em tubo D=35 mm. Para escoar em regime turbulento, a velocidade deve ser (Re>~2300... limiar):",
  alt:["125 cm/s","1.125 mm/s","1,4 m/s","110 cm/s","13 dm/s"],gab:"E"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:53,materia:"fluidos",tipo:"conc",
  enun:"Tubulação com A1=A2/3 (A1 e A2 áreas das seções 1 e 2). Sobre velocidades V e vazões Q:",
  alt:["V1=V2","V1=3V2","V1=⅓V2","Q1>Q2","Q1<Q2"],gab:"B"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:54,materia:"fluidos",tipo:"calc",
  enun:"Bombeamento de água a 85ºC para caldeira; NPSH requerido 5,6 m; Pv=58 kPa; ρ=1000; g=10. Altura máxima da cota z (m):",
  alt:["−4,8","0","5,6","8,0","11,2"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:55,materia:"fluidos",tipo:"calc",
  enun:"Medidor de placa de orifício; A1=A2/3; área do tubo 60 cm²; água 2 L/s; Cd=0,5; g=10. Diferença de pressão P2−P1 (kgf/cm²):",
  alt:["0,5","1,0","1,5","2,0","4"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:56,materia:"calor",tipo:"conc",
  enun:"Processo com radiação (3), condução (2) e convecção (1) num forno. O fluxo de calor vai de:",
  alt:["1 para 3 e Δto>Δti","1 para 3 e Δto=tw−to","3 para 1, Δto=to−tw e Δti=ti−tp","3 para 1, Δto=tw−to e Δti=tp−ti","3 para 1, Δto=tw−to e Δti=ti−tp"],gab:"E"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:57,materia:"calor",tipo:"calc",
  enun:"Parede de forno 40 cm, T interna 600ºC, externa 200ºC; calor transferido 200 cal/m². Condutividade da parede:",
  alt:["0,6 cal/m·K","0,4 cal/cm·ºC","0,2 kcal/m·K","0,2 cal/cm·ºC","0,2 cal/m·K"],gab:"E"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:58,materia:"calor",tipo:"calc",
  enun:"Mufla 50×50×50 cm, parede refratária 10 cm, T=550ºC; fluxo 300 cal/s; k=0,05 cal/m·K·s. Temperatura da parede externa:",
  alt:["50 K","70 K","70ºC","463 K","100ºC"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:59,materia:"calor",tipo:"conc",
  enun:"Arranjos de tubos em trocadores (1,2,3,4). Sabe-se que:",
  alt:["1 e 3 triangulares, 2 e 4 quadrados; triangulares com menor ΔP","1 e 3 triangulares, 2 e 4 quadrados; triangulares mais fáceis de limpar","1 e 2 normais, 3 e 4 rodados; quadrados com maior ΔP","1 e 2 normais, 3 e 4 rodados; triangulares com maior ΔP","1 e 4 rodados, 2 e 3 normais; triangulares com maior ΔP"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:60,materia:"calor",tipo:"conc",
  enun:"Convecção em tubos (diagrama tp, ti, Qi, Qs; fluido em regime laminar aquecido). Afirma-se que:",
  alt:["Δt1=tp−t1, Δt2=tp−t2 e Qi<Qs","Δt1=tp−t1, Δt2=tp−t2 e Qi>Qs","Δt1=tp−t2, Δt2=tp−t1 e Qi<Qs","Δt1=tp−t2, Δt2=tp−t1 e Qi>Qs","Δt1=tp−t2, Δt2=tp−t1 e Qi=Qs"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:61,materia:"calor",tipo:"conc",
  enun:"Índice de incrustação e coeficiente global de troca térmica. Afirma-se que:",
  alt:["resistência e coeficiente são diretamente proporcionais","resistência e coeficiente são indiretamente (inversamente) proporcionais","resistência e coeficiente são proporcionais à área","resistência depende da área e coeficiente da corrosividade","não há relação entre resistência e coeficiente"],gab:"B"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:62,materia:"calor",tipo:"calc",
  enun:"Gases de fornalha (saída 500ºC) aquecem óleo cru de 80 para 150ºC; coef. global dos gases 2× menor que o do óleo cru. Temperatura dos gases após a troca (ºC):",
  alt:["465ºC","430ºC","360ºC","315ºC","300ºC"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:63,materia:"controle",tipo:"conc",
  enun:"Ganho do sistema de controle:",
  alt:["é definido e fixado por tipo de controlador","pode ser usado para ajustar sinal de entrada e saída de um indicador","depende do operador do sistema","define a relação entre o sinal de saída e o de entrada do controlador","garante que a variável de processo tenha valor sempre correto"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:64,materia:"cinetica",tipo:"calc",
  enun:"Reação X→Y de 2ª ordem; velocidade −0,4 mol/L·h; [X] após 1 h = 2 mol/L. Constante de velocidade:",
  alt:["0,2 L/mol·h","0,2 h⁻¹","0,1 L/mol·h","0,1 h⁻¹","0,1 L²/mol²·h"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:65,materia:"controle",tipo:"conc",
  enun:"Diagrama de controle (P, Q e tipo de ação sobre a variável controlada). P, Q e o tipo de ação são, respectivamente:",
  alt:["set-point, resultado, direta","set-point, resultado, indireta","set-point, correção, direta","sinal, correção, direta","sinal, resultado, indireta"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:66,materia:"controle",tipo:"conc",
  enun:"Diagrama de blocos de malha fechada; agentes R, Q, P, N. São, respectivamente:",
  alt:["correção, set-point, variável manipulada e ação","ação, variável manipulada, resultado e set-point","distúrbio, variável manipulada, resultado e medição","distúrbio, variável manipulada, correção e set-point","set-point, correção, variável manipulada e ação"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:67,materia:"controle",tipo:"conc",
  enun:"Modos de controle (gráfico X, Y, Z). X, Y e Z são, respectivamente:",
  alt:["P; P+I; P+I+D","P+D; P+I+D; P","P+D; P+I; P","P+I+D; P+D; P","P+I+D; P+I; P"],gab:"D"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:68,materia:"controle",tipo:"conc",
  enun:"Quadro de modos de correção (entradas K, L, M, N). K, L, M e N são, respectivamente:",
  alt:["rampa, pulso, degrau e senoidal","rampa, senoidal, degrau e pulso","degrau, pulso, rampa e senoidal","degrau, senoidal, rampa e pulso","degrau, rampa, pulso e senoidal"],gab:"C"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:69,materia:"cinetica",tipo:"conc",
  enun:"Reatores (batelada, CSTR, PFR). No reator:",
  alt:["PFR, a concentração não varia com o tempo mas varia com o espaço","PFR, a concentração varia com tempo e espaço","CSTR, a concentração não varia com tempo mas varia com espaço","CSTR, a concentração varia com tempo e espaço","de batelada, a concentração varia com tempo e espaço"],gab:"A"});
Q({prova:"pb2012",ano:2012,banca:"PB",n:70,materia:"cinetica",tipo:"conc",
  enun:"Arrhenius: experimento com reações X e Y (ln k × 1/T). Segundo a lei:",
  alt:["Ea de Y é maior que Ea de X","Ea de X é maior que Ea de Y","velocidade de Y é maior que a de X","velocidades são iguais","velocidades não dependem da energia de ativação"],gab:"B"});

/* =============================================================================
   PETROBRAS 2011 — ENG. PROC. JR — ESPECÍFICAS q21-70
   (transcrição resumida fiel; alguns gabaritos marcados p/ verificação)
============================================================================= */
Q({prova:"pb2011",ano:2011,banca:"PB",n:21,materia:"balancos",tipo:"calc",
  enun:"Unidade de H2: 17.400 kg/h de gás natural (90% CH4, 10% C2H6 vol.) + vapor com razão vapor/C total = 3. Vazão mássica da corrente de vapor (kg/h): (H=1, C=12, O=16)",
  alt:["50.000","52.200","54.000","57.400","59.400"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:22,materia:"balancos",tipo:"calc",
  enun:"Sensor indica vazão de N2 nas CNTP; corrente escoa a 27ºC/1 MPa indicando 1.000 m³/h; depois 87ºC/2 MPa com vazão mássica constante. Variação do valor medido:",
  alt:["−50%","−40%","0%","+10%","+20%"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:23,materia:"balancos",tipo:"calc",
  enun:"Polpa de papel úmida 40% água → secada até 10% água. Percentual de água removido da polpa úmida:",
  alt:["30,0%","42,5%","53,4%","75,0%","83,5%"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:24,materia:"balancos",tipo:"calc",
  enun:"Coluna de absorção remove 90% de substância (MM 50) de ar; teor no ar 40% molar; solução aquosa 25% em massa; ar insolúvel, água não evapora. Razão molar água/ar: (H=1, O=16, ar=29)",
  alt:["4,50","3,00","2,40","1,62","1,08"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:25,materia:"balancos",tipo:"calc",
  enun:"Ar úmido 40ºC, UR 90%, resfriado; 50% do vapor condensa. UR do ar após o resfriamento:",
  alt:["0%","40%","45%","50%","100%"],gab:"E"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:26,materia:"balancos",tipo:"calc",
  enun:"Óxido de etileno via oxidação catalítica de eteno (+ reação paralela de combustão). Conversão global 95,0%; seletividade etilenoglicol/CO2 = 18,5:1. Rendimento do óxido de etileno:",
  alt:["90,0%","92,5%","93,5%","94,0%","95,0%"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:27,materia:"termo",tipo:"conc",
  enun:"1ª e 2ª Leis. Corretas APENAS: I-ΔU=Q−W; II-num ciclo, |Q absorvido|=|W| (conservação); III-inviável ciclo que transfira calor de frio para quente sem trabalho; IV-entropia = ∫dQ/T reversível; V-em sistema isolado ΔS≥0.",
  alt:["I e II","I e V","II e III","III e IV","IV e V"],gab:"E"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:28,materia:"balancos",tipo:"calc",
  enun:"Síntese de metanol CO2+3H2→CH3OH+H2O; N2 inerte; reciclo + purga; conversão global 96%; CO2 fresco 5 mol/s. I-metanol produzido 4,8 mol/s; II-fração de metanol em D=0,50; III-N2/(CO2+H2) na purga=0,10. Correto:",
  alt:["I, apenas","I e II, apenas","I e III, apenas","II e III, apenas","I, II e III"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:29,materia:"balancos",tipo:"calc",
  enun:"(mesmo processo) Razão molar de reciclo R/F (em CO2 e H2) = 0,6. I-conversão por passagem 60%; II-(CO2+H2) na carga combinada 24 mol/s; III-razão molar de N2 na carga combinada 0,10. Correto:",
  alt:["I, apenas","I e II, apenas","I e III, apenas","II e III, apenas","I, II e III"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:30,materia:"opunit",tipo:"calc",
  enun:"Coluna: carga 10.000 kg/h (h=100 kJ/kg), destilado 6.000 (h=50), resíduo 4.000 (h=200); carga térmica do condensador 4,2 GJ/h; ΔHvap destilado=200 kJ/kg. Razão de refluxo de operação:",
  alt:["3,0","2,5","2,0","1,5","1,0"],gab:"E"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:31,materia:"opunit",tipo:"calc",
  enun:"(mesma coluna) ΔHvap do vapor no refervedor=2.000 kJ/kg. Vazão de vapor consumida no refervedor (kg/h):",
  alt:["1.950","2.000","2.050","2.100","2.150"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:32,materia:"termo",tipo:"calc",
  enun:"Gás ideal de (Pi,Ti) a (Pf,Tf) em 2 etapas (aquecimento isobárico até Tf, depois compressão isotérmica até Pf). Cp constante. Variação da energia interna:",
  alt:["CpTf","Cp(Tf−Ti)","RTf−RTi","(CpTf−RTi)+(CpTi−RTf)","(CpTf+RTi)−(CpTi+RTf)"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:33,materia:"termo",tipo:"conc",
  enun:"h=h(s,p). Expressão obtida:",
  alt:["(∂h/∂p)s=T","(∂h/∂s)p=T","(∂h/∂s)T=v","(∂h/∂s)p=p","(∂h/∂p)s=p"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:34,materia:"termo",tipo:"conc",
  enun:"Comportamento volumétrico de fluidos. É INCORRETO afirmar que:",
  alt:["todos os fluidos têm o mesmo Z nas mesmas Tr e Pr (estados correspondentes)","Z pode ser =1, >1 ou <1","Z é adimensional","substâncias apolares em qualquer T e P se comportam como gás ideal","densidades de líquido e gás se igualam no estado crítico"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:35,materia:"termo",tipo:"conc",
  enun:"g=h−Ts; dh=Tds+vdp. Pela relação de Maxwell, (∂h/∂p)T a T constante:",
  alt:["v−T(∂v/∂p)T","v−T(∂v/∂T)p","v−T(∂T/∂p)v","v−p(∂T/∂p)v","v−p(∂v/∂T)p"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:36,materia:"termo",tipo:"conc",
  enun:"Corrente gasosa por válvula isolada (estrangulamento), P jusante < P montante. Sobre T jusante − T montante:",
  alt:["sempre negativa","sempre positiva","sempre zero","pode ser positiva, negativa ou nula, dependendo de T e P","pode ser positiva ou negativa, mas nunca zero"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:37,materia:"termo",tipo:"calc",
  enun:"Metano 27ºC, 3.600 kg/h, comprimido 100→200 kPa, consumo 150 kW; cp=2,2 kJ/kg·K; adiabático, gás ideal, sem ineficiências. Variação de temperatura sucção/descarga (ºC) aprox.:",
  alt:["zero","42ºC","68ºC","92ºC","100ºC"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:38,materia:"termo",tipo:"calc",
  enun:"Vapor superaquecido 750 kPa/650ºC (h=−12.108 kJ/kg) passa por válvula e turbina, sai como vapor saturado a 82ºC; vazão 1 kg/s. Potência gerada pela turbina (kW): (tabela de vapor)",
  alt:["1.165","2.646","3.811","6.457","15.597"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:39,materia:"termo",tipo:"calc",
  enun:"Fluido perde 1.500 kJ/s num trocador e depois passa por compressor (500 kJ/s, eficiência 75%). Variação total de entalpia (kJ/s, módulo):",
  alt:["375","750","1.000","1.125","2.000"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:40,materia:"termo",tipo:"calc",
  enun:"Ciclo de refrigeração com válvula de expansão (diagrama T-S); taxa de refrigeração 2.400 kJ/s; entalpias b=3.500, c=5.000, d=500 kJ/kg. Vazão do fluido refrigerante (kg/s):",
  alt:["0,30","0,53","0,80","1,25","1,67"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:41,materia:"opunit",tipo:"calc",
  enun:"Mistura binária a 300 K; coef. de atividade a diluição infinita 1,875 e 1,2; Psat 800 e 1.000 mmHg. Fração molar do comp.1 na fase vapor em equilíbrio com líquido equimolar:",
  alt:["0,44","0,50","0,55","0,80","0,90"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:42,materia:"opunit",tipo:"calc",
  enun:"Separar 200 kmol/h (40% benzeno, 60% tolueno); topo 95% benzeno, fundo 90% tolueno; 25% vaporizada; reta de retificação y=0,73x+0,27xD. Vazão de líquido na seção de esgotamento (kmol/h) aprox.:",
  alt:["70","130","213","284","340"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:43,materia:"opunit",tipo:"conc",
  enun:"Destilação azeotrópica homogênea (Figuras 1,2,3; A e B formam azeótropo). Correto: I-Fig1: A/B azeótropo de máximo, E não forma azeótropo; II-Fig2: A/B mínimo, E com A máximo; III-Fig3: A/B e E com B máximo.",
  alt:["I, apenas","III, apenas","I e II, apenas","II e III, apenas","I, II e III"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:44,materia:"opunit",tipo:"calc",
  enun:"Flash 100 kmol/h (10% P, 20% B, 30% I, 40% H) a 366,5 K/6,8 atm; 1,8 kmol/h de hexano no vapor; KP=4,2, KB=1,75, KI=0,74, KH=0,34. Razão V/L aprox.:",
  alt:["0,05","0,14","0,20","0,35","0,44"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:45,materia:"opunit",tipo:"conc",
  enun:"Método Fenske-Underwood-Gilliland. É correto que o(a):",
  alt:["equação de Fenske (Nmín) é aplicada só aos componentes chave","metodologia só se aplica com condensador total","escolha dos chaves desconsidera os não chaves","chave leve = menos volátil dos pesados; chave pesado = mais pesado dos voláteis","flash pode ser calculado em condições adiabáticas"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:46,materia:"opunit",tipo:"conc",
  enun:"Absorção/esgotamento em colunas recheadas (HETP e NTU). Sabe-se que:",
  alt:["NTU pode ser maior ou menor que HETP na absorção","NTU=HETP quando as retas de equilíbrio e operação não são paralelas","quanto maior o NTU, menor a área do recheio","a altura depende do coef. de transf. de massa da fase líquida (resistência maior na fase líquida)","NTU é menos complexo e menos preciso que HETP"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:47,materia:"opunit",tipo:"conc",
  enun:"Separação de misturas complexas com pontos de ebulição próximos → colunas recheadas, porque:",
  alt:["apresentam baixo ΔP por estágio (benéfico em baixa pressão/vácuo)","são mais flexíveis a variações de vazão pela maior retenção de líquido","têm velocidades de líquido altas evitando entupimento","asseguram operação estável só acima do ponto de carga","mantêm constante a razão líquido-vapor independente do recheio"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:48,materia:"opunit",tipo:"calc",
  enun:"Extração contracorrente sem refluxo: nitrato de uranila 0,5 → rafinado ≤0,1 mol/L; solvente isento imiscível; tabela de equilíbrio dada. Composição máxima do extrato (mol/L) e razão L/V:",
  alt:["0,45 e 1,05","0,45 e 1,0","0,42 e 1,05","0,42 e 1,0","0,065 e 1,05"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:49,materia:"fluidos",tipo:"conc",
  enun:"Teorema dos Grupos Pi de Buckingham permite a:",
  alt:["determinação de nº de grupos adimensionais igual ao nº de variáveis","identificação de grupos cuja composição depende do núcleo de variáveis usado","identificação de nº de grupos independente do nº de dimensões básicas","obtenção de grupos cuja composição independe das variáveis do processo","identificação de nº de grupos independente do nº de variáveis"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:50,materia:"fluidos",tipo:"conc",
  enun:"Fluido com razão tensão/taxa de deformação constante, cujo valor aumenta com a temperatura, independente do tempo. É um(a):",
  alt:["fluido tixotrópico","suspensão dilatante","líquido newtoniano","gás newtoniano","mistura pseudoplástica"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:51,materia:"opunit",tipo:"calc",
  enun:"Eficiência granulométrica de ciclone (gráfico); partículas ~12 μm; dois ciclones em série. Razão entre massa retida no 2º ciclone e massa que alimenta o 1º aprox.:",
  alt:["0,21","0,30","0,49","0,70","0,91"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:52,materia:"fluidos",tipo:"conc",
  enun:"Manômetro diferencial em tubo horizontal (sem máquinas); fluido manométrico mais denso; desnível h. Correto: I-líquido escoa de 1 para 2; II-relação vazão×h só depende da ρ do manométrico; III-h está relacionado à perda de carga entre os pontos.",
  alt:["II, apenas","III, apenas","I e II, apenas","I e III, apenas","I, II e III"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:53,materia:"fluidos",tipo:"conc",
  enun:"Fator de atrito para água em tubo (rugosidade relativa ≠ 0):",
  alt:["é constante, independe do regime","é função da vazão e rugosidade no regime laminar","é função só da rugosidade se Re suficientemente elevado","aumenta monotonicamente com a vazão","diminui com aumento da rugosidade, com Re fixo turbulento"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:54,materia:"fluidos",tipo:"calc",
  enun:"Dois tanques abertos (mesma cota); Hs=100·Q²; bomba com shut-off 100 m H2O: H=R−100·Q². Vazão que atravessa o sistema (m³/s):",
  alt:["R","0","½","√(½)","√(R/100)"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:55,materia:"fluidos",tipo:"conc",
  enun:"Bomba instalada em posição 1 (baixa) ou 2 (alta). Para diminuir a cavitação, instalar:",
  alt:["posição 1, pois o NPSH disponível será maior que na posição 2","posição 1, pois a vazão mássica é maior","posição 2, pois o NPSH requerido será menor","posição 2, pois a pressão na sucção será maior","qualquer posição, pois o NPSH disponível independe da posição"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:56,materia:"calor",tipo:"conc",
  enun:"Convecção térmica (Lei do Resfriamento de Newton). O coeficiente de transferência de calor é calculado:",
  alt:["sem necessidade de determinar a natureza do escoamento","sem conhecer a condutividade térmica do fluido","considerando forças de empuxo quando a convecção é forçada","levando em conta os mecanismos que causam a movimentação do fluido","como função da emissividade da superfície"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:57,materia:"calor",tipo:"conc",
  enun:"Duas placas paralelas (corpos negros) a T1 e T2, distância pequena. A taxa de radiação entre elas é:",
  alt:["função das emissividades (diferentes de 1)","q=σA(T1−T2), com T em Kelvin, se houver vácuo","independente do meio entre elas, estando estagnado","diretamente proporcional à 4ª potência de T1","nula quando T1=T2, apesar de ambas continuarem emitindo"],gab:"E"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:58,materia:"calor",tipo:"conc",
  enun:"Três paredes planas (A,B,C) de igual espessura; perfil de T com ΔT desprezível em C e salto na interface B-C. Conclui-se que:",
  alt:["resistência condutiva de A > de B","resistência de contato A-B é da mesma ordem da condutiva de C","trocar A e B diminuiria o fluxo","fluxo em A > fluxo em B","fluxo em C é praticamente nulo"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:59,materia:"calor",tipo:"conc",
  enun:"Coef. médio de transferência de calor em tubos circulares. O valor:",
  alt:["independe do nº de Reynolds (turbulento)","independe do nº de Prandtl (laminar), qualquer comprimento","independe do comprimento mesmo com entrada térmica significativa","aumenta com o aumento do comprimento do tubo","é função do tipo de condição de contorno térmica (laminar)"],gab:"E"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:60,materia:"calor",tipo:"conc",
  enun:"Bateria de pré-aquecimento com deposição. Sobre resistências de depósito:",
  alt:["deposição não influencia a fluidodinâmica","resistências de depósito aumentam o coeficiente global","são tipicamente relacionadas à espessura média e à área de depósito","não precisam ser consideradas no projeto (equipamento inicia limpo)","podem ser desprezadas quando da mesma ordem das convectivas"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:61,materia:"controle",tipo:"conc",
  enun:"Malha fechada com par de raízes no eixo imaginário equidistantes da origem, demais no semiplano esquerdo. Para degrau no set-point ou distúrbio, a variável controlada responderá com:",
  alt:["comportamento não oscilatório e offset nulo","comportamento não oscilatório e offset não nulo","oscilações decrescentes e offset nulo","oscilações decrescentes e offset não nulo","oscilações sustentadas após tempo suficientemente longo"],gab:"E"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:62,materia:"controle",tipo:"calc",
  enun:"Sensor-transmissor de composição: Cm/C = Kt·e^(−θs)/(τs+1); Kt=1, θ=4 min, τ=1 min; Ce=10 ppm, Cm,e=12 mA; degrau unitário em t=0. Tempo para a leitura atingir 12,63 mA (min) aprox.:",
  alt:["1,00","4,00","5,00","20,00","24,00"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:63,materia:"controle",tipo:"conc",
  enun:"Sistemas lineares submetidos a degrau unitário (gráficos I a V). Aquele com 'resposta inversa' é o sistema:",
  alt:["I","II","III","IV","V"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:64,materia:"calor",tipo:"conc",
  enun:"Trocador contracorrente (quente 60→40ºC; frio 30→35ºC; vazão do frio = 2× a do quente). Correto: I-usar média aritmética em vez de MLDT dá área menor; II-cp do frio = 2× o do quente; III-trocar para cocorrente aumenta T de saída do quente.",
  alt:["II, apenas","III, apenas","I e II, apenas","I e III, apenas","I, II e III"],gab:"D"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:65,materia:"calor",tipo:"conc",
  enun:"Permutador casco-tubo CT1-2 (quente 80→50ºC; frio 30→65ºC). A mesma carga pode ser feita num permutador:",
  alt:["contracorrente CT1-1 com área infinita","contracorrente CT1-1 com área igual à do CT1-2","paralelo CT1-1 com área infinita","CT1-4 com área igual à do CT1-2","CT1-4 com área igual à metade do CT1-2"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:66,materia:"cinetica",tipo:"calc",
  enun:"PFR fase líquida, isomerização n-butano→i-butano (1ª ordem); gráfico de vazão × volume p/ 310 K e 330 K; Arrhenius. O valor de E/R = lnβ/(1/310−1/330), com β tal que:",
  alt:["0,1≤β≤0,2","1,5≤β≤2,5","4≤β≤5","9≤β≤10","19≤β≤20"],gab:"B"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:67,materia:"cinetica",tipo:"conc",
  enun:"Reator de leito de bolhas, A→Produtos limitado pela transferência de massa r=kL·s·(PA/H−CA,liq). Aumento da T e da agitação tipicamente promoveria:",
  alt:["↑kL, ↓s, ↓H, efeito sobre r depende do sistema","↑kL, ↑s, ↑H, efeito depende do sistema","↑kL, ↑s, ↓H, ↑r","↑kL, ↓s, ↓H, ↓r","↓kL, ↓s, ↑H, ↓r"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:68,materia:"cinetica",tipo:"calc",
  enun:"Gráfico 1/(−rA) × conversão (fase líquida); 30 mol/s de A a 3 mol/L em CSTR; saída 0,9 mol/L. Volume do reator (L) aprox.:",
  alt:["350","420","560","730","840"],gab:"C"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:69,materia:"controle",tipo:"conc",
  enun:"Modo derivativo ideal de controladores com realimentação negativa:",
  alt:["não afeta o valor estacionário final do erro e age pela taxa de mudança do erro","não afeta o erro final e é insensível a ruído","age pela taxa de mudança do erro e é insensível a ruído","elimina o erro final e age pelo somatório do erro no tempo","reduz o erro final e age de forma reversa ao erro"],gab:"A"});
Q({prova:"pb2011",ano:2011,banca:"PB",n:70,materia:"controle",tipo:"calc",
  enun:"Tanque cilíndrico: Fo=h/R; diagrama de Bode com RA→10 quando ω→0 e ângulo de fase −π/4 em ω=10⁻² rad/s. Área da seção transversal (m²):",
  alt:["0,1","0,8","1,0","4,0","10,0"],gab:"C"});

/* =============================================================================
   PETROBRAS 2014.2 — ENG. PROC. JR — ESPECÍFICAS q21-70
============================================================================= */
Q({prova:"pb2014",ano:2014,banca:"PB",n:21,materia:"balancos",tipo:"calc",
  enun:"Solução de n-butano/n-pentano (ρ=600) + ácido acético (ρ=1000); mistura resultante ρ=800 kg/m³; comportamento ideal. Fração mássica de ácido acético:",
  alt:["0,40","0,45","0,50","0,55","0,62"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:22,materia:"balancos",tipo:"calc",
  enun:"Limite mínimo de inflamabilidade do metano 5% vol. Cilindro 50% metano / 50% ar alimenta sala a 2 mol/min; sala fechada com 1.800 mol de ar. Tempo para atingir o limite (min):",
  alt:["85","90","95","100","105"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:23,materia:"balancos",tipo:"calc",
  enun:"Gráfico Pvap da água (34-40ºC). Temperatura de corrente de ar (Patm) com UR 40% e 3% de água volumétrica, aprox.: (MM água=18, ar=29; R=8,314)",
  alt:["35","36","37","38","40"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:24,materia:"balancos",tipo:"calc",
  enun:"Torre de resfriamento: ar de saída 41ºC/UR 80%, vazão total 2.000 kmol/h; vapor que entra com o ar 58 kmol/h. Taxa de água evaporada (kmol/h) aprox.: (Pvap a 41ºC=0,08 atm)",
  alt:["55","70","93","115","128"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:25,materia:"balancos",tipo:"calc",
  enun:"Coluna de destilação contínua F=800 kg/h (z1=0,4; z2=0,1; z3=0,5); topo M com y1=4/6; fundo P só comp.3. y2, y3 e vazão P:",
  alt:["1/6; 1/6; 80 kg/h","1/6; 1/6; 320 kg/h","1/6; 1/6; 400 kg/h","1/12; 3/12; 480 kg/h","3/12; 1/12; 560 kg/h"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:26,materia:"balancos",tipo:"calc",
  enun:"Reator + separação com reciclo (R→Produtos); QR,5/QR,3=0,8; conversão por passe 0,5. Conversão global de R aprox.:",
  alt:["83%","86%","90%","92%","95%"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:27,materia:"balancos",tipo:"calc",
  enun:"Água ácida com H2S e NH3; 2 colunas (recuperações dadas; água no topo=0); frações molares entrada xH2S=0,03, xNH3=0,01, xH2O=0,96. Fração molar de H2S que sai com a água na corrente 4 aprox.:",
  alt:["7,8×10⁻⁷","7,8×10⁻⁶","7,8×10⁻⁵","7,8×10⁻⁴","7,8×10⁻³"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:28,materia:"balancos",tipo:"calc",
  enun:"Propano queimado com 60% de excesso de ar (80% N2, 20% O2 molar). Razão N2/CO2 no gás de exaustão aprox.:",
  alt:["6,2","7,3","8,0","9,3","10,6"],gab:"E"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:29,materia:"balancos",tipo:"calc",
  enun:"Shift gás-água CO+H2O⇌CO2+H2 em reator adiabático; alimentação H2O/CO estequiométrica; entra 300ºC, sai 370ºC. Conversão dos reagentes aprox.: (entalpias e calor de reação dados)",
  alt:["8%","12%","17%","20%","25%"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:30,materia:"balancos",tipo:"calc",
  enun:"Dois tanques aquecidos em paralelo (mesmo líquido, ρ, Cp). Tanque1: W, V, ΔT. Tanque2: W/2, 4V, 2ΔT. Relação entre as taxas de calor Q1 e Q2:",
  alt:["Q1=0,5Q2","Q1=Q2","Q1=2,0Q2","Q1=2,5Q2","Q1=4,0Q2"],gab:"B"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:31,materia:"termo",tipo:"conc",
  enun:"dG=−SdT+VdP; variação de entropia em processo isotérmico. Pela relação de Maxwell, (dS)T é igual a:",
  alt:["0","(Cv/T)dT","−(∂P/∂T)v dP","(∂V/∂P)T dP","−(∂V/∂T)p dP"],gab:"E"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:32,materia:"termo",tipo:"conc",
  enun:"Critério termodinâmico de espontaneidade e equilíbrio. É correto que a(s):",
  alt:["energia livre de Gibbs do universo sempre diminui","transformação completa de trabalho em calor não é possível (transgride a 2ª lei)","entropia de sistema fechado em processo espontâneo só pode aumentar","energia interna é introduzida pela 1ª lei e a entropia pela 2ª lei","reações com geração/consumo de calor são exceções à 1ª lei"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:33,materia:"termo",tipo:"calc",
  enun:"Metano líquido saturado 0,7 MPa expande isotermicamente até 0,2 MPa (diagrama P-h do metano). Variação de entalpia (kJ/kg) aprox.:",
  alt:["340","460","800","920","1040"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:34,materia:"termo",tipo:"conc",
  enun:"dU=TdS−PdV (processo reversível). Pode ser aplicada a processos irreversíveis pois:",
  alt:["variações por irreversibilidades em sistemas fechados são desprezíveis","variações de energia interna são iguais em reversível/irreversível, independente das condições","transformações a T e P constantes independem das condições","transformações com variáveis de estado dependem só das condições iniciais e finais","transformações com calor e trabalho independem das condições"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:35,materia:"termo",tipo:"calc",
  enun:"1 mol de gás ideal comprimido isotermicamente (T) de forma abrupta por pressão externa constante P até metade do volume, em equilíbrio final. Trabalho de compressão:",
  alt:["RT","RT/2","RT·ln(2)","RT/P","2RT/P"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:36,materia:"termo",tipo:"calc",
  enun:"CO+H2O⇌CO2+H2 a 556 K/2 bar, K1=54,6; alimentação água/CO=2:1; saída água/CO2=1,035. Razão molar H2/CO na saída:",
  alt:["28,3","52,8","56,5","1,80×10⁻²","1,90×10⁻²"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:37,materia:"termo",tipo:"conc",
  enun:"Diagrama de equilíbrio líquido-líquido-vapor de sistema binário (1,2) a P constante, pontos A e B em T*. No sistema:",
  alt:["o componente 1 é o mais volátil","em altas concentrações de 1 ocorre condensação retrógrada","acima de T* só há fase vapor","abaixo de T* sempre há duas fases líquidas","em T*, entre A e B, coexistem três fases"],gab:"E"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:38,materia:"termo",tipo:"calc",
  enun:"Vapor superaquecido 750 kPa/650ºC (h=12.108 kJ/kg) passa por válvula e turbina, sai vapor saturado a 82ºC; vazão 1 kg/s. Potência gerada pela turbina (kW): (tabela de vapor)",
  alt:["1.165","2.646","3.811","6.457","15.597"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:39,materia:"termo",tipo:"calc",
  enun:"Fluido perde 1.500 kJ/s num trocador, depois compressor (500 kJ/s, eficiência 75%). Variação total de entalpia (kJ/s, módulo):",
  alt:["375","750","1.000","1.125","2.000"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:40,materia:"termo",tipo:"calc",
  enun:"Ciclo de refrigeração com válvula de expansão (diagrama TS); taxa de refrigeração 2.400 kJ/s; entalpias b=3.500, c=5.000, d=500 kJ/kg. Vazão do refrigerante (kg/s):",
  alt:["0,30","0,53","0,80","1,25","1,67"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:41,materia:"opunit",tipo:"calc",
  enun:"Mistura binária 300 K; coef. de atividade a diluição infinita 1,875 e 1,2; Psat 800 e 1.000 mmHg. Fração molar do comp.1 na fase vapor em equilíbrio com líquido equimolar:",
  alt:["0,44","0,50","0,55","0,80","0,90"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:42,materia:"opunit",tipo:"calc",
  enun:"Separar 200 kmol/h (40% benzeno, 60% tolueno); topo 95% benzeno; fundo 90% tolueno; 25% vaporizada; reta de retificação y=0,73x+0,27xD. Vazão de líquido na seção de esgotamento (kmol/h) aprox.:",
  alt:["70","130","213","284","340"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:43,materia:"opunit",tipo:"conc",
  enun:"Destilação azeotrópica homogênea (Figuras 1,2,3). Correto: I-Fig1 azeótropo de máximo e E não forma; II-Fig2 A/B mínimo e E com A máximo; III-Fig3 A/B e E com B máximo.",
  alt:["I, apenas","III, apenas","I e II, apenas","II e III, apenas","I, II e III"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:44,materia:"opunit",tipo:"calc",
  enun:"Flash 100 kmol/h (10% P, 20% B, 30% I, 40% H) a 366,5 K/6,8 atm; 1,8 kmol/h de hexano no vapor; KP=4,2, KB=1,75, KI=0,74, KH=0,34. Razão V/L aprox.:",
  alt:["0,05","0,14","0,20","0,35","0,44"],gab:"B"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:45,materia:"opunit",tipo:"conc",
  enun:"Método Fenske-Underwood-Gilliland. É correto que o(a):",
  alt:["equação de Fenske (Nmín) é aplicada só aos componentes chave","só se aplica com condensador total","escolha dos chaves desconsidera os não chaves","chave leve = menos volátil dos pesados","flash pode ser calculado em condições adiabáticas"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:46,materia:"opunit",tipo:"conc",
  enun:"Absorção/esgotamento em colunas recheadas (HETP e NTU). Sabe-se que:",
  alt:["NTU pode ser maior ou menor que HETP na absorção","NTU=HETP quando retas de equilíbrio e operação não são paralelas","quanto maior NTU, menor área do recheio","altura depende do coef. da fase líquida (resistência maior na fase líquida)","NTU é menos preciso que HETP"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:47,materia:"opunit",tipo:"conc",
  enun:"Separação de misturas complexas com ebulição próxima → colunas recheadas, porque:",
  alt:["baixo ΔP por estágio (benéfico em baixa pressão/vácuo)","mais flexíveis a variações de vazão pela maior retenção","velocidades de líquido altas evitam entupimento","operação estável só acima do ponto de carga","mantêm constante a razão líquido-vapor"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:48,materia:"opunit",tipo:"calc",
  enun:"Extração contracorrente sem refluxo: nitrato de uranila 0,5→≤0,1 mol/L; solvente imiscível isento; tabela de equilíbrio dada. Composição máxima do extrato (mol/L) e razão L/V:",
  alt:["0,45 e 1,05","0,45 e 1,0","0,42 e 1,05","0,42 e 1,0","0,065 e 1,05"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:49,materia:"fluidos",tipo:"conc",
  enun:"Teorema dos Grupos Pi de Buckingham permite a:",
  alt:["nº de grupos adimensionais igual ao nº de variáveis","grupos cuja composição depende do núcleo de variáveis usado","nº de grupos independente do nº de dimensões básicas","grupos cuja composição independe das variáveis do processo","nº de grupos independente do nº de variáveis"],gab:"B"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:50,materia:"fluidos",tipo:"conc",
  enun:"Fluido com razão tensão/taxa de deformação constante, que aumenta com a temperatura, independente do tempo. É um(a):",
  alt:["fluido tixotrópico","suspensão dilatante","líquido newtoniano","gás newtoniano","mistura pseudoplástica"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:51,materia:"opunit",tipo:"calc",
  enun:"Eficiência granulométrica de ciclone (gráfico); partículas ~12 μm; dois ciclones em série. Razão massa retida no 2º / massa que alimenta o 1º aprox.:",
  alt:["0,21","0,30","0,49","0,70","0,91"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:52,materia:"fluidos",tipo:"conc",
  enun:"Manômetro diferencial em tubo horizontal (sem máquinas); manométrico mais denso; desnível h. Correto: I-escoa de 1 para 2; II-relação vazão×h só depende da ρ do manométrico; III-h relaciona-se à perda de carga.",
  alt:["II, apenas","III, apenas","I e II, apenas","I e III, apenas","I, II e III"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:53,materia:"fluidos",tipo:"conc",
  enun:"Fator de atrito para água (rugosidade ≠ 0):",
  alt:["constante, independe do regime","função da vazão e rugosidade no laminar","função só da rugosidade se Re suficientemente elevado","aumenta monotonicamente com a vazão","diminui com aumento da rugosidade (Re fixo turbulento)"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:54,materia:"fluidos",tipo:"calc",
  enun:"Dois tanques abertos (mesma cota); Hs=100Q²; bomba shut-off 100 m: H=R−100Q². Vazão que atravessa o sistema (m³/s):",
  alt:["R","0","½","√(½)","√(R/100)"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:55,materia:"fluidos",tipo:"conc",
  enun:"Bomba em posição 1 (baixa) ou 2 (alta). Para diminuir cavitação, instalar:",
  alt:["posição 1 (NPSH disponível maior que na 2)","posição 1 (vazão mássica maior)","posição 2 (NPSH requerido menor)","posição 2 (pressão na sucção maior)","qualquer posição"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:56,materia:"calor",tipo:"conc",
  enun:"Convecção (Lei de Newton do Resfriamento). O coeficiente de transferência de calor é calculado:",
  alt:["sem determinar a natureza do escoamento","sem conhecer a condutividade do fluido","considerando empuxo quando a convecção é forçada","levando em conta os mecanismos de movimentação do fluido","como função da emissividade"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:57,materia:"calor",tipo:"conc",
  enun:"Duas placas paralelas (corpos negros) T1 e T2, distância pequena. A taxa de radiação entre elas é:",
  alt:["função das emissividades (≠1)","q=σA(T1−T2) com T em Kelvin, se vácuo","independente do meio estagnado","∝ 4ª potência de T1","nula quando T1=T2, apesar de ambas emitirem"],gab:"E"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:58,materia:"calor",tipo:"conc",
  enun:"Três paredes planas (A,B,C) de igual espessura; ΔT desprezível em C, salto na interface B-C. Conclui-se que:",
  alt:["resistência condutiva de A > de B","resistência de contato A-B da mesma ordem da condutiva de C","trocar A e B diminuiria o fluxo","fluxo em A > em B","fluxo em C praticamente nulo"],gab:"B"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:59,materia:"calor",tipo:"conc",
  enun:"Coeficiente médio de transferência de calor em tubos circulares. O valor:",
  alt:["independe do Reynolds (turbulento)","independe do Prandtl (laminar) qualquer comprimento","independe do comprimento mesmo com entrada térmica significativa","aumenta com o comprimento do tubo","é função da condição de contorno térmica (laminar)"],gab:"E"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:60,materia:"calor",tipo:"conc",
  enun:"Bateria de pré-aquecimento com deposição. Sobre resistências de depósito:",
  alt:["deposição não influencia a fluidodinâmica","aumentam o coeficiente global","relacionadas à espessura média e área de depósito","não precisam ser consideradas no projeto","podem ser desprezadas quando da mesma ordem das convectivas"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:61,materia:"controle",tipo:"conc",
  enun:"Malha fechada com par de raízes no eixo imaginário equidistantes da origem, demais no semiplano esquerdo. Para degrau no set-point/distúrbio, a variável controlada responderá com:",
  alt:["não oscilatório e offset nulo","não oscilatório e offset não nulo","oscilações decrescentes e offset nulo","oscilações decrescentes e offset não nulo","oscilações sustentadas após tempo suficiente"],gab:"E"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:62,materia:"controle",tipo:"calc",
  enun:"Sensor-transmissor de composição: Cm/C=Kt·e^(−θs)/(τs+1); Kt=1, θ=4, τ=1 min; Ce=10 ppm, Cm,e=12 mA; degrau unitário. Tempo para a leitura atingir 12,63 mA (min):",
  alt:["1,00","4,00","5,00","20,00","24,00"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:63,materia:"controle",tipo:"conc",
  enun:"Sistemas lineares a degrau unitário (gráficos I a V). O de 'resposta inversa' é o sistema:",
  alt:["I","II","III","IV","V"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:64,materia:"calor",tipo:"conc",
  enun:"Trocador contracorrente (quente 60→40ºC; frio 30→35ºC; vazão do frio = 2× a do quente). Correto: I-média aritmética em vez de MLDT dá área menor; II-cp frio = 2× o quente; III-trocar para cocorrente aumenta T de saída do quente.",
  alt:["II, apenas","III, apenas","I e II, apenas","I e III, apenas","I, II e III"],gab:"D"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:65,materia:"calor",tipo:"conc",
  enun:"Permutador casco-tubo CT1-2 (quente 80→50ºC; frio 30→65ºC). Mesma carga num permutador:",
  alt:["contracorrente CT1-1 com área infinita","contracorrente CT1-1 com área igual à do CT1-2","paralelo CT1-1 com área infinita","CT1-4 com área igual à do CT1-2","CT1-4 com metade da área do CT1-2"],gab:"B"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:66,materia:"cinetica",tipo:"calc",
  enun:"PFR fase líquida, isomerização n-butano→i-butano (1ª ordem); gráfico vazão×volume p/ 310 e 330 K; E/R=lnβ/(1/310−1/330), com β tal que:",
  alt:["0,1≤β≤0,2","1,5≤β≤2,5","4≤β≤5","9≤β≤10","19≤β≤20"],gab:"B"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:67,materia:"cinetica",tipo:"conc",
  enun:"Reator de leito de bolhas A→Produtos, r=kL·s·(PA/H−CA,liq). Aumento de T e agitação tipicamente promoveria:",
  alt:["↑kL, ↓s, ↓H, efeito sobre r depende do sistema","↑kL, ↑s, ↑H, efeito depende do sistema","↑kL, ↑s, ↓H, ↑r","↑kL, ↓s, ↓H, ↓r","↓kL, ↓s, ↑H, ↓r"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:68,materia:"cinetica",tipo:"calc",
  enun:"Gráfico 1/(−rA)×conversão (fase líquida); 30 mol/s de A a 3 mol/L em CSTR; saída 0,9 mol/L. Volume do reator (L) aprox.:",
  alt:["350","420","560","730","840"],gab:"C"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:69,materia:"controle",tipo:"conc",
  enun:"Modo derivativo ideal (realimentação negativa):",
  alt:["não afeta o erro final e age pela taxa de mudança do erro","não afeta o erro final e é insensível a ruído","age pela taxa de mudança e é insensível a ruído","elimina o erro final e age pelo somatório do erro","reduz o erro final e age de forma reversa"],gab:"A"});
Q({prova:"pb2014",ano:2014,banca:"PB",n:70,materia:"controle",tipo:"calc",
  enun:"Tanque cilíndrico Fo=h/R; Bode com RA→10 quando ω→0 e fase −π/4 em ω=10⁻² rad/s. Área da seção transversal (m²):",
  alt:["0,1","0,8","1,0","4,0","10,0"],gab:"C"});
