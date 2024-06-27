let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let guardarPares = []
let guardarImpares = []

function numerosPares() {
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0 ) {
            guardarPares.push(numeros[i])
        } else {
            guardarImpares.push(numeros[i])
        }
    }
}

numerosPares()
console.log(guardarPares)
console.log(guardarImpares)