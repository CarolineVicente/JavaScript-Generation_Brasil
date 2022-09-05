const prompt = require("prompt-sync")()

let maiorNum = 0.0
let num = []

for( i = 0; i < 5; i++){

num[i] = Number(prompt(`Digite a nota ${i + 1} :`))

if(num[i]> maiorNum){
  
  maiorNum = num[i]

}		
}

console.log(`Maior pontuação: ${maiorNum}`)

