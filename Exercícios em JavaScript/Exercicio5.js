let par = 0
let impar = 0

for(let i = 0; i < 10; i++){

    let rnds = Math.floor(Math.random() * 10 )

    if (rnds % 2 == 0) {
        par ++

    } else {
        impar ++

    }

}
console.log(`A qtd de números pares é: ${par}`)
console.log(`A qtd de números ímpares é: ${impar}`)
