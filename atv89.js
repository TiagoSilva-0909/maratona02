/** Faça um programa que leia uma matriz 4x4 e verifique se ela é
uma matriz diagonal, isto é, se todos os elementos fora da diagonal
principal são iguais a zero */

const prompt = require("prompt-sync")();

let diagonal = true;
for (let i = 0; i < 4; i++) {
    let linha = prompt(`Linha ${i + 1}: `).split(" ").map(Number);
    for (let j = 0; j < 4; j++) {
        if (i !== j && linha[j] !== 0) diagonal = false;
    }
}
console.log(diagonal ? "É uma matriz diagonal." : "Não é matriz diagonal.");
