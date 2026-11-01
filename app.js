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

const LS_ERROS="transpetro_eq_erros_v1"; // caderno de erros (Leitner + repetição espaçada)
const TITULOS={dash:"Home",edital:"Edital Verticalizado",estrategia:"Estratégia Ninja",crono:"Cronograma",provas:"Refazer Provas",banco:"Banco de Questões",desempenho:"Meu Desempenho",tatica:"Tática de Prova",analise:"Análise das Provas",erros:"Caderno de Erros"};

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
    if(b.dataset.s==="desempenho") renderDesempenho();
    if(b.dataset.s==="tatica") renderTatica();
    if(b.dataset.s==="erros") renderErros();
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

// Estatística de questões por subtópico do edital: total, respondidas, certas.
function statsSubtopico(subId){
  if(typeof BANCO==="undefined") return {total:0,resp:0,certas:0};
  const qs=BANCO.filter(q=>q.sub===subId && !q.anulada && (!bancaGlobal||q.banca===bancaGlobal));
  let resp=0,certas=0;
  qs.forEach(q=>{const r=respostas[q.prova+"-"+q.n]; if(r){resp++; if(r.certo)certas++;}});
  return {total:qs.length,resp,certas};
}

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
        const st=statsSubtopico(t.id);
        let qinfo="";
        if(st.total>0){
          const pctA=st.resp?Math.round(st.certas/st.resp*100):null;
          const cor=pctA===null?"var(--txt2)":pctA>=70?"var(--verde)":pctA>=50?"#b45309":"var(--vermelho)";
          const matKey=(typeof SUBTOPICOS!=="undefined"&&SUBTOPICOS[t.id])?SUBTOPICOS[t.id].materiaKey:"";
          qinfo=`<span class="qstat" style="color:${cor}" title="${st.resp} respondidas de ${st.total} · ${st.certas} certas">${st.total}q${st.resp?` · ${st.certas}/${st.resp} ✓`:""}</span>`+
                `<button class="go-q" data-mat="${matKey||""}" data-sub="${t.id}" title="Resolver questões deste ponto">resolver →</button>`;
        } else {
          qinfo=`<span class="qstat" style="color:var(--txt2);opacity:.6" title="Nenhuma questão transcrita mapeada aqui ainda">0q</span>`;
        }
        row.innerHTML=`<div class="estado ${cls}" data-id="${t.id}">${simb}</div><div class="topico-txt">${t.t}</div><div class="topico-q">${qinfo}</div>`;
        tc.appendChild(row);
      });
      cont.appendChild(card);
    });
  });
  cont.querySelectorAll(".estado").forEach(el=>{
    el.onclick=()=>{const id=el.dataset.id; progresso[id]=((progresso[id]||0)+1)%3; save(LS_KEY,progresso); renderEdital();};
  });
  cont.querySelectorAll(".go-q").forEach(el=>{
    el.onclick=()=>{ estudarPonto(el.dataset.mat, el.dataset.sub); };
  });
}
// Vai para o Banco de Questões já filtrado por matéria + subtópico (estudar por ponto).
function estudarPonto(materiaKey, subId){
  if(materiaKey) filtroMateria=materiaKey;
  filtroSub=subId||"todos";
  filtroProva="todas"; filtroTipo="todos";
  // navega para a aba Banco
  document.querySelectorAll("#nav button").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll("main > section").forEach(x=>x.classList.remove("active"));
  const navBtn=document.querySelector('#nav button[data-s="banco"]');
  if(navBtn) navBtn.classList.add("active");
  document.getElementById("banco").classList.add("active");
  document.getElementById("topbar-title").textContent=TITULOS.banco;
  renderFiltrosBanco(); renderBanco();
  window.scrollTo({top:0,behavior:"smooth"});
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
  if(typeof EXTRA_MANHA!=="undefined"){
    const e=EXTRA_MANHA;
    html+=`<div class="panel" style="border-left:4px solid var(--amarelo);margin-bottom:16px">
      <h3>${e.titulo}</h3>
      <p class="sub" style="margin-top:0">${e.intro}</p>
      ${e.blocos.map(b=>`<div style="display:flex;gap:12px;padding:8px 0;border-top:1px solid var(--borda)"><div style="flex:0 0 72px;font-weight:700;color:var(--amarelo);font-size:.82rem">${b.h}</div><div><b style="font-size:.88rem">${b.t}</b><br><span class="sub">${b.d}</span></div></div>`).join("")}
      <div class="como" style="margin-top:8px"><b>Regra de ouro:</b> ${e.obs}</div>
    </div>`;
  }
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
  let mudou=false;
  const notasReais={ pb2011:47, pb2012:48, pb2014:46, pb2018:52 };
  PROVAS.forEach(p=>{
    if(!d[p.id]){ d[p.id]={status:p.statusInicial,acertos:"",total:50}; mudou=true; }
    // Sincroniza SEMPRE: se os dados oficiais marcam a prova como resolvida,
    // força "resolvido" no estado salvo (corrige estados antigos em cache, à prova de refresh).
    if(p.statusInicial==="resolvido" && d[p.id].status!=="resolvido"){ d[p.id].status="resolvido"; mudou=true; }
    // Preenche a nota real das provas já feitas, se ainda estiver vazia.
    if(notasReais[p.id]!=null && (d[p.id].acertos===""||d[p.id].acertos==null)){ d[p.id].acertos=notasReais[p.id]; d[p.id].total=70; mudou=true; }
  });
  if(mudou) save(LS_PROVAS,d);
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
let filtroProva="todas", filtroMateria="todas", filtroTipo="todos", filtroSub="todos";
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
  document.querySelectorAll("#filtros-materia button").forEach(b=>b.onclick=()=>{filtroMateria=b.dataset.m;filtroSub="todos";renderFiltrosBanco();renderBanco();});

  // Subtópico — só aparece quando uma matéria está selecionada (estudar por ponto do edital)
  const subBox=document.getElementById("filtros-subtopico");
  if(filtroMateria!=="todas" && typeof subtopicosDaMateria!=="undefined"){
    const subs=subtopicosDaMateria(filtroMateria);
    // quantas questões (do filtro de banca/prova atual) em cada subtópico
    const base=BANCO.filter(q=>(!bancaGlobal||q.banca===bancaGlobal)&&(filtroProva==="todas"||q.prova===filtroProva)&&q.materia===filtroMateria);
    const cont={}; base.forEach(q=>{cont[q.sub]=(cont[q.sub]||0)+1;});
    let fs=`<span class="fsub-lab">📍 Ponto do edital:</span><button data-s="todos" class="${filtroSub==='todos'?'on':''}">Todos (${base.length})</button>`;
    subs.forEach(s=>{const n=cont[s.id]||0; fs+=`<button data-s="${s.id}" class="${filtroSub===s.id?'on':''}" title="${s.t.replace(/"/g,'&quot;')}"${n===0?' disabled style="opacity:.4"':''}>${s.id} · ${s.t.length>42?s.t.slice(0,41)+'…':s.t} (${n})</button>`;});
    subBox.innerHTML=fs; subBox.style.display="flex";
    subBox.querySelectorAll("button[data-s]").forEach(b=>b.onclick=()=>{filtroSub=b.dataset.s;renderFiltrosBanco();renderBanco();});
  } else {
    subBox.innerHTML=""; subBox.style.display="none"; if(filtroMateria==="todas") filtroSub="todos";
  }

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
    (filtroSub==="todos"||q.sub===filtroSub) &&
    (filtroTipo==="todos"||q.tipo===filtroTipo));
  const anuladas=lista.filter(q=>q.anulada).length;
  const validas=lista.filter(q=>!q.anulada);
  const respN=validas.filter(q=>respostas[q.prova+"-"+q.n]).length;
  const certas=validas.filter(q=>respostas[q.prova+"-"+q.n]&&respostas[q.prova+"-"+q.n].certo).length;
  const subTxt=(filtroSub!=="todos"&&typeof SUBTOPICOS!=="undefined"&&SUBTOPICOS[filtroSub])?` · 📍 <b>${filtroSub}</b> ${SUBTOPICOS[filtroSub].t}`:"";
  document.getElementById("banco-sub").innerHTML=`${lista.length} questões${anuladas?` (<b>${anuladas}</b> anulada${anuladas>1?'s':''})`:''} · você respondeu <b>${respN}</b> (${certas} certas)${subTxt}. Clique na alternativa para responder; o gabarito aparece em seguida.`;
  const cont=document.getElementById("banco-cont");
  if(!lista.length){cont.innerHTML="<p class='sub'>Nenhuma questão com esse filtro.</p>";return;}
  cont.innerHTML=lista.map(q=>{
    const key=q.prova+"-"+q.n;
    const anulada=!!q.anulada;
    const r=anulada?null:respostas[key];
    const letras=["A","B","C","D","E"];
    const subInfo=(typeof SUBTOPICOS!=="undefined"&&q.sub&&SUBTOPICOS[q.sub])?SUBTOPICOS[q.sub]:null;
    const subTag=subInfo?`<span class="tag sub" title="Assunto provável (classificação automática) — ${subInfo.t.replace(/"/g,'&quot;')}">📍 ${q.sub} ${subInfo.t.length>34?subInfo.t.slice(0,33)+'…':subInfo.t}</span>`:"";
    const alts=q.alt.map((a,i)=>{
      let cls="alt";
      if(anulada) cls+=" anulada-alt";
      else if(r){ if(letras[i]===q.gab) cls+=" certa"; else if(letras[i]===r.letra) cls+=" errada"; }
      return `<div class="${cls}" data-key="${key}" data-letra="${letras[i]}"><span class="letra">${letras[i]}</span><span>${a}</span></div>`;
    }).join("");
    const gabLine=anulada
      ? `<div class="gab anulada-gab">⛔ Questão <b>ANULADA</b> pela banca${q.motivoAnula?` — ${q.motivoAnula}`:""}. Não entra na pontuação.</div>`
      : `<div class="gab">Gabarito: <b>${q.gab}</b>${r?(r.certo?" — você acertou! ✅":" — você marcou "+r.letra+" ❌"):""}</div>`;
    return `<div class="q ${anulada?'anulada':''} ${r?'respondida':''}" id="q-${key}">
      <div class="meta"><span class="tag">${nome[q.prova]||q.prova}</span><span class="tag">Q${q.n}</span>
        <span class="tag">${ASSUNTOS[q.materia]?ASSUNTOS[q.materia].split(" (")[0].split("/")[0].trim():q.materia}</span>
        ${subTag}
        <span class="tag ${q.tipo}">${q.tipo==="calc"?"🧮 cálculo":"💡 conceitual"}</span>
        ${anulada?'<span class="tag anulada-tag">⛔ ANULADA</span>':''}</div>
      <div class="enun">${q.n}. ${q.enun}</div>
      <div class="alts">${alts}</div>
      ${gabLine}
    </div>`;
  }).join("");
  cont.querySelectorAll(".alt").forEach(el=>el.onclick=()=>{
    const key=el.dataset.key, letra=el.dataset.letra;
    if(respostas[key]) return; // já respondida
    const q=BANCO.find(x=>x.prova+"-"+x.n===key);
    if(q.anulada) return; // anulada não é respondível
    respostas[key]={letra,certo:letra===q.gab}; save(LS_RESP,respostas);
    renderBanco(); renderHome();
  });
}

