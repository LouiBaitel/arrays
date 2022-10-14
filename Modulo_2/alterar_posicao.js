const listaDeChamada = ['João','Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//Inicio, quantidade, substituto
listaDeChamada.splice(1,2,'Rodrigo');
console.log(`Lista de chamadas: ${listaDeChamada}`);

//Assim podemos colocar novos elementos em qualquer posição	da lista
listaDeChamada.splice(2,0,'Marcelo');
console.log(`Lista de chamadas: ${listaDeChamada}`);
