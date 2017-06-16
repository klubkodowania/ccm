const routes = require("express").Router();
const semestersRoute = require("./routes");

routes.use("/", semestersRoute);

module.exports = {
    routes
};
