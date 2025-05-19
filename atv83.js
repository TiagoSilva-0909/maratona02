/** Faça um programa que leia duas matrizes 2x2 e exiba a soma
das duas matrizes */

const prompt = require("prompt-sync")();

let matriz1 = [], matriz2 = [], soma = [];

for (let i = 0; i < 2; i++) {
    matriz1[i] = prompt(`Matriz 1 - Linha ${i + 1}: `).split(" ").map(Number);
    matriz2[i] = prompt(`Matriz 2 - Linha ${i + 1}: `).split(" ").map(Number);
    soma[i] = matriz1[i].map((v, j) => v + matriz2[i][j]);
}

console.log("Matriz soma:", soma);
