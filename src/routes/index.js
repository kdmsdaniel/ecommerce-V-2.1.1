const authRoutes     = require('./auth.route');
const usersRoutes    = require('./users.route');
const productsRoutes = require('./products.route');
const ordersRoutes   = require('./orders.route');

const routerApi = (app)=> {
  app.use('/api/v1/', authRoutes);
  app.use('/api/v1/', usersRoutes);
  app.use('/api/v1/', productsRoutes);
  app.use('/api/v1/', ordersRoutes);
};

module.exports = routerApi;