/* =============================================================================
   MEU DESEMPENHO — diagnóstico das lacunas a partir dos simulados já feitos.
   Cruza cada questão ERRADA (específica, Q21-70) com o subtópico do edital.
   Separa erro de CONTEÚDO (errou) de erro de TEMPO (não deu tempo / naoFiz).
============================================================================= */
const GAB_OFICIAL_OK = ["pb2010","pb2012","pb2018"]; // provas com gabarito oficial confirmado
function renderDesempenho(){
  if(typeof SIMULADOS_FEITOS==="undefined" || typeof BANCO==="undefined"){
    document.getElementById("desemp-resumo").innerHTML="<p class='sub'>Nenhum simulado registrado ainda.</p>"; return;
  }
  const sims=SIMULADOS_FEITOS;
  // ---- Resumo (cards) ----
  const totalQ=sims.reduce((a,s)=>a+s.nota.total,0);
  const totalAc=sims.reduce((a,s)=>a+s.nota.acertos,0);
  const totalNaoFiz=sims.reduce((a,s)=>a+(s.naoFiz?s.naoFiz.length:0),0);
  // erros de CONTEÚDO = questões erradas listadas (não inclui as sem tempo)
  const totalErrConteudo=sims.reduce((a,s)=>a+(s.erros?s.erros.length:0),0);
  const mediaPct=totalQ?Math.round(totalAc/totalQ*100):0;
  document.getElementById("desemp-resumo").innerHTML=`
    <div class="mcard"><div class="cap">📋 Simulados feitos</div><div class="big azul">${sims.length}</div><div class="note">registrados aqui</div></div>
    <div class="mcard"><div class="cap">📈 Média de acerto</div><div class="big verde">${mediaPct}%</div><div class="note">${totalAc}/${totalQ} questões</div></div>
    <div class="mcard"><div class="cap">📉 Erros de conteúdo</div><div class="big amarelo">${totalErrConteudo}</div><div class="note">questões que errou sabendo o assunto</div></div>
    <div class="mcard"><div class="cap">⏱️ Ficaram sem tempo</div><div class="big ${totalNaoFiz?'vermelho':'verde'}">${totalNaoFiz}</div><div class="note">lacuna de ritmo (não de conteúdo)</div></div>`;

  // ---- Gestão de tempo ----
  const tempoBox=document.getElementById("desemp-tempo");
  const comTempo=sims.filter(s=>s.tempo);
  let thtml="";
  const semTempoSims=sims.filter(s=>s.naoFiz && s.naoFiz.length);
  if(semTempoSims.length){
    thtml+=`<div class="alerta-box"><b>⚠️ Lacuna de ritmo detectada.</b> Em ${semTempoSims.length} simulado(s) sobraram questões sem resolver: `+
      semTempoSims.map(s=>`${s.rotulo.split("—").pop().trim()} (${s.naoFiz.length} questões: ${s.naoFiz.join(", ")})`).join("; ")+
      `. Isso é problema de ESTRATÉGIA, não de conteúdo — e é 100% treinável. Veja o protocolo de tempo abaixo.</div>`;
  }
  thtml+=`<table class="evo"><tr><th style="text-align:left">Simulado</th><th>Tempo</th><th>min/questão</th><th>Sem tempo</th></tr>`;
  sims.forEach(s=>{
    const mpq=s.tempo?(s.tempo/s.nota.total).toFixed(1):"—";
    const alerta=s.naoFiz&&s.naoFiz.length;
    thtml+=`<tr style="border-top:1px solid var(--borda)"><td class="nm">${s.rotulo}</td><td style="text-align:center">${s.tempo?Math.floor(s.tempo/60)+'h'+(s.tempo%60?(s.tempo%60)+'min':''):'—'}</td><td style="text-align:center">${mpq}</td><td style="text-align:center;${alerta?'color:var(--vermelho);font-weight:700':''}">${alerta?s.naoFiz.length:'0'}</td></tr>`;
  });
  thtml+=`</table>`;
  thtml+=`<div class="como" style="margin-top:10px"><b>🎯 Protocolo anti-estouro de tempo (meta: 3,8 min/questão):</b>
    <ol style="margin:6px 0 0 18px;font-size:.84rem;color:var(--txt2)">
      <li><b>1ª passada (rápida):</b> responda só o que você sabe de cara. Se em ~1 min não achou o caminho, PULE e marque no caderno.</li>
      <li><b>Gerais cedo:</b> Português/Inglês são ponto barato — faça depois das específicas fáceis, nunca no fim exausta.</li>
      <li><b>2ª passada:</b> volte nas puladas de cálculo pesado. Agora você já garantiu os pontos fáceis.</li>
      <li><b>Chute consciente:</b> questão sem resposta = 0 garantido. Nos últimos 15 min, não deixe NENHUMA em branco.</li>
      <li><b>Cronômetro visível:</b> treine os simulados de sábado SEMPRE com timer de 4h30 e meta de terminar em 4h.</li>
    </ol></div>`;
  tempoBox.innerHTML=thtml;

  // ---- Português e Inglês (Gerais) — agora classificatórios ----
  // Q1-10 = Português, Q11-20 = Inglês (padrão Cesgranrio nível superior).
  const gBox=document.getElementById("desemp-gerais");
  let pTot=0,pErr=0,pNF=0, iTot=0,iErr=0,iNF=0;
  sims.forEach(s=>{
    pTot+=10; iTot+=10;
    (s.erros||[]).forEach(n=>{ if(n>=1&&n<=10)pErr++; else if(n>=11&&n<=20)iErr++; });
    (s.naoFiz||[]).forEach(n=>{ if(n>=1&&n<=10)pNF++; else if(n>=11&&n<=20)iNF++; });
  });
  const linha=(nome,tot,err,nf,alvo)=>{
    const ac=tot-err-nf, pct=tot?Math.round(ac/tot*100):0;
    const cor=pct>=70?"var(--verde)":pct>=50?"#b45309":"var(--vermelho)";
    return `<div class="row"><div class="nm">${nome}</div><div class="track"><div class="fill" style="width:${Math.max(pct,8)}%;background:${cor}">${ac}/${tot} (${pct}%)</div></div></div>`;
  };
  // por prova (pra não esconder uma prova fraca na média)
  let gPerProva=`<table class="evo" style="margin-top:10px"><tr><th style="text-align:left">Prova</th><th>Português</th><th>Inglês</th></tr>`;
  sims.forEach(s=>{
    const pe=(s.erros||[]).filter(n=>n<=10).length, pn=(s.naoFiz||[]).filter(n=>n<=10).length, pa=10-pe-pn;
    const ie=(s.erros||[]).filter(n=>n>=11&&n<=20).length, inf=(s.naoFiz||[]).filter(n=>n>=11&&n<=20).length, ia=10-ie-inf;
    const cell=(a)=>{const c=a>=7?"#bbf7d0":a>=5?"#fef9c3":"#fecaca";return `style="background:${c};text-align:center"`;};
    gPerProva+=`<tr style="border-top:1px solid var(--borda)"><td class="nm">${s.rotulo.split("—").pop().trim()}</td><td ${cell(pa)}>${pa}/10</td><td ${cell(ia)}>${ia}/10</td></tr>`;
  });
  gPerProva+=`</table>`;
  gBox.innerHTML=`<div class="bars">${linha("Português (Q1-10) — média",pTot,pErr,pNF)}${linha("Inglês (Q11-20) — média",iTot,iErr,iNF)}</div>`+
    gPerProva+
    `<div class="como" style="margin-top:8px"><b>Leitura:</b> ${
      pErr/Math.max(pTot,1)>0.25
      ? `⚠️ Português oscila e tem provas fracas (ex.: 6/10 na PB2011). Como agora é CLASSIFICATÓRIO + eliminatório, cada acerto conta no ranking e um tropeço te elimina. É o melhor custo-benefício: interpretação + vírgula + crase são treináveis rápido.`
      : `Português está sob controle, mas não relaxe — virou classificatório.`
    } ${
      iErr/Math.max(iTot,1)<=0.2 ? `Inglês está forte — mantenha com 1 texto por semana.` : `Inglês merece atenção (${iErr} erros em ${iTot}).`
    }</div>`;

  // ---- Agregado de erros por matéria e subtópico (só específicas Q21-70) ----
  const matErr={}, matTot={}, subErr={};
  sims.forEach(s=>{
    BANCO.filter(q=>q.prova===s.prova && q.n>=21 && !q.anulada).forEach(q=>{ matTot[q.materia]=(matTot[q.materia]||0)+1; });
    (s.erros||[]).filter(n=>n>=21).forEach(n=>{
      const q=BANCO.find(x=>x.prova===s.prova && x.n===n); if(!q) return;
      matErr[q.materia]=(matErr[q.materia]||0)+1;
      subErr[q.sub]=(subErr[q.sub]||0)+1;
    });
  });

  // ---- Lacunas por matéria ----
  const matBox=document.getElementById("desemp-materia");
  const chaves=Object.keys(matTot).sort((a,b)=>((matErr[b]||0)/matTot[b])-((matErr[a]||0)/matTot[a]));
  matBox.innerHTML=`<div class="bars">`+chaves.map(k=>{
    const e=matErr[k]||0, t=matTot[k], pct=Math.round(e/t*100);
    const cor=pct>=50?"var(--vermelho)":pct>=30?"#b45309":"var(--verde)";
    const nome=ASSUNTOS[k]?ASSUNTOS[k].split(" (")[0].split("/")[0].trim():k;
    return `<div class="row"><div class="nm">${nome}</div><div class="track"><div class="fill" style="width:${Math.max(pct,8)}%;background:${cor}">${e}/${t} erros (${pct}%)</div></div></div>`;
  }).join("")+`</div>`;
  if(!chaves.length) matBox.innerHTML="<p class='sub'>Sem dados de específicas ainda.</p>";

  // ---- Pontos do edital mais errados ----
  const subBox=document.getElementById("desemp-sub");
  const subs=Object.keys(subErr).sort((a,b)=>subErr[b]-subErr[a]);
  if(!subs.length){ subBox.innerHTML="<p class='sub'>Sem dados ainda.</p>"; }
  else {
    subBox.innerHTML=subs.map(id=>{
      const info=(typeof SUBTOPICOS!=="undefined"&&SUBTOPICOS[id])?SUBTOPICOS[id]:null;
      const n=subErr[id];
      const grave=n>=2;
      return `<div class="lacuna ${grave?'grave':''}">
        <div class="lac-info"><span class="lac-n">${n}×</span> <b>${id}</b> ${info?info.t:""}</div>
        <button class="go-q" data-mat="${info?info.materiaKey||"":""}" data-sub="${id}">treinar →</button>
      </div>`;
    }).join("");
    subBox.querySelectorAll(".go-q").forEach(el=>el.onclick=()=>estudarPonto(el.dataset.mat, el.dataset.sub));
  }

  // ---- Lista de simulados + aviso de confiabilidade ----
  const listBox=document.getElementById("desemp-lista");
  listBox.innerHTML=sims.map(s=>{
    const confiavel=GAB_OFICIAL_OK.includes(s.prova);
    const pct=Math.round(s.nota.acertos/s.nota.total*100);
    return `<div class="simrow">
      <div><b>${s.rotulo}</b> <span class="sub">— ${s.data}</span><br>
        <span class="sub">${s.nota.acertos}/${s.nota.total} (${pct}%) · ${s.obs||""}</span></div>
      <span class="tag ${confiavel?'conc':'anulada-tag'}" title="${confiavel?'Gabarito oficial confirmado — diagnóstico 100% confiável':'Gabarito ainda não confirmado — subtópico confiável só para a matéria'}">${confiavel?'✓ gabarito oficial':'⚠ gabarito provisório'}</span>
    </div>`;
  }).join("");
}

