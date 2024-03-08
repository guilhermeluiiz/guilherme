var input = require('readline-sync')

let nota1 = Number (input.question("Digite a primeira nota:"));
let nota2 = Number (input.question("Digite a segunda nota:"));
let nota3 = Number (input.question("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;


console.log(`A média das notas é: ${media}`);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {             //else if (media < 7  && media >= 5)
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
