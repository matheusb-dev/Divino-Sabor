const produtos = [
  {
    titulo: "Enrolado de Salsicha",
    descricao: "Enrolado de Salsicha com Massa Caseira, feito na hora",
    imagem: "EnroladoSalsicha.jpg",
    precoAntigo: "R$ 10,00",
    precoNovo: "R$ 07,00",
  },
  {
    titulo: "Bolinho de Carne",
    descricao: "Bolinho de Carne recheado com queijo, feito na hora",
    imagem: "BolinhoCarne.jpg",
    precoAntigo: "R$ 12,00",
    precoNovo: "R$ 09,00",
  },
  {
    titulo: "Enrolado de Presunto e Queijo",
    descricao: "Enrolado de Presunto e Queijo com Massa Caseira, feito na hora",
    imagem: "EnroladoPresunto.jpg",
    precoAntigo: "R$ 10,00",
    precoNovo: "R$ 07,00",
  },
  {
    titulo: "Quadrado de Queijo",
    descricao: "Quadrado de Queijo com Massa Caseira, feito na hora",
    imagem: "QuadradoQueijo.jpg",
    precoAntigo: "R$ 07,00",
    precoNovo: "R$ 04,50",
  },
  {
    titulo: "Coxinha de Carne",
    descricao: "Coxinha de Carne com Massa Caseira, feito na hora",
    imagem: "CoxinhaCarne.jpg",
    precoAntigo: "R$ 10,00",
    precoNovo: "R$ 07,00",
  },
  {
    titulo: "Coxinha de Frango",
    descricao: "Coxinha de Frango com Massa Caseira, feito na hora",
    imagem: "CoxinhaFrango.jpg",
    precoAntigo: "R$ 10,00",
    precoNovo: "R$ 07,00",
  },
  {
    titulo: "Risoles de Carne",
    descricao: "Risoles de Carne com Massa Caseira, feito na hora",
    imagem: "RisoleCarne.jpg",
    precoAntigo: "R$ 10,00",
    precoNovo: "R$ 07,00",
  },
  {
    titulo: "Risoles de Presunto e Queijo",
    descricao: "Risoles de Presunto e Queijo com Massa Caseira, feito na hora",
    imagem: "RisolePresunto.jpg",
    precoAntigo: "R$ 10,00",
    precoNovo: "R$ 07,00",
  },
  {
    titulo: "Cafe e Pao de Queijo",
    descricao: "Cafe e Pao de Queijo com Massa Caseira, feito na hora",
    imagem: "CafePaodequeijo.jpg",
    precoAntigo: "R$ 03,00",
    precoNovo: "R$ 02,50",
  },
];

let indiceAtual = 0;

function renderTodosProdutos() {
  const carrosselInner = document.getElementById("carrossel-inner");
  carrosselInner.innerHTML = produtos
    .map(
      (produto) => `
    <div class="produto">
      <img src="${produto.imagem}" alt="${produto.titulo}" />
    </div>
  `
    )
    .join("");
  updateSlidePosition();
}

function updateSlidePosition() {
  const carrosselInner = document.getElementById("carrossel-inner");
  carrosselInner.style.transform = `translateX(-${indiceAtual * 600}px)`;
}

document.getElementById("btn-anterior").addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + produtos.length) % produtos.length;
  updateSlidePosition();
});

document.getElementById("btn-proximo").addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % produtos.length;
  updateSlidePosition();
});

document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.getElementById("carrossel");
  carrossel.innerHTML = `<div class="carrossel-inner" id="carrossel-inner"></div>`;
  renderTodosProdutos();
});

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector("nav.mobile-nav");

mobileMenuButton.addEventListener("click", () => {
  const expanded =
    mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
  mobileMenuButton.setAttribute("aria-expanded", !expanded);
  mobileNav.classList.toggle("show");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  });
});

function abrirModal(titulo, descricao, imagem, precoAntigo, precoNovo) {
  document.getElementById("modal-titulo").textContent = titulo;
  document.getElementById("modal-descricao").textContent = descricao;
  document.getElementById("modal-img").src = imagem;
  document.getElementById("modal-preco-antigo").textContent = precoAntigo;
  document.getElementById("modal-preco-novo").textContent = precoNovo;
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
