import { Router } from "express";
import homeController from "../controller/home";

const router = Router();

router.route("/").get(homeController);

module.exports = router;
