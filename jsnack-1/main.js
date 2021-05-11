// Snack 1:
// Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e
// peso.
let bikes = [
    {
        nome: 'Giant TCR',
        peso: 6.8
    },
    {
        nome: 'Cannondale',
        peso: 7.3
    },
    {
        nome: 'Specialized',
        peso: 6.8
    },
    {
        nome: 'Pinarello',
        peso: 0.85
    },
    {
        nome: 'Hi-mode',
        peso: 7.6
    },
    {
        nome: 'Zebra',
        peso: 2.4
    },
];


var findsLighterBike = () => {
    let bikeWeights = []
    for (let i = 0; i < bikes.length; i++) {
        let { peso } = bikes[i]
        bikeWeights.push(peso)
    }
    let lighterBike = (Math.min(...bikeWeights))
    return lighterBike
}




// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const bikeEl = document.getElementById('bici')
var bike = findsLighterBike()

bikeEl.insertAdjacentHTML('afterbegin', `
The lightest bike weights ${bike}kg 
`)
