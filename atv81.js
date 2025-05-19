/** Faça um programa que preencha uma matriz 3x3 com valores
informados pelo usuário e exiba a soma dos valores da diagonal
principal */

const prompt = require("prompt-sync")();

let matriz = [];
let soma = 0;
for (let i = 0; i < 3; i++) {
    let linha = prompt(`Linha ${i + 1}: `).split(" ").map(Number);
    matriz.push(linha);
    soma += linha[i];
}
console.log("Soma da diagonal principal:", soma);
