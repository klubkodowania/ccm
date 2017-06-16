const routes = require("express").Router();
const {getSemesterById} = require("./getSemester");

routes.get("/semester/:id", getSemesterById);

module.exports = routes;
