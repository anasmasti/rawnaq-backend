"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = __importDefault(require("../../models/article"));
const getArticleBySlug_1 = __importDefault(require("../../services/articale/getArticleBySlug"));
const feshArticleBySlug = (req, res) => {
    try {
        (0, getArticleBySlug_1.default)(req.params.slug, article_1.default)
            .then((data) => {
            res.json(data);
        })
            .catch((error) => {
            res.status(402).send({ message: error.message });
        });
    }
    catch (error) {
        res.status(402).send({ message: error.message });
    }
};
exports.default = feshArticleBySlug;
