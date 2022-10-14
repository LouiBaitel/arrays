const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

//É um método callback, pois seu parâmetro não é um dado e sim outra função.
//É uma função que chama outra função.
//Não é necessário indicar o índice, visto que o for esta diretamente ligado a cada elemento da lista
notas.forEach(nota => {
    somaDasNotas += nota;
});

/*
notas.forEach(function(nota) {
    somaDasNotas += nota;
});
*/

let media = somaDasNotas / notas.length; 

console.log(`A média das notas é ${media}`);