const routes = require("express").Router();
const controllers = require("../controllers");

routes.get("/student/:id", controllers.student);

module.exports = routes;
