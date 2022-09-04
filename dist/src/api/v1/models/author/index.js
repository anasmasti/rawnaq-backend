"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AuthorSchema = new mongoose_1.Schema({
    full_name: {
        type: String,
        require: true,
    },
    articles: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Article",
        },
    ],
}, { timestamps: true });
const Author = (0, mongoose_1.model)("Author", AuthorSchema);
exports.default = Author;
