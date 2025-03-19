alert('Bem-vindo(a) ao jogo do amigo secreto! ')

const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const botaoAdicionar = document.querySelector('.button-add');
const botaoSortear = document.querySelector('.button-draw');
let amigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();
    if (nome) {
        amigos.push(nome);
        const novoItem = document.createElement('li');
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
        inputAmigo.value = ''; // Limpar o input
    }
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    resultado.innerHTML = ''; // Limpar resultados anteriores
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(resultadoItem);
}

botaoAdicionar.addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearAmigo);

inputAmigo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});