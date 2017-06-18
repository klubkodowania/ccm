const routes = require("express").Router();
const {getSemesterById} = require("./getSemester");

routes.get("/:id", getSemesterById);

module.exports = routes;
