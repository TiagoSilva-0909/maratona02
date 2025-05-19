/** Escreva um programa que solicite ao usuário dois números A e
B e exiba todos os números entre A e B */

const prompt = require ("prompt-sync")();

let A = (prompt("Digite o número A:"));
let B = (prompt("Digite o número B:"));

for (let i = A + 1; i < B; i++) {
  console.log(i);
}
