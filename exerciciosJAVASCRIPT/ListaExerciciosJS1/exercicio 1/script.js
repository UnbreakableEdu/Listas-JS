const valorIngresso = 170;

function perguntaAoUsuario(message, valorPadrao = "") {
  const mensagemPronta = String(message).trim();

  const resposta = prompt(mensagemPronta, valorPadrao);

  return resposta;
}

function calculoDoPreco(custo, valorDaOferta = custo) {
  const preco = Number(valorDaOferta) - Number(custo);

  return preco;
}

function mensagemFinalSobreValor(preco = 0) {
  function trocaAtualizada(moneyValue) {
    const criadorDeTroca = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const dinheiroAtualizado = Number(preco);
    const trocaAtualizada = criadorDeTroca.format(dinheiroAtualizado);
    return trocaAtualizada;
  }

  const precoAtualizado = trocaAtualizada(preco);
  if (preco < 0) {
    return `Você teve prejuízo de ${precoAtualizado}.`;
  } else {
    return `Você teve lucro de ${precoAtualizado}.`;
  }
}

const ofertaDoUsuario = perguntaAoUsuario(
  "Valor de sua proposta pelo ingresso:",
  170
);
const preco = calculoDoPreco(valorIngresso, ofertaDoUsuario);

const respostaSobreCusto = mensagemFinalSobreValor(preco);
alert(respostaSobreCusto);
