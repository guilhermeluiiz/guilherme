var input = require('readline-sync');

let numero = Number (input.question("Digite um numero: "));

let i = 1;
while(i <= 10){
    console.log(`${numero} * ${i} = ${numero * i}`)
    i++
}

 