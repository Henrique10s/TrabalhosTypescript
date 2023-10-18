import * as leitor from "readline-sync"
import * as rl from "readline-sync"
import {Loja} from "./loja"
let menu: boolean = true

let infoLoja = new Loja("Henrique Du Grau", "Rua Casa do Cralho 157");
let listaDeProdutos: Array<string>= [];

while(menu){
  let questionUser = leitor.questionInt("\n1 - Lista de Produtos \n2 - Adicione o Produto \n3 - Remova o Produto \n4 - Sair \n");
  switch(questionUser){

    case 1: 
    console.log(infoLoja);
    console.log(listaDeProdutos);
    break;
    case 2: 
    console.log(infoLoja);
    let adicionarP:string = leitor.question("Insira o produto que deseja adicionar: ").toLowerCase();
    listaDeProdutos.push(adicionarP)
    console.log("Seu produto foi adiocionado! ");
    console.log(listaDeProdutos);
    break;
    case 3: 
    const remover = rl.question("Insira o nome do produto para remover: ");
    const index =   listaDeProdutos.indexOf(remover);
    listaDeProdutos.splice(index, 1);
    console.log("Produto removido com sucesso!");
    console.log(listaDeProdutos);
    
    break;
    case 4: 
    console.log("Saindo...");
    menu = false
    break;
    default:
      console.log("opção inexistente!");
    break;
  }
}


