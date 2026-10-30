/* =============================================================================
   APP — plataforma de estudos (layout claro com sidebar)
   Estado de tópico: 0 não vi | 1 revisei | 2 domino. Persistência: localStorage.
============================================================================= */
const LS_KEY="transpetro_eq_progresso_v2";
const LS_DIARIO="transpetro_eq_diario_v2";
const LS_PROVAS="transpetro_eq_provas_v2";
const LS_RESP="transpetro_eq_respostas_v2"; // respostas do banco de questões

function load(k){ try{return JSON.parse(localStorage.getItem(k))||{};}catch(e){return {};} }
function save(k,v){ localStorage.setItem(k,JSON.stringify(v)); }
let progresso=load(LS_KEY);
let respostas=load(LS_RESP);

const TITULOS={dash:"Home",edital:"Edital Verticalizado",estrategia:"Estratégia Ninja",crono:"Cronograma",provas:"Refazer Provas",banco:"Banco de Questões",analise:"Análise das Provas",diario:"Diário de Erros"};

/* ---------- navegação ---------- */
document.querySelectorAll("#nav button").forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll("#nav button").forEach(x=>x.classList.remove("active"));
    document.querySelectorAll("main > section").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    document.getElementById(b.dataset.s).classList.add("active");
    document.getElementById("topbar-title").textContent=TITULOS[b.dataset.s]||"";
    if(b.dataset.s==="dash") renderHome();
    if(b.dataset.s==="provas") renderProvas();
    if(b.dataset.s==="estrategia") renderEstrategia();
    window.scrollTo({top:0,behavior:"smooth"});
  };
});

/* ---------- filtro de banca (topbar) ---------- */
let bancaGlobal=""; // "" todas | "TP" | "PB"
document.querySelectorAll("#tabs-banca button").forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll("#tabs-banca button").forEach(x=>x.classList.remove("on"));
    b.classList.add("on"); bancaGlobal=b.dataset.b;
    renderHome(); renderAnalise(); renderProvas(); renderFiltrosBanco(); renderBanco();
  };
});

/* ---------- contagem regressiva ---------- */
(function(){
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const prova=new Date(PROVA_DATA+"T00:00:00");
  const dias=Math.round((prova-hoje)/(864e5));
  document.getElementById("side-dias").textContent=dias>=0?dias:"—";
})();

/* ---------- utilidades ---------- */
function todosTopicos(){const a=[];EDITAL.forEach(bl=>bl.materias.forEach(m=>m.topicos.forEach(t=>a.push({...t,materia:m.nome,peso:m.peso}))));return a;}
function estadoTopico(id){return progresso[id]||0;}

