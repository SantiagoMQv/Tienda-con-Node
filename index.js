const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json([{
    id,
    name: 'Product 1',
    price: 1000
  }]);
})

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
