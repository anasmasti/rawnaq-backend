"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: true,
        default: "--",
    },
    description: {
        type: String,
        require: true,
        default: "--",
    },
    slug: {
        type: String,
        require: true,
        unique: true,
    },
    img: String,
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Author",
    },
}, { timestamps: true });
const Article = (0, mongoose_1.model)("Article", ArticleSchema);
exports.default = Article;
