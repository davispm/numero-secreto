const menorValor = 0
const maiorValor = 1000
const numeroSecreto = genNum()

function genNum()
{
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor

console.log(numeroSecreto)
