const Product = require('../models/Product');

const addProduct = async (req, res, next) => {
  try {
    const { title, description, price } = req.body;
    const newProduct = new Product({
      title,
      description,
      price,
    });
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (e) {
    e.status = 500;
    next(e);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const productList = await Product.find();
    if (!productList.length) {
      res.status(404).json({ message: 'No Products Found' });
    } else {
      res.status(200).json(productList);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { addProduct, getProducts };
