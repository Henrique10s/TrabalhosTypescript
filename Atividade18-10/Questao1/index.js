"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var rl = require("readline-sync");
var loja_1 = require("./loja");
var menu = true;
var infoLoja = new loja_1.Loja("Henrique Du Grau", "Rua Casa do Cralho 157");
var listaDeProdutos = [];
while (menu) {
    var questionUser = leitor.questionInt("\n1 - Lista de Produtos \n2 - Adicione o Produto \n3 - Remova o Produto \n4 - Sair \n");
    switch (questionUser) {
        case 1:
            console.log(infoLoja);
            console.log(listaDeProdutos);
            break;
        case 2:
            console.log(infoLoja);
            var adicionarP = leitor.question("Insira o produto que deseja adicionar: ").toLowerCase();
            listaDeProdutos.push(adicionarP);
            console.log("Seu produto foi adiocionado! ");
            console.log(listaDeProdutos);
            break;
        case 3:
            var remover = rl.question("Insira o nome do produto para remover: ");
            var index = listaDeProdutos.indexOf(remover);
            listaDeProdutos.splice(index, 1);
            console.log("Produto removido com sucesso!");
            console.log(listaDeProdutos);
            break;
        case 4:
            console.log("Saindo...");
            menu = false;
            break;
        default:
            console.log("opção inexistente!");
            break;
    }
}
