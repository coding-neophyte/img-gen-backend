const { addProduct, getProducts } = require('../controllers/productController');
const express = require('express');
const Router = express.Router();


module.exports = Router.post('/add', addProduct)
  .get('/', getProducts);
