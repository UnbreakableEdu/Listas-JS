const salario = 500;
const bonusPorVenda = 50;

const qtdDeProdutosVendidos = Number(
  prompt("Quantas vendas Mardiscléia realizou nesse mês?")
);

const salarioTotal = salario + bonusPorVenda * qtdDeProdutosVendidos;

const mensagemFinal = `Mardiscléia, neste mês, receberá R$ ${salarioTotal}. de salário.`;
alert(mensagemFinal);
