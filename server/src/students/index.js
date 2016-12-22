const routes = require("express").Router();
const studentsRoutes = require("./routes");

routes.use("/", studentsRoutes);

module.exports = {
    routes
};