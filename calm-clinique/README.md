# CALM Clinique — Landing page

Landing page de conversão para Amanda Santos (harmonização facial),
construída sobre o **Sistema Visual CALM Clinique v1**.

- **`index.html`** — arquivo único: HTML + CSS (`<style>`) + JS (`<script>`).
  Sem framework, sem biblioteca, sem build.
- **`img/`** — as fotos da marca (veja `img/LEIA-ME.md`).

## O que já está pronto

- Paleta, tipografia, arredondamentos, sombras e escala de espaçamento
  aplicados como tokens CSS (`:root`), exatamente como na especificação.
- Logo em SVG inline (círculo oliva + anel creme), sem arquivo externo.
- Mobile-first com breakpoints em 641px, 768px, 1024px e 1441px.
- CTA "Agendar avaliação" sempre visível: barra fixa no rodapé em mobile,
  botão no cabeçalho em desktop.
- HTML semântico, `alt` em todas as imagens, skip link, foco visível,
  `aria-expanded` no menu e no FAQ, e `prefers-reduced-motion` respeitado.
- Formulário sem back-end: monta a mensagem e abre o WhatsApp da clínica.

## Antes de publicar

1. Trocar o número do WhatsApp: constante `WHATSAPP` no `<script>`
   (e os links `wa.me` são atualizados por ela automaticamente).
2. Preencher endereço, telefone, e-mail e registro profissional
   (hoje estão como texto de exemplo).
3. Substituir os depoimentos pelos reais — estão marcados com comentário
   no HTML.
4. Subir as fotos em `img/` com os nomes listados em `img/LEIA-ME.md`.
