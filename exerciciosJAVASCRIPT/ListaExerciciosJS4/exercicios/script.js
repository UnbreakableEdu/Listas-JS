Promise.resolve()
  .then(exercicio1)
  .then(exercicio2)
  .then(exercicio3)
  .then(exercicio4)
  .then(exercicio5)
  .then(exercicio6)
  .then(exercicio7)
  .then(exercicio8)
  .then(exercicio9);

//Cristian me ajudou a descobrir essa maravilha chamada promise

function exercicio1() {
  const times = [];
  let melhorTime;

  for (let contador = 0; contador < 2; contador++) {
    const nome = String(prompt("Insira o nome do time:"));
    const gols = Number(prompt("Insira o número de gols feitos pelo time:"));

    const dadosTimes = {
      nome,
      gols,
    };

    times.push(dadosTimes);
  }

  times.map((time, indice) => {
    if (indice === 0) melhorTime = time;

    if (time.gols >= melhorTime.gols) melhorTime = time;
  });

  alert(`O melhor time é o(a) ${melhorTime.nome}`);
}

function exercicio2() {
  const siglas = [
    {
      nome: "Carioca",
      state: "RJ",
    },
    {
      nome: "Paulista",
      state: "SP",
    },
    {
      nome: "Mineiro",
      state: "MG",
    },
  ];
  let usuarioCategoria = false;
  let siglaDoUsuario = "";

  function perguntaSigla() {
    return String(prompt("Insira a sigla do estado que você nasceu:"));
  }

  const siglaLocalizacaoUsuario = perguntaSigla();

  for (let sigla of siglas) {
    let siglaEhIgual = sigla.state === siglaLocalizacaoUsuario;

    if (siglaEhIgual) {
      usuarioCategoria = true;
      siglaDoUsuario = sigla.nome;

      break;
    }
  }

  if (usuarioCategoria) {
    alert(`Olá, bom saber que você é de ${siglaDoUsuario}.`);
  } else {
    alert(`Desculpe, local desconhecido.`);
  }
}

function exercicio3() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const NumberEscolhidoUsuario = Number(prompt("Escolha um número de 1 a 12:"));

  for (let indiceMes in meses) {
    let ehMesCorreto = Number(indiceMes) + 1 === NumberEscolhidoUsuario;

    if (ehMesCorreto) {
      console.log(meses[indiceMes]);
      alert(`Você o número do mês de ${meses[indiceMes]}!`);

      break;
    }
  }
}

function exercicio4() {
  const taxaValorMenor20 = 0.3;
  const taxaValorMaior20 = 0.45;
  let custoFinal = 0;

  const custoProduto = Number(prompt("Quantos reais custará o produto?"));

  if (custoProduto < 20) {
    custoFinal = custoProduto * (taxaValorMenor20 + 1);
  } else {
    custoFinal = custoProduto * (taxaValorMaior20 + 1);
  }

  alert(`O valor final do produto será de R$ ${custoFinal} !`);
}

function exercicio5() {
  const primeiraNota = Number(prompt("Insira a primeira nota:"));
  const segundaNota = Number(prompt("Insira a segunda nota:"));
  const mediaDasNotas = (primeiraNota + segundaNota) / 2;
  let conceito = "",
    estaAprovado = false;

  if (mediaDasNotas < 4) {
    conceito = "E";
    estaAprovado = false;
  } else if (mediaDasNotas >= 4 && mediaDasNotas <= 6) {
    conceito = "D";
    estaAprovado = false;
  } else if (mediaDasNotas >= 6 && mediaDasNotas <= 7.5) {
    conceito = "C";
    estaAprovado = false;
  } else if (mediaDasNotas >= 7.5 && mediaDasNotas <= 9) {
    conceito = "B";
    estaAprovado = true;
  } else {
    conceito = "A";
    estaAprovado = true;
  }

  const data = {
    primeiraNota,
    segundaNota,
    mediaNota: mediaDasNotas,
    conceito,
    situacaoEscolar: estaAprovado ? "APROVADO" : "REPROVADO",
  };

  alert(`Primeira nota: ${data.primeiraNota}`);
  alert(`Segunda nota: ${data.segundaNota}`);
  alert(`Média final: ${data.mediaNota}`);
  alert(`Conceito que você se encaixa: ${data.conceito}`);
  alert(`Você foi ${data.situacaoEscolar}!`);
}

