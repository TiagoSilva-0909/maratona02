/** Escreva um programa que leia um vetor de números inteiros e
exiba a média dos elementos */

const prompt = require ("prompt-sync")();


let vetor = (prompt("73 - Digite os números inteiros separados por espaço:")).split(" ").map(Number);
let media = vetor.reduce((soma, n) => soma + n, 0) / vetor.length;
console.log("Média dos elementos:", media);
