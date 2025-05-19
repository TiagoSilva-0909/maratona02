/** Crie um programa que leia um vetor de números inteiros e
verifique se todos os elementos são pares */

const prompt = require("prompt-sync")();

let vetor = (prompt("Digite os números: ")).split(" ").map(Number);
let todosPares = vetor.every(n => n % 2 === 0);

console.log(todosPares ? "Todos os elementos são pares." : "Nem todos os elementos são pares.");