/* =============================================================================
   HOME
============================================================================= */
function renderHome(){
  const tops=todosTopicos(), total=tops.length;
  const dom=tops.filter(t=>estadoTopico(t.id)===2).length;
  const rev=tops.filter(t=>estadoTopico(t.id)===1).length;
  const nao=total-dom-rev;
  const cob=Math.round(((dom+rev*0.5)/total)*100);

  // provas
  const pe=carregarProvas();
  const feitas=PROVAS.filter(p=>pe[p.id].status==="resolvido").length;
  // questões respondidas
  const respN=Object.keys(respostas).length;
  const respCertas=Object.values(respostas).filter(r=>r.certo).length;
  const desemp=respN?Math.round(respCertas/respN*100):null;
  const totalQ=typeof BANCO!=="undefined"?BANCO.filter(q=>!bancaGlobal||q.banca===bancaGlobal).length:0;

  document.getElementById("home-cards").innerHTML=`
    <div class="mcard"><div class="cap">🎯 Questões das provas</div><div class="big verde">${respN}/${totalQ}</div><div class="note">${respCertas} acertos · ${respN-respCertas} erros</div></div>
    <div class="mcard"><div class="cap">📈 Desempenho geral</div><div class="big azul">${desemp!==null?desemp+"%":"—"}</div><div class="note">${respN?"nas questões respondidas":"nenhuma questão respondida"}</div></div>
    <div class="mcard"><div class="cap">📋 Cobertura do edital</div><div class="big amarelo">${cob}%</div><div class="note">${dom} dominados · ${rev} revisando · ${nao} não vi</div></div>
    <div class="mcard"><div class="cap">🔁 Provas refeitas</div><div class="big verde">${feitas}/9</div><div class="note">${9-feitas} ainda não resolvidas</div></div>`;

  // barras por matéria (cobertura)
  let bars="";
  EDITAL.forEach(bl=>bl.materias.forEach(m=>{
    const tt=m.topicos.length;
    const d=m.topicos.filter(t=>estadoTopico(t.id)===2).length;
    const r=m.topicos.filter(t=>estadoTopico(t.id)===1).length;
    const p=Math.round(((d+r*0.5)/tt)*100);
    const nm=m.nome.length>30?m.nome.slice(0,29)+"…":m.nome;
    const cor=p>=70?"var(--verde)":p>=30?"var(--amarelo)":"var(--vermelho)";
    bars+=`<div class="row"><div class="nm" title="${m.nome}">${nm}</div><div class="track"><div class="fill" style="width:${Math.max(p,7)}%;background:${cor}">${p}%</div></div></div>`;
  }));
  document.getElementById("home-bars").innerHTML=bars;

  // prioridades
  const materias=[];
  EDITAL.forEach(bl=>bl.materias.forEach(m=>{
    const tt=m.topicos.length;
    const d=m.topicos.filter(t=>estadoTopico(t.id)===2).length;
    const r=m.topicos.filter(t=>estadoTopico(t.id)===1).length;
    const falta=1-(d+r*0.5)/tt;
    materias.push({nome:m.nome,score:m.peso*falta,falta:Math.round(falta*100),peso:m.peso});
  }));
  materias.sort((a,b)=>b.score-a.score);
  let pr="";
  materias.slice(0,5).forEach((m,i)=>{
    if(m.falta===0&&m.score===0) return;
    pr+=`<div class="insight"><b>${i+1}. ${m.nome} ${"★".repeat(m.peso)}</b><span>Falta ${m.falta}% desta matéria e a incidência é alta (${m.peso}/5). Priorize.</span></div>`;
  });
  if(!pr) pr=`<div class="insight"><b>🎉 Tudo coberto!</b><span>Foque em simulados cronometrados e no Diário de Erros.</span></div>`;
  document.getElementById("prioridades").innerHTML=pr;
}

/* =============================================================================
   EDITAL
============================================================================= */
function renderEdital(){
  const cont=document.getElementById("edital-cont"); cont.innerHTML="";
  EDITAL.forEach(bloco=>{
    const h=document.createElement("div");
    h.style.cssText="margin:16px 0 8px;font-weight:700;font-size:.82rem;color:var(--txt2);text-transform:uppercase;letter-spacing:.03em";
    h.textContent=bloco.bloco;
    cont.appendChild(h);
    bloco.materias.forEach(m=>{
      const card=document.createElement("div"); card.className="materia";
      const pesoCls="p"+(m.peso>=5?5:m.peso>=4?4:3);
      const total=m.topicos.length;
      const feitos=m.topicos.filter(t=>estadoTopico(t.id)===2).length;
      const parc=m.topicos.filter(t=>estadoTopico(t.id)===1).length;
      const pct=Math.round(((feitos+parc*0.5)/total)*100);
      card.innerHTML=`
        <div class="materia-head"><h4>${m.nome}</h4><span class="peso ${pesoCls}">incid. ${"★".repeat(m.peso)}</span></div>
        <div class="obs">${m.obs}</div>
        <div style="font-size:.78rem;color:var(--txt2);display:flex;justify-content:space-between"><span>${feitos}/${total} dominados · ${parc} revisando</span><span>${pct}%</span></div>
        <div class="progress ${pct<70?'amarelo':''}"><div style="width:${pct}%"></div></div>
        <div class="topicos"></div>`;
      const tc=card.querySelector(".topicos");
      m.topicos.forEach(t=>{
        const row=document.createElement("div"); row.className="topico";
        const est=estadoTopico(t.id);
        const cls=est===2?"s2":est===1?"s1":"";
        const simb=est===2?"✓":est===1?"~":"";
        row.innerHTML=`<div class="estado ${cls}" data-id="${t.id}">${simb}</div><div>${t.t}</div>`;
        tc.appendChild(row);
      });
      cont.appendChild(card);
    });
  });
  cont.querySelectorAll(".estado").forEach(el=>{
    el.onclick=()=>{const id=el.dataset.id; progresso[id]=((progresso[id]||0)+1)%3; save(LS_KEY,progresso); renderEdital();};
  });
}
function resetProgresso(){ if(confirm("Zerar TODO o progresso do edital? Não apaga o Diário nem as questões.")){progresso={};save(LS_KEY,progresso);renderEdital();renderHome();} }

