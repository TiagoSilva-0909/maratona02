/** Faça um programa que leia um vetor de números inteiros e
exiba o maior elemento presente no vetor */

const prompt = require ("prompt-sync")();

let entrada = prompt("Digite os números inteiros separados por espaço:");

let vetor = entrada.split(" ").map(Number);

if (vetor.length === 0 || vetor.some(isNaN)) {
    console.log("Entrada inválida ou vetor vazio.");
} else {
    let maior = Math.max(...vetor);
    console.log("O maior elemento do vetor é:", maior);
}