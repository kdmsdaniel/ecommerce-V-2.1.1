const OrdersServices = require('../services/orders.service');

const getAllOrders = async (req, res, next)=> {
  try {
    const { idUser } = req.body;
    const order = await OrdersServices.getAll(idUser);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

module.exports = getAllOrders; 