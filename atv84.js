/** Faça um programa que preencha uma matriz 5x5 com números
inteiros e exiba o maior valor da matriz e a posição em que ele se
encontra */

const prompt = require("prompt-sync")();

let matriz = [];
let maior = -Infinity;
let pos = [0, 0];

for (let i = 0; i < 5; i++) {
    matriz[i] = prompt(`Linha ${i + 1}: `).split(" ").map(Number);
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
            pos = [i, j];
        }
    }
}

console.log(`Maior valor: ${maior} na posição [${pos[0]}, ${pos[1]}]`);
