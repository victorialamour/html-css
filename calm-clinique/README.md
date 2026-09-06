# CALM Clinique — Landing page

Landing page de conversão da CALM Clinique (Dra. Amanda Santos,
cirurgiã-dentista · CD 13249/PE — harmonização orofacial), construída sobre
o **Sistema Visual CALM Clinique v1**.

- **`index.html`** — arquivo único: HTML + CSS (`<style>`) + JS (`<script>`).
  Sem framework, sem biblioteca, sem build.
- **`img/`** — as fotos da marca (veja `img/LEIA-ME.md`).

## Posicionamento aplicado na copy

> A beleza não está nos padrões.

Planejamento personalizado, resultado natural sem exageros, tecnologia
voltada ao conforto, protocolos de segurança e acompanhamento de longo
prazo — os quatro pilares atravessam hero, faixa de valores, método e FAQ.

## Canais reais usados na página

| Onde | Link |
|---|---|
| Agendamento (todos os CTAs primários) | https://bit.ly/calmclinique |
| Instagram da clínica | https://instagram.com/calmclinique |
| Instagram da Dra. Amanda | https://instagram.com/dra.amandapsantos |

## O que já está pronto

- Paleta, tipografia, arredondamentos, sombras e escala de espaçamento
  aplicados como tokens CSS (`:root`), conforme a especificação.
- Logo em SVG inline (círculo oliva + anel creme), sem arquivo externo.
- Mobile-first com breakpoints em 641px, 768px, 1024px e 1441px.
- CTA "Agendar avaliação" sempre visível: barra fixa no rodapé em mobile,
  botão no cabeçalho em desktop — apontando para o link oficial.
- HTML semântico, `alt` em todas as imagens, skip link, foco visível,
  `aria-expanded` no menu e no FAQ, e `prefers-reduced-motion` respeitado.

## O que ainda falta preencher

1. **Endereço, telefone e horários** — há comentários marcando o lugar
   exato na seção de agendamento e no rodapé.
2. **Depoimentos reais** — o CSS está pronto e há um bloco comentado no
   HTML, logo após a seção de manifesto, esperando as autorizações.
3. **Fotos opcionais** dos cards de procedimento (`img/LEIA-ME.md`).
