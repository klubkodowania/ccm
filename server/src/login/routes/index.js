const router = require("express").Router();
const controllers = require("../controllers");

router.post("/", controllers.checkLogin);

module.exports = router;
