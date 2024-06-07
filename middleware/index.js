"use strict";

function errorHandler(err, req, res, next) {
  console.log(err.message);
  res.status(500).send("Error: " + err.message);
}

function reqDetails(req, res, next) {
  console.log(req, req.body, req.params);
  next();
}

function logHeader(req, res, next) {
  console.log(req.header);
  next();
}

function notFound(req, res, next) {
  res.status(400).send("Route not found");
}

module.exports = { errorHandler, reqDetails, notFound, logHeader };
