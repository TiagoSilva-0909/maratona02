/** Escreva um programa que solicite ao usuário uma lista de
números, até o usuário digitar o número zero, e exiba o maior e o
menor número da lista */

const prompt = require ("prompt-sync")();

let numero = parseFloat(prompt("Digite um número (0 para parar):"));
let maior = numero, menor = numero;

while (numero !== 0) {
  if (numero > maior) maior = numero;
  if (numero < menor) menor = numero;
  numero = parseFloat(prompt("Digite outro número (0 para parar):"));
}

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);
