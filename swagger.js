const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require('dotenv').config();

const options = {
  apis: ['./src/routes/auth.route.js'],
  definition: {
    openapi: "3.0.0",
    info: {
			title: "E-commerce API",
			version: "0.0.3",
			description: "API para un ecommerce de fotografia" 
		},
  }
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  app.get("api/v1/docs.json", (req, res) => {
    res.setHeader({"Content-Type": "application/json"});
    res.send(swaggerSpec);
  });
  
  console.log(`Doc V1 disponible en ${process.env.URL}:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;