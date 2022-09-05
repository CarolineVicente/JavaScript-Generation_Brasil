const prompt = require("prompt-sync")()

let num = Number(prompt("Digite um número e descubra se ele é Par ou Ímpar: "))

if(num % 2.0 == 0.0) {

    let raiz = Math.sqrt(num)
    console.log(`\nO número digitado é: PAR, e sua raíz quadrada é: ${raiz}\n`)
}else{
    let elevado = Math.pow(num, 2)
    console.log(`\nO número digitado é: ÍMPAR, e seu valor ao quadrado é: ${elevado}\n`)
  }