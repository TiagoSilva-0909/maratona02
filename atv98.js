/** Desenvolva uma função recursiva para encontrar o menor valor
em um vetor */

function menor(vetor, i = 0, atual = Infinity) {
    if (i === vetor.length) return atual;
    return menor(vetor, i + 1, Math.min(atual, vetor[i]));
}
console.log(menor([10, 4, 7, 2, 8])); // 2
