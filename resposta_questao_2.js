function findDuplicatedNumbers(numeros) {
  // Array para armazenar os números duplicados
  const duplicados = numeros.filter((numero, indice) => {
    // Verifica se o índice atual do número é diferente do primeiro índice encontrado do número no array de números, identificando se o número já apareceu no array ou não.
    return numeros.indexOf(numero) !== indice;
  });

  // Retorna o array dos números duplicados
  return duplicados.length > 0
    ? duplicados
    : "Não há números duplicados no array";
}

const numeros = [4, 5, 44, 98, 4, 5, 6, 7];
const numeros2 = [23, 47, 11, 86, 32, 75, 92, 4];
const numeros3 = [12, 8, 5, 21, 12, 36, 8, 21];

console.log("QUESTÃO 2:");
console.log(findDuplicatedNumbers(numeros)); // [4, 5]
console.log(findDuplicatedNumbers(numeros2)); // Não há números duplciados no array
console.log(findDuplicatedNumbers(numeros3)); // [12, 8, 21]
