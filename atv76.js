/** Crie um programa que leia um vetor de números inteiros e
encontre o segundo maior elemento presente no vetor */

const prompt = require("prompt-sync")();

let vetor = (prompt("Digite os números: ")).split(" ").map(Number);
let unicos = [...new Set(vetor)].sort((a, b) => b - a);

if (unicos.length >= 2) {
    console.log("Segundo maior elemento:", unicos[1]);
} else {
    console.log("Não existe segundo maior elemento.");
}
