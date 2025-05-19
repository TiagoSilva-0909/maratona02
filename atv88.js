/** Faça um programa que leia duas matrizes e dê como resposta a
multiplicação entre elas. O programa deverá observar se é possível
ou não realizar a multiplicação entre as duas matrizes */

const prompt = require("prompt-sync")();

let m1 = [], m2 = [];
let m = Number(prompt("Linhas da matriz 1: "));
let n = Number(prompt("Colunas da matriz 1 / Linhas da matriz 2: "));
let p = Number(prompt("Colunas da matriz 2: "));

for (let i = 0; i < m; i++) {
    m1[i] = prompt(`Matriz 1 - Linha ${i + 1}: `).split(" ").map(Number);
}
for (let i = 0; i < n; i++) {
    m2[i] = prompt(`Matriz 2 - Linha ${i + 1}: `).split(" ").map(Number);
}

let result = Array.from({ length: m }, () => Array(p).fill(0));
for (let i = 0; i < m; i++) {
    for (let j = 0; j < p; j++) {
        for (let k = 0; k < n; k++) {
            result[i][j] += m1[i][k] * m2[k][j];
        }
    }
}
console.log("Matriz multiplicada:", result);
