function mudarTexto() {
    document.getElementById("texto").textContent =
        "Você clicou no botão! O JavaScript está funcionando.";
}

function mudarCor() {
    document.body.style.backgroundColor = "#d9c2ff";
}

function voltarOriginal() {
    document.getElementById("texto").textContent =
        "Clique nos botões para testar as interações!";

    document.body.style.backgroundColor = "#f5f0fa";
}