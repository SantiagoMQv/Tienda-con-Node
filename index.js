const express = require('express');
const { faker } = require('@faker-js/faker')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

//** USERS **//
app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parámetros');
  }
});

//** PRODUCTS **//
app.get('/products', (req, res) => {
  const products = []
  const { size } = req.query;
  const limit = size || 10;
  // Genero 100 productos inventados gracias a la libreria faker
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });

  }
  res.json(products);
})

//** CATEGORIES **//
app.get('/categories/:categoryID/products/:productId', (req, res) => {
  const { categoryID, productId } = req.params;
  res.json([{
    categoryID,
    productId
  }]);
})

app.listen(port, () => {
  console.log("Mi port " + port);
});
