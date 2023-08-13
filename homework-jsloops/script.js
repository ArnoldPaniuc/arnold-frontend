function calculMedieAritmetica(array) {
    let suma = 0;
    let numere = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            suma += array[i];
            numere++;
        }
    }

    if (numere === 0) {
        return null; // Pentru a evita împărțirea la zero
    } else {
        const medie = suma / numere;
        return medie;
    }
}

console.log("Media:", calculMedieAritmetica([20, 4, 67, 2, 59, 34, 56.7]));

function calculSumaNumere(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            suma += array[i];
        }
    }

    return suma;
}

console.log("Suma:", calculSumaNumere([10, 45, "abc", 13.5, true, 56.7, 74, "def", 34]));

function fibonacci(n) {
    const fibLant = [0, 1];
    
    while (fibLant.length < n) {
        fibLant.push(fibLant[fibLant.length - 1] + fibLant[fibLant.length - 2]);
    }
    
    return fibLant;
}

const primFib = fibonacci(20);
console.log("Primele 20 numere:", primFib);
