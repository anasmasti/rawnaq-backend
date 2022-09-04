"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = __importDefault(require("../../models/author"));
const postAuthor_1 = __importDefault(require("../../services/author/postAuthor"));
const addArticle = (req, res) => {
    try {
        const article = new author_1.default({
            full_name: req.body.full_name
        });
        (0, postAuthor_1.default)(article)
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
exports.default = addArticle;
