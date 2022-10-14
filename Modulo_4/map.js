const notas = [10, 9, 8, 7, 6];

//O map precisa de uma função dentro de si.
//O map retorna um dado como um novo array.
const notasAtualizadas = notas.map(nota => nota == 10? nota : nota + 1 );

console.log(notasAtualizadas);