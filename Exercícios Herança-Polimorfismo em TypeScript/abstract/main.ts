import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";
import PromptSync from "prompt-sync";

const prompt = PromptSync()

let nome = prompt("Digite o nome do animal: ");

let idade = Number(prompt("Digite a idade do animal: "))

let resp = Number(prompt("Qual o tipo de animal que se trata? 1- Cachorro / 2- Cavalo / 3-Preguiça "))

switch(resp)
{
  case 1 : let cachorro = new Cachorro(
    nome,
    idade
  )
  
  console.log(`O que o Cachorro de nome ${nome}, com ${idade} anos está fazendo?`)
  
  cachorro.emitirSom()
  cachorro.correr()

  break;

  case 2: let cavalo = new Cavalo(
    nome,
    idade
  )
  
  console.log(`\nO que o Cavalo de nome ${nome}, com ${idade} anos está fazendo?`)
  
  cavalo.emitirSom()
  cavalo.correr()

  break;

  case 3: 

  let preguica = new Preguica(
    nome,
    idade
  )
  
  console.log(`\nO que a Preguiça de nome ${nome}, com ${idade} anos está fazendo?`)
  
  preguica.emitirSom()
  preguica.subirArvore()

  break;
}

