const app = require("./src/app");
const config = require("./src/config");

app.listen(config.global.port, () => {
    console.log(`App up and running on port ${config.global.port}.`);
});

module.exports = app;