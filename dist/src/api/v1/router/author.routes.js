"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addAuthor_1 = __importDefault(require("../controller/author/addAuthor"));
const router = (0, express_1.Router)();
router.route("/author").post(addAuthor_1.default);
module.exports = router;
