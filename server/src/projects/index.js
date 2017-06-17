const {Project} = require("./model");
const routes = require("express").Router();
const projectRoutes = require("./routes");

routes.use("/", projectRoutes);

module.exports = {
    routes,
    Project
};
