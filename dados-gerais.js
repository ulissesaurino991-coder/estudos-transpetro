/* =============================================================================
   TRILHA DE PORTUGUÊS E INGLÊS — priorizada pelo que a usuária MAIS PRECISA.
   -----------------------------------------------------------------------------
   Base (dados reais das 4 provas Petrobras):
     • Português: erros concentrados nas questões 6-10 (GRAMÁTICA). Interpretação
       (1-5) está ok. Nota oscila 6-9/10.  → prioridade = gramática objetiva.
     • Inglês: vai bem (6-10/10). → manutenção leve, sem exageros.
   Princípio: estudar na ORDEM do que mais cai × maior fraqueza, CORTANDO o que
   quase não cai (ortografia pura, classes decoradas, gramática inglesa pesada).
   -----------------------------------------------------------------------------
   prioridade: 1 (faça primeiro / mais importante) ... 5 (só se sobrar tempo)
   cortar: true  → tópico de baixo retorno; NÃO gaste tempo com isso.
============================================================================= */

const TRILHA_PT = [
  { prio:1, t:"Interpretação de texto", edital:"pt-1",
    d:"É o MAIOR volume (5-6 das 10 questões) e você já vai bem. Mantenha afiada: ideia principal, propósito do autor, inferência, sentido da palavra no contexto.",
    como:"2-3 textos Cesgranrio comentados por semana. Leia a pergunta ANTES do texto para saber o que caçar." },
  { prio:1, t:"Pontuação — a vírgula", edital:"pt-8",
    d:"⚠️ SEU PONTO FRACO + regra fixa = maior retorno. Isolar aposto, oração adjetiva explicativa, adjunto deslocado; vírgula que NÃO separa sujeito do verbo.",
    como:"Decore os 5 casos de vírgula + 10 questões. É 'ponto de graça' depois que você fixa o padrão." },
  { prio:1, t:"Crase", edital:"pt-11",
    d:"⚠️ Ponto fraco + 100% regra. 'à' = a (prep) + a (artigo). Casos: antes de palavra feminina, horas, 'à moda de'. NÃO antes de verbo/masculino/pronome.",
    como:"Decore a regrinha da troca por masculino ('vou à feira' → 'vou ao mercado' = tem crase). 10 questões." },
  { prio:2, t:"Concordância verbal e nominal", edital:"pt-9",
    d:"Clássico Cesgranrio: sujeito posposto, 'haver' impessoal (não vai a plural), 'fazer' indicando tempo, partícula 'se'.",
    como:"Lista dos casos campeões + 10 questões comentadas." },
  { prio:2, t:"Regência verbal e nominal", edital:"pt-10",
    d:"Base da crase. Verbos que pedem preposição (assistir A, obedecer A, visar A). Cai junto com crase.",
    como:"Foque nos verbos campeões de prova. 5-10 questões." },
  { prio:3, t:"Coesão / referência textual", edital:"pt-3",
    d:"A que termo 'isso / lhe / o qual / tal' se refere. Cai dentro da interpretação.",
    como:"Treine marcando no texto o referente de cada pronome." },
  { prio:3, t:"Colocação pronominal", edital:"pt-12",
    d:"Próclise (palavra atrativa: não, que, advérbio), ênclise, mesóclise. Padrão fixo.",
    como:"Decore as palavras que atraem próclise. 5 questões." },
  { prio:4, t:"Significação das palavras", edital:"pt-4",
    d:"Sinônimo/antônimo e sentido conotativo × denotativo. Resolve-se pelo contexto.",
    como:"Sai de brinde na interpretação; não precisa estudo isolado." },
  { prio:5, cortar:true, t:"Ortografia pura / classes de palavras decoradas", edital:"pt-2/pt-6",
    d:"❌ BAIXO RETORNO: a Cesgranrio quase nunca cobra ortografia isolada ou 'classifique a classe gramatical' solto. NÃO gaste tempo decorando isso — cai dentro de outras questões." }
];

const TRILHA_EN = [
  { prio:1, t:"Compreensão do texto (ideia principal / propósito)", edital:"en-1",
    d:"A prova é 1-2 textos técnicos; quase tudo gira em torno de entender o texto. Você já vai bem — manutenção.",
    como:"Skimming (ideia geral) + scanning (achar info específica). 1 texto comentado por semana BASTA." },
  { prio:1, t:"Referência pronominal", edital:"en-2",
    d:"this/that/it/which → a que se refere no texto. MUITO padronizado na Cesgranrio = ponto fácil.",
    como:"Em cada texto, marque o referente de cada pronome destacado." },
  { prio:2, t:"Conectivos e seus sentidos", edital:"en-3",
    d:"however/nevertheless (contraste), so/thus/therefore (consequência), such as (exemplo), in order to (finalidade), while (contraste/tempo).",
    como:"Decore a tabela de conectivos por função. É treinável em 1-2 dias." },
  { prio:3, t:"Vocabulário em contexto", edital:"en-4",
    d:"Sinônimo/antônimo de palavra sublinhada — deduzido pelo contexto, não precisa decorar dicionário.",
    como:"Treine adivinhar o sentido pela frase antes de ver as opções." },
  { prio:4, t:"Inferência e conclusão", edital:"en-5",
    d:"O que PODE ser concluído do texto. Sai da boa interpretação.",
    como:"Cuidado com opção 'verdadeira mas não dita no texto'." },
  { prio:5, cortar:true, t:"Gramática inglesa pesada (tempos verbais isolados)", edital:"en-6",
    d:"❌ BAIXO RETORNO: a prova é de LEITURA, não de conversação/gramática. Modais e voz passiva aparecem DENTRO do texto; não estude gramática inglesa isolada." }
];

// Rotina diária fixa de Gerais (encaixar nos 30-40 min de Gerais de cada dia útil)
const ROTINA_GERAIS = {
  intro: "Você parte do zero em Gerais, mas são CLASSIFICATÓRIAS agora (somam no ranking) e eliminatórias (zerar reprova). A boa notícia: pelos seus simulados, interpretação (PT) e leitura (EN) já vão bem — o buraco é GRAMÁTICA do português. Foque nisso.",
  diaria: [
    "SEG/QUA/SEX — Português: 1 bloco de gramática objetiva na ordem de prioridade (vírgula → crase → concordância → regência) + 5 questões. São regras fixas, 'ponto de graça'.",
    "TER/QUI — Inglês: 1 texto Cesgranrio comentado (foco em referência pronominal + conectivos) + vocabulário em contexto.",
    "Interpretação de PT: 2-3 textos por semana (você já vai bem, é manutenção).",
    "Todo dia: 3 questões rápidas de gramática no Caderno (fixa por repetição)."
  ],
  corte: "NÃO estude: ortografia pura, decorar classes gramaticais, gramática inglesa pesada (tempos verbais isolados). Baixíssimo retorno na Cesgranrio."
};
