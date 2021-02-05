const duracaoHorasDoJogo = 78;

const tempoDeJogatinaPorDia = Number(
  prompt("Insira o tempo que você gasta jogando o RPG por dia (Em Hora):")
);

const mediaDeTempoPorDiaJogado = Math.floor(
  duracaoHorasDoJogo / tempoDeJogatinaPorDia
);

const mensagemFinal = `Para completar o RPG, serão necessários ${mediaDeTempoPorDiaJogado} dias jogando.`;
alert(mensagemFinal);
