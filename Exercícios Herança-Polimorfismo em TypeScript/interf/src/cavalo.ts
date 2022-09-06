import { Animal } from "./animal"

export class Cavalo implements Animal{
   
  nome: string
  idade: number

  constructor(
    nome: string,
    idade: number
  ) {
    this.nome = nome
    this.idade = idade
  }

  emitirSom():void{
    console.log("O cavalo está relinchando")
  }

  locomocao(): void {
    console.log("O cavalo está correndo")
  }

}
