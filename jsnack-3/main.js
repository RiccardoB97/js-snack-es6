// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const returnValuesBetween = numberArray.filter((number) => {
    const x = 4;
    const y = 8;
    return number > x && number < y
})

console.log(returnValuesBetween);