const pontosPerdidosACada100Tweet = 1;

const notaDoAluno = Number(prompt("Insira a nota do aluno:"));
const qtdDetweets = Number(
  prompt("Qual a quantidade total de tweets feitos pelo aluno?")
);

const qtdDeTweetsDivididoPor100 = Math.floor(qtdDetweets / 100);

const pontosPerdidos = pontosPerdidosACada100Tweet * qtdDeTweetsDivididoPor100;
const notaFinal = notaDoAluno - pontosPerdidos;

const mensagemFinal = `Já que foram criados ${qtdDetweets} tweets, serão subtraídos ${pontosPerdidos} pontos da média. Sendo assim, a nota final será ${notaFinal}.`;

alert(mensagemFinal);
