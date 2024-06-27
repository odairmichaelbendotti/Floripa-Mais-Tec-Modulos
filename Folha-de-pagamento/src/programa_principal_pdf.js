const readline = require('readline');
const PDFDocument = require('pdfkit');
const fs = require('fs');

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
    const impostoDeRenda = calcularImpostoDeRenda(salarioBruto - inss);
    const salarioLiquido = salarioBruto - inss - impostoDeRenda - outrosDescontos;

    return salarioLiquido.toFixed(2);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nome do funcionario: ", function(nome) {
    rl.question("Salario Bruto do funcionario: ", function(salarioBruto) {
        rl.question("Outros descontos: ", function(outrosDescontos) {
            salarioBruto = parseFloat(salarioBruto);
            outrosDescontos = parseFloat(outrosDescontos);

            const inss = calcularINSS(salarioBruto).toFixed(2);
            const impostoDeRenda = calcularImpostoDeRenda(salarioBruto - calcularINSS(salarioBruto)).toFixed(2);
            const salarioLiquido = calcularSalarioLiquido(salarioBruto, outrosDescontos);

            console.log(`Salario Bruto: R$ ${salarioBruto}`);
            console.log(`INSS: R$ ${inss}`);
            console.log(`Imposto de Renda: R$ ${impostoDeRenda}`);
            console.log(`Outros descontos: R$ ${outrosDescontos.toFixed(2)}`);
            console.log(`Salario Liquido: R$ ${salarioLiquido}`);

            rl.question("Voce deseja gerar um PDF com a folha de pagamento do funcionario? [y/n]: ", function(gerarPdf) {
                if (gerarPdf.toLowerCase() === 'y') {
                    const doc = new PDFDocument();
                    const nomeArquivo = `${nome}_folha_pagamento.pdf`;

                    doc.pipe(fs.createWriteStream(nomeArquivo));

                    doc.fontSize(25).text('Folha de Pagamento', {
                        align: 'center'
                    });
                    
                    doc.moveDown();
                    doc.fontSize(16).text(`Nome do Funcionario: ${nome}`);
                    doc.text(`Salario Bruto: R$ ${salarioBruto}`);
                    doc.text(`INSS: R$ ${inss}`);
                    doc.text(`Imposto de Renda: R$ ${impostoDeRenda}`);
                    doc.text(`Outros descontos: R$ ${outrosDescontos.toFixed(2)}`);
                    doc.text(`Salario Liquido: R$ ${salarioLiquido}`);

                    doc.end();

                    console.log(`PDF gerado com sucesso: ${nomeArquivo}`);
                } else {
                    console.log('PDF nao sera gerado.');
                }

                rl.close();
            });
        });
    });
});
