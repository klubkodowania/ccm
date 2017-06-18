const routes = require("express").Router();
const {getProjectById} = require("./getProject");
const {addProject} = require("./addProject");

routes.get("/project/:id", getProjectById);
routes.post("/project", addProject);

module.exports = routes;
