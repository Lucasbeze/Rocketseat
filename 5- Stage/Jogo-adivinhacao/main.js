//variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts= 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter') {
        handleResetClick()
    }
    })

// Funções callback
function handleTryClick (event) {
    event.preventDefault() //nao faca o padrao(não envie o formulario, pois o padrao de um buttao dentro do formulario e enviar ele.)

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen

        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}