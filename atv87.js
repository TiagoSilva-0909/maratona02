/** Faça um programa que leia uma matriz 3x3 e calcule o
determinante da matriz */

const prompt = require("prompt-sync")();

let m = [];
for (let i = 0; i < 3; i++) {
    m[i] = prompt(`Linha ${i + 1}: `).split(" ").map(Number);
}

let det = m[0][0]*(m[1][1]*m[2][2] - m[1][2]*m[2][1])
        - m[0][1]*(m[1][0]*m[2][2] - m[1][2]*m[2][0])
        + m[0][2]*(m[1][0]*m[2][1] - m[1][1]*m[2][0]);

console.log("Determinante:", det);
