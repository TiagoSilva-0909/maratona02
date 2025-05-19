/** Faça um programa que determine o menor múltiplo comum
(MMC) entre dois números informados pelo usuário */

const prompt = require ("prompt-sync")();

let a = (prompt("Digite o primeiro número:"));
let b = (prompt("Digite o segundo número:"));
let max = Math.max(a, b);
let mmc = max;

while (true) {
  if (mmc % a === 0 && mmc % b === 0) {
    break;
  }
  mmc++;
}

console.log(`MMC de ${a} e ${b} é: ${mmc}`);
