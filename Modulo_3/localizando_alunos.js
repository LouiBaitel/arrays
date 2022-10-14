const alunos = ['João','Juliana','Caio','Ana'];
const medias = [10,7,9,6];

let notasEAlunos = [alunos, medias];

const exibeNomeeNota = (nomeDoAlunos) => {
    if (notasEAlunos[0].includes(nomeDoAlunos)){
        let indice = notasEAlunos[0].indexOf(nomeDoAlunos);
        return `${notasEAlunos[0][indice]}, a sua média é ${notasEAlunos[1][indice]}`;
    } else {
        return `O aluno ${nomeDoAlunos} não está nessa sala!`
    }
}

console.log(exibeNomeeNota("João"));
console.log(exibeNomeeNota("Maquinhos"));