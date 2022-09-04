"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addArticle_1 = __importDefault(require("../controller/articles/addArticle"));
const fetchArticleBySlug_1 = __importDefault(require("../controller/articles/fetchArticleBySlug"));
const fetchArticles_1 = __importDefault(require("../controller/articles/fetchArticles"));
const router = (0, express_1.Router)();
router.route("/article").post(addArticle_1.default);
router.route("/article-by-slug/:slug").get(fetchArticleBySlug_1.default);
router.route("/articles").get(fetchArticles_1.default);
module.exports = router;
