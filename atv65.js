/** Escreva um programa que leia uma sequência de caracteres e
indique se a mesma é um palíndromo ou não */

const prompt = require ("prompt-sync")();

let texto = prompt("Digite uma palavra ou frase:");
let limpo = texto.replace(/[^a-zA-Z]/g, "").toLowerCase();
let invertido = limpo.split("").reverse().join("");

if (limpo === invertido) {
  console.log("É um palíndromo.");
} else {
  console.log("Não é um palíndromo.");
}
