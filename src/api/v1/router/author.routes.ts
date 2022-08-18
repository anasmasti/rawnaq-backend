import { Router } from "express";
import addAuthor from "../controller/author/addAuthor";

const router = Router();

router.route("/author").post(addAuthor);

module.exports = router;
