const horasPorDia = 24;
const diasPorAno = 365;

const idadeUsuario = Number(prompt("Insira sua idade"));

const horasVividas = horasPorDia * diasPorAno * idadeUsuario;

const mensagemFinal = `Você tem ${idadeUsuario} anos, logo já viveu mais de ${horasVividas} horas.`;
alert(mensagemFinal);
