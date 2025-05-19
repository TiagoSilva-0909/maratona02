/** Crie uma função recursiva para inverter uma string */

function inverter(str) {
    if (str.length <= 1) return str;
    return inverter(str.slice(1)) + str[0];
}
console.log(inverter("recursao")); 
