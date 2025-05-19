/** Escreva um programa que solicite ao usuário um número N e
exiba a soma de todos os números de 1 a N */

const prompt = require ("prompt-sync")();

let N = parseInt(prompt("Digite um número N:"));
let soma = 0;
for (let i = 1; i <= N; i++) {
  soma += i;
}
console.log(`Soma de 1 até ${N} é ${soma}`);
