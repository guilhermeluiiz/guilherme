var input = require('readline-sync');

let numero = Number(inpuy.question("Digite um numero: "));
let soma = 0

for(let i = 1; i <= numero; i++){
    if(i % 2 === 0){
        soma +=i
    }
}
console.log(soma)