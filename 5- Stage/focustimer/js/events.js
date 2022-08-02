import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundoff,
    buttonSoundOn,
    buttonStop
} from "./elements.js"

export default function ({controls, timer, sound}) {

    buttonPlay.addEventListener("click", function(){
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click',function(){
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function(){
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonSoundoff.addEventListener('click', function(){
        buttonSoundOn.classList.remove('hide')
        buttonSoundoff.classList.add('hide')
        sound.bgAudio.play()
    })

    buttonSoundOn.addEventListener('click', function(){
        buttonSoundOn.classList.add('hide')
        buttonSoundoff.classList.remove('hide')
        sound.bgAudio.pause()
    })

    buttonSet.addEventListener('click', function(){ 
        let newMinutes = controls.getMinutes()

        if(!newMinutes) {
            timer.reset()
            return
        }
        
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        
    })

    }