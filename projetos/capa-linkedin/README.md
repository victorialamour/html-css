# Capa de LinkedIn — Victória L'Amour

Duas versões do mesmo sistema visual, construídas em HTML + CSS + SVG (fontes embutidas
em `fontes.css`, sem dependência externa).

**O sistema:** fundos vinho `#2B0E18` e areia `#F5EEE9`; uma rampa quente do âmbar ao
vinho; um único motivo — o feixe de luz aerografado, que muda de ângulo e escala em cada
peça. Tipografia: Inter Tight na manchete, Instrument Serif itálica na palavra do
conceito, Inter nas linhas micro.

| Arquivo | O que é |
|---|---|
| `index.html` | Galeria com as duas versões |
| `capa-clara.html` | Fundo areia, 1584 × 396 px |
| `capa-escura.html` | Fundo vinho, 1584 × 396 px |
| `png/` | Prontas para subir (3168 × 792, 2×) |
| `arquivo/` | Versões da primeira rodada, fora do sistema |

## Como subir no LinkedIn

Perfil → lápis na foto de capa → **Alterar foto de capa** → selecionar o PNG, sem recortar.

## Grade e zonas seguras

Canvas 1584 × 396 (4:1). A foto de perfil ocupa até ~30% da largura à esquerda e invade a
metade inferior — por isso todo o texto começa em `x = 464px`. O feixe sangra na borda
direita de propósito; nada de texto ali.

## Trocar a manchete

A manchete quebra em duas linhas e a palavra do conceito vai em `<em>`. Outras frases do
mesmo repertório:

- Meta não se cobra, se `constrói`.
- Time treinado não `improvisa`.
- Da primeira conversa à `recompra`.
- O funil melhora quando o `time` melhora.
