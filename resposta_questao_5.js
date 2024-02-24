// Necessário usar o fatorial para cálculo dos arranjos possíveis.
// Função para cálculo de fatorial
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

// Exemplo:
const numeroDeAmigos = 5;
const modosDistintos = fatorial(numeroDeAmigos);

console.log("QUESTÃO 5:");
console.log("Número de amigos: " + numeroDeAmigos);
console.log(`Número de modos distintos: ${modosDistintos}`);
