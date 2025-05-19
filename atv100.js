/** Implemente uma função recursiva para calcular a soma dos
elementos de um vetor */

function somaVetor(vetor, i = 0) {
    if (i === vetor.length) return 0;
    return vetor[i] + somaVetor(vetor, i + 1);
}
console.log(somaVetor([1, 2, 3, 4])); // 10
