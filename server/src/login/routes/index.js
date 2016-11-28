const router = require("express").Router();
const controllers = require("../controllers");

router.post("/", controllers.login);

module.exports = router;
