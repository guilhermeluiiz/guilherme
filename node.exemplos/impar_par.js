var input = require('readline-sync')

var numero = Number(input.question("Digite um numero: "))

if (numero % 2 === 0){
    console.log(`O numero ${numero} é par`)
} else {
    console.log(`O numero ${numero} é impar`)
} 