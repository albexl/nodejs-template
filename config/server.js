require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";
const swaggerUi = require("swagger-ui-express");

const server = express();
server.use(bodyParser.json());

setRoutes(server);

const swaggerDocs = require("./../swagger-output.json");

server.use(
  "/api/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { explorer: true })
);

export default server;
