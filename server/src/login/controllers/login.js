module.exports = function(req, res) {
    if(req.body.username && req.body.password) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
};