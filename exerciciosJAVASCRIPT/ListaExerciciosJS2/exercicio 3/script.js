const qtdPessoasPorMusica = 1200;
const qtdPessoasNoShow = Number(
  prompt("Insira a quantidade de pessoas presentes no show:")
);
const qtdMusicasQueDevemTocar = Math.floor(
  qtdPessoasNoShow / qtdPessoasPorMusica
);

const mensagemFinal = `Metaleiros of Metal deverá tocar ${qtdMusicasQueDevemTocar} músicas.`;
alert(mensagemFinal);