/* =============================================================================
   ESTRATÉGIA
============================================================================= */
function renderEstrategia(){
  const E=ESTRATEGIA;
  const hoje=new Date();hoje.setHours(0,0,0,0);
  const dias=Math.round((new Date(E.provaData+"T00:00:00")-hoje)/864e5);
  const tops=todosTopicos(); const tocados=tops.filter(t=>estadoTopico(t.id)>=1).length;
  const pe=carregarProvas(); const feitas=PROVAS.filter(p=>pe[p.id].status==="resolvido").length;
  document.getElementById("estrat-sub").innerHTML=`Faltam <b>${dias>=0?dias:0}</b> dias. Progresso: edital <b>${tocados}/${tops.length}</b> tópicos · provas <b>${feitas}/9</b>. O plano mestre abaixo.`;
  document.getElementById("estrat-metas").innerHTML=E.metas.map(m=>`
    <div class="mcard"><div style="font-size:1.4rem">${m.icone}</div><div class="cap" style="color:var(--txt);margin:4px 0 2px">${m.titulo}</div><div class="note">${m.desc}</div><div style="font-size:.76rem;color:var(--verde);font-weight:700;margin-top:6px">🎯 ${m.meta}</div></div>`).join("");
  document.getElementById("estrat-fases").innerHTML=E.fases.map(f=>`
    <div class="fase"><div class="fh" style="background:${f.cor}"><h4>${f.nome}</h4><p>${f.objetivo}</p></div><ul>${f.acoes.map(a=>`<li>${a}</li>`).join("")}</ul></div>`).join("");
  document.getElementById("estrat-regras").innerHTML=E.regras.map(r=>`<div class="regra"><div class="rn">${r.n}</div><div><b>${r.titulo}</b><span>${r.txt}</span></div></div>`).join("");
  document.getElementById("estrat-ordem").innerHTML=E.ordemProvas.map(o=>`<div class="ordem"><div class="op">${o.pos}</div><div><b>${o.prova}</b><span>${o.motivo}</span></div></div>`).join("");
}

/* =============================================================================
   CRONOGRAMA
============================================================================= */
function renderCrono(){
  let html="";
  CRONOGRAMA.forEach(sem=>{
    html+=`<div class="crono-sem"><div class="shead"><h4>${sem.semana}</h4><p>Foco: ${sem.foco}</p></div>`;
    sem.dias.forEach(d=>{
      const cls=d.tipo==="sim"?"sim":d.tipo==="rev"?"rev":d.tipo==="prova"?"prova":(d.h==="PROVA"?"prova":"");
      html+=`<div class="crono-dia ${cls}"><div class="d">${d.dia}</div><div class="hh">${d.h}</div><div>${d.tarefa}</div></div>`;
    });
    html+=`</div>`;
  });
  document.getElementById("crono-cont").innerHTML=html;
  document.getElementById("taticas").innerHTML=TATICAS_PROVA.map(t=>`<div style="padding:7px 0;border-top:1px solid var(--borda);font-size:.86rem">✓ ${t}</div>`).join("");
}

/* =============================================================================
   REFAZER PROVAS
============================================================================= */
function carregarProvas(){
  let d=load(LS_PROVAS);
  PROVAS.forEach(p=>{ if(!d[p.id]) d[p.id]={status:p.statusInicial,acertos:"",total:50}; });
  return d;
}
function salvarProvas(d){ save(LS_PROVAS,d); }
let provasEstado=carregarProvas();
const STATUS_LABEL={resolvido:"✅ Resolvida",proxima:"🟡 Próxima",afazer:"🔴 A fazer"};

