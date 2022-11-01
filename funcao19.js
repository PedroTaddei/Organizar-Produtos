var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0
var idsSup = []
var nomesSup = []
var precosSup = []
var avaliacoesSup = []
var indexSup = 0

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

function ArrumarPorId() {
     for (var contador = 0; contador < ids.length; contador++) {
          maiorId = ids[contador]
          for (var contador2 = 0; contador2 < ids.length; contador2++) {
               if (ids[contador] > maiorId) {
                    maiorId = ids[contador2]
               }
          }
          for (var contador3 = 0; contador3 < ids.length; contador3++) {
               if (maiorId == ids[contador3]) {
                    idsSup[indexSup] = ids[contador3]
                    nomesSup[indexSup] = nomes[contador3]
                    precosSup[indexSup] = precos[contador3]
                    avaliacoesSup[indexSup] = avaliacoes[contador3]
               }
          }
     }
}