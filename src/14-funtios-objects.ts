(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'test@test.com',
    password: 'test'
  });

  const products: any[] = []

  const addProduct = (body: {
    title: string,
    price: number,
    description: string,
    image: string
  }) => {
    products.push(body)
  }
})()
