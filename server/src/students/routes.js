const routes = require("express").Router();
const {getStudentByName} = require("./getStudent");

routes.get("/:name", getStudentByName);

module.exports = routes;
