const { Router } = require('express');
const { authenticate } = require('../middlewares');
const { getCartByUser, addProductToCart } = require('../controllers/carts.controller');

const router = Router();

router.get('/cart', authenticate, getCartByUser);
router.post('/cart', authenticate, addProductToCart);

module.exports = router;