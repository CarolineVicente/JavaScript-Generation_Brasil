const prompt = require("prompt-sync")()

let idade = Number(prompt("Escolha uma opção para descobrir em qual categoria você esta: 1- Categoria infantil: 10-14, 2- Categoria juvenil: 15-17, 3-Categoria adulto: 18-25" ))

switch(idade) {
  case 1:
    console.log("Categoria infantil: 10-14")
    break;
  case 2:
    console.log("Categoria juvenil: 15-17")
    break;
  case 3:
    console.log("Categoria adulto: 18-25")
}
  

