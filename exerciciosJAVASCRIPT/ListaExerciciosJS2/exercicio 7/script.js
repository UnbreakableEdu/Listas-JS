let primeiroNome = prompt("Insira seu nome:");
let segundoNome = prompt("Insira outro nome:");

let mensagemFinal = `Seu nome é ${primeiroNome} e o outro nome disponibilizado é ${segundoNome}.`;
alert(mensagemFinal);

const baseDeInversao = primeiroNome;
primeiroNome = segundoNome;
segundoNome = baseDeInversao;

mensagemFinal = `Agora seu nome é ${primeiroNome} e o outro é ${segundoNome}.`;
alert(mensagemFinal);
