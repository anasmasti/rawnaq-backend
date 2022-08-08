const router = require("express").Router();

router.route("/article").get((req, res) => {
  res.send("article");
});

module.exports = router;
