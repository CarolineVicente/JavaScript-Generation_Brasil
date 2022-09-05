
    const prompt = require("prompt-sync")()
    
    let idade = prompt("Digite a sua idade: ")
    
    let ano = Number(prompt("Em qual ano estamos? "))

    let resp = prompt("Você já fez aniversário esse ano? Responda: Sim ou Não " )

    let nascimento2 = (ano - 1) - idade

    if(resp == "sim" || resp =="Sim"){
        let nascimento1 = ano - idade
        console.log(`Seu ano de nascimento é em ${nascimento1}`)
    }
    else if(resp == "não" || resp =="Não" || resp =="Nao" || resp =="nao")  {
        let nascimento2 = (ano - 1) - idade
        console.log(`Seu ano de nascimento é em ${nascimento2}`)
    }
    else{
        console.log("Responda: Sim ou Não")
    }