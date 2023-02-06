const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Products = require('./products.model');
const Cart = require('./carts.model');

const ProductInCar = db.define('productInCar', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  idProduct: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_product',
    references:{
      model:    Products,
      key:      'id'
    }
  },
  idCar: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_car',
    references: {
      model:    Cart,
      key:      'id'
    }
  },
  quantity: {
    type:          DataTypes.INTEGER,
    allowNull:     true
  },
  price: {
    type:          DataTypes.FLOAT,
    allowNull:     false
  },
  status:{
    type:          DataTypes.STRING(15),
    defaultValue:  'pending'
  }
},
{
  timestamps: false
});

module.exports = ProductInCar;