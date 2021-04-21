const express = require("express");
const app = express();

const distanceRouter = require("./distance/distance.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());

app.use("/distance", distanceRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
