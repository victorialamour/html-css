const FRETE_GRATIS = 399;
const PARCELAS = 6;
const DESCONTO_PIX = 0.05;

/* ---------- Vitrines de produtos ---------- */
function cartaoProduto(p) {
    const antigo = p.precoAntigo ? `<s>${formatarPreco(p.precoAntigo)}</s>` : '';
    const cores = p.cores.map(c => `<i style="background:${c}"></i>`).join('');
    const tag = p.tag ? `<span class="produto__tag">${p.tag}</span>` : '';
    return `
        <article class="produto">
            <a href="produto.html?id=${p.id}" class="produto__foto" style="--bg:${p.bg}">
                ${tag}
                <button class="produto__rapido" data-comprar="${p.id}" type="button">Compra rápida</button>
            </a>
            <div class="produto__cores">${cores}</div>
            <h3 class="produto__nome"><a href="produto.html?id=${p.id}">${p.nome}</a></h3>
            <p class="produto__preco">${antigo}<strong>${formatarPreco(p.preco)}</strong></p>
            <p class="produto__parcela">${PARCELAS}x de ${formatarPreco(p.preco / PARCELAS)} sem juros</p>
        </article>`;
}

document.querySelectorAll('[data-vitrine]').forEach(function (el) {
    const grupo = el.dataset.vitrine;
    const lista = grupo === 'todos' ? PRODUTOS : PRODUTOS.filter(p => p.grupo === grupo);
    el.innerHTML = lista.map(cartaoProduto).join('');
});

/* ---------- Carrossel do banner ---------- */
const slides = document.querySelectorAll('.hero__slide');
const pontos = document.querySelector('.hero__pontos');
if (slides.length && pontos) {
    let atual = 0;
    slides.forEach(function (_, i) {
        const b = document.createElement('button');
        b.setAttribute('aria-label', 'Banner ' + (i + 1));
        b.addEventListener('click', function () { mostrar(i); });
        pontos.appendChild(b);
    });
    function mostrar(i) {
        slides[atual].classList.remove('ativo');
        pontos.children[atual].classList.remove('ativo');
        atual = i;
        slides[atual].classList.add('ativo');
        pontos.children[atual].classList.add('ativo');
    }
    mostrar(0);
    setInterval(function () { mostrar((atual + 1) % slides.length); }, 5000);
}

/* ---------- Gavetas (menu mobile e carrinho) ---------- */
function abrirGaveta(id) {
    document.getElementById(id).classList.add('aberta');
    document.body.classList.add('com-gaveta');
}
function fecharGavetas() {
    document.querySelectorAll('.gaveta').forEach(g => g.classList.remove('aberta'));
    document.body.classList.remove('com-gaveta');
}
document.querySelector('.menu-abrir').addEventListener('click', () => abrirGaveta('menu-mobile'));
document.querySelector('.carrinho-abrir').addEventListener('click', () => abrirGaveta('carrinho'));
document.querySelectorAll('.gaveta-fechar, .sombra').forEach(el => el.addEventListener('click', fecharGavetas));
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharGavetas(); });

/* ---------- Carrinho ---------- */
let carrinho = [];
try { carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; } catch (e) { carrinho = []; }

function salvarCarrinho() {
    try { localStorage.setItem('carrinho', JSON.stringify(carrinho)); } catch (e) { /* sem armazenamento */ }
}

function adicionarAoCarrinho(id, tamanho) {
    const item = carrinho.find(i => i.id === id && i.tamanho === tamanho);
    if (item) item.qtd++;
    else carrinho.push({ id: id, tamanho: tamanho, qtd: 1 });
    salvarCarrinho();
    renderizarCarrinho();
    abrirGaveta('carrinho');
}

