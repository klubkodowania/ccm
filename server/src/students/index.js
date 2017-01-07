const routes = require("express").Router();
const studentsRoutes = require("./routes");
const {getStudent} = require("./getStudent");

routes.use("/", studentsRoutes);

module.exports = {
    routes,
    getStudent
};