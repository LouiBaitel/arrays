const alunos = ['João','Juliana','Caio','Ana'];
const medias = [10,7,9,6];
                //   [0]     [1]
let notasEAlunos = [alunos, medias];

//Primeiro passamos a posição do array na lista notasEAlunos
//Depois passamos o índice correspondente a alunos
console.log(`${notasEAlunos[0][0]}, a sua média é ${notasEAlunos[1][0]}.`);