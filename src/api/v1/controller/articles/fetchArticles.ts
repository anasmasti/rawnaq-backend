import { Request, Response } from "express";
import Article from "../../models/article";
import getAllArticles from "../../services/articale/getAllArticles";

const fetchArticles = async (req: Request, res: Response) => {
  return await getAllArticles(Article)
    .then((articles) => {
      res.json(articles);
    })
    .catch((error: any) => {
      res.status(402).send({
        message: error.message,
      });
    });
};

export default fetchArticles;
