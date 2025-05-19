/** Faça um programa que determine o máximo divisor comum
(MDC) entre dois números informados pelo usuário */

const prompt = require ("prompt-sync")();

let a = (prompt("Digite o primeiro número:"));
let b = (prompt("Digite o segundo número:"));

function mdc(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

console.log(`MDC de ${a} e ${b} é: ${mdc(a, b)}`);
