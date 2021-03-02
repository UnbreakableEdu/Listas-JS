const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

Promise.resolve()
  .then(() => exercicio1(testNumbers))
  .then(() => exercicio2(testNumbers))
  .then(exercicio3)
  .then(() => exercicio4(testNumbers))
  .then(() => exercicio5(testNumbers))
  .then(exercicio6)
  .then(exercicio7)
  .then(exercicio8)
  .then(exercicio9)
  .then(exercicio10)
  .then(exercicio11)
  .then(exercicio12)
  .then(exercicio13)
  .then(exercicio14)
  .then(exercicio15)
  .then(exercicio16)
  .then(exercicio17)


  function exercicio1(numbers) {
  
    let evenNumbersAmount = 0,
      evenNumbersSum = 0,
      oddNumbers = []
  
    numbers.map(number => {
      let isEven = number % 2 === 0
  
      if (isEven) {
        evenNumbersSum += number
        evenNumbersAmount++
      } else {
        oddNumbers.push(number)
      }
    })
  
    console.table({
      oddNumbers: oddNumbers.join(', '),
      evenNumbersAverage: (Math.round(evenNumbersSum / evenNumbersAmount))
    })
  }
  
  function exercicio2(numbers) {
  
    numbers.map(number => {
      if (number % 2 === 0) {
        console.log({ evenNumber: number })
      } else {
        console.log({ oddNumber: number })
      }
    })
  }
  
  function exercicio3() {
  
    let evenSum = 0,
      oddSum = 0
  
    for (let counter = 1; counter <= 100; counter++) {
      if (counter % 2 === 0) {
        evenSum += counter
      } else {
        oddSum += counter
      }
    }
  
    console.table({
      oddNumbersSum: oddSum,
      evenNumbersSum: evenSum
    })
  }
  
  function exercicio4(numbers) {
    let ageSum = 0,
      ageAmount = 20
  
    numbers.map(number => {
      ageSum += number
    })
  
    console.table({
      ageAverage: ageSum / ageAmount
    })
  }
  
  function exercicio5(numbers) {
    let negativeNumbersAmount = 0
  
    numbers.map(number => {
      if (number < 0) {
        negativeNumbersAmount++
      }
    })
  
    console.table({
      negativeNumbersAmount
    })
  }

function exercicio6(){
    let gastoTinta = 0.02, qtdTinta, qtdParcial, qtdTintaFinal, randomText;

qtdTinta = prompt("Informe o quanto de tinta ainda tem em sua caneta (mL):");
qtdTintaFinal =qtdTinta;

do {
  qtdTinta = qtdTintaFinal;
  randomText = prompt("Enquanto tem tinta, a caneta escreve o quê?");

  qtdParcial = Number (qtdTinta * gastoTinta);

  qtdTintaFinal = Number (qtdTinta - qtdParcial);

  const qtdFinal = qtdTintaFinal.toFixed(2);

  const mensagemFinal = `Ainda resta ${qtdFinal} mL de tinta...`;

  alert(mensagemFinal)

  
} while (qtdTintaFinal > 0)

alert("Acabou a tinta da caneta!");
}

function exercicio7(){
    let smallestHeight = 0,
  highestHeight = 0,
  sumHeight = 0,
  averageHeight = 0,
  timesHaveAsked = 0,
  hasGrantedContinuation = false,
  height = 0,
  highestID,
  smallestID,
  identity,
  isFirstRound = true;

do {
  identity = Number(prompt("Digite seu número de inscrição"));
  height = Number(prompt("Digite sua altura"));

  timesHaveAsked++;
  sumHeight += height;

  if (isFirstRound) {
    smallestID = identity;
    highestID = identity;
    smallestHeight = height;
    highestHeight = height;
    isFirstRound = false;
  }

  if (height > highestHeight) {
    highestHeight = height;
    highestID = identity;
  } else if (height < smallestHeight) {
    smallestHeight = height;
    smallestID = identity;
  }

  hasGrantedContinuation =
    prompt("Deseja continuar? [S]im ou [N]ão") !== "N" ? true : false;
} while (hasGrantedContinuation);

averageHeight = sumHeight / timesHaveAsked;

alert(
  `O atleta cujo número de inscrição é ${smallestID}, possui a menor altura (${smallestHeight})`);
alert(
  `O atleta cujo número de inscrição é ${highestID}, possui a maior altura (${highestHeight})`);
alert(`A média das ALTURAS é ${averageHeight.toFixed(2)}`);
    
}

function exercicio8(){

    let nome, idade, i, contador = 0, contadorFim = 0, nomeRaiz = [];

    for (i = 1; i <= 50; i++) {
        contador = contadorFim;
    
        nome = prompt("Informe seu nome:")
        idade = prompt("Informe sua idade:")
    
        
        if (idade == 18){
            nomeRaiz.push(nome);
            }
    
        if (idade>20) {
        contadorFim = contador + 1;
        }
    
    }
    
    const mensagemFinal1 = `${nomeRaiz} são os alunos com 18 anos.`;
    
    alert(mensagemFinal1);
    
    const mensagemFinal2 = `Há ${contadorFim} alunos com mais de 20 anos.`;
    
    alert(mensagemFinal2);
}

