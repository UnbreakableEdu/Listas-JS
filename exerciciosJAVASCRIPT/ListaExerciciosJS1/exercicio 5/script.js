const duracaoFilmeRomance = 90;
const duracaoFilmeInvestigacao = 110;
const duracaoTotalFilmes = duracaoFilmeRomance + duracaoFilmeInvestigacao;

const tempoDormidoGaroto = Number(
  prompt("Insira o tempo dormido pelo garoto durante o filme (Em minutos):")
);
const tempoDormidoGarota = Number(
  prompt("Insira o tempo dormido pela garota durante o filme (Em minutos):")
);

const tempoAcordadoGaroto = duracaoTotalFilmes - tempoDormidoGaroto;
const tempoAcordadaGarota = duracaoTotalFilmes - tempoDormidoGarota;

const mensagemFinalGaroto = `Ele ficou acordado durante ${tempoAcordadoGaroto} minutos ao longo dos 2 filmes.`;
const mensagemFinalGarota = `Ela ficou acordada durante ${tempoAcordadaGarota} minutos ao longo dos 2 filmes.`;

alert(mensagemFinalGaroto);
alert(mensagemFinalGarota);
