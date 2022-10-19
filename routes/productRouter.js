const express = require('express');
const { faker } = require('@faker-js/faker')

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
<<<<<<< Updated upstream
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
=======
  const product = service.findOne(id);
  res.json({product});
>>>>>>> Stashed changes
});

router.post('/', (req, res) => {
  const body = req.body;
<<<<<<< Updated upstream
  res.json({
    message: 'created',
    data: body
  });
});

<<<<<<< Updated upstream
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
=======
=======
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const product = service.update(id, body);
  console.log(body);
  res.json(product);
>>>>>>> Stashed changes
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
<<<<<<< Updated upstream
  res.json({
    message: 'deleted',
    id,
  });
});

=======
  const rta = service.delete(id);
  res.json(rta);
});

>>>>>>> Stashed changes
>>>>>>> Stashed changes
module.exports = router;
