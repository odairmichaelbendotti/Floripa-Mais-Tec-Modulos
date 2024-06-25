function calcularImpostoDeRenda(salario) {
    let impostoDeRenda = 0;

    if (salario > 4664.68) {
        impostoDeRenda += (salario - 4664.68) * 0.275;
        salario = 4664.68;
    }
    if (salario > 3751.05) {
        impostoDeRenda += (salario - 3751.05) * 0.225;
        salario = 3751.05;
    }
    if (salario > 2826.65) {
        impostoDeRenda += (salario - 2826.65) * 0.15;
        salario = 2826.65;
    }
    if (salario > 2112) {
        impostoDeRenda += (salario - 2112) * 0.075;
    }

    return impostoDeRenda.toFixed(2);
}

let salarioBruto = 5000;
console.log(`O valor do Imposto de Renda para um salário de R$ ${salarioBruto} é R$ ${calcularImpostoDeRenda(salarioBruto)}`);
