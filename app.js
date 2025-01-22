//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

//Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (nome === ''){
        alert ('Por favor insira um nome válido');
        return; // Interrompe a execução caso o nome seja válido
    }
    amigos.push(nome);
    atualizarLista();
    input.value = '';
}

//Função para atualizar a lista de amigos
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
    
}

//Função para sortear um único amigo secreto

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length < 2) {
        alert('Você precisa adicionar pelo menos dois amigos para realizar o sorteio');
        return;
    }
// Para sortear um amigo
    const indiceSorteado = Math.floor(Math.random()* amigos.length);
    const amigoSorteado = amigos [indiceSorteado];

// Para exibir o resultado
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado} `;
}