const {getStudent} = require("../students/index");

function login(req, res) {
    const {
        name,
        password
    } = req.body;

    console.log(`Check login credentials. User: ${name}, password: ${password}.`);

    if (!password || !name) {
        res.status(401).send();
        return;
    }

    getStudent({
        name,
        password
    })
        .then(response => {
            if (!response) throw Error(`Bad credentials: name: ${name}, password: ${password}.`);

            console.log(`User: ${name}, password: ${password} FOUND.`);

            res.json({
                status: "ok"
            });
        })
        .catch(error => {

            console.log(`User: ${name}, password: ${password} NOT FOUND or error occurs:`);
            console.log(error);

            res.status(401).send();
        });
}

module.exports = {
    login
};