/*
3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. 
La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/


const objName = require ("./names.js");
const arrHobby = require ("./hobbies.js");


//IMPORTAZIONE CON ESM
//import objName from "./names.js";
//import arrHobby from "./hobbies.js";

function output(){
return {
    fullName: objName("Mario", "Rossi"),
    hobbies: arrHobby("calcio", "basket", "tennis")
};

}
console.log(output());