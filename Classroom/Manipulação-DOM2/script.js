const h1 = document.querySelector('h1')
const form = document.querySelector('form')
const input = document.querySelector('input')

let isVisible = true

input.addEventListener('input', handleKeyDown)

function handleKeyDown(event) {
  h1.innerText = event.currentTarget.value
}