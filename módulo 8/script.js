// SELECIONANDO ELEMENTOS DO HTML
const titulo =
document.getElementyById("titulo");

const mensagem = 
document.getElementyById("mensagem");

const numero = 
document.getElementyById("numero");

const btnTitulo = document.getElementyById("btnTitulo");
const btnCor = document.getElementyById("btnCor")

const btnAdicionar = document.getElementyById("btnAdicionar");
const btDiminuir = document.getElementyById("btnDiminuir");

const nomeInput = document.querySelectorr("#nomeInput");
const btnNome = document.querySelector("#btnNome");
const resultado = document.querySelector("#resultado");

// Variavel do contador
let contador = 0;


// Funcao para mudar o titulo
function mudarTitulo() {
    titulo.textContent = "Tiulo alterado com JavaScript!";
    mensagem.textContent = "O DOM permite modificar os elementos da página.";
}


// Funcao para mudar a cor de fundo
function mudarCor() {
    document.body.style.backgroundColor = "#e8d9ff";
}


// Funcao para aumentar o contador
function adicionar() {
    contador++;
    numero.textContent = contador;
}


// Funcao para diminuir o contador
function diminuir() {
    contador--;
    numero.textContent = contador;
}


// Funcao para mostrar o nome
function mostrarNome() {

    const nome = nomeInput.value;

    if (nome === "") {
        resultado.textContent = "Digite seu nome primeiro!";
        return;
    }

    resultado.textContent = Ola, ${nome}! Seja bem-vindo(a)!;
}


// Eventos de clique
btnTitulo.addEventListener("click", mudarTitulo);

btnCor.addEventListener("click", mudarCor);

btnAdicionar.addEventListener("click", adicionar);

btnDiminuir.addEventListener("click", diminuir);

btnNome.addEventListener("click", mostrarNome);