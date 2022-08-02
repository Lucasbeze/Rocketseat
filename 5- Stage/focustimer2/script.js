
                                                                // BOTOES DOS FUNCIONAMENTOS DO RELOGIO

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMais = document.querySelector('.aumentar')
const buttonMenos = document.querySelector('.diminuir')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeout

                                                                //AÇOES DO BOTAO DO RELOGIO

function countdown() {
    timerTimeout = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if( seconds <= 0 ) {
            seconds = 60

            minutesDisplay.textContent = String(minutes -1).padStart(2, '0')
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

        if( minutes <= 0 ) {

            minutesDisplay.textContent = "00"
            secondsDisplay.textContent = "00"
            return
        }
        
        countdown()
    }, 1000)
}

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countdown()
})
    
buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeout)
})

buttonStop.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeout)
    minutesDisplay.textContent = "25" 
    secondsDisplay.textContent = "00"
})

buttonMais.addEventListener('click', function(){   
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonMenos.addEventListener('click', function(){   
        minutesDisplay.textContent =  Number(minutesDisplay.textContent) -5 
        if ( minutesDisplay.textContent <= 0) {
            minutesDisplay.textContent = "00"
        }
})

                                                                //BOTOES DOS SONS 

const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonFireplace = document.querySelector('.fireplace')
const buttonPressFlorest = new Audio('../sons/Floresta.wav')
const buttonPressRain = new Audio('../sons/Chuva.wav')
const buttonPressCoffe = new Audio('../sons/Cafeteria.wav')
const buttonPressFireplace = new Audio('../sons/Lareira.wav')


                                                                //AÇAO DO BOTAO DOS SONS 

buttonFlorest.addEventListener('click', function(){
    buttonPressFlorest.play()
    buttonPressFlorest.loop = true
})

buttonRain.addEventListener('click', function(){    
    buttonPressRain.play()
    buttonPressRain.loop = true
})

buttonCoffe.addEventListener('click', function(){
    buttonPressCoffe.play()
    buttonPressCoffe.loop = true
})

buttonFireplace.addEventListener('click', function(){  
    buttonPressFireplace.play()
    buttonPressFireplace.loop = true
})