function renderProvas(){
  provasEstado=carregarProvas();
  const lista=PROVAS.filter(p=>!bancaGlobal||p.banca===bancaGlobal);
  const feitas=lista.filter(p=>provasEstado[p.id].status==="resolvido").length;
  const comNota=lista.filter(p=>{const e=provasEstado[p.id];return e.acertos!==""&&!isNaN(+e.acertos);});
  let media="—";
  if(comNota.length){ const s=comNota.reduce((a,p)=>{const e=provasEstado[p.id];return a+(+e.acertos)/(+e.total||50);},0); media=Math.round(s/comNota.length*100)+"%"; }
  document.getElementById("provas-stats").innerHTML=`
    <div class="mcard"><div class="cap">Provas resolvidas</div><div class="big verde">${feitas}/${lista.length}</div></div>
    <div class="mcard"><div class="cap">Com nota registrada</div><div class="big azul">${comNota.length}</div></div>
    <div class="mcard"><div class="cap">Média de acertos</div><div class="big amarelo">${media}</div><div class="note">específicas</div></div>
    <div class="mcard"><div class="cap">Ainda não resolvidas</div><div class="big">${lista.length-feitas}</div></div>`;
  const cont=document.getElementById("provas-cont");
  cont.innerHTML=lista.map(p=>{
    const e=provasEstado[p.id];
    const pct=(e.acertos!==""&&!isNaN(+e.acertos))?Math.round(+e.acertos/(+e.total||50)*100)+"%":"—";
    const btn=s=>`<button data-id="${p.id}" data-st="${s}" class="${e.status===s?("on-"+s):""}">${STATUS_LABEL[s]}</button>`;
    return `<div class="prova-card">
      <div class="ph"><h4>${p.nome}</h4><span class="banca-tag banca-${p.banca}">${p.banca==="TP"?"TRANSPETRO":"PETROBRAS"}</span></div>
      <div class="pobs">${p.obs}</div>
      <div class="status-sel">${btn("resolvido")}${btn("proxima")}${btn("afazer")}</div>
      <div class="nota-row"><label>Acertos (específicas):</label>
        <input type="number" min="0" max="50" data-id="${p.id}" data-field="acertos" value="${e.acertos}" placeholder="0">
        <label>de</label><input type="number" min="1" max="70" data-id="${p.id}" data-field="total" value="${e.total}">
        <span class="pc">${pct}</span>
        <button class="btn" style="margin-left:auto" onclick="irParaBanco('${p.id}')">Resolver questões desta prova →</button>
      </div></div>`;
  }).join("");
  cont.querySelectorAll(".status-sel button").forEach(b=>b.onclick=()=>{provasEstado[b.dataset.id].status=b.dataset.st;salvarProvas(provasEstado);renderProvas();renderHome();});
  cont.querySelectorAll(".nota-row input").forEach(inp=>inp.onchange=()=>{provasEstado[inp.dataset.id][inp.dataset.field]=inp.value;salvarProvas(provasEstado);renderProvas();renderHome();});
}
function irParaBanco(provaId){
  filtroProva=provaId;
  document.querySelector('#nav button[data-s="banco"]').click();
  renderFiltrosBanco(); renderBanco();
}

