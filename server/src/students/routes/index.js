const routes = require("express").Router();
const controllers = require("../controllers");

routes.get("/student/:name", controllers.getStudentByName);

module.exports = routes;
