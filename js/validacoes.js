function validaNum(numReconhecido)
{
    const numero = +numReconhecido

    if (numInvalido(numero)){
        numeroFalado.innerHTML += "<div>O valor precisa ser numérico</div>"
        return
    }
    
    if (numMaiorOuMenor(numero)) {
        numeroFalado.innerHTML += `
            <div>O número precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="principal__titulo">Você Acertou!!!</h2>
            <h3 class="pricipal__texto">O número secreto era ${numeroSecreto}</h3>
            <button class="botao" onclick="recarregarPagina()">Jogar de novo</button>
        `
    } else if (numero > numeroSecreto) {
        numeroFalado.innerHTML += `
            <p>O número secreto é menor <i class="fa-solid fa-down-long"></i></p>
        `
    } else if (numero < numeroSecreto) {
        numeroFalado.innerHTML += `
            <p>O número secreto é maior <i class="fa-solid fa-up-long"></i></p>
        `
    }
}

function numMaiorOuMenor(numero) 
{
    return numero > maiorValor || numero < menorValor
}

function numInvalido(numero) {
    return Number.isNaN(numero)
}

function recarregarPagina()
{
    location.reload()
}
