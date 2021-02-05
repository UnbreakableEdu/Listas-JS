const valorPorClique = 0.02;

const lucroDesejado = Number(prompt("Quanto Osviéldson deseja ganhar?"));

const cliquesNecessariosParaAtingirLucroDesejado =
  lucroDesejado / valorPorClique;

const mensagemFinal = `Osviéldson precisa de ${cliquesNecessariosParaAtingirLucroDesejado} cliques em seus anúncios para alcançar um lucro de R$ ${lucroDesejado}.`;
alert(mensagemFinal);
