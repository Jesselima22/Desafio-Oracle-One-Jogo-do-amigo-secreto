//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo(params) {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== '') {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    }
    
}
// Função para atualizar a lista de amigos 
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo; 
        listaAmigos.appendChild(li);
    });
    
}
// Função para sortear o amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length <2){
        alert('Você precisa adicionar pelo menos dois amigos para realizar o sorteio;');
        return;
    }
    
}
let amigosRestantes = [...amigos];
let sorteio = {};
amigos.forEach(amigo =>{
    let indice = Math.floor(Math.random()* amigosRestantes.length);
    while (amigo === amigosRestantes[indice]) {
        indice = Math.floor(Math.random()* amigosRestantes.length);
    }
    sorteio[amigo] = amigosRestantes[indice];
    amigosRestantes.splice(indice, 1);
});
for (const[amigo,sorteado]of Object.entries(sorteio)){
    const li = document.createElement('li');
    li.textContent = `${amigo} tirou ${sorteado}`;
    resultado.appendChild(li);
}
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);


