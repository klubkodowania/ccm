const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let connection = null;

function connect() {
    connection = mongoose.connect("mongodb://localhost:27017/ccm");
}

module.exports = {
    connect,
    connection
};