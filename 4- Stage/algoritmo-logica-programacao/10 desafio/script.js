let numberOne =  prompt("Digite o primeiro número: ")
let numberTwo =  prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let soma = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma dos dois números é : ` + soma)
alert(`A subtração dos dois números é: ` + sub)
alert(`A multiplicação dos dois números é: ` + mult)
alert(`A divisão dos dois números é: ` + div)
alert(`A o resto da divisão dos dois números é: ` + rest)

if(soma %2 === 0){
    alert(`A soma dos dois números é par: ` + soma)
}else {
    alert(`A soma dos dois números é impar: ` + soma)
}