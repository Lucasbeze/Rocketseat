let estudantes = [
    { //0
        nome:'Lucas',
        nota1: 8,
        nota2: 7,
    },
    { //1
        nome:'Vitor',
        nota1: 4,
        nota2: 9,
    },
    { //2
        nome:'Matheus',
        nota1: 9,
        nota2: 8,
    },
]


function calcular (nota1,nota2){
    return ((nota1 + nota2) / 2)
}

function printMedia(estudantes){
    return `
        A média do aluno ${estudantes.nome} é : ${calcular(estudantes.nota1,estudantes.nota2)}
    `
}

for(let estudante of estudantes) {

   let estudantesNames = printMedia(estudante)
    alert(estudantesNames)
}


