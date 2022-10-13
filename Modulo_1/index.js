//Programa que faz a média de quatro notas, sem arrays
/*let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4)/4;

console.log(media);
*/

//Utilizando arrays
/*
Array: Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, e cada elemento se localiza numa posição na lista chamada de índice. 
O índice do array sempre se inicia no 0.
*/

const notas = [10, 6.5, 8, 7.5];

let media = (notas[0]+ notas[1]+ notas[2]+ notas[3])/notas.length;
//array.length trás o tamanho da lista

console.log('A média das notas é: '+ media);

