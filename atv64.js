/** Escreva um programa que solicite ao usuário uma frase e exiba
a frase de trás para frente */

const prompt = require ("prompt-sync")();

let frase = prompt("Digite uma frase:");
let invertida = "";

for (let i = frase.length - 1; i >= 0; i--) {
  invertida += frase[i];
}

console.log(`Frase invertida: ${invertida}`);
