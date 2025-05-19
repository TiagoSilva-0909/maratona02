/** Escreva um programa que leia um vetor de números inteiros e
exiba os elementos na ordem inversa */

const prompt = require("prompt-sync")();

let vetor = (prompt("Digite os números: ")).split(" ").map(Number);
console.log("Ordem inversa:", vetor.reverse());
