const express = require("express");
const app = express();
const cors = require("cors");

const distanceRouter = require("./distance/distance.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(cors());
app.use(express.json());

app.use("/distance", distanceRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
