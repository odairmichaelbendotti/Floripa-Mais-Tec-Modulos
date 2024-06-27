let adultos = []

let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
];

function filtrarAdultos() {
    for (let i = 0; i < pessoas.length; i++){
        if (pessoas[i].idade >= 18){
            adultos.push(pessoas[i].nome)
        }
    }
}

filtrarAdultos()
console.log(adultos)