const distanciaParaEscolaEmCM = 300000;

const minutosAteEscola = Number(
  prompt("Insira quantos minutos Juracildo demora para chegar à escola:")
);
const segundosAteEscola = minutosAteEscola * 60;
const passosAteEscola = Number(
  prompt("Insira quantos passos Juracildo dá para chegar à escola:")
);

const tamanhoDeCadaPasso = distanciaParaEscolaEmCM / passosAteEscola;
const duracaoDeCadaPasso = segundosAteEscola / passosAteEscola;

let mensagemFinal = `O tamanho de cada passo é igual a ${tamanhoDeCadaPasso.toFixed(2)} cm e cada passo possui uma duração de ${duracaoDeCadaPasso.toFixed(2)} segundos.`;
alert(mensagemFinal);
