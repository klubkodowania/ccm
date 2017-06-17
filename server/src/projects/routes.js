const routes = require("express").Router();
const {getProjectById} = require("./getProject");

routes.get("/project/:id", getProjectById);

module.exports = routes;