/* =============================================================================
   TÁTICA DE PROVA — método das voltas + atenção + treino de tempo
============================================================================= */
function renderTatica(){
  if(typeof META_TEMPO==="undefined") return;
  const m=META_TEMPO;
  document.getElementById("tatica-resumo").innerHTML=`
    <div class="mcard"><div class="cap">⏱️ Meta de ritmo</div><div class="big azul">${m.minPorQuestaoMeta} min</div><div class="note">por questão (terminar em 4h)</div></div>
    <div class="mcard"><div class="cap">📝 Resolver tudo até</div><div class="big verde">4h00</div><div class="note">das 4h30 totais</div></div>
    <div class="mcard"><div class="cap">✅ Reserva p/ cartão</div><div class="big amarelo">30 min</div><div class="note">transcrever + conferir</div></div>
    <div class="mcard"><div class="cap">🎯 Você já fez isso</div><div class="big verde">PB2012</div><div class="note">terminou em 4h — é possível!</div></div>`;

  document.getElementById("tatica-voltas").innerHTML=PLANO_VOLTAS.map(v=>`
    <div class="fase" style="margin-bottom:12px">
      <div class="fh" style="background:${v.cor}"><b>${v.bloco}</b></div>
      <div style="padding:12px 15px">
        <div style="font-size:.85rem;font-weight:600;margin-bottom:6px;color:var(--txt)">${v.meta}</div>
        <ul style="margin:0 0 0 18px;font-size:.84rem;color:var(--txt2)">${v.regras.map(r=>`<li style="margin-bottom:4px">${r}</li>`).join("")}</ul>
      </div>
    </div>`).join("");

  document.getElementById("tatica-energia").innerHTML=(typeof PLANO_ENERGIA!=="undefined"?PLANO_ENERGIA:[]).map(r=>`
    <div class="insight"><b>${r.t}</b><span>${r.d}</span></div>`).join("");

  document.getElementById("tatica-atencao").innerHTML=REGRAS_ATENCAO.map(r=>`
    <div class="insight"><b>${r.t}</b><span>${r.d}</span></div>`).join("");

  document.getElementById("tatica-teste").innerHTML=(typeof TESTE_SABADO!=="undefined"?TESTE_SABADO:[]).map(r=>`
    <div class="insight" style="border-left-color:var(--verde)"><b>${r.semana}</b><span>${r.foco}</span></div>`).join("");

  document.getElementById("tatica-treino").innerHTML=`<ul style="margin:0 0 0 18px;font-size:.85rem;color:var(--txt2)">${TREINO_TEMPO.map(t=>`<li style="margin-bottom:5px">${t}</li>`).join("")}</ul>`;
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
   CADERNO DE ERROS — sistema de Leitner + repetição espaçada
   -----------------------------------------------------------------------------
   Base científica:
     • Active recall: você vê a FRENTE (pergunta) e tenta lembrar antes de abrir o verso.
     • Repetição espaçada / Leitner: cada card tem uma "caixa" (1 a 5). Acertou → sobe
       de caixa (revisa mais tarde). Errou → volta pra caixa 1 (revisa amanhã).
   Intervalos por caixa (dias) — calibrados para a reta final (~37 dias):
     caixa 1 = 1 dia | 2 = 2 dias | 3 = 4 dias | 4 = 7 dias | 5 = 14 dias
   Card "vence" quando hoje >= próxima data de revisão → aparece em "Revisar hoje".
============================================================================= */
const LEITNER_INTERVALOS={1:1,2:2,3:4,4:7,5:14};
let erros=JSON.parse(localStorage.getItem(LS_ERROS)||"[]");
function salvarErros(){ localStorage.setItem(LS_ERROS,JSON.stringify(erros)); }
function hojeISO(){ const d=new Date(); d.setHours(0,0,0,0); return d.toISOString().slice(0,10); }
function addDias(iso,n){ const d=new Date(iso+"T00:00:00"); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); }
function cardVence(c){ return c.proxima<=hojeISO(); }
function nomeMateria(k){ return (typeof ASSUNTOS!=="undefined"&&ASSUNTOS[k])?ASSUNTOS[k].split(" (")[0].split("/")[0].trim():(k==="port"?"Português":k==="ingles"?"Inglês":k); }

