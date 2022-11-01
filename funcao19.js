var nomes = []
var senhas = []
var index = 0
var arraySupNomes = []
var arraySupSenhas = []
var indexSup = 0
var continuar = true

function CadastrarUsuario() {
     nomes[index] = prompt("Insira o nome para cadastro")
     senhas[index] = prompt("Crie sua senha para cadastro")
     index++
}

function EscolherOpcao() {
     var opcao = parseInt(prompt("Insira a função de cadastro desejada. 1 = cadastro; 2 = login; 3 = excluir cadastro; 4 = encerrar"))
     return opcao
}

function FazerLogin(nome, senha) {
     for (var contador = 0; contador < nomes.length; contador++) {
          if (nome == nome[contador]) {
               if (senha == senhas[contador]) {
                    return true
               }
          }
     }
     return false

}

function ExcluirCadastro(nome) {
     for (let contador = 0; contador < nomes.length; contador++) {
          if (nome == nomes[contador]) {
               nomes[contador] = 0
               senhas[contador] = 0
          }
     }
     for (var contador = 0; contador < nomes.length; contador++) {
          if (nomes[contador] != 0) {
               arraySupNomes[indexSup] = nomes[contador]
               arraySupSenhas[indexSup] = senhas[contador]
               indexSup++
          }
     }
     nomes = arraySupNomes
     senhas = arraySupSenhas
}

while (continuar) {
     var opcao = EscolherOpcao()

     if (opcao == 1) {
          CadastrarUsuario()
          console.log("Usuario Cadastrado com sucesso!")
     } else if (opcao == 2) {
          var nome = prompt("Insira um nome para login")
          var senha = prompt("Insira uma senha para login")
          var login = FazerLogin(nome, senha)
          if (login == true) {
               console.log("Login feito com sucesso!")
          } else {
               console.log("Nome ou senha incorretos!")
          }
     } else if (opcao == 3) {

          var nome = prompt("Insira um nome de cadastro que deseja excluir")
          ExcluirCadastro(nome)
          console.log("Cadastro excluido com sucesso")

     } else {

          console.log("O programa será encerrado")
          continuar = false
     }

     if (continuar = true) {
          var opcaoContinuar = prompt("Deseja continuar com as operações? s ou n?")
          if (opcaoContinuar == "s") {
               continuar = true
          }  else {
               continuar = false
          }
     }

}