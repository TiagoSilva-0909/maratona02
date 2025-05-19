/** Crie um programa que leia um vetor de números inteiros e
exiba a soma de todos os elementos */

const prompt = require ("prompt-sync");

let entrada = prompt("Digite números inteiros separados por vírgula:");

let vetor = entrada.split(",").map(Number);

let soma = 0;
for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

console.log("A soma dos elementos é: " + soma);
