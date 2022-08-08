const router = require("express").Router();
const postArticle = require('../controller/articles/addArticle.ts')

router.route("/article").post(postArticle);

module.exports = router;
