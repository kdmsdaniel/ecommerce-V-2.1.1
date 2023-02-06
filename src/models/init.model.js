const Users = require('./users.model');
const Products = require('./products.model');
const Cart = require('./carts.model');
const Orders = require('./orders.model');
const ProductInCart = require('./productInCart.model');
const ProductInOrder = require('./productInOrder.model');

const initModels = ()=> {
  Users.hasMany(Products, {as: 'product', foreignKey: 'id_user'});
  Products.belongsTo(Users, {as: 'user', foreignKey: 'id_user'});

  Users.hasMany(Orders, {as:'order', foreignKey: 'id_user'});
  Orders.belongsTo(Users, {as: 'user', foreignKey: 'id_user'});
  
  Users.hasOne(Cart, {as:'cart', foreignKey:'id_user'});
  Cart.belongsTo(Users, {as: 'user', foreignKey: 'id_user'});

  Products.hasMany(ProductInCart, {as: 'product_cart', foreignKey: 'id_product'});
  ProductInCart.belongsTo(Products, {as: 'product', foreignKey: 'id_product'});

  ProductInCart.belongsTo(Cart, {as: 'cart', foreignKey: 'id_cart'});
  Cart.belongsTo(ProductInCart, {as:'product_cart', foreignKey: 'id_cart'});

  Products.hasMany(ProductInOrder, {as:'product_order', foreignKey: 'id_product'});
  ProductInOrder.belongsTo(Products, {as:'product', foreignKey: 'id_product'});

  ProductInOrder.belongsTo(Orders, {as: 'order', foreignKey: 'id_order'});
  Orders.hasMany(ProductInOrder, {as: 'product_order', foreignKey: 'id_order'});
};

module.exports = initModels;