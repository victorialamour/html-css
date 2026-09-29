// Produtos de exemplo. Na Nuvemshop eles vêm do painel (Produtos > Adicionar),
// então este arquivo existe só para o protótipo funcionar.
const PRODUTOS = [
    { id: 1, nome: 'Vestido Midi Linho Aurora', preco: 389.90, precoAntigo: null, cores: ['#e9dfd3', '#6b5b4b'], tag: 'Novo', bg: '#d8c9b8', grupo: 'novidades' },
    { id: 2, nome: 'Body Canelado Alça Fina', preco: 139.90, precoAntigo: null, cores: ['#111111', '#f4efe8', '#b08d74'], tag: 'Novo', bg: '#cdbfae', grupo: 'novidades' },
    { id: 3, nome: 'Conjunto Alfaiataria Lis', preco: 459.90, precoAntigo: 529.90, cores: ['#c9b9a5'], tag: '-13%', bg: '#bfb09d', grupo: 'novidades' },
    { id: 4, nome: 'Camisa Oversized Tricoline', preco: 229.90, precoAntigo: null, cores: ['#ffffff', '#9fb3c8'], tag: 'Novo', bg: '#e2d7ca', grupo: 'novidades' },
    { id: 5, nome: 'Saia Longa Cetim Zoe', preco: 269.90, precoAntigo: null, cores: ['#8a6f55', '#1f1f1f'], tag: null, bg: '#b6a896', grupo: 'mais-vendidos' },
    { id: 6, nome: 'Blazer Acinturado Nina', preco: 499.90, precoAntigo: 599.90, cores: ['#2b2b2b', '#d9cbb8'], tag: '-17%', bg: '#a99c8b', grupo: 'mais-vendidos' },
    { id: 7, nome: 'Vestido Longo Zeni', preco: 419.90, precoAntigo: null, cores: ['#efe6da'], tag: null, bg: '#d3c4b2', grupo: 'mais-vendidos' },
    { id: 8, nome: 'Cinto Couro Fivela Dourada', preco: 119.90, precoAntigo: null, cores: ['#5a3e2b', '#111111'], tag: null, bg: '#c6b6a3', grupo: 'mais-vendidos' }
];

function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
