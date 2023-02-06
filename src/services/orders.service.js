const Orders = require('../models/orders.model');
const ProductInOrder = require('../models/productInOrder.model');
const Products = require('../models/products.model');

class OrdersServices {
  static async getAll (idUser){
    try {
      const result = await Orders.findAll({
        where:      {idUser},
        attributes: ['totalPrice', 'status'],
        include:{
          model:      ProductInOrder,
          as:         'waiting_product',
          attributes: ['price', 'quantity'],
          include: {
            model: Products,
            as:    'waiting_products',
            attributes: ['name', 'price']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = OrdersServices;