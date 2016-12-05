const routes = require("express").Router();
const loginRoutes = require("./routes");

routes.use("/", loginRoutes);

module.exports = {
    routes
};