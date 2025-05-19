/** Desenvolva uma função recursiva para calcular a soma dos
dígitos de um número inteiro */

function somaDigitos(n) {
    if (n === 0) return 0;
    return n % 10 + somaDigitos(Math.floor(n / 10));
}
console.log(somaDigitos(123)); // 6
