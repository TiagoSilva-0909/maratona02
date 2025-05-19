/** Escreva um programa que solicite ao usuário um número e
exiba os seus divisores */

const prompt = require ("prompt-sync")();

let numero = (prompt("Digite um número:"));
console.log(`Divisores de ${numero}:`);
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}
