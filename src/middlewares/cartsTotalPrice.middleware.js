const Cart = require('../models/carts.model');
const ProductInCar = require('../models/productInCart.model');

const cartTotalPrice = async (idUserCar)=> {
  const cart = await Cart.findOne({where: {id: idUserCar}});
  const productInCart = await ProductInCar.findAll({where: {idCar: cart.id}});

  cart.totalPrice = 0;
  productInCart.map((product)=> cart.totalPrice += product.price);
  cart.save();
};

module.exports = cartTotalPrice;