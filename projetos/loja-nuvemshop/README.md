# Loja de moda feminina — protótipo para Nuvemshop

Protótipo em HTML, CSS e JavaScript de uma loja de moda feminina no estilo da
[Tyli](https://www.tyli.com.br): visual minimalista, paleta neutra (bege, areia,
off-white e preto) e tipografia serifada elegante nos títulos.

O objetivo é **aprovar o layout com a cliente** antes de montar a loja na Nuvemshop.
"MARCA" e as cores das fotos são provisórios: devem ser trocados pelo logo e
pelas fotos reais da cliente.

## Páginas

| Arquivo | O que mostra |
| --- | --- |
| `index.html` | Home: barra de avisos, menu com submenu, banner rotativo, benefícios, categorias, vitrines, banner duplo, Instagram, newsletter e rodapé |
| `categoria.html` | Listagem de produtos com filtros e ordenação |
| `produto.html?id=1` | Produto: galeria, cores, tamanhos, frete por CEP, descrição em abas e produtos relacionados |

Também funcionam o carrinho lateral (com barra de progresso até o frete grátis), o
menu mobile e o botão flutuante do WhatsApp.

## Como implementar na Nuvemshop

A Tyli já roda na Nuvemshop, então dá para chegar num resultado bem parecido.

### 1. Escolher o tema
Em **Meu Nuvemshop > Online > Layout**, os temas que mais se aproximam desse visual são:
- **Amazonas** ou **Lima**: minimalistas, com banner em tela cheia e vitrines limpas (recomendados)
- **Idea** ou **Recife**: também servem para moda

### 2. Configurar pelo painel (Personalizar tema)
| Elemento do protótipo | Onde configurar |
| --- | --- |
| Barra de avisos (frete grátis, parcelamento, PIX) | Cabeçalho > Mensagem/Barra de anúncios |
| Logo centralizado | Cabeçalho > Logo e posição do logo |
| Menu com submenu (Roupas > Parte de cima…) | Online > Menus + categorias e subcategorias em Produtos > Categorias |
| Banner rotativo | Página inicial > Carrossel de imagens (desktop 1920×900, mobile 750×1000) |
| Benefícios (4 ícones) | Página inicial > Informações de envio, pagamento e troca |
| Categorias em destaque | Página inicial > Banners de categorias |
| Novidades e Mais amados | Página inicial > Produtos em destaque / novos / em promoção |
| Banner duplo (Resort / Office chic) | Página inicial > Banners promocionais |
| Instagram | Página inicial > Instagram (conectar a conta) |
| Newsletter | Página inicial > Newsletter |
| Cores | Cores: fundo `#fbf9f6`, texto `#1c1a18`, destaque `#8b6f55`, promoção `#a3413a` |
| Tipografia | Tipografia: títulos em fonte serifada (Cormorant Garamond ou parecida), textos em Jost/Montserrat |
| Botão do WhatsApp | Configurações > Redes sociais/WhatsApp, ou o app de WhatsApp da loja de aplicativos |

### 3. Ajustes finos com CSS
Em **Personalizar tema > Edição de CSS avançado** dá para aplicar detalhes do
protótipo, como títulos de produto em maiúsculas, espaçamento entre letras e botões
retos. Os seletores do tema são outros, mas as regras de `css/style.css` servem de
referência (por exemplo, `.produto__nome` e `.btn`).

### 4. Configurar a loja
- **Pagamentos**: Nuvem Pago ou Mercado Pago, com parcelamento em até 6x sem juros e desconto no PIX
- **Frete**: Nuvem Envio ou Correios, com regra de frete grátis acima de R$ 399
- **Páginas institucionais**: Sobre nós, Como comprar, Trocas e devoluções, Guia de medidas
- **Variações**: cor e tamanho em cada produto, com fotos por cor
- **Domínio**: apontar o domínio da cliente em Configurações > Domínios

### 5. Checklist de materiais para pedir à cliente
- [ ] Logo em PNG com fundo transparente (e uma versão branca para o rodapé)
- [ ] 3 banners para o carrossel (versões desktop e mobile)
- [ ] 4 fotos de categoria (proporção 3:4)
- [ ] Fotos dos produtos em fundo neutro (3:4, pelo menos 1000×1333px)
- [ ] Tabela de medidas
- [ ] Textos de Sobre nós e da política de trocas
- [ ] CNPJ, endereço, WhatsApp, e-mail e horário de atendimento
- [ ] @ do Instagram
