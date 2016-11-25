module.exports = function (app) {
    app.post("/test", function (req, res) {
        res.status(200).send();
    });
};