// migração: se houver diário antigo em texto, oferece importação uma vez
function diarioAntigo(){ return localStorage.getItem(LS_DIARIO)||""; }

let erroTabAtiva="revisar";
function renderErros(){
  // popular select de matérias (uma vez)
  const sel=document.getElementById("erro-materia");
  if(sel && !sel.dataset.ready){
    let opts="";
    if(typeof ASSUNTOS!=="undefined") Object.keys(ASSUNTOS).forEach(k=>opts+=`<option value="${k}">${nomeMateria(k)}</option>`);
    opts+=`<option value="port">Português</option><option value="ingles">Inglês</option><option value="outro">Outro</option>`;
    sel.innerHTML=opts; sel.dataset.ready="1";
  }
  // stats
  const total=erros.length;
  const venc=erros.filter(cardVence).length;
  const dominados=erros.filter(c=>c.caixa>=5).length;
  const novos=erros.filter(c=>c.caixa===1).length;
  document.getElementById("erros-stats").innerHTML=`
    <div class="mcard"><div class="cap">🔁 Para revisar hoje</div><div class="big ${venc?'vermelho':'verde'}" style="${venc?'color:var(--vermelho)':''}">${venc}</div><div class="note">cards vencidos</div></div>
    <div class="mcard"><div class="cap">📚 Total de cards</div><div class="big azul">${total}</div><div class="note">erros registrados</div></div>
    <div class="mcard"><div class="cap">🔴 Ainda frescos</div><div class="big amarelo">${novos}</div><div class="note">na caixa 1</div></div>
    <div class="mcard"><div class="cap">✅ Quase dominados</div><div class="big verde">${dominados}</div><div class="note">na caixa 5</div></div>`;
  renderErrosTab();
}

