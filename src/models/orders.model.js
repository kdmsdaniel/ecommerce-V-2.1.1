const db            = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users         = require('./users.model');

const Orders = db.define('orders', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  totalPrice: {
    type:          DataTypes.FLOAT,
    allowNull:     true,
    field:         'total_price'
  },
  idUser: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_user',
    references: {
      model:    Users,
      key:      'id'
    }
  },
  status: {
    type:           DataTypes.STRING(15),
    defaultValue:   'purchased'
  }
});

module.exports = Orders;