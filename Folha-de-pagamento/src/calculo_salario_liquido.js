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

    return inss;
}

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

    return impostoDeRenda;
}

function calcularSalarioLiquido(salarioBruto, outrosDescontos) {
    const inss = calcularINSS(salarioBruto);
    const impostoDeRenda = calcularImpostoDeRenda(salarioBruto - inss); // Base de cálculo do IR é o salário bruto menos o INSS
    const salarioLiquido = salarioBruto - inss - impostoDeRenda - outrosDescontos;

    return salarioLiquido.toFixed(2);
}

let salarioBruto = 5000;
let outrosDescontos = 300;
console.log(`Salário Bruto: R$ ${salarioBruto}`);
console.log(`INSS: R$ ${calcularINSS(salarioBruto).toFixed(2)}`);
console.log(`Imposto de Renda: R$ ${calcularImpostoDeRenda(salarioBruto - calcularINSS(salarioBruto)).toFixed(2)}`);
console.log(`Outros Descontos: R$ ${outrosDescontos.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${calcularSalarioLiquido(salarioBruto, outrosDescontos)}`);
