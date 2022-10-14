const nota = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < nota.length; i++) {
    somaDasNotas += nota[i];
}

let media = somaDasNotas / nota.length; 

console.log(`A média das notas é ${media}`);