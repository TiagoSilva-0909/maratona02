/** Escreva um programa que imprima na tela a tabuada de todos
os números de 1 a 10 */

const prompt = require ("prompt-sync")();

for (let num = 1; num <= 10; num++) {
  console.log(`Tabuada do ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
  console.log("---------------");
}
