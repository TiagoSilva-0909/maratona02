/** Faça um programa que preencha uma matriz 4x4 com números
aleatórios e exiba a soma dos valores presentes em cada linha e em
cada coluna */

const prompt = require ("prompt-sync")();

let matriz = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)));

for (let i = 0; i < 4; i++) {
    let somaLinha = matriz[i].reduce((a, b) => a + b, 0);
    console.log(`Soma da linha ${i}: ${somaLinha}`);
}

for (let j = 0; j < 4; j++) {
    let somaCol = 0;
    for (let i = 0; i < 4; i++) somaCol += matriz[i][j];
    console.log(`Soma da coluna ${j}: ${somaCol}`);
}
