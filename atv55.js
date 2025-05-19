/** Escreva um programa que solicite ao usuário um número N e
diga se o mesmo é primo ou não */

const prompt = require ("prompt-sync")();

let n = parseInt(prompt("Digite um número:"));
let primo = true;

if (n < 2) primo = false;
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    primo = false;
    break;
  }
}
console.log(`${n} ${primo ? "é primo" : "não é primo"}`);
