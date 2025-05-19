/** Escreva um programa que leia números do usuário até que seja
digitado um número negativo, e exiba a soma dos números
positivos */

const prompt = require ("prompt-sync")();

let soma = 0;
let numero;

do {
  numero = parseInt(prompt("Digite um número (negativo para parar):"));
  if (numero >= 0) soma += numero;
} while (numero >= 0);

console.log(`Soma dos números positivos: ${soma}`);

