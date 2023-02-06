const app = require('./app');
const swaggerDocs = require('../swagger');

require('dotenv').config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
  console.log(`Servidor escuchando en el puerto ${PORT}`)
  swaggerDocs(app, PORT);
});