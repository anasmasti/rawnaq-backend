import { Request, Response } from "express";
import Article from "../../models/article";
import getArticleBySlug from "../../services/articale/getArticleBySlug";

const feshArticleBySlug = (req: Request, res: Response) => {
  try {
    getArticleBySlug(req.params.slug, Article)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(402).send({ message: error.message });
      });
  } catch (error: any) {
    res.status(402).send({ message: error.message });
  }
};

export default feshArticleBySlug;
