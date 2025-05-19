/** Implemente uma função recursiva para encontrar o máximo
divisor comum (MDC) de dois números */

function mdc(a, b) {
    if (b === 0) return a;
    return mdc(b, a % b);
}
console.log(mdc(24, 18)); // 6
