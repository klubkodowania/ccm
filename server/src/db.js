const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let connection = null;

function connect() {
    if(process.NODE_ENV !== "TEST") {
        connection = mongoose.connect("mongodb://localhost:27017/ccm");
    } else {
        const mockgoose = require('mockgoose');

        mockgoose(mongoose).then(function() {
            connection = mongoose.connect("mongodb://localhost:27017/ccm", () => {
                console.log("Mongo mocked!")
            });
        });
    }
}

module.exports = {
    connect,
    connection
};