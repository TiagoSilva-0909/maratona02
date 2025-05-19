/** Crie um programa que leia dois vetores de números inteiros
com o mesmo tamanho e exiba um novo vetor com a soma dos
elementos correspondentes dos dois vetores */

const prompt = require("prompt-sync")();

let vetor1 = (prompt("Digite o primeiro vetor: ")).split(" ").map(Number);
let vetor2 = (prompt("Digite o segundo vetor: ")).split(" ").map(Number);

if (vetor1.length !== vetor2.length) {
    console.log("Erro: vetores de tamanhos diferentes.");
} else {
    let soma = vetor1.map((n, i) => n + vetor2[i]);
    console.log("Soma dos vetores:", soma);
}
