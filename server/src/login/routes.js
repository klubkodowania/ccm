const router = require("express").Router();
const {checkLogin} = require("./checkLogin");

router.post("/", checkLogin);

module.exports = router;
