const router = require("express").Router();
const {login} = require("./login");

router.post("/", login);

module.exports = router;