function exercicio6() {
  const taxaAumentoRendimento = [0.15, 0.12, 0.1, 0.07, 0.04];
  let salarioFinalAumentado = 0,
    taxaTrabalhadorSalario = 0;

  const salarioTrabalho = Number(prompt("Quantos reais você ganha por mês?"));

  if (salarioTrabalho <= 400) {
    salarioFinalAumentado = salarioTrabalho * (taxaAumentoRendimento[0] + 1);
    taxaTrabalhadorSalario = taxaAumentoRendimento[0];
  } else if (salarioTrabalho < 400 && salarioTrabalho <= 700) {
    salarioFinalAumentado = salarioTrabalho * (taxaAumentoRendimento[1] + 1);
    taxaTrabalhadorSalario = taxaAumentoRendimento[1];
  } else if (salarioTrabalho < 700 && salarioTrabalho <= 1000) {
    salarioFinalAumentado = salarioTrabalho * (taxaAumentoRendimento[2] + 1);
    taxaTrabalhadorSalario = taxaAumentoRendimento[2];
  } else if (salarioTrabalho < 1000 && salarioTrabalho <= 1500) {
    salarioFinalAumentado = salarioTrabalho * (taxaAumentoRendimento[3] + 1);
    taxaTrabalhadorSalario = taxaAumentoRendimento[3];
  } else if (salarioTrabalho < 1500 && salarioTrabalho <= 2000) {
    salarioFinalAumentado = salarioTrabalho * (taxaAumentoRendimento[4] + 1);
    taxaTrabalhadorSalario = taxaAumentoRendimento[4];
  } else {
    salarioFinalAumentado = "N/D";
    taxaTrabalhadorSalario = "N/D";
  }

  alert(
    `Tendo uma taxa de aumento de ${
      taxaTrabalhadorSalario * 100
    }%, seu salário final, após correção, será de R$ ${Math.round(
      salarioFinalAumentado
    )}.`
  );
}

function exercicio7() {
  const opcaoCalculo = Number(prompt("Insira um número de 0 a 4:"));
  const primeiroNumero = Number(prompt("Insira o primeiro número:"));
  const segundoNumero = Number(prompt("Insira o segundo número:"));

  let resultado;

  switch (opcaoCalculo) {
    case 0:
      resultado = primeiroNumero + segundoNumero;
      break;
    case 1:
      resultado = primeiroNumero - segundoNumero;
      break;
    case 2:
      resultado = primeiroNumero * segundoNumero;
      break;
    case 3:
      resultado = primeiroNumero / segundoNumero;
      break;
    case 4:
      resultado = (primeiroNumero + segundoNumero) / 2;
      break;
    default:
      resultado = "Valor errado. Cálculo inválido.";
      break;
  }

  alert(`O resultadoa da conta é `);
  alert(resultado);
}

function exercicio8() {
  const primeiroNumero = Number(prompt("Insira o primeiro número:"));
  const segundoNumero = Number(prompt("Insira o segundo número:"));

  const restoDivisao = primeiroNumero % segundoNumero;

  let resultado = 0;

  switch (restoDivisao) {
    case 1:
      resultado = primeiroNumero + segundoNumero;
      alert(`A soma dos números é ${resultado}`);

      mensagemBonus = `O resto da divisão é ${restoDivisao}`;
      alert(mensagemBonus);

      break;
    case 2:
      function parNumber(numero) {
        const parNumero =numero% 2 === 0;

        return parNumero;
      }

      alert(
        `O primeiro número é ${parNumero(primeiroNumero) ? "par" : "ímpar"}.`
      );
      alert(
        `O segundo número é ${parNumber(segundoNumero) ? "par" : "ímpar"}.`
      );

      break;
    case 3:
      resultado = (primeiroNumero + segundoNumero) * primeiroNumero;

      alert(`O resultado é igual a ${resultado}`);

      break;
    case 4:
      if (segundoNumero !== 0) {
        resultado = (primeiroNumero + segundoNumero) / segundoNumero;

        alert(`O resultado é igual a ${resultado}.`);
      } else {
        resultado = primeiroNumero ** 2;
        alert(`O quadrado do primeiro número é ${primeiroNumero}.`);

        resultado = segundoNumero ** 2;
        alert(`O quadrado do segundo número é ${segundoNumero}.`);
      }

      break;

    default:
      alert("Valor inválido. Parabéns! 👏🏼");

      break;
  }
}

function exercicio9() {
  const primeiroHomemIdade = Number(
    prompt("Insira a idade do primeiro homem:")
  );
  const segundoHomemIdade = Number(prompt("Insira a idade do segundo homem:"));
  const primeiraMulherIdade = Number(
    prompt("Insira a idade da primeira mulher:")
  );
  const segundaMulherIdade = Number(
    prompt("Insira a idade da segunda mulher:")
  );

  let homemMaisVelho,
    homemMaisNovo,
    mulherMaisVelha,
    mulherMaisNova,
    resultadoSoma,
    resultadoMulti;

  if (primeiroHomemIdade > segundoHomemIdade) {
    homemMaisVelho = primeiroHomemIdade;
    homemMaisNovo = segundoHomemIdade;
  } else {
    homemMaisVelho = segundoHomemIdade;
    homemMaisNovo = primeiroHomemIdade;
  }

  if (primeiraMulherIdade > segundaMulherIdade) {
    mulherMaisVelha = primeiraMulherIdade;
    mulherMaisNova = segundaMulherIdade;
  } else {
    mulherMaisVelha = segundaMulherIdade;
    mulherMaisNova = primeiraMulherIdade;
  }

  resultadoSoma = homemMaisVelho + mulherMaisNova;
  resultadoMulti = homemMaisNovo * mulherMaisVelha;

  alert(
    `Somando a idade do homem mais velho com a mulher mais nova temos: ${resultadoSoma}`
  );
  alert(
    `Multiplicando a idade do homem mais novo com a mulher mais velha temos: ${resultadoMulti}`
  );
}
