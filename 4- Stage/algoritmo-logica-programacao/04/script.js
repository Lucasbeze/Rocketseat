/*
Solicitar o nome do aluno e as 3 notas
do bimestre, calcular a média daquele aluno.

A média positiva deverá ser maior que 6

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre,
Motivar o aluno a dar seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

let nomeAluno = prompt ('Digite seu nome: ')
let primeiraNota = prompt ('Digite a primeira nota: ')
let segundaNota = prompt ('Digite a segunda nota: ')
let terceiraNota = prompt ('Digite a terceira nota: ')

primeiraNota= Number(primeiraNota)
segundaNota= Number(segundaNota)
terceiraNota=Number(terceiraNota)

let cal = (primeiraNota + segundaNota + terceiraNota) / 3

let result = cal >= 6

cal = cal.toFixed(2)

if (result){
    alert ('Parabéns você passou!, ' + nomeAluno + ' sua média foi de : ' + cal)
}else if(cal <= 3){
alert('Reprovado')
}
else {
    alert('Sinto muito '+ nomeAluno + ' mas voce vai estar de recuperação sua média foi de : ' + cal)
}
