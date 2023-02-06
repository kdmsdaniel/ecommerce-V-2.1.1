const ProductInCar = require('../models/productInCart.model');
const Products = require('../models/products.model');
const Cart = require('../models/carts.model');

class CartsServices {
  static async getByUserId(idUser){
    try {
      const result = await Cart.findOne({
        where: { idUser},
        attributes: ['totalPrice'],
        include: {
          model: ProductInCar,
          as: 'waiting_cart',
          attributes: ['quantity', 'price'],
          include: {
            model: Products,
            as: 'waiting_buy',
            attributes: [ 'id','name', 'price']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addToCart (productInCar) {
    try {
      const addedPruct = await ProductInCar.create(productInCar);
      return addedPruct;
    } catch (error) {
      throw error;
    }
  }
;}

module.exports = CartsServices;