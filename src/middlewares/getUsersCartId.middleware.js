const Cart = require('../models/carts.model');

const getUsersCartId = async (req)=> {
  const { idUser } = req;
  const cart = await Cart.findOne({ where: {idUser} });
  return cart;
};

module.exports = getUsersCartId;