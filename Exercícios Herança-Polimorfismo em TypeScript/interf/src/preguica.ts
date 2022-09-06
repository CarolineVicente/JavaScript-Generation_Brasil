import { Animal } from "./animal"

export class Preguica implements Animal{

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
    console.log("A preguiça está guinchando");
  }
  locomocao(): void {
    console.log("A preguiça está subindo na árvore");
  }
  
}
