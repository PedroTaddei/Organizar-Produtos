var ids = []
var nomes = []
var precos []
var avaliacoes = []
var index = 0

function CadastrarProdutos() {
     ids[index] = parseInt(prompt("Insira o ID do produto"))
     nome[index] = prompt("Insira o nome do produto")
     precos[index] = prompt("Insira o preço do produto")
     avaliacoes[index] = prompt("Insira a avaliação do produto")
     index++
}

function BuscarPorId() {
     for (var contador = 0; contador < ids.length; contador++) {
          if (id == ids[contador]) {
               console.log("O produto de ID ", id, " é o ", nomes[contador], " custa ", precos[contador], " e tem avaliação ", avaliacoes[contador])
          }
     }
}

function BuscarPorNome(nome) {
     for (var contador = 0; contador < nome.length; contador++) {
          if (nome == nomes[contador]) {
               console.log("O produto de nome ", nome, " tem o id", ids[contador])
          }
     }
}