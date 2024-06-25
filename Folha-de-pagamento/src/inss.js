function calcularINSS(salario) {
    let inss = 0;
    
    if (salario <= 1302) {
        inss = salario * 0.075;
    } else if (salario <= 2571.29) {
        inss = 1302 * 0.075 + (salario - 1302) * 0.09;
    } else if (salario <= 3856.94) {
        inss = 1302 * 0.075 + (2571.29 - 1302) * 0.09 + (salario - 2571.29) * 0.12;
    } else if (salario <= 7507.49) {
        inss = 1302 * 0.075 + (2571.29 - 1302) * 0.09 + (3856.94 - 2571.29) * 0.12 + (salario - 3856.94) * 0.14;
    } else {
        inss = 1302 * 0.075 + (2571.29 - 1302) * 0.09 + (3856.94 - 2571.29) * 0.12 + (7507.49 - 3856.94) * 0.14;
    }

    return inss.toFixed(2);
}

// Exemplo de uso
let salario = 4000;
console.log(`O valor do INSS para um salário de R$${salario} é R$${calcularINSS(salario)}`);