// Dados dos produtos completos
const produtos = [
    // === FRITOS ===
    // Risóis (2 sabores)
    { id: 1, nome: 'Risole de Carne', preco: 7.00, imagem: '/Images/risoles_carne.jpg', categoria: 'fritos' },
    { id: 2, nome: 'Risole de Presunto e Queijo', preco:  7.00, imagem: '/Images/risoles_presuntoEqueijo.jpg', categoria: 'fritos' },
    
    // Coxinhas (2 sabores)
    { id: 3, nome: 'Coxinha de Carne', preco:  7.00, imagem: '/Images/coxinha_carne.jpg', categoria: 'fritos' },
    { id: 4, nome: 'Coxinha de Frango', preco:  7.00, imagem: '/Images/coxinha_frango.jpg', categoria: 'fritos' },
    
    // Enroladinho
    /*{ id: 5, nome: 'Enroladinho de Salsicha', preco:  7.00, imagem: '/Images/enrolado_salsicha.jpg', categoria: 'fritos' },*/
    { id: 6, nome: 'Enroladinho de Presunto e Queijo', preco: 7.00, imagem: '/Images/Enrolado_PreseuntoEQueijo.jpg', categoria: 'fritos' },
    
    // Bolinho de Carne
    { id: 7, nome: 'Bolinho de carne', preco:  9.00, imagem: '/Images/bolinho_carne.jpg', categoria: 'fritos' },

    // Pedaço Pizza
    { id: 8, nome: 'Pedaço D. Pizza', preco:  9.00, imagem: '/Images/pedaco_pizza.jpg', categoria: 'fritos' },


    /*// Kibes (3 sabores)
    { id: 9, nome: 'Kibe com Ovo', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 10, nome: 'Kibe com Queijo', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 11, nome: 'Kibe Tradicional', preco:  7.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    
    // Fogazzas (4 sabores) - R$ 9,00
    { id: 12, nome: 'Fogazza Presunto e Queijo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 13, nome: 'Fogazza Carne com Queijo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 14, nome: 'Fogazza Frango com Catupiry', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },
    { id: 15, nome: 'Fogazza X-Tudo', preco: 9.00, imagem: '/api/placeholder/250/200', categoria: 'fritos' },*/



    // === ASSADOS === (todos R$ 9,00)
    // Hambúrguers
    { id: 16, nome: 'Hambúrguer Cheddar c/ tomate', preco: 9.00, imagem: '/Images/hamburguer_chedder.jpg', categoria: 'assados' },
    { id: 17, nome: 'Hambúrguer Presunto e Queijo', preco: 9.00, imagem: '/Images/hamburger_pq.jpg', categoria: 'assados' },

    //Tortas
    { id: 18, nome: 'Frango Com Salsicha', preco: 9.00, imagem: '/Images/frangocsalsicha.jpg', categoria: 'assados' },
    { id: 19, nome: 'Torta De Carne', preco: 9.00, imagem: '/Images/torta_de_carne.png', categoria: 'assados' },

    //cachorro_quente
    { id: 20, nome: 'Cachorro Quente', preco: 9.00, imagem: '/Images/Cachorro_quente.jpg', categoria: 'assados' },

    //esfihas abertas
    { id: 21, nome: 'Esfiha Aberta', preco: 6.00, imagem: '/Images/esfiha_aberta.png', categoria: 'assados' },

    //Empadas
    { id: 22, nome: 'Empadas', preco: 11.00, imagem: '/Images/empadas.png', categoria: 'assados' },

    // Empadões
    { id: 23, nome: 'Empadão De Palmito', preco: 9.00, imagem: '/Images/empadao_palmito.jpg', categoria: 'assados' },
    
    // Pão de Batata
    { id: 24, nome: 'Pão De Batata', preco: 9.00, imagem: '/Images/batata_pq.jpg', categoria: 'assados' },
    

    // === CAFÉ ===
    { id: 25, nome: 'Café', preco: 3.00, imagem: '/Images/cafe.jpg', categoria: 'cafe' },
    { id: 26, nome: 'Pão de Queijo', preco: 2.50, imagem: '/Images/cafe_paoQueijo.jpg', categoria: 'cafe' },
    { id: 27, nome: 'Cappuccino', preco: 12.00, imagem: '/Images/Cappuccino.jpg', categoria: 'cafe' },


    // === DOCES ===
    { id: 28,  nome: 'Torta Alemã - Chocolate ', preco: 10.00, imagem: '/Images/torta_alema.jpg', categoria: 'doces' },
    { id: 29,  nome: 'Torta Alemã - Morango ', preco: 10.00, imagem: '/Images/torta_alema2.jpg', categoria: 'doces' },
    { id: 30,  nome: 'Bolo Milho ', preco: 10.00, imagem: '/Images/Bolo_Milho.jpg', categoria: 'doces' },
    { id: 31,  nome: 'Rosca Doce ', preco: 2.00, imagem: '/Images/rosca.jpg', categoria: 'doces' },


    // === BEBIDAS ===
    { id: 32, nome: 'Coca Cola 350ml', preco: 5.00, imagem: '/Images/coca350ml.jpg', categoria: 'bebidas' },
    { id: 33, nome: 'Água Mineral', preco: 4.00, imagem: '/Images/agua.jpg', categoria: 'bebidas' },
    { id: 34, nome: 'Suco Natural', preco: 8.00, imagem: '/Images/suco_laranja.jpg', categoria: 'bebidas' },
    { id: 35, nome: 'Cappuccino', preco: 12.00, imagem: '/Images/Cappuccino.jpg', categoria: 'bebidas' },
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

    const numeroWhatsApp = "5544988318390"; // <-- substitua pelo número do seu WhatsApp com DDI e DDD
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