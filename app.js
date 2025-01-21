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
        item.textContent = nomes[i]; // Define o texto como o nome do amigo
        lista.appendChild(item); 
        i++; 
    }
}

function sortearAmigo() {
    
    if (nomes.length === 0) {
        alert("Adicione um nome para sortear.");
        return;
    }

    
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[indiceAleatorio];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}




