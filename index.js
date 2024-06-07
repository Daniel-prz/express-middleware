"use strict";
const express = require("express");
require("dotenv").config();
const middleware = require("./middleware");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(middleware.reqDetails);
app.use(middleware.logHeader);
app.use(middleware.errorHandler);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/contact", (req, res) => {
  res.send({ data: req.body });
});

app.use(middleware.notFound);

app.listen(PORT, () => {
  console.log(`serving running on port ${PORT}`);
});
