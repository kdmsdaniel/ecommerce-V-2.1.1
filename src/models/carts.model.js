const db            = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users         = require('./users.model')

const Cart = db.define('cart',{
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  idUser: {
    type:          DataTypes. INTEGER,
    allowNull:     false,
    field:         'id_user',
    references: {
      model:    Users,
      key:      'id'
    }
  },
  totalPrice: {
    type:          DataTypes.FLOAT,
    allowNull:     true
  }
});

module.exports = Cart;