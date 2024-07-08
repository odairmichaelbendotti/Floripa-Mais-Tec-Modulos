function transformarArray(dados, operacao) {
    return dados.map(item => operacao(item));
  }
  
  function dobrar(valor) {
    return valor * 2;
  }
  
  let listaNumeros = [1, 2, 3, 4, 5];
  console.log(transformarArray(listaNumeros, dobrar)); // [2, 4, 6, 8, 10]
  