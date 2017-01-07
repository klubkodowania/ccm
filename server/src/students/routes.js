const routes = require("express").Router();
const {getStudentByName} = require("./getStudent");

routes.get("/student/:name", getStudentByName);

module.exports = routes;
