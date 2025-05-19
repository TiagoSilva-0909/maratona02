/** Faça um programa que leia um vetor de números inteiros e
verifique se ele está em ordem crescente */

const prompt = require("prompt-sync")();

let vetor = prompt("Digite os números: ").split(" ").map(Number);
let crescente = vetor.every((n, i, arr) => i === 0 || n >= arr[i - 1]);

console.log(crescente ? "O vetor está em ordem crescente." : "O vetor NÃO está em ordem crescente.");
