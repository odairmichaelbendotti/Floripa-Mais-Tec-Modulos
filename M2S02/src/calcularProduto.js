function calcularProduto(numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
  }
  
  let numeros = [1, 2, 3, 4, 5];
  console.log(calcularProduto(numeros)); // 120
  