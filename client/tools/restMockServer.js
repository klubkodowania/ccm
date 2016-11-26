const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 9080;

app.use(bodyParser.json());

require("./restMock/login")(app);

app.listen(port, function () {
    const availableRoutes = app._router.stack.map(route => {
        if(!route.route) {
            return null;
        }

        const availableMethods = Object.keys(route.route.methods).join(" ");
        const separator = new Array(10 - availableMethods.length + 1).join(" ");
        const prefix = new Array(9).join(" ");

        return `${prefix}[${availableMethods}]${separator}${route.route.path}`;
    }).filter(route => route);

    /* eslint-disable no-console */
    console.log(`
    App listening on localhost: ${port}.
    Available endpoints:
    
    `);
    console.log(`${availableRoutes.join("\n\r")}`);
    /* eslint-enable no-console */
});
