const express = require('express');
const router = express.Router();

router.get('/:categoryID/products/:productId', (req, res) => {
  const { categoryID, productId } = req.params;
  res.json([{
    categoryID,
    productId
  }]);
})

module.exports = router;