function exercicio9(){

    let yFinal = [], xIndex = 0

for (x = 1.0; x < 5.1; x+=0.1){

  xIndex = Number(x.toFixed(1))

  yFinal.push({
      counter: xIndex,
      result: (
        (3 + (2 * xIndex) + ((6 * xIndex) ** 2))
        /
        ((1 + (9 * xIndex) + ((16 * xIndex) ** 2)))
      ).toFixed(5),
      structure: `
        (3 + 2(${xIndex}) + 6(${xIndex})^2)/(1 + 9(${xIndex}) + 16(${xIndex})^2)
      `
    })
  }

  console.log(yFinal)
}
function exercicio10(){
  let counter = 1,
  hasFinished = false,
  number = 0,
  minNumber = 0,
  maxNumber = 0,
  isFirstRound = true
  
  do {
      number = Number(prompt(`Qual número você quer adicionar para a sequência!`))

      counter ++

      if (number === 0) {
          hasFinished = true
      }
      if (isFirstRound) {
          minNumber = number
          maxNumber = number
          isFirstRound = false
      }
      if (number > maxNumber && number !== 0) {
          maxNumber = number
      } else if (number < minNumber && number !== 0) {
          minNumber = number  
      }
  } while (!hasFinished)

  alert(`max number = ${maxNumber} | min number = ${minNumber} `)
}

function exercicio11(){
  let numberSum = 0,
  numbersArray = []
  
  for(let counter = 1; counter<=100; counter++){
      numberSum += counter
      numbersArray.push(counter)
  }
  alert(`NumberSum = ${numberSum}`)
  alert(`${numbersArray.join(' + ')}`)
}

function exercicio12(){
  let numberSum = 0,
  numbersArray = []
  
  for(let counter = 1; counter<=100; counter++){
      numberSum += 1/counter
      numbersArray.push(`1/${counter}`)
  }
  alert(`NumberSum = ${numberSum.toFixed(2)}`)
  alert(`${numbersArray.join(' + ')}`)
}
function exercicio13() {
  const calculations = []
  let calcResult = 0,
    secondCounter = 0

  const limitNumber = Number(prompt('Defina um valor numérico positivo para N:'))

  secondCounter = limitNumber

  for (let counter = 1; counter <= limitNumber; counter++) {
    calcResult += counter / secondCounter

    calculations.push(`${counter}/${secondCounter}`)

    secondCounter--
  }

  alert(`Resultado do cálculo: ${calcResult}`)
  alert(`Cálculo: [${calculations.join(' + ')}]`)
}

function exercicio14() {
  let S = 0,
    calcOperation = 0,
    maxValue = 51,
    isPlusOperation = true

  for (let counter = 1; counter <= maxValue; counter += 2) {
    calcOperation = (1 / (counter ** 3))

    if (isPlusOperation) {
      S += calcOperation
      isPlusOperation = false
    } else {
      S -= calcOperation
      isPlusOperation = true
    }
  }

  const pi = Math.cbrt(S * 32)

  alert(`O valor de π é igual a ${pi}.`)
}

function exercicio15() {
  let calcResult = 0,
    secondCounter = 0

  const limitNumber = Number(prompt('Defina um valor numérico positivo para N:'))

  secondCounter = limitNumber

  for (let counter = limitNumber; counter >= 2; counter--) {
    if (counter === limitNumber) calcResult = limitNumber
    secondCounter--
    calcResult *= secondCounter
  }

  alert(`Resultado do cálculo: ${calcResult}`)
}

function exercicio16() {
  const calculations = []
  let calcResult = 0,
    secondCounter = 0,
    divisor = 20,
    dividend = 100



  for (let counter = divisor; counter >= 1; counter--) {
    calcResult += counter / numberFactorial(secondCounter)

    calculations.push(`${dividend}/${secondCounter}!`)

      dividend--
      secondCounter++

  }

  alert(`Resultado do cálculo: ${calcResult}`)
  alert(`Cálculo: [${calculations.join(' + ')}]`)
}

function numberFactorial(number) {
  let factorialResult = number

  if (number === 0 || number === 1) return 1

  for (let counter = number - 1; counter >= 1; counter--) {
    factorialResult *= counter
  }

  return factorialResult
}

function exercicio17() {

  let maxRange = 30,
    xWithExponentZero = 1,
    calcResultForE = xWithExponentZero

  const xValue = Number(prompt('Qual o valor de X?'))

  function numberFactorial(number) {
    let factorialResult = number

    if (number === 0 || number === 1) return 1

    for (let counter = number - 1; counter >= 1; counter--) {
      factorialResult *= counter
    }

    return factorialResult
  }

  for (let counter = 1; counter <= maxRange; counter++) {
    calcResultForE += ((xValue ** counter) / numberFactorial(counter))
  }

  alert(`O valor de [e^x] é igual a ${calcResultForE}!`)
}