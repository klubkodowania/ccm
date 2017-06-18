const routes = require("express").Router();
const {getProjectById} = require("./getProject");
const {addProject} = require("./addProject");

routes.get("/:id", getProjectById);
routes.post("/", addProject);

module.exports = routes;
