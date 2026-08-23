# Capa de LinkedIn — Victória L'Amour

Duas versões da mesma identidade visual, construídas em HTML + CSS + SVG (sem imagem
externa, sem dependência de CDN — as fontes estão embutidas em `fontes.css`).

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Galeria com as duas versões lado a lado |
| `capa-01-diagonal.html` | Versão clara (principal), 1584 × 396 px |
| `capa-02-espectro.html` | Versão escura (alternativa), 1584 × 396 px |
| `png/*.png` | Arquivos prontos para subir no LinkedIn (3168 × 792 px, 2×) |
| `fontes.css` | Inter Tight, Inter e Instrument Serif — subset latin, licença OFL |

## Como subir no LinkedIn

Perfil → ícone de lápis na foto de capa → **Alterar foto de capa** → selecionar o PNG.
O LinkedIn aceita até 8 MB e recomenda 1584 × 396 px; os PNGs estão em 2× (3168 × 792)
para não perder nitidez em telas retina.

## Grade e zonas seguras

O canvas é 1584 × 396 px (proporção 4:1). Duas áreas não podem receber informação:

- **Foto de perfil**: ocupa até ~30% da largura à esquerda e invade a metade inferior
  da capa — por isso todo o texto começa em `x = 464px`.
- **Sangria à direita**: o gradiente cruza a borda de propósito; nada de texto ali.

O bloco de texto tem três níveis: assinatura (nome + praça), promessa (manchete) e
competências (linha de disciplinas).

## Como editar

O texto está no HTML de cada capa; cores, tamanhos e espaçamentos ficam no `<style>` do
próprio arquivo. Para regerar os PNGs, abra o `.html` no navegador em 1584 × 396 e
capture a tela, ou rode um screenshot headless na mesma medida.
