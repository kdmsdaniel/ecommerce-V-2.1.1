const ProductServices = require('../services/products.service');

const getAllProducts = async (req, res, next)=> {
  try {
    const products = await ProductServices.getAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next)=> {
  try {
    const { id } = req.body;
    const product = await ProductServices.getById(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next)=> {
  try {
    const newProduct = req.body;
    const product = await ProductServices.create(newProduct)
    res.status(201).json(product);
  } catch (error) {
    next(error)
  }
};

const deleteProduct = async (req, res, next)=> {
  try {
    const { id } = req.body;
    const product = await ProductServices.delete(id);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, getProductById, createProduct, deleteProduct };