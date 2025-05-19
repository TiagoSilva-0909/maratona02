/** Faça um programa que leia um vetor de números inteiros e
exiba quantas vezes um número específico aparece no vetor */

const prompt = require("prompt-sync")();

let vetor = (prompt("Digite os números: ")).split(" ").map(Number);
let numero = Number(prompt("Digite o número a ser contado: "));
let ocorrencias = vetor.filter(n => n === numero).length;

console.log(`O número ${numero} aparece ${ocorrencias} vezes.`);
