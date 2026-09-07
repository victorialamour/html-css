/* CAPA — "Jornada" v2: eixo removido, etapas viram legenda sob a frase,
   ligadas aos marcos pela cor. */
const fs = require('fs');
const W = 1584, H = 396;
const fonts = JSON.parse(fs.readFileSync(__dirname + '/fonts/fonts_b64.json', 'utf8'));
const OUT = '/home/user/html-css/projetos/capa-linkedin';
const P = (n) => Number(n.toFixed(1));

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

const etapas = [
  { x: 520,  r: 20, curva: -0.20, cor: '#6E5BE0' },
  { x: 830,  r: 23, curva:  0.35, cor: '#DE4F97' },
  { x: 1150, r: 27, curva:  0.72, cor: '#F0A118' },
  { x: 1440, r: 33, curva:  1.00, cor: '#EE4B2B' },
];

function rosto(cx, cy, r, curva) {
  const eo = r * .34, ey = cy - r * .20, er = Math.max(1.6, r * .105);
  const mw = r * .86, my = cy + r * .26, arc = curva * r * .52;
  return `<g fill="#FFFFFF">
    <circle cx="${P(cx - eo)}" cy="${P(ey)}" r="${P(er)}"/>
    <circle cx="${P(cx + eo)}" cy="${P(ey)}" r="${P(er)}"/>
    <path d="M ${P(cx - mw / 2)} ${P(my - arc * .34)} Q ${P(cx)} ${P(my + arc)} ${P(cx + mw / 2)} ${P(my - arc * .34)}"
      fill="none" stroke="#FFFFFF" stroke-width="${P(Math.max(1.9, r * .11))}" stroke-linecap="round"/></g>`;
}

const marcos = etapas.map(e => { const p = emX(e.x);
  return `<circle cx="${P(p.x)}" cy="${P(p.y)}" r="${e.r + 8}" fill="${e.cor}" opacity="0.12"/>
    <circle cx="${P(p.x)}" cy="${P(p.y)}" r="${e.r}" fill="${e.cor}"/>${rosto(p.x, p.y, e.r, e.curva)}`;
}).join('');

const arte = (FILL) => `
<svg class="art" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true">
  <defs>
    <linearGradient id="jl" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
      <stop offset="0%" stop-color="#6E5BE0"/><stop offset="32%" stop-color="#DE4F97"/>
      <stop offset="68%" stop-color="#F0A118"/><stop offset="100%" stop-color="#EE4B2B"/></linearGradient>
    <linearGradient id="jf" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EE4B2B" stop-opacity="${FILL}"/>
      <stop offset="100%" stop-color="#EE4B2B" stop-opacity="0"/></linearGradient>
  </defs>
  <path d="${D} L 1660 ${H} L -40 ${H} Z" fill="url(#jf)"/>
  <path d="${D}" fill="none" stroke="url(#jl)" stroke-width="3" stroke-linecap="round"/>
  ${marcos}
</svg>`;

const competencias = ['CONSULTORIA COMERCIAL', 'TREINAMENTO DE TIMES', 'DESENVOLVIMENTO WEB'];
const legenda = competencias.map((c, i) =>
  `<li>${i ? '<span class="sp"></span>' : ''}${c}</li>`).join('');

const temas = {
  claro:  { fundo:'#FBFAF8', tinta:'#16141A', muted:'#6F6A74', regua:'#B9B3BC', fill:0.09 },
  escuro: { fundo:'#0F1017', tinta:'#F4F2F6', muted:'#8E8996', regua:'#3A3742', fill:0.16 },
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
.leg li{display:flex;align-items:center;
  font:500 10.5px/1 Inter,sans-serif;letter-spacing:.19em;color:${t.muted}}
.leg .sp{width:5px;height:5px;border-radius:50%;background:#EE4B2B;margin:0 16px;flex:none;opacity:.85}`;

const fontCss = `@font-face{font-family:'Inter Tight';font-style:normal;font-weight:100 900;font-display:block;src:url(${fonts['Inter Tight|normal']}) format('woff2')}
@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:block;src:url(${fonts['Inter|normal']}) format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:italic;font-weight:400;font-display:block;src:url(${fonts['Instrument Serif|italic']}) format('woff2')}
@font-face{font-family:'Instrument Serif';font-style:normal;font-weight:400;font-display:block;src:url(${fonts['Instrument Serif|normal']}) format('woff2')}`;

fs.writeFileSync(OUT + '/fontes.css', fontCss);
Object.entries(temas).forEach(([nome, t]) => {
  fs.writeFileSync(`${OUT}/capa-jornada-${nome}.html`, `<!DOCTYPE html>
<html lang="pt-br"><head><meta charset="UTF-8"><title>capa-jornada-${nome} — Victória L'Amour</title>
<link rel="stylesheet" href="fontes.css"><style>${css(t)}
body{display:grid;place-items:center;min-height:100vh;background:#E3DFDA}</style></head>
<body><div class="cv">${arte(t.fill)}<div class="tx">
    <p class="mark"><span class="tr"></span>VICTÓRIA L'AMOUR <i>·</i> RECIFE / PE</p>
    <h1>Experiência do cliente,<br><em>do time à tela</em>.</h1>
    <ul class="leg">${legenda}</ul>
  </div></div></body></html>`);
});
console.log('ok');
