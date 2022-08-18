    import Sounds from "./sounds.js"

  

    export default function Timer({
        minutesDisplay,
        secondsDisplay,
        resetControls,
      
      }) {
      
        let timerTimeOut
        let minutes = Number(minutesDisplay.textContent)
      
      
        function updateDisplay(minutes, seconds) {
          minutesDisplay.textContent = String(minutes).padStart(2, '0') //esses minutos serão os da função
          secondsDisplay.textContent = String(seconds).padStart(2, '0')
          //para mudar o conteúdo de um documento html usa o .textContent
          //funcionalidade para preencher com uma string o que vem antes daquela contagem...nesse contexto*/
        }
      
        // Event-driven
        //Programação imperativa
        //callback (função será executada após o click)
      
        function reset() {
          updateDisplay(minutes, 0)//esses minutos serão os do let criado no inicio ou global
          clearTimeout(timerTimeOut)
        }
      
      
        function countdown() {
          timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
      
            updateDisplay(minutes, 0)
      
            if(minutes <= 0) {
              resetControls()
              return //serve para parar de executar o resto do código
            }
      
            if(seconds <= 0){
              seconds = 3
              --minutes
              //minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
            }
      
            updateDisplay(minutes, String(seconds - 1))
      
            countdown() //recursividade, uma função que irá repeti-la
          }, 1000 )
        }
      
        function updateMinutes(newMinutes) {
          minutes = newMinutes
        }
      
        function hold(){
          clearTimeout(timerTimeOut)
        }
      
        return{
          countdown,
          reset,
          updateDisplay,
          updateMinutes,
          hold
        }
      }