function isSequentialOrder(number) {
  // Converte o número para string para ser possível usar o método .split() e depois
  const digits = String(number)
    .split("")
    .map((item) => {
      return Number(item);
    });

  console.log(digits);

  let isAscending = true;
  let isDescending = true;

  // Verificação se os dígitos estão em ordem ascendente
  // Iteração pelo array (for loop) para duas verificações:
  // 1) se o dígito atual é maior que o anterior
  // 2) Se a diferença entre o dígito atual e o dígito anterior é menor ou igual a 1. Vale também para os números repetidos, visto que a diferença será 0 (menor que 1).
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1] || digits[i] - digits[i - 1] > 1) {
      isAscending = false;
      break;
    }
  }

  // Verificação se os dígitos estão em ordem descendente
  // Iteração pelo array (for loop) para duas verificações:
  // 1) se o dígito atual é menor que o anterior
  // 2) Se a diferença entre o dígito anterior e o dígito atual é menor ou igual a 1. Vale também para os números repetidos, visto que a diferença será 0 (menor que 1).

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] > digits[i - 1] || digits[i - 1] - digits[i] > 1) {
      isDescending = false;
      break;
    }
  }

  // Retorno da função, indicando se há ordenamento ascendente, descendente ou não há ordenamento.
  if (isAscending && !isDescending) {
    return "Ordenamento Ascendente";
  } else if (!isAscending && isDescending) {
    return "Ordenamento Descendente";
  } else {
    return "Sem ordenamento";
  }
}

// Exemplos:
console.log("QUESTÃO 1:");
console.log(isSequentialOrder(12345678));
console.log(isSequentialOrder(1223455678));
console.log(isSequentialOrder(876543210));
console.log(isSequentialOrder(152456457));
console.log(isSequentialOrder(12356789));
console.log(isSequentialOrder(13579));
console.log(isSequentialOrder(9765421));
console.log(isSequentialOrder(123454321));
console.log(isSequentialOrder(12222222));
console.log(isSequentialOrder(2111111));
console.log(isSequentialOrder(1599));
