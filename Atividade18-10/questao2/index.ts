/* Crie uma classe "EmpresaDesenvolvimento" que representa uma empresa de desenvolvimento de software. A classe deve possuir as propriedades nome, endereço
 e funcionários, onde "funcionários" é um conjunto de objetos representando os funcionários da empresa. Adicione métodos para adicionar funcionários, remover
  funcionários e exibir informações da empresa. */

  import { EmpresaDesenvolvimento } from "./questao2"

  import * as rl from "readline-sync"

  let menu: boolean = true
  let InfoEmpresa = new EmpresaDesenvolvimento("Xamuel Investimentos", "Rua Alameda dos Anjos");
  let listaDefuncionários: Array<string> = [];
  while(menu){
    let questionUser = rl.questionInt("\n1 - Liste as Informações da Empresa \n2 - Adicione funcionários \n3 Remova funcionários \n4 - sair \n Insira aqui: ")
    switch(questionUser){
        case 1: 
        console.log(InfoEmpresa);
        console.log(`Os funcionários da Empresa são: ${listaDefuncionários}`);
        break;
        case 2: 
        let novosFuncionarios = rl.question("Insira o(s) nome(s) dos novos funcionários: ");
        listaDefuncionários.push(novosFuncionarios);
        console.log("Funcionário adicionados com sucesso!");
        break;
        case 3:
            let removerFuncionarios = rl.question("Insira o dos Funcionarios: ");
            const index = listaDefuncionários.indexOf(removerFuncionarios);
            listaDefuncionários.splice(index, 1);
            console.log("O funcionário foi de caixa!");
        break;
        case 4: 
        console.log("Saindo...");
        menu = false
        break;
        default:
            console.log("Opcao inexistente!");
        break;
    }
  }
 