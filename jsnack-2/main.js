/*Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/

let squadre = [
    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'juve',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'torino',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'genoa',
        puntiFatti: 0,
        falliSubiti: 0,
    },

];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var givesRandomPoint = () => {
    for (let i = 0; i < squadre.length; i++) {
        squadre[i].puntiFatti = getRandomNumber(0, 50)
        squadre[i].falliSubiti = getRandomNumber(0, 50)
    }
    return squadre
}
console.log(givesRandomPoint())



//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
var createsSpecialArray = () => {
    var nuovoArray = [];
    for (let i = 0; i < squadre.length; i++) {
        let { nome, falliSubiti } = squadre[i];
        nuovoArray.push(nome, falliSubiti)
    }
    return nuovoArray
}

console.log(createsSpecialArray());