/* =============================================================================
   BANCO DE QUESTÕES (real, interativo)
============================================================================= */
let filtroProva="todas", filtroMateria="todas", filtroTipo="todos";
function renderFiltrosBanco(){
  if(typeof BANCO==="undefined") return;
  const provasSet=[...new Set(BANCO.filter(q=>!bancaGlobal||q.banca===bancaGlobal).map(q=>q.prova))];
  const nome={pb2010:"Petrobras 2010",pb2011:"Petrobras 2011",pb2012:"Petrobras 2012",pb2014:"Petrobras 2014",pb2018:"Petrobras 2018",tp2011:"Transpetro 2011",tp2012:"Transpetro 2012",tp2018:"Transpetro 2018",tp2023:"Transpetro 2023 ⭐"};
  let fp=`<button data-p="todas" class="${filtroProva==='todas'?'on':''}">Todas as provas</button>`;
  provasSet.forEach(p=>fp+=`<button data-p="${p}" class="${filtroProva===p?'on':''}">${nome[p]||p}</button>`);
  document.getElementById("filtros-prova").innerHTML=fp;
  document.querySelectorAll("#filtros-prova button").forEach(b=>b.onclick=()=>{filtroProva=b.dataset.p;renderFiltrosBanco();renderBanco();});

  let fm=`<button data-m="todas" class="${filtroMateria==='todas'?'on':''}">Todas matérias</button>`;
  Object.keys(ASSUNTOS).forEach(k=>fm+=`<button data-m="${k}" class="${filtroMateria===k?'on':''}">${ASSUNTOS[k].split(" (")[0].split("/")[0].trim()}</button>`);
  document.getElementById("filtros-materia").innerHTML=fm;
  document.querySelectorAll("#filtros-materia button").forEach(b=>b.onclick=()=>{filtroMateria=b.dataset.m;renderFiltrosBanco();renderBanco();});

  document.getElementById("filtros-tipo").innerHTML=`
    <button data-t="todos" class="${filtroTipo==='todos'?'on':''}">Todos tipos</button>
    <button data-t="calc" class="${filtroTipo==='calc'?'on':''}">🧮 Cálculo</button>
    <button data-t="conc" class="${filtroTipo==='conc'?'on':''}">💡 Conceitual</button>`;
  document.querySelectorAll("#filtros-tipo button").forEach(b=>b.onclick=()=>{filtroTipo=b.dataset.t;renderFiltrosBanco();renderBanco();});
}
function renderBanco(){
  if(typeof BANCO==="undefined"){document.getElementById("banco-cont").innerHTML="<p class='sub'>Banco de questões não carregado.</p>";return;}
  const nome={pb2010:"PB 2010",pb2011:"PB 2011",pb2012:"PB 2012",pb2014:"PB 2014",pb2018:"PB 2018",tp2011:"TP 2011",tp2012:"TP 2012",tp2018:"TP 2018",tp2023:"TP 2023"};
  const lista=BANCO.filter(q=>
    (!bancaGlobal||q.banca===bancaGlobal) &&
    (filtroProva==="todas"||q.prova===filtroProva) &&
    (filtroMateria==="todas"||q.materia===filtroMateria) &&
    (filtroTipo==="todos"||q.tipo===filtroTipo));
  const respN=lista.filter(q=>respostas[q.prova+"-"+q.n]).length;
  const certas=lista.filter(q=>respostas[q.prova+"-"+q.n]&&respostas[q.prova+"-"+q.n].certo).length;
  document.getElementById("banco-sub").innerHTML=`${lista.length} questões reais · você respondeu <b>${respN}</b> (${certas} certas). Clique na alternativa para responder; o gabarito aparece em seguida.`;
  const cont=document.getElementById("banco-cont");
  if(!lista.length){cont.innerHTML="<p class='sub'>Nenhuma questão com esse filtro.</p>";return;}
  cont.innerHTML=lista.map(q=>{
    const key=q.prova+"-"+q.n;
    const r=respostas[key];
    const letras=["A","B","C","D","E"];
    const alts=q.alt.map((a,i)=>{
      let cls="alt";
      if(r){ if(letras[i]===q.gab) cls+=" certa"; else if(letras[i]===r.letra) cls+=" errada"; }
      return `<div class="${cls}" data-key="${key}" data-letra="${letras[i]}"><span class="letra">${letras[i]}</span><span>${a}</span></div>`;
    }).join("");
    return `<div class="q ${r?'respondida':''}" id="q-${key}">
      <div class="meta"><span class="tag">${nome[q.prova]||q.prova}</span><span class="tag">Q${q.n}</span>
        <span class="tag">${ASSUNTOS[q.materia]?ASSUNTOS[q.materia].split(" (")[0].split("/")[0].trim():q.materia}</span>
        <span class="tag ${q.tipo}">${q.tipo==="calc"?"🧮 cálculo":"💡 conceitual"}</span></div>
      <div class="enun">${q.n}. ${q.enun}</div>
      <div class="alts">${alts}</div>
      <div class="gab">Gabarito: <b>${q.gab}</b>${r?(r.certo?" — você acertou! ✅":" — você marcou "+r.letra+" ❌"):""}</div>
    </div>`;
  }).join("");
  cont.querySelectorAll(".alt").forEach(el=>el.onclick=()=>{
    const key=el.dataset.key, letra=el.dataset.letra;
    if(respostas[key]) return; // já respondida
    const q=BANCO.find(x=>x.prova+"-"+x.n===key);
    respostas[key]={letra,certo:letra===q.gab}; save(LS_RESP,respostas);
    renderBanco(); renderHome();
  });
}

