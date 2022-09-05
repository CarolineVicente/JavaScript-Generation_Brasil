const prompt = require("prompt-sync")()

let total=1
let soma=0

let num = Number(prompt("Digite um número para calcular a soma de todos os números de 1 até ele: "))
	 
	 do{

	 	soma+=total
	 	total++
	 	
	 }while (total<=num){
	  
	   console.log(`\nA soma de 1 até o número digitado é: ${soma}`)
	    
	 }
