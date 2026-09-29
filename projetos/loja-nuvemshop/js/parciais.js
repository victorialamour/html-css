// Cabeçalho e rodapé compartilhados entre as páginas do protótipo.
// Na Nuvemshop, isso equivale aos snippets de header e footer do tema.
const PARCIAIS = {
    topo: `
    <!-- BARRA DE AVISOS (Nuvemshop: Personalizar > Barra de anúncios) -->
    <div class="barra-avisos">
        <div class="barra-avisos__trilho">
            <span>FRETE GRÁTIS nas compras acima de R$ 399</span>
            <span>Até 6x sem juros no cartão</span>
            <span>5% OFF no PIX</span>
            <span>Primeira troca grátis</span>
        </div>
    </div>

    <!-- CABEÇALHO -->
    <header class="cabecalho">
        <div class="cabecalho__linha">
            <button class="icone-btn menu-abrir" aria-label="Abrir menu">
                <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>

            <form class="busca" role="search">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
                <input type="search" placeholder="O que você procura?" aria-label="Buscar">
            </form>

            <a href="index.html" class="logo">MARCA</a>

            <div class="cabecalho__icones">
                <a href="#" class="icone-btn" aria-label="Minha conta">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>
                </a>
                <a href="#" class="icone-btn" aria-label="Favoritos">
                    <svg viewBox="0 0 24 24"><path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/></svg>
                </a>
                <button class="icone-btn carrinho-abrir" aria-label="Carrinho">
                    <svg viewBox="0 0 24 24"><path d="M5 7h14l-1 14H6L5 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
                    <span class="carrinho-contador">0</span>
                </button>
            </div>
        </div>

        <nav class="menu" aria-label="Menu principal">
            <ul>
                <li><a href="#" class="destaque">Novidades</a></li>
                <li class="tem-sub">
                    <a href="categoria.html">Roupas</a>
                    <div class="submenu">
                        <div>
                            <strong>Parte de cima</strong>
                            <a href="categoria.html">Blusas</a>
                            <a href="categoria.html">Bodies</a>
                            <a href="categoria.html">Camisas</a>
                            <a href="categoria.html">Blazers e jaquetas</a>
                        </div>
                        <div>
                            <strong>Parte de baixo</strong>
                            <a href="categoria.html">Calças</a>
                            <a href="categoria.html">Saias</a>
                            <a href="categoria.html">Shorts</a>
                        </div>
                        <div>
                            <strong>Peça única</strong>
                            <a href="categoria.html">Vestidos</a>
                            <a href="categoria.html">Conjuntos</a>
                            <a href="categoria.html">Macacões</a>
                        </div>
                    </div>
                </li>
                <li><a href="categoria.html">Vestidos</a></li>
                <li><a href="categoria.html">Acessórios</a></li>
                <li><a href="categoria.html">Coleções</a></li>
                <li><a href="categoria.html" class="sale">Sale</a></li>
            </ul>
        </nav>
    </header>

    <!-- MENU MOBILE -->
    <aside class="gaveta gaveta--esquerda" id="menu-mobile" aria-hidden="true">
        <div class="gaveta__topo">
            <span>Menu</span>
            <button class="icone-btn gaveta-fechar" aria-label="Fechar">&times;</button>
        </div>
        <ul class="menu-mobile">
            <li><a href="#">Novidades</a></li>
            <li><a href="categoria.html">Roupas</a></li>
            <li><a href="categoria.html">Vestidos</a></li>
            <li><a href="categoria.html">Acessórios</a></li>
            <li><a href="categoria.html">Coleções</a></li>
            <li><a href="categoria.html" class="sale">Sale</a></li>
            <li><a href="#">Minha conta</a></li>
            <li><a href="#">Como comprar</a></li>
        </ul>
    </aside>

    <!-- CARRINHO LATERAL -->
    <aside class="gaveta gaveta--direita" id="carrinho" aria-hidden="true">
        <div class="gaveta__topo">
            <span>Sua sacola</span>
            <button class="icone-btn gaveta-fechar" aria-label="Fechar">&times;</button>
        </div>
        <div class="carrinho__frete">
            <p class="carrinho__frete-texto">Faltam <strong>R$ 399,00</strong> para o frete grátis</p>
            <div class="barra-progresso"><span></span></div>
        </div>
        <ul class="carrinho__itens"></ul>
        <div class="carrinho__rodape">
            <div class="carrinho__total"><span>Subtotal</span><strong>R$ 0,00</strong></div>
            <a href="#" class="btn btn--escuro btn--cheio">Finalizar compra</a>
        </div>
    </aside>
    <div class="sombra"></div>
`,
    rodape: `
    <!-- RODAPÉ -->
    <footer class="rodape">
        <div class="rodape__colunas">
            <div>
                <a href="index.html" class="logo logo--rodape">MARCA</a>
                <p>Moda feminina com curadoria atemporal. Enviamos para todo o Brasil.</p>
                <div class="redes">
                    <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>
                    <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M14 3v11a4 4 0 1 1-4-4M14 3c0 3 2 5 5 5"/></svg></a>
                    <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M4 20l1.5-4A8 8 0 1 1 8 18.5L4 20z"/></svg></a>
                </div>
            </div>
            <div>
                <h4>Institucional</h4>
                <a href="#">Sobre nós</a>
                <a href="#">Como comprar</a>
                <a href="#">Compra segura</a>
                <a href="#">Trocas e devoluções</a>
            </div>
            <div>
                <h4>Ajuda</h4>
                <a href="#">Minha conta</a>
                <a href="#">Rastrear pedido</a>
                <a href="#">Guia de medidas</a>
                <a href="#">Fale conosco</a>
            </div>
            <div>
                <h4>Atendimento</h4>
                <p>Seg a sex, 10h às 18h<br>Sáb, 10h às 13h</p>
                <p>WhatsApp: (00) 00000-0000<br>atendimento@marca.com.br</p>
            </div>
        </div>
        <div class="rodape__base">
            <div class="pagamentos">
                <span>Visa</span><span>Master</span><span>Elo</span><span>Amex</span><span>PIX</span><span>Boleto</span>
            </div>
            <p>© 2026 MARCA · CNPJ 00.000.000/0001-00 · Loja criada com Nuvemshop</p>
        </div>
    </footer>

    <!-- BOTÃO WHATSAPP -->
    <a href="#" class="whatsapp-flutuante" aria-label="Fale no WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M4 20l1.5-4A8 8 0 1 1 8 18.5L4 20z"/></svg>
    </a>
`
};

document.querySelectorAll('[data-parcial]').forEach(function (el) {
    el.outerHTML = PARCIAIS[el.dataset.parcial];
});