document.querySelectorAll("#erros-tabs button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll("#erros-tabs button").forEach(x=>x.classList.remove("on"));
  b.classList.add("on"); erroTabAtiva=b.dataset.e; renderErrosTab();
});

function renderErrosTab(){
  ["revisar","add","todos","como"].forEach(t=>{
    document.getElementById("erros-"+t).style.display = (t===erroTabAtiva)?"block":"none";
  });
  if(erroTabAtiva==="revisar") renderRevisarHoje();
  if(erroTabAtiva==="todos") renderTodosErros();
  if(erroTabAtiva==="como") renderComoFunciona();
}

function cardHTML(c,modo){
  const cx=c.caixa;
  const letra=nomeMateria(c.materia);
  const fonte=c.fonte?`<div class="efonte">📍 ${c.fonte}</div>`:"";
  let acoes="";
  if(modo==="revisar"){
    acoes=`<button class="btn sm ghost" onclick="abrirCard(${c.id})">Mostrar resposta</button>
      <span id="julgar-${c.id}" style="display:none">
        <button class="btn sm verde" onclick="julgarCard(${c.id},true)">✓ Acertei (subir)</button>
        <button class="btn sm vermelho" onclick="julgarCard(${c.id},false)">✗ Errei (volta p/ caixa 1)</button>
      </span>`;
  } else {
    acoes=`<button class="btn sm ghost" onclick="abrirCard(${c.id})">Ver resposta</button>
      <button class="btn sm ghost" onclick="excluirCard(${c.id})">🗑 Excluir</button>`;
  }
  return `<div class="ecard" id="ecard-${c.id}">
    <div class="etop"><div class="ebadges">
      <span class="caixa-tag caixa-${cx}">Caixa ${cx}/5</span>
      <span class="caixa-tag">${letra}</span>
      ${modo!=="revisar"?`<span class="caixa-tag">revisa em ${c.proxima}</span>`:""}
    </div></div>
    <div class="frente">${c.frente}</div>
    <div class="verso">${c.verso}</div>
    ${fonte}
    <div class="eacoes">${acoes}</div>
  </div>`;
}

