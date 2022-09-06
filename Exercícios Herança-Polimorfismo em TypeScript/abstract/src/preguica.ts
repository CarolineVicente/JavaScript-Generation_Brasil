import { Animal } from "./animal"

export class Preguica extends Animal{
  
    constructor(
      nome: string,
      idade: number
    ) {
      super(nome,idade)
    }

  emitirSom():void{
    console.log("A preguiça está guinchando")
  }

  subirArvore():void{
    console.log("A preguiça está subindo na árvore")
  }
    
}
