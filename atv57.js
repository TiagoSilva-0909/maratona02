/** Crie um programa que exiba os primeiros N números primos,
onde N é informado pelo usuário, utilizando um laço de repetição */

const prompt = require ("prompt-sync")();

let qtd = parseInt(prompt("Quantos números primos deseja ver?"));
let contador = 0;
let numero = 2;

while (contador < qtd) {
  let primo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    console.log(numero);
    contador++;
  }
  numero++;
}
