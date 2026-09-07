/* =============================================================================
   CAPA LINKEDIN — variante DEV / UX
   Mesmo sistema da capa comercial: curva ascendente + marcos + bloco de texto.
   O que muda é a métrica: sai a régua de satisfação, entram os medidores do
   Lighthouse (convenção vermelho <50 / âmbar 50-89 / verde >=90).

   Para trocar de pessoa, edite só PERFIL. Os números de MARCOS precisam ser
   reais — são a única parte da capa que faz uma afirmação verificável.
   ========================================================================== */
const fs = require('fs');
const W = 1584, H = 396;
const fonts = JSON.parse(fs.readFileSync(__dirname + '/fonts/fonts_b64.json', 'utf8'));
const OUT = '/home/user/html-css/projetos/capa-linkedin';
const P = (n) => Number(n.toFixed(1));

const PERFIL = {
  nome: "VICTÓRIA L'AMOUR",
  praca: 'RECIFE / PE',
  frase: ['Código é <em>técnica</em>,', 'experiência é <em>estratégia</em>.'],
  competencias: ['DESENVOLVIMENTO WEB', 'UX / UI', 'PERFORMANCE'],
  marcos: [
    { x: 520,  r: 26, score: 46, rot: 'PERFORMANCE' },
    { x: 830,  r: 29, score: 71, rot: 'ACESSIBILIDADE' },
    { x: 1150, r: 33, score: 88, rot: 'BOAS PRÁTICAS' },
    { x: 1440, r: 38, score: 97, rot: 'SEO' },
  ],
};

/* faixa de cor do Lighthouse — semântica, não decorativa */
const faixa = (s) => (s < 50 ? '#E5484D' : s < 90 ? '#F5A623' : '#30A46C');

const SEG = [
  [{x:-40,y:300},{x:420,y:296},{x:760,y:284},{x:1000,y:266}],
  [{x:1000,y:266},{x:1240,y:246},{x:1380,y:140},{x:1660,y:30}],
];
const bez = (p, t) => { const u = 1 - t; return {
  x: u*u*u*p[0].x + 3*u*u*t*p[1].x + 3*u*t*t*p[2].x + t*t*t*p[3].x,
  y: u*u*u*p[0].y + 3*u*u*t*p[1].y + 3*u*t*t*p[2].y + t*t*t*p[3].y }; };
const emX = (alvo) => { let lo = 0, hi = 1;
  for (let i = 0; i < 44; i++) { const m = (lo + hi) / 2;
    const p = m < .5 ? bez(SEG[0], m / .5) : bez(SEG[1], (m - .5) / .5);
    if (p.x < alvo) lo = m; else hi = m; }
  const m = (lo + hi) / 2;
  return m < .5 ? bez(SEG[0], m / .5) : bez(SEG[1], (m - .5) / .5); };
const D = `M ${SEG[0][0].x} ${SEG[0][0].y} C ${SEG[0][1].x} ${SEG[0][1].y} ${SEG[0][2].x} ${SEG[0][2].y} ${SEG[0][3].x} ${SEG[0][3].y}`
        + ` C ${SEG[1][1].x} ${SEG[1][1].y} ${SEG[1][2].x} ${SEG[1][2].y} ${SEG[1][3].x} ${SEG[1][3].y}`;

/* medidor: anel de progresso + número, como no relatório do Lighthouse */
function medidor(cx, cy, r, score, tema) {
  const cor = faixa(score), rr = r - 5, C = 2 * Math.PI * rr;
  const off = C * (1 - score / 100);
  const trilho = tema === 'escuro' ? 'rgba(255,255,255,.14)' : 'rgba(20,22,28,.10)';
  const disco  = tema === 'escuro' ? '#12141C' : '#FFFFFF';
  return `
  <circle cx="${P(cx)}" cy="${P(cy)}" r="${P(r + 9)}" fill="${cor}" opacity="0.10"/>
  <circle cx="${P(cx)}" cy="${P(cy)}" r="${P(r)}" fill="${disco}"/>
  <circle cx="${P(cx)}" cy="${P(cy)}" r="${P(rr)}" fill="none" stroke="${trilho}" stroke-width="4"/>
  <circle cx="${P(cx)}" cy="${P(cy)}" r="${P(rr)}" fill="none" stroke="${cor}" stroke-width="4"
    stroke-linecap="round" stroke-dasharray="${P(C)}" stroke-dashoffset="${P(off)}"
    transform="rotate(-90 ${P(cx)} ${P(cy)})"/>
  <text x="${P(cx)}" y="${P(cy + r * 0.20)}" text-anchor="middle" fill="${cor}"
    font-family="Inter" font-size="${P(r * 0.78)}" font-weight="600"
    style="font-variant-numeric:tabular-nums">${score}</text>`;
}

