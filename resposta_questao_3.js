const isValidSequence = (string) => {
  // Objeto para mapear os caracteres de fechamento aos seus respectivos caracteres de abertura
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Pilha para rastrear os caracteres de abertura
  const stack = [];

  // Itera pela sequência de caracteres
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];

    // Verifica se o caractere é um parêntese de fechamento
    if (bracketPairs.hasOwnProperty(currentChar)) {
      const expectedBracket = bracketPairs[currentChar];

      // Verifica se o último parêntese aberto na pilha corresponde ao parêntese de fechamento atual
      if (expectedBracket !== stack.pop()) {
        return false;
      }
    } else {
      // Se o caractere não é um parêntese de fechamento, empilha na pilha de caracteres de abertura
      stack.push(currentChar);
    }
  }

  // Verifica se a pilha está vazia no final, indicando que todos os parênteses foram devidamente fechados
  return !stack.length;
};
// Testes
console.log("QUESTÃO 3:");
console.log(isValidSequence("{[()]}")); // true
console.log(isValidSequence("{[(])}")); // false
console.log(isValidSequence("{[()]}()")); // true
console.log(isValidSequence("(({})[])")); // true
console.log(isValidSequence("[{]}")); // false
