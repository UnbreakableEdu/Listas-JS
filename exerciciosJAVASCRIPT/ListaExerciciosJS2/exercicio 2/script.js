const monstrosASeremDerrotadosPorLevel = 150
const qtdDeMonstrosDerrotados = Number( prompt('Quantos monstros você já matou?') )
const level = qtdDeMonstrosDerrotados / monstrosASeremDerrotadosPorLevel

const mensagemFinal = `Você se encontra no nível ${level}.`
alert(mensagemFinal)
