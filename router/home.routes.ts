const router = require("express").Router();
const homeController = require("../controller/home/index.ts");

router.route("/").get(homeController);

module.exports = router