function renderRevisarHoje(){
  const cont=document.getElementById("erros-revisar");
  const fila=erros.filter(cardVence).sort((a,b)=>a.caixa-b.caixa);
  if(!erros.length){
    cont.innerHTML=`<div class="vazio"><div class="big">🧠</div><b>Seu caderno está vazio.</b><br>Clique em "➕ Adicionar erro" e transforme seu primeiro erro num card.
      ${diarioAntigo()?`<br><br><button class="btn" onclick="importarDiario()">Importar meu diário de erros antigo</button>`:""}</div>`;
    return;
  }
  if(!fila.length){
    cont.innerHTML=`<div class="vazio"><div class="big">🎉</div><b>Nada para revisar hoje!</b><br>Você está em dia com a repetição espaçada. Volte amanhã — o app agenda os próximos cards sozinho.</div>`;
    return;
  }
  cont.innerHTML=`<p class="sub">Tente lembrar a resposta <b>de cabeça</b> antes de abrir (active recall). Depois marque se acertou.</p>`+
    fila.map(c=>cardHTML(c,"revisar")).join("");
}

function renderTodosErros(){
  const cont=document.getElementById("erros-todos");
  if(!erros.length){ cont.innerHTML=`<div class="vazio"><div class="big">📚</div>Nenhum card ainda.</div>`; return; }
  const ordenados=[...erros].sort((a,b)=>a.caixa-b.caixa || a.proxima.localeCompare(b.proxima));
  cont.innerHTML=ordenados.map(c=>cardHTML(c,"todos")).join("");
}

