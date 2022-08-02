/*
Capturar 2 números
e fazer as operações matemáticas
de soma, subtração, multiplicação,
divisão e resto da divisão.

E para cada operação, mostrar um alerta
 com o resultado.
*/

let firstNumber = prompt('Digite o primeiro número: ')
let secondNumber = prompt('Digite o segundo numero: ')

firstNumber = Number(firstNumber)
secondNumber = 2

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)