/** Faça um programa que solicite o CPF do usuário e então faça a
validação do mesmo */

const prompt = require ("prompt-sync")();

let cpf = prompt("Digite seu CPF (somente números):");

cpf = cpf.replace(/\D/g, "");

if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
  console.log("CPF inválido.");
} else {
  console.log("CPF aparentemente válido.");
}
