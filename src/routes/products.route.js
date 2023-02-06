const { Router } = require('express');
const authenticate = require('../middlewares/auth.middleware');
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById
} = require('../controllers/products.controller');

const router = Router();

router.get('/', getAllProducts);
router.get('/', getProductById);
router.post('/', authenticate, createProduct);
router.delete('/produc', deleteProduct);

module.exports = router;