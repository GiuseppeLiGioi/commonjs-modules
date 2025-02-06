/*
2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
2. Esporta la funzione dal file.
*/



function arrHobby(hobbyOne, hobbyTwo, hobbyThree){
let arrayHobby = [];
arrayHobby.push(hobbyOne, hobbyTwo, hobbyThree);
console.log(arrayHobby) ;
}


arrHobby("calcio", "basket", "tennis");


module.exports = arrHobby;



//ESPORTAZIONE CON ESM
//export default arrHobby;