function anosComMaisPessoasTrabalhando(matriz) {
  // Objeto para armazenar a contagem de pessoas que trabalharam em cada ano.
  let trabalhadoresPorAno = {};

  // Itera sobre cada par de anos na matriz
  matriz.forEach(([inicio, fim]) => {
    // Itera de 'início' até 'fim', incluindo o próprio ano de início e fim.
    for (let ano = inicio; ano <= fim; ano++) {
      // Atualiza a contagem de pessoas que estiveram trabalhando naquele ano.
      if (trabalhadoresPorAno[ano]) {
        trabalhadoresPorAno[ano]++;
      } else {
        trabalhadoresPorAno[ano] = 1;
      }
    }
  });

  // Variáveis para armazenar os anos em que mais pessoas estiveram trabalhando.
  let anosComMaisPessoas = [];
  let maxContagem = 0;

  for (const ano in trabalhadoresPorAno) {
    const pessoasTrabalhando = trabalhadoresPorAno[ano];

    // Verifica se há mais pessoas trabalhando neste ano do que no ano anterior máximo.
    if (pessoasTrabalhando > maxContagem) {
      anosComMaisPessoas = [ano];
      maxContagem = pessoasTrabalhando;
    } else if (pessoasTrabalhando === maxContagem) {
      // Se houver o mesmo número de pessoas trabalhando, adiciona ao array.
      anosComMaisPessoas.push(ano);
    }
  }

  // Retorna os anos em que a maior quantidade de pessoas esteve trabalhando.
  return anosComMaisPessoas;
}

// Exemplo:
const matrizTrabalho = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
];

console.log("QUESTÃO 4:");
const anosComMaisTrabalhadores = anosComMaisPessoasTrabalhando(matrizTrabalho);
console.log("Anos com mais pessoas trabalhando:", anosComMaisTrabalhadores);
