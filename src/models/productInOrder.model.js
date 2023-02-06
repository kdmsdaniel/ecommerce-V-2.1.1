const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Orders = require('./orders.model') 
const Products = require('./products.model');

const ProductInOrder = db.define('productInOrder', {
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
    references: {
      model:     Products,
      key:       'id'
    }
  },
  idOrder: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_order',
    references: {
      model:     Orders,
      key:       'id'
    }
  },
  quantity: {
    type:          DataTypes.INTEGER,
    allowNull:     false
  },
  price: {
    type:          DataTypes.FLOAT,
    allowNull:     false 
  },
  status: {
    type:          DataTypes.BOOLEAN,
    defaultValue:  false
  }
},
{
  timestamps: false
});

module.exports = ProductInOrder;