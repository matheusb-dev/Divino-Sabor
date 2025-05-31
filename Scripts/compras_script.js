// Dados dos produtos completos
const produtos = [
    // === FRITOS ===
    // Risóis (2 sabores)
    { id: 1, nome: 'Risole de Carne', preco: 7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 2, nome: 'Risole de Presunto e Queijo', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    
    // Pastéis (2 sabores)
    { id: 3, nome: 'Pastel de Carne', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 4, nome: 'Pastel de Presunto e Queijo', preco: 7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    
    // Coxinhas (2 sabores)
    { id: 5, nome: 'Coxinha de Carne', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 6, nome: 'Coxinha de Frango', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    
    // Enroladinho
    { id: 7, nome: 'Enroladinho de Salsicha', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 8, nome: 'Enroladinho de Presunto e Queijo', preco: 7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    
    // Kibes (3 sabores)
    { id: 9, nome: 'Kibe com Ovo', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 10, nome: 'Kibe com Queijo', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 11, nome: 'Kibe Tradicional', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },

    // Bolinho de Carne
    { id: 34, nome: 'Bolinho de carne', preco:  9.00, imagem: '/Images/teste.jpg', categoria: 'fritos' },
    
    // Fogazzas (4 sabores) - R$ 9,00
    { id: 12, nome: 'Fogazza Presunto e Queijo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 13, nome: 'Fogazza Carne com Queijo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 14, nome: 'Fogazza Frango com Catupiry', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 15, nome: 'Fogazza X-Tudo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },

    // === ASSADOS === (todos R$ 9,00)
    // Frangos
    { id: 16, nome: 'Frango com Catupiry', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    { id: 17, nome: 'Frango Cremoso', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    
    // Esfihas
    { id: 18, nome: 'Esfiha de Carne', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    { id: 19, nome: 'Esfiha de Frango', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    { id: 20, nome: 'Esfiha de Presunto e Queijo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    
    // Torta
    { id: 21, nome: 'Torta de Carne com Presunto e Queijo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    
    // Salsicha especial
    { id: 22, nome: 'Salsicha com Bacon, Presunto, Queijo e Catupiry', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    
    // Hambúrgueres
    { id: 23, nome: 'Hambúrguer com Cheddar e Tomate', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },
    { id: 24, nome: 'Hambúrguer com Presunto e Queijo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'assados' },

    // === CAFÉ ===
    { id: 25, nome: 'Café', preco: 3.00, imagem: '/api/placeholder/250/200', categoria: 'cafe' },
    { id: 26, nome: 'Pão de Queijo', preco: 2.50, imagem: '/api/placeholder/250/200', categoria: 'cafe' },
    { id: 27, nome: 'Pingado', preco: 4.50, imagem: '/api/placeholder/250/200', categoria: 'cafe' },
    { id: 28, nome: 'Cappuccino', preco: 12.00, imagem: '/api/placeholder/250/200', categoria: 'cafe' },

    // === COMBOS ===
    { id: 29,  nome: 'Brigadeiro', preco: 5.00, imagem: '/api/placeholder/250/200', categoria: 'doces' },
    { id: 30,  nome: 'Coxinha de Morango', preco: 8, imagem: '/api/placeholder/250/200', categoria: 'doces' },

    // === BEBIDAS ===
    { id: 31, nome: 'Refrigerante Lata', preco: 5.00, imagem: '/api/placeholder/250/200', categoria: 'bebidas' },
    { id: 32, nome: 'Água Mineral', preco: 3.00, imagem: '/api/placeholder/250/200', categoria: 'bebidas' },
    { id: 33, nome: 'Suco Natural', preco: 6.00, imagem: '/api/placeholder/250/200', categoria: 'bebidas' }
];
// Carrinho de compras
let carrinho = [];

// Elementos do DOM
const produtosLista = document.getElementById('produtosLista');
const carrinhoItens = document.getElementById('carrinhoItens');
const carrinhoTotal = document.getElementById('carrinhoTotal');
const cartCounter = document.getElementById('cartCounter');
const carrinhoContainer = document.getElementById('carrinhoContainer');
const cartToggle = document.getElementById('cartToggle');
const carrinhoFechar = document.getElementById('carrinhoFechar');
const btnEnviar = document.getElementById('btnEnviar');
const feedbackElement = document.getElementById('feedback');
const menuTabs = document.querySelectorAll('.menu-tab');

// Renderizar produtos
function renderizarProdutos(categoria = 'todos') {
    produtosLista.innerHTML = '';
    
    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(produto => produto.categoria === categoria);
    
    produtosFiltrados.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.className = 'produto';
        
        produtoElement.innerHTML = `
            <div class="produto-img">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="produto-info">
                <h3 class="produto-titulo">${produto.nome}</h3>
                <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
                <div class="produto-controles">
                    <div class="quantidade-controle">
                        <span class="quantidade-label">Qtd:</span>
                        <input type="number" class="quantidade" id="qtd-${produto.id}" value="1" min="1" max="99">
                    </div>
                    <button class="btn-adicionar" data-id="${produto.id}">Adicionar</button>
                </div>
            </div>
        `;
        
        produtosLista.appendChild(produtoElement);
        
        // Adicionar evento ao botão
        const btnAdicionar = produtoElement.querySelector('.btn-adicionar');
        btnAdicionar.addEventListener('click', () => {
            const quantidade = parseInt(document.getElementById(`qtd-${produto.id}`).value);
            adicionarAoCarrinho(produto, quantidade);
        });
    });
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(produto, quantidade) {
    // Verificar se o produto já está no carrinho
    const index = carrinho.findIndex(item => item.produto.id === produto.id);
    
    if (index !== -1) {
        // Se já existe, atualiza a quantidade
        carrinho[index].quantidade += quantidade;
    } else {
        // Se não existe, adiciona novo item
        carrinho.push({
            produto: produto,
            quantidade: quantidade
        });
    }
    
    // Salvar no localStorage
    salvarCarrinho();
    
    // Atualizar a exibição do carrinho
    renderizarCarrinho();
    atualizarContadorCarrinho();
    
    // Mostrar feedback
    mostrarFeedback('Produto adicionado ao carrinho!');
    
    // Mostrar o carrinho
    carrinhoContainer.classList.add('ativo');
}

// Alterar quantidade no carrinho
function alterarQuantidade(id, acao) {
    const index = carrinho.findIndex(item => item.produto.id === id);
    
    if (index !== -1) {
        if (acao === 'aumentar') {
            carrinho[index].quantidade += 1;
        } else if (acao === 'diminuir') {
            carrinho[index].quantidade -= 1;
            
            // Remover item se quantidade for zero ou menor
            if (carrinho[index].quantidade <= 0) {
                carrinho.splice(index, 1);
            }
        }
        
        // Salvar no localStorage
        salvarCarrinho();
        
        // Atualizar a exibição do carrinho
        renderizarCarrinho();
        atualizarContadorCarrinho();
    }
}

// Renderizar carrinho
function renderizarCarrinho() {
    if (carrinho.length === 0) {
        carrinhoItens.innerHTML = '<div class="carrinho-vazio">Seu carrinho está vazio</div>';
        carrinhoTotal.textContent = 'R$ 0,00';
        return;
    }
    
    let total = 0;
    carrinhoItens.innerHTML = '';
    
    carrinho.forEach(item => {
        const subtotal = item.produto.preco * item.quantidade;
        total += subtotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'carrinho-item';
        
        itemElement.innerHTML = `
            <div class="carrinho-item-info">
                <div class="carrinho-item-nome">${item.produto.nome}</div>
                <div class="carrinho-item-detalhe">
                    R$ ${item.produto.preco.toFixed(2)}
                </div>
            </div>
            <div class="carrinho-item-controles">
                <button class="carrinho-qtd-btn diminuir" data-id="${item.produto.id}">-</button>
                <span class="carrinho-item-qtd">${item.quantidade}</span>
                <button class="carrinho-qtd-btn aumentar" data-id="${item.produto.id}">+</button>
            </div>
            <div class="carrinho-item-subtotal">
                R$ ${subtotal.toFixed(2)}
            </div>
        `;
        
        carrinhoItens.appendChild(itemElement);
        
        // Adicionar eventos aos botões de quantidade
        const btnDiminuir = itemElement.querySelector('.diminuir');
        const btnAumentar = itemElement.querySelector('.aumentar');
        
        btnDiminuir.addEventListener('click', () => {
            alterarQuantidade(item.produto.id, 'diminuir');
        });
        
        btnAumentar.addEventListener('click', () => {
            alterarQuantidade(item.produto.id, 'aumentar');
        });
    });
    
    carrinhoTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Limpar carrinho
function limparCarrinho() {
    carrinho = [];
    localStorage.removeItem('carrinho');
    renderizarCarrinho();
    atualizarContadorCarrinho();
    carrinhoContainer.classList.remove('ativo');
}

// Atualizar contador do carrinho
function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    cartCounter.textContent = totalItens;
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Carregar carrinho do localStorage
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        renderizarCarrinho();
        atualizarContadorCarrinho();
    }
}

// Mostrar feedback
function mostrarFeedback(mensagem) {
    feedbackElement.textContent = mensagem;
    feedbackElement.classList.add('mostrar');
    
    setTimeout(() => {
        feedbackElement.classList.remove('mostrar');
    }, 2000);
}

// Eventos
cartToggle.addEventListener('click', () => {
    carrinhoContainer.classList.add('ativo');
});

carrinhoFechar.addEventListener('click', () => {
    carrinhoContainer.classList.remove('ativo');
});

// Alternar entre categorias
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        menuTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const categoria = tab.getAttribute('data-categoria');
        renderizarProdutos(categoria);
    });
});

// Enviar pedido
btnEnviar.addEventListener('click', () => {
    if (carrinho.length === 0) {
        mostrarFeedback('Adicione produtos ao carrinho primeiro!');
        return;
    }
    
    // Preparar mensagem para WhatsApp
    let mensagem = "*📦 Pedido de Salgados*%0A%0A";
    carrinho.forEach(item => {
        const nome = item.produto.nome;
        const qtd = item.quantidade;
        const subtotal = (item.produto.preco * item.quantidade).toFixed(2).replace('.', ',');
        mensagem += `• ${nome} - ${qtd} un. - R$ ${subtotal}%0A`;
    });

    const total = carrinhoTotal.textContent;
    mensagem += `%0A*Total: ${total}*%0A%0A`;
    mensagem += "🛵 Quero fazer esse pedido!";

    const numeroWhatsApp = "5544999074397"; // <-- substitua pelo número do seu WhatsApp com DDI e DDD
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    // Abrir WhatsApp
    window.open(url, '_blank');
    
    // Limpar carrinho após enviar
    setTimeout(() => {
        limparCarrinho();
        mostrarFeedback('Pedido enviado! Carrinho limpo com sucesso.');
    }, 1000); // Aguarda 1 segundo para garantir que o WhatsApp abriu
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    carregarCarrinho();
});