function renderizarCarrinho() {
    const lista = document.querySelector('.carrinho__itens');
    let total = 0;
    let qtd = 0;
    lista.innerHTML = carrinho.map(function (item, i) {
        const p = PRODUTOS.find(x => x.id === item.id);
        total += p.preco * item.qtd;
        qtd += item.qtd;
        return `
            <li class="carrinho__item">
                <span class="carrinho__foto" style="--bg:${p.bg}"></span>
                <div>
                    <p>${p.nome}</p>
                    <small>Tam. ${item.tamanho} · Qtd. ${item.qtd}</small>
                    <strong>${formatarPreco(p.preco * item.qtd)}</strong>
                </div>
                <button class="link-sublinhado" data-remover="${i}" type="button">Remover</button>
            </li>`;
    }).join('') || '<li class="carrinho__vazio">Sua sacola está vazia.</li>';

    document.querySelector('.carrinho-contador').textContent = qtd;
    document.querySelector('.carrinho__total strong').textContent = formatarPreco(total);

    const falta = Math.max(0, FRETE_GRATIS - total);
    document.querySelector('.carrinho__frete-texto').innerHTML = falta > 0
        ? `Faltam <strong>${formatarPreco(falta)}</strong> para o frete grátis`
        : '<strong>Parabéns!</strong> Você ganhou frete grátis';
    document.querySelector('.barra-progresso span').style.width = Math.min(100, total / FRETE_GRATIS * 100) + '%';
}

document.addEventListener('click', function (e) {
    const comprar = e.target.closest('[data-comprar]');
    if (comprar) {
        e.preventDefault();
        adicionarAoCarrinho(Number(comprar.dataset.comprar), 'M');
    }
    const remover = e.target.closest('[data-remover]');
    if (remover) {
        carrinho.splice(Number(remover.dataset.remover), 1);
        salvarCarrinho();
        renderizarCarrinho();
    }
});

renderizarCarrinho();

/* ---------- Newsletter ---------- */
const formNews = document.querySelector('.newsletter__form');
if (formNews) {
    formNews.addEventListener('submit', function (e) {
        e.preventDefault();
        formNews.hidden = true;
        document.querySelector('.newsletter__ok').hidden = false;
    });
}

/* ---------- Página de produto ---------- */
const paginaProduto = document.querySelector('[data-pagina-produto]');
if (paginaProduto) {
    const id = Number(new URLSearchParams(location.search).get('id')) || 1;
    const p = PRODUTOS.find(x => x.id === id) || PRODUTOS[0];
    let tamanho = null;

    document.title = p.nome + ' | MARCA';
    paginaProduto.querySelector('.pdp__nome').textContent = p.nome;
    paginaProduto.querySelector('.pdp__trilha-nome').textContent = p.nome;
    paginaProduto.querySelector('.pdp__preco').innerHTML =
        (p.precoAntigo ? `<s>${formatarPreco(p.precoAntigo)}</s>` : '') + `<strong>${formatarPreco(p.preco)}</strong>`;
    paginaProduto.querySelector('.pdp__parcela').textContent =
        `${PARCELAS}x de ${formatarPreco(p.preco / PARCELAS)} sem juros ou ${formatarPreco(p.preco * (1 - DESCONTO_PIX))} no PIX`;
    paginaProduto.querySelectorAll('.pdp__fotos span').forEach(f => f.style.setProperty('--bg', p.bg));
    paginaProduto.querySelector('.pdp__cores').innerHTML =
        p.cores.map((c, i) => `<button type="button" class="${i === 0 ? 'ativo' : ''}" style="background:${c}" aria-label="Cor ${i + 1}"></button>`).join('');

    paginaProduto.addEventListener('click', function (e) {
        const cor = e.target.closest('.pdp__cores button');
        const tam = e.target.closest('.pdp__tamanhos button');
        if (cor) {
            paginaProduto.querySelectorAll('.pdp__cores button').forEach(b => b.classList.toggle('ativo', b === cor));
        }
        if (tam && !tam.disabled) {
            tamanho = tam.textContent;
            paginaProduto.querySelectorAll('.pdp__tamanhos button').forEach(b => b.classList.toggle('ativo', b === tam));
            paginaProduto.querySelector('.pdp__aviso').hidden = true;
        }
    });

    paginaProduto.querySelector('.pdp__comprar').addEventListener('click', function () {
        if (!tamanho) {
            paginaProduto.querySelector('.pdp__aviso').hidden = false;
            return;
        }
        adicionarAoCarrinho(p.id, tamanho);
    });

    paginaProduto.querySelector('.pdp__cep').addEventListener('submit', function (e) {
        e.preventDefault();
        const frete = p.preco >= FRETE_GRATIS ? 'Grátis' : formatarPreco(24.9);
        paginaProduto.querySelector('.pdp__cep-resultado').innerHTML =
            `<span>PAC · 5 a 8 dias úteis</span><strong>${frete}</strong><span>SEDEX · 2 a 4 dias úteis</span><strong>${formatarPreco(39.9)}</strong>`;
    });
}
