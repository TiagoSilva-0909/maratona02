/** Escreva um programa que solicite ao usuário uma frase e exiba
a quantidade de vogais na frase */

const prompt = require ("prompt-sync")();

let frase = prompt("Digite uma frase:");
let vogais = "aeiouAEIOU";
let contagem = 0;

for (let i = 0; i < frase.length; i++) {
  if (vogais.includes(frase[i])) contagem++;
}

console.log(`Quantidade de vogais: ${contagem}`);
