const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const login = require("./login");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", login.routes);

module.exports = app;


