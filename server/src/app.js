const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const db = require("./db");
db.connect();

const login = require("./login");
const students = require("./students");
const semesters = require("./semesters");
const projects = require("./projects");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", login.routes);
app.use("/students", students.routes);
app.use("/semesters", semesters.routes);
app.use("/projects", projects.routes);

module.exports = app;


