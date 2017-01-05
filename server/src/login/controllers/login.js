const  {getStudent} = require("../../students");

function checkLogin(req, res) {
    const {
        name,
        password
    } = req.body;

    console.log(`Check login credentials. User: ${name}, password: ${password}.`);

    if(!password || !name) {
        res.status(401).send();
    }

    getStudent({
        name,
        password
    }).then((response) => {
        if(!response) throw Error("Bad credentials.");

        console.log(`User: ${name}, password: ${password} FOUND.`);

        res.json({
            status: "ok"
        });
    }).catch((error) => {

        console.log(`User: ${name}, password: ${password} NOT FOUND or error occurs:`);
        console.log(error);

        res.status(401).send();
    });
}

module.exports = {
    checkLogin
};