//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayAmigos = []

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
let amigo = document.querySelector("input").value;

  if (amigo === "") {
      exibirTextoNaTela("h2", `Por favor, insira um nome`);
  } 
  else if (arrayAmigos.includes(amigo)) { //valida se o nome que ta na var amigo existe na lista
      exibirTextoNaTela("h2", `Amigo secreto já adicionado: ${amigo}`);
  }
  else {
      arrayAmigos.push(amigo);
      document.querySelector("input").value = "";
      listaDosAmigos();
      exibirTextoNaTela("h2", `Amigo secreto adicionado: ${amigo}`);
  }
} 

function listaDosAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerText = ""; // Limpa a lista antes de exibir os amigos

  for (let i = 0; i < arrayAmigos.length; i++) {
  let amigo = arrayAmigos[i]; // Pega o nome do amigo na posição i do array

  let li = document.createElement("li"); // Cria um novo item de lista no HTML
  li.innerText = amigo; // Define o texto do item como o nome do amigo
  lista.appendChild(li); // Adiciona o item à lista no HTML
  }
}

function sortearAmigo() {
  let resultadoDOSorteio = document.getElementById("resultado");

  if (arrayAmigos.length < 2) {
    exibirTextoNaTela("h2", `É necessário pelo menos 2 amigos para realizar o sorteio`);
  }else {
    let amigoSorteado = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
    resultadoDOSorteio.innerHTML = `Amigo secreto sorteado: ${amigoSorteado}`;
    document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar após o sorteio
  }
}

function reiniciarJogo() {
  window.location.reload();
}