function abrirCard(id){
  document.getElementById("ecard-"+id).classList.add("aberto");
  const j=document.getElementById("julgar-"+id); if(j) j.style.display="inline";
}
function julgarCard(id,acertou){
  const c=erros.find(x=>x.id===id); if(!c) return;
  if(acertou){ c.caixa=Math.min(5,c.caixa+1); } else { c.caixa=1; }
  c.proxima=addDias(hojeISO(),LEITNER_INTERVALOS[c.caixa]);
  c.revisoes=(c.revisoes||0)+1;
  salvarErros(); renderErros();
}
function excluirCard(id){
  if(!confirm("Excluir este card do caderno de erros?")) return;
  erros=erros.filter(x=>x.id!==id); salvarErros(); renderErros();
}

// adicionar card
document.getElementById("erro-salvar").onclick=()=>{
  const materia=document.getElementById("erro-materia").value;
  const fonte=document.getElementById("erro-fonte").value.trim();
  const frente=document.getElementById("erro-frente").value.trim();
  const verso=document.getElementById("erro-verso").value.trim();
  const saved=document.getElementById("erro-saved");
  if(!frente||!verso){ saved.style.color="var(--vermelho)"; saved.textContent="Preencha a frente e o verso."; return; }
  erros.push({id:Date.now(),materia,fonte,frente,verso,caixa:1,proxima:hojeISO(),criado:hojeISO(),revisoes:0});
  salvarErros();
  document.getElementById("erro-frente").value=""; document.getElementById("erro-verso").value=""; document.getElementById("erro-fonte").value="";
  saved.style.color="var(--verde)"; saved.textContent="✓ card salvo — já entra na revisão de hoje";
  setTimeout(()=>saved.textContent="",2500);
  renderErros();
};

