const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiane', 'Andrea', 'Carlos', 'Paulo', 'Bia', 'Vivian','Isabela','Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

console.log(`Tamanho do array: ${nomes.length}`);

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala1: ${sala1}`);
console.log(`Alunos da sala2: ${sala2}`);