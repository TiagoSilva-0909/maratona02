/** Faça um programa que calcule e exiba a soma dos números
pares de 1 a 100 utilizando um laço de repetição */

const prompt = require ("prompt-sync")();

let somaPares = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  }
}
console.log(`Soma dos pares de 1 a 100: ${somaPares}`);
