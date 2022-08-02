
                                                                // BOTOES DOS FUNCIONAMENTOS DO RELOGIO

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMais = document.querySelector('.aumentar')
const buttonMenos = document.querySelector('.diminuir')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

                                                                //AÇOES DO BOTAO DO RELOGIO


function countdown() {
    setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        

        if( seconds <= 0 ) {
            seconds = 2

            minutesDisplay.textContent = String(minutes -1).padStart(2, '0')
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

        if( minutes <= 0 ) {
            return
        }
        
        countdown()
    }, 1000)
}


buttonPlay.addEventListener('click', function(){
    //countdown (contador para funcionar o relogio)
    countdown()
})
    

buttonStop.addEventListener('click', function(){
    //resetar tudo
})

buttonMais.addEventListener('click', function(){   
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonMenos.addEventListener('click', function(){    
        minutesDisplay.textContent =  Number(minutesDisplay.textContent) -5   
})

                                                                //BOTOES DOS SONS 
const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonFireplace = document.querySelector('.fireplace')

                                                                //AÇAO DO BOTAO DOS SONS 
buttonFlorest.addEventListener('click', function(){
    //adicionar o som da florest
})

buttonRain.addEventListener('click', function(){
    //adicionar o som da chuva
})

buttonCoffe.addEventListener('click', function(){
    //adicionar o som da cafeteria
})

buttonFireplace.addEventListener('click', function(){
    //adicionar o som da lareira
})