/* =============================================================================
   ANÁLISE
============================================================================= */
function renderAnalise(){
  if(typeof INCIDENCIA==="undefined") return;
  const tot=totaisPorAssunto(bancaGlobal), n=nProvas(bancaGlobal);
  const chaves=Object.keys(ASSUNTOS); const max=Math.max(...chaves.map(k=>tot[k]),1);
  chaves.sort((a,b)=>tot[b]-tot[a]);
  const rot=bancaGlobal==="TP"?"Transpetro":bancaGlobal==="PB"?"Petrobras":"todas as bancas";
  document.getElementById("incid-titulo").textContent=`Incidência por assunto — ${rot} (${n} provas · ${n*50} questões)`;
  const cores=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#6366f1","#a855f7","#ec4899"];
  document.getElementById("incid-bars").innerHTML=chaves.map((k,i)=>{
    const pct=Math.round(tot[k]/max*100), media=(tot[k]/n).toFixed(1);
    return `<div class="row"><div class="nm" title="${ASSUNTOS[k]}">${ASSUNTOS[k].length>30?ASSUNTOS[k].slice(0,29)+"…":ASSUNTOS[k]}</div><div class="track"><div class="fill" style="width:${Math.max(pct,10)}%;background:${cores[i%cores.length]}">${tot[k]}q (${media}/prova)</div></div></div>`;
  }).join("");
  // evolução
  const provas=INCIDENCIA.filter(p=>!bancaGlobal||p.banca===bancaGlobal);
  let ev=`<table class="evo"><tr><th style="text-align:left">Assunto</th>`;
  provas.forEach(p=>ev+=`<th>${p.banca}<br>${p.ano}</th>`); ev+=`</tr>`;
  chaves.forEach(k=>{
    ev+=`<tr style="border-top:1px solid var(--borda)"><td class="nm">${ASSUNTOS[k].split(" (")[0]}</td>`;
    provas.forEach(p=>{const v=p[k]||0;const bg=v>=12?"#bbf7d0":v>=8?"#dcfce7":v>=5?"#fef9c3":v>=1?"#f1f5f9":"#fafafa";ev+=`<td style="background:${bg}">${v||"–"}</td>`;});
    ev+=`</tr>`;
  });
  ev+=`</table><p style="font-size:.76rem;color:var(--txt2);margin-top:8px">Nº de questões (de 50) por assunto em cada prova. Verde = tema pesado. Valores reais do banco de 470 questões.</p>`;
  document.getElementById("evolucao").innerHTML=ev;
  // ninja
  const mats=[...ANALISE_MATERIA].sort((a,b)=>b.nivel-a.nivel);
  document.getElementById("analise-materia").innerHTML=mats.map(m=>`
    <div class="am"><div class="amh"><h4>${m.titulo}</h4><span class="peso p${m.nivel>=5?5:m.nivel>=4?4:3}">prioridade ${"★".repeat(m.nivel)}</span></div>
      <p><span class="lab">Histórico 2010–2023:</span> ${m.historia}</p>
      <p><span class="lab">Como cai:</span> ${m.comoCai}</p>
      <p><span class="lab">Transpetro × Petrobras:</span> ${m.pbVsTp}</p>
      <div class="ninja-box"><span class="lab">🥷 Jogada ninja:</span> ${m.ninja}</div></div>`).join("");
  document.getElementById("padroes").innerHTML=PADROES_BANCA.map(p=>`<div class="insight"><b>${p.titulo}</b><span>${p.txt}</span></div>`).join("");
  const t=TRILHA_GERAIS;
  const bloco=d=>`<div class="trilha"><h4>${d.titulo}</h4><div class="lab" style="font-size:.72rem;color:var(--txt2)">O QUE MAIS CAI</div><ul>${d.oqueCai.map(x=>`<li>${x}</li>`).join("")}</ul><div class="como"><b>Como estudar do zero:</b> ${d.comoEstudar}</div><div class="graca"><b>Ponto de graça:</b> ${d.pontoDeGraca}</div></div>`;
  document.getElementById("trilha-gerais").innerHTML=bloco(t.portugues)+bloco(t.ingles);
}

/* =============================================================================
   DIÁRIO
============================================================================= */
(function(){
  const ta=document.getElementById("diario-txt"), saved=document.getElementById("diario-saved");
  ta.value=localStorage.getItem(LS_DIARIO)||"";
  let timer;
  ta.oninput=()=>{clearTimeout(timer);timer=setTimeout(()=>{localStorage.setItem(LS_DIARIO,ta.value);saved.textContent="✓ salvo";setTimeout(()=>saved.textContent="",1500);},400);};
})();

/* ---------- init ---------- */
renderHome();
renderEdital();
renderEstrategia();
renderCrono();
renderProvas();
renderFiltrosBanco();
renderBanco();
renderAnalise();
