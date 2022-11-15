const Joi = require('joi');

// Schema específico para cada campo para poder reutilizarlos
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

// Schema para la creación de un producto
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

// Schema para la actualización de un producto
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

// Schema para la petición get de un producto
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
