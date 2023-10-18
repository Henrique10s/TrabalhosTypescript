/* Crie uma classe "EmpresaDesenvolvimento" que representa uma empresa de desenvolvimento de software. A classe deve possuir as propriedades nome, endereço
 e funcionários, onde "funcionários" é um conjunto de objetos representando os funcionários da empresa. Adicione métodos para adicionar funcionários, remover
  funcionários e exibir informações da empresa. */
  import * as leitor from "readline-sync"
  import * as rl from "readline-sync"
export class EmpresaDesenvolvimento{
    nome: string
    endereço: string

    constructor(nome: string, endereço: string){

        this.nome = nome
        this.endereço = endereço 
        }
    }
