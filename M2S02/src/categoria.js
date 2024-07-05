function agruparPorCategoria(produtos) {
    return produtos.reduce((acc, produto) => {
      // Se a categoria já existe no acumulador, soma o preço ao valor existente
      if (acc[produto.categoria]) {
        acc[produto.categoria] += produto.preco;
      } else {
        // Se é a primeira vez que a categoria aparece, inicializa com o preço do produto atual
        acc[produto.categoria] = produto.preco;
      }
      return acc;
    }, {});
  }
  
  let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
  ];
  
  console.log(agruparPorCategoria(produtos));
  