function importarDiario(){
  const txt=diarioAntigo(); if(!txt) return;
  const linhas=txt.split("\n").map(l=>l.trim()).filter(l=>l.length>3);
  linhas.forEach(l=>{
    erros.push({id:Date.now()+Math.floor(Math.random()*1000),materia:"outro",fonte:"importado do diário antigo",frente:l,verso:"(abra e complete a correção deste erro)",caixa:1,proxima:hojeISO(),criado:hojeISO(),revisoes:0});
  });
  localStorage.removeItem(LS_DIARIO);
  salvarErros(); renderErros();
  alert(linhas.length+" anotações importadas como cards. Abra cada uma e complete o verso com a correção.");
}

function renderComoFunciona(){
  document.getElementById("erros-como").innerHTML=`
    <div class="panel">
      <h3>🔬 Por que este caderno funciona (base científica)</h3>
      <p style="font-size:.88rem;margin:8px 0"><b>1. Recordação ativa (active recall).</b> Tentar lembrar a resposta de cabeça — antes de olhar — fixa muito mais que reler. Estudos mostram ganho de 50–80% na retenção vs. releitura passiva.</p>
      <p style="font-size:.88rem;margin:8px 0"><b>2. Repetição espaçada.</b> Revisar em intervalos crescentes, "logo antes de esquecer", bate a curva do esquecimento. Produz 75–100% mais retenção de longo prazo que decorar tudo de uma vez.</p>
      <p style="font-size:.88rem;margin:8px 0"><b>3. Sistema de Leitner.</b> Cada card vive numa caixa (1 a 5). Acertou → sobe de caixa e some por mais tempo. Errou → volta pra caixa 1 e volta logo. Assim seu tempo se concentra no que você ainda erra.</p>
      <div class="panel" style="background:var(--bg);margin-top:12px">
        <b style="font-size:.85rem">Os intervalos deste caderno (reta final):</b>
        <div style="font-size:.84rem;margin-top:6px">
          🔴 Caixa 1 → revisa em <b>1 dia</b><br>
          🟠 Caixa 2 → revisa em <b>2 dias</b><br>
          🟡 Caixa 3 → revisa em <b>4 dias</b><br>
          🔵 Caixa 4 → revisa em <b>7 dias</b><br>
          🟢 Caixa 5 → revisa em <b>14 dias</b> (quase dominado)
        </div>
      </div>
      <div class="panel" style="background:var(--amarelo-bg);margin-top:12px">
        <b style="font-size:.85rem">📓 Físico + digital: como usar os dois sem retrabalho</b>
        <p style="font-size:.84rem;margin-top:6px">Não anote a mesma coisa duas vezes. Deixe cada um com a função em que é melhor:</p>
        <p style="font-size:.84rem;margin-top:6px">• <b>Caderninho físico</b> = onde você <b>resolve e pensa</b> na hora do erro (escrever à mão ajuda a codificar).<br>• <b>Este caderno digital</b> = o <b>motor de revisão</b> que o papel não faz: ele te lembra o que revisar hoje e te testa. Passe para cá só os erros que você precisa <b>decorar até a prova</b>.</p>
      </div>
      <p style="font-size:.78rem;color:var(--txt2);margin-top:12px">Fontes: Roediger &amp; Karpicke (2006, retrieval practice); revisão sistemática sobre repetição espaçada e prática de recordação (PMC/NIH); sistema de Leitner (Sebastian Leitner, 1972). Conteúdo resumido para fins de estudo.</p>
    </div>`;
}

/* ---------- init ---------- */
renderHome();
renderEdital();
renderEstrategia();
renderCrono();
renderProvas();
renderFiltrosBanco();
renderBanco();
renderAnalise();
renderErros();
