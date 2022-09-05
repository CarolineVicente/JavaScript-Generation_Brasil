const prompt = require("prompt-sync")()

	let soma = 0
	let media = 0 
	let total = 0
	let num = 0
	
	while(num >= 0){
	
		num = Number(prompt("Digite um número para ser somado: "))

		soma+=num
		
		total++
		
		}
		
		media=soma/total
			
		console.log(`\nSoma total dos valores: ${soma} \nMédia dos valores: ${media} \nTotal de valores lidos: ${total}`)

