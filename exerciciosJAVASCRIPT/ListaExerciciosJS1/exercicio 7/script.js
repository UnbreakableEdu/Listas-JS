const valorGasto = 150;
const pacotesPipocaProduzidos = 250;
const lucroDesejado = 350;
const valorNecessarioParaLucroDesejado = valorGasto + lucroDesejado;
const precoNecessarioDosPacotes =
  valorNecessarioParaLucroDesejado / pacotesPipocaProduzidos;

const custoAtualizado = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(precoNecessarioDosPacotes);

const mensagemFinal = `Para arrecadar 350 reais, o custo dos pacotes deve ser de ${custoAtualizado}.`;
alert(mensagemFinal);
