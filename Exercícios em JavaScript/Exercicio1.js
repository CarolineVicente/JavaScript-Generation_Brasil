const prompt = require("prompt-sync")()

let diametro = Number(prompt("Digite um valor para o diâmetro de um círculo: "))

let raio = diametro / 2

let area = 3.14 * Math.pow(raio, 2)

let perimetro = 2 *  3.14 * raio

console.log(`\nO valor da área do cículo é de ${area}cm \n`)
console.log(`O valor do perímetro do cículo é de ${perimetro} cm \n`)