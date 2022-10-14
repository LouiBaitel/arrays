const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//O reduce precisa sempre de um iterador e um valor atual. Soma todos os valores de um array e transforma em um int.
//O 0 é o valor inicial da acumulação, como se tivessemos definido varialvel = 0  fora da função.
function getMedia(nomedaSala,sala){
    const somaDasNotas = sala.reduce((iterador, atual) => atual + iterador, 0);
    return `A média da sala de ${nomedaSala} é ${somaDasNotas/sala.length}`;
}

console.log(getMedia('JavaScript',salaJS));
console.log(getMedia('Java',salaJava));
console.log(getMedia('Python',salaPython));

//----------------------------------------

const notas = [10, 6.5, 8, 7];

const media = (notas.reduce((iterador, atual) => atual + iterador, 0)/notas.length);

console.log(`A média das notas é ${media}`);