const getEndpoints = require("express-list-endpoints");
const app = require("./src/app");
const config = require("./src/config");

app.listen(config.global.port, () => {
    console.log(`App up and running on port ${config.global.port}.`);
    if(process.env.NODE_ENV !== "test") {
        logEndpoints(app);
    }
});

function logEndpoints(app) {
    console.log("\n==========\nEndpoints:\n");
    getEndpoints(app)
        .forEach(endpoint => {
            endpoint.methods
                .forEach(method => {
                    console.log(`${padRight(method, 8, " ")} ${endpoint.path}`);
                });
        });
}

function padRight(word, limit, character) {
    return `${word}${new Array(limit - word.length).map(() => "").join(character)}`;
}

module.exports = app;
