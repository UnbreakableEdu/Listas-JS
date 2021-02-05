const linksPorDia = 6;
const CurtidasPorDia = 8;

const diasTotais = prompt("Você compartilhou links em quantos dias?");

const curtidasTotais = CurtidasPorDia * linksPorDia * diasTotais;

const mensagemFinal = `Em ${diasTotais} dias, você recebeu ${curtidasTotais} likes.`;

alert(mensagemFinal);
