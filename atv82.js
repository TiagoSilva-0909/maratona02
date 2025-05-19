/** Faça um programa que preencha uma matriz 4x4 com valores
aleatórios e exiba a matriz transposta */

let matriz = [];
for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100);
    }
}

let transposta = matriz[0].map((_, col) => matriz.map(row => row[col]));

console.log("Matriz original:", matriz);
console.log("Matriz transposta:", transposta);
