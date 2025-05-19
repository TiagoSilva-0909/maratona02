/** Escreva um programa que leia números do usuário até que seja
digitado zero, e exiba a média dos números digitados */

const prompt = require ("prompt-sync")();

let soma = 0, contador = 0, numero;

do {
  numero = parseFloat(prompt("Digite um número (0 para sair):"));
  if (numero !== 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

let media = contador > 0 ? soma / contador : 0;
console.log(`Média: ${media}`);
