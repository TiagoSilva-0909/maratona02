/** Escreva um programa que
solicite ao usuário um número N e exiba todos os números primos
menores que N */

const prompt = require ("prompt-sync")();

let limite = parseInt(prompt("Digite um número N:"));

for (let num = 2; num < limite; num++) {
  let primo = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
  if (primo) console.log(num);
}
