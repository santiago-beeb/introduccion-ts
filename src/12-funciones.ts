(() => {
  type Size = 'S' | 'M' | 'L';

  const createProduct = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size //variable opcional, no necesita ser mandada obligatoriamente por argumentos
  ) => {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProduct('p1', new Date(), 12)
  console.log(product1);
  console.log(product1.title);
  console.log(product1.createdAt);
  console.log(product1.size);

})()
