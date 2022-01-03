import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const server = express();
server.use(bodyParser.json());

setRoutes(server);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TEST API TEMPLATE",
      description: "TEST API Documentation",
      contact: {
        name: "albeXL",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

server.use(
  "/api/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { explorer: true })
);

export default server;
