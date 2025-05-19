/** Crie um programa que solicite ao usuário um número e exiba a
tabuada desse número utilizando um laço de repetição */

const prompt = require ("prompt-sync")();

let numero = parseFloat(prompt("Digite um número para ver a tabuada:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}