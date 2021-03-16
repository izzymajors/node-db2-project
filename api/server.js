const express = require("express");
const helmet = require('helmet');

const CarRouter = require('./cars/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', CarRouter);

// DO YOUR MAGIC

module.exports = server;
