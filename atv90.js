/** Faça um programa que leia uma matriz m x n, indicando o local
onde há minas de um jogo de campo minado (sendo 0 para campo
neutro, e 1 para locais onde haveriam minas), e o programa deveria
retornar uma matriz indicando, para cada posição, o número de
minas nas casas vizinhas */

const prompt = require("prompt-sync")();

let m = Number(prompt("Linhas: "));
let n = Number(prompt("Colunas: "));
let campo = [];

for (let i = 0; i < m; i++) {
    campo[i] = prompt(`Linha ${i + 1}: `).split(" ").map(Number);
}

let resultado = Array.from({ length: m }, () => Array(n).fill(0));
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        let count = 0;
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue;
                let ni = i + dx, nj = j + dy;
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && campo[ni][nj] === 1) {
                    count++;
                }
            }
        }
        resultado[i][j] = count;
    }
}
console.log("Resultado:", resultado);

