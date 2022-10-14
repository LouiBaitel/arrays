let nomes = ['ana Julia', 'Caio vinícius', 'BIA silva'];

const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());
console.log('Nomes em maiúsculo: ' + nomesAtualizados);

const nomesAtualizados2 = nomes.map((nome) => nome.toLocaleLowerCase());
console.log('Nomes em minúsculo: ' + nomesAtualizados2);