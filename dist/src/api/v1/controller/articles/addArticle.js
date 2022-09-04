"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = __importDefault(require("../../models/article"));
const postArticle_1 = __importDefault(require("../../services/articale/postArticle"));
const getAuthorByID_1 = __importDefault(require("../../services/author/getAuthorByID"));
const putAuthor_1 = __importDefault(require("../../services/author/putAuthor"));
const addArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield (0, getAuthorByID_1.default)(req.body.author);
        if (!author) {
            res.status(404).send({ message: "author not found !" });
        }
        const article = new article_1.default({
            title: req.body.title,
            description: req.body.description,
            slug: req.body.slug,
            img: req.body.img,
            author: req.body.author,
        });
        yield (0, postArticle_1.default)(article)
            .then((data) => __awaiter(void 0, void 0, void 0, function* () {
            res.json(data);
            yield (0, putAuthor_1.default)(req.body.author, data._id);
        }))
            .catch((error) => {
            res.status(402).send({ message: error.message });
        });
    }
    catch (error) {
        res.status(402).send({ message: error.message });
    }
});
exports.default = addArticle;
