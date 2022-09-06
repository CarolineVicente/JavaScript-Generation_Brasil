import { Animal } from "./animal"

export class Cachorro implements Animal{

  nome: string;
  idade: number;

  constructor(
    nome: string,
    idade: number
  ) {
    this.nome = nome
    this.idade = idade
  }

  emitirSom(): void {
    console.log("O cachorro está latindo");
  }

  locomocao(): void {
    console.log("O cachorro está correndo");
  }
  
}
