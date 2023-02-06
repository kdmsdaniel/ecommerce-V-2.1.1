const authenticate = require('./auth.middleware');
const handleError = require('./error.middleware');
const getUsersCartId = require('./getUsersCartId.middleware');
const cartTotalPrice = require('./cartsTotalPrice.middleware');

module.exports = { authenticate, handleError, getUsersCartId, cartTotalPrice };