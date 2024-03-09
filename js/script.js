import { AlertError } from "./alert-error.js"
import { Modal } from './modal.js'
import { notANumber, calculateIMC } from "./utils.js"

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// 3 maneiras de criar e atribuir função a um elemento
form.onsubmit = function(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    inputWeight.oninput = () => AlertError.close()
    inputHeight.oninput = () => AlertError.close()

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }
    
    AlertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage( result ) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}
