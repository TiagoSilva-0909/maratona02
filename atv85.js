/** Faça um programa que leia uma matriz 3x3 e calcule a média
dos valores presentes nas posições pares (soma dos índices par) da
matriz */

const prompt = require("prompt-sync")();

let matriz = [];
let soma = 0, count = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = prompt(`Linha ${i + 1}: `).split(" ").map(Number);
    for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 === 0) {
            soma += matriz[i][j];
            count++;
        }
    }
}
console.log("Média dos valores em posições pares:", soma / count);
