import { Router } from "express";
import addArticle from "../controller/articles/addArticle";
import fetchArticleBySlug from "../controller/articles/fetchArticleBySlug";
import fetchArticles from "../controller/articles/fetchArticles";

const router = Router();

router.route("/article").post(addArticle);
router.route("/article-by-slug/:slug").get(fetchArticleBySlug);
router.route("/articles").get(fetchArticles);

module.exports = router;
