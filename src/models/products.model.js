const db            = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users         = require('./users.model');

const Products = db.define('products', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  name: {
    type:          DataTypes.STRING(150),
    allowNull:     false
  },
  image: {
    type:          DataTypes.STRING,
    allowNull:     false
  },
  price: {
    type:          DataTypes.FLOAT,
    allowNull:     false
  },
  availableQty: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'available_qty'
  },
  status: {
    type:          DataTypes.BOOLEAN,
    allowNull:     true
  },
  idUser: {
    type:          DataTypes.INTEGER,
    allowNull:    false,
    field:        'id_user',
    references: {
      model:  Users,
      key:    'id'
    }
  }
});

module.exports = Products;