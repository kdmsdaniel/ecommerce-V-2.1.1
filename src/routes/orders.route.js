const { Router }  = require('express');  
const { authenticate } = require('../middlewares');
const getAllOrders = require('../controllers/orders.controller');
 //const createOrder = require('../controllers/orders.controller');

const router = Router();

router.get('/users/:id/orders', authenticate, getAllOrders); //aqui sale un undefined // NO
//router.post('/orders', authenticate, createOrder);

module.exports = router;