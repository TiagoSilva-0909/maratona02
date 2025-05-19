/** Escreva uma função recursiva para calcular a potência de um
número inteiro elevado a um expoente */

function potencia(base, expoente) {
    if (expoente === 0) return 1;
    return base * potencia(base, expoente - 1);
}
console.log(potencia(2, 4)); // 16