function arte(tema) {
  const marcos = PERFIL.marcos.map(m => {
    const p = emX(m.x);
    return medidor(p.x, p.y, m.r, m.score, tema);
  }).join('');
  return `
<svg class="art" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true">
  <defs>
    <linearGradient id="dl" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
      <stop offset="0%" stop-color="#E5484D"/><stop offset="34%" stop-color="#F07C33"/>
      <stop offset="66%" stop-color="#F5A623"/><stop offset="100%" stop-color="#30A46C"/></linearGradient>
    <linearGradient id="df" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#30A46C" stop-opacity="${tema === 'escuro' ? 0.16 : 0.09}"/>
      <stop offset="100%" stop-color="#30A46C" stop-opacity="0"/></linearGradient>
  </defs>
  <path d="${D} L 1660 ${H} L -40 ${H} Z" fill="url(#df)"/>
  <path d="${D}" fill="none" stroke="url(#dl)" stroke-width="3" stroke-linecap="round"/>
  ${marcos}
</svg>`;
}

const bloco = `
  <p class="mark"><span class="tr"></span>${PERFIL.nome} <i>·</i> ${PERFIL.praca}</p>
  <h1>${PERFIL.frase.join('<br>')}</h1>
  <ul class="leg">${PERFIL.competencias.map((c, i) =>
    `<li>${i ? '<span class="sp"></span>' : ''}${c}</li>`).join('')}</ul>`;

const temas = {
  claro:  { fundo: '#FBFAF8', tinta: '#14161C', muted: '#6C7078', regua: '#B7BAC0', ponto: '#30A46C' },
  escuro: { fundo: '#0C0E14', tinta: '#F2F3F5', muted: '#8B909B', regua: '#3A3F4A', ponto: '#30A46C' },
};

const css = (t) => `
*{margin:0;padding:0;box-sizing:border-box}
.cv{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:${t.fundo};color:${t.tinta};
  font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.cv .art{position:absolute;inset:0;display:block}
.tx{position:absolute;left:464px;top:74px;width:860px}
.mark{display:flex;align-items:center;gap:14px;white-space:nowrap;
  font:500 11.5px/1 Inter,sans-serif;letter-spacing:.28em;color:${t.muted};margin-bottom:22px}
.mark .tr{width:34px;height:1px;background:${t.regua};flex:none}
.mark i{font-style:normal;opacity:.42;margin:0 3px}
h1{font:500 40px/1.2 'Inter Tight',Inter,sans-serif;letter-spacing:-.028em;margin-bottom:26px}
h1 em{font:400 44px/1 'Instrument Serif',Georgia,serif;font-style:italic;letter-spacing:-.008em}
.leg{list-style:none;display:flex;align-items:center;white-space:nowrap}
.leg li{display:flex;align-items:center;font:500 10.5px/1 Inter,sans-serif;letter-spacing:.19em;color:${t.muted}}
.leg .sp{width:5px;height:5px;border-radius:50%;background:${t.ponto};margin:0 16px;flex:none}`;

const fontCss = `@font-face{font-family:'Inter Tight';font-style:normal;font-weight:100 900;font-display:block;src:url(${fonts['Inter Tight|normal']}) format('woff2')}
@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:block;src:url(${fonts['Inter|normal']}) format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:italic;font-weight:400;font-display:block;src:url(${fonts['Instrument Serif|italic']}) format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:normal;font-weight:400;font-display:block;src:url(${fonts['Instrument Serif|normal']}) format('woff2')}`;

fs.writeFileSync(OUT + '/fontes.css', fontCss);
Object.entries(temas).forEach(([nome, t]) => {
  fs.writeFileSync(`${OUT}/capa-dev-${nome}.html`, `<!DOCTYPE html>
<html lang="pt-br"><head><meta charset="UTF-8"><title>capa-dev-${nome}</title>
<link rel="stylesheet" href="fontes.css"><style>${css(t)}
body{display:grid;place-items:center;min-height:100vh;background:#E3DFDA}</style></head>
<body><div class="cv">${arte(nome)}<div class="tx">${bloco}</div></div></body></html>`);
});
console.log('capa-dev-claro capa-dev-escuro');
