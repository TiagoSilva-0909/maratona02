/** Crie uma função recursiva para verificar se um número é primo */

function ehPrimo(n, i = 2) {
    if (n <= 2) return n === 2;
    if (n % i === 0) return false;
    if (i * i > n) return true;
    return ehPrimo(n, i + 1);
}
console.log(ehPrimo(17)); // true
