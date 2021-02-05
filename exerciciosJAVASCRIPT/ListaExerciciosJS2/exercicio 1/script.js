const qtdDeLivrosLidos = Number(
  prompt("Insira o número de livros lidos por Jenivaldson:")
);
const mesesDesdePrimeiroLivro = Number(
  prompt("Insira quantos meses desde que Jenivaldson leu seu primeiro livro:")
);

const livrosLidosPorMes = qtdDeLivrosLidos / mesesDesdePrimeiroLivro;

const mensagemFinal = `Jenivaldson leu uma média de ${livrosLidosPorMes} livros por mês.`;
alert(mensagemFinal);
