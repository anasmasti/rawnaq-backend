const router = require("express").Router();
const addArticle = require('../controller/articles/addArticle.ts')
const fetchArticleBySlug = require('../controller/articles/fetchArticleBySlug.ts')

router.route("/article").post(addArticle);
router.route("/article-by-slug/:slug").get(fetchArticleBySlug);

module.exports = router;
