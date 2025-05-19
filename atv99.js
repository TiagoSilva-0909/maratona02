/** Escreva uma função recursiva para determinar se uma palavra é
um palíndromo */

function ehPalindromo(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return ehPalindromo(str.slice(1, -1));
}
console.log(ehPalindromo("radar")); // true
