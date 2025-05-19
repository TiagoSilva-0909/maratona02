/** Faça um programa que solicite ao usuário um número e exiba a
sequência de Fibonacci até o número informado utilizando um laço
de repetição */

const prompt = require ("prompt-sync")();

let limite = parseInt(prompt("Digite um número limite para a sequência de Fibonacci:"));
let a = 0, b = 1;

console.log("Sequência de Fibonacci:");
while (a <= limite) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}
