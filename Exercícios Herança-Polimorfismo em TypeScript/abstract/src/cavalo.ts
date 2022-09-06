import { Animal } from "./animal"

export class Cavalo extends Animal{
  
    constructor(
      nome: string,
      idade: number
    ) {
      super(nome,idade)
    }

  emitirSom():void{
    console.log("O cavalo está relinchando")
  }

  correr():void{
    console.log("O cavalo está correndo")
  }

}
