"use strict";
/* Crie uma classe "EmpresaDesenvolvimento" que representa uma empresa de desenvolvimento de software. A classe deve possuir as propriedades nome, endereço
 e funcionários, onde "funcionários" é um conjunto de objetos representando os funcionários da empresa. Adicione métodos para adicionar funcionários, remover
  funcionários e exibir informações da empresa. */
Object.defineProperty(exports, "__esModule", { value: true });
var questao2_1 = require("./questao2");
var rl = require("readline-sync");
var menu = true;
var InfoEmpresa = new questao2_1.EmpresaDesenvolvimento("Xamuel Investimentos", "Rua Alameda dos Anjos");
var listaDefuncionários = [];
while (menu) {
    var questionUser = rl.questionInt("\n1 - Liste as Informações da Empresa \n2 - Adicione funcionários \n3 Remova funcionários \n4 - sair \n Insira aqui: ");
    switch (questionUser) {
        case 1:
            console.log(InfoEmpresa);
            console.log("Os funcion\u00E1rios da Empresa s\u00E3o: ".concat(listaDefuncionários));
            break;
        case 2:
            var novosFuncionarios = rl.question("Insira o(s) nome(s) dos novos funcionários: ");
            listaDefuncionários.push(novosFuncionarios);
            console.log("Funcionário adicionados com sucesso!");
            break;
        case 3:
            var removerFuncionarios = rl.question("Insira o dos Funcionarios: ");
            var index = listaDefuncionários.indexOf(removerFuncionarios);
            listaDefuncionários.splice(index, 1);
            console.log("O funcionário foi de caixa!");
            break;
        case 4:
            console.log("Saindo...");
            menu = false;
            break;
        default:
            console.log("Opcao inexistente!");
            break;
    }
}
