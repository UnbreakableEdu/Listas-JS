const bimestresTotais = 4;
const aulasPorBimestre = 20;
const aulasPorAno = aulasPorBimestre * bimestresTotais;

const tweetsTotais = prompt("Quantos tweets você faz, em sala de aula, por dia?");

const tweetsPorAno = Number(tweetsTotais) * aulasPorAno;

const mensagemFinal = `O total de tweets, em sala de aula, que você fez nesse ano foi de ${tweetsPorAno}`;

alert(mensagemFinal);
