let nomes = [];

function receiveName() {
    let campo = document.getElementById("amigo");
    let nome = campo.value.trim();

    if (nome == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    nomes.push(nome);
    atualizarLista(); 
    limparCampo();
}

function limparCampo() {
    let campo = document.getElementById("amigo");
    campo.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    let i = 0;

    
    while (i < nomes.length) {
        let item = document.createElement("li"); 
        item.textContent = nomes[i]; 
        lista.appendChild(item); 
        i = i +1; 
    }
}

function sortearAmigo() {
    
    if (nomes.length == 0) {
        alert("Adicione um nome para sortear.");
        return;
    }

    let indiceAleatorio = parseInt((Math.random() * nomes.length));
    let amigoSorteado = nomes[indiceAleatorio];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}




