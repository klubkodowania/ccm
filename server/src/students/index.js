const routes = require("express").Router();
const studentsRoutes = require("./routes");
const {getStudent} = require("./controllers");

routes.use("/", studentsRoutes);

module.exports = {
    routes,
    getStudent
};