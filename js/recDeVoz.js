const numeroFalado = document.getElementById('numero-falado')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento)
{
    numReconhecido = evento.results[0][0].transcript
    exibeNum(numReconhecido)
    validaNum(numReconhecido)
}

function exibeNum(numReconhecido)
{
    numeroFalado.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${numReconhecido}</span>
    `
}

recognition.addEventListener("end", () => recognition.start())
