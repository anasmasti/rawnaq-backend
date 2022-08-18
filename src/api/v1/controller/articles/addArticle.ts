import { Request, Response } from "express";
import { Document } from "mongoose";
import IArticle from "../../interfaces/Article";
import Article from "../../models/article";
import postArticle from "../../services/articale/postArticle";

const addArticle = (req: Request, res: Response) => {
  try {
    const article = new Article({
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
    });

    postArticle(article)
      .then((data: Document<unknown, any, IArticle>) => {
        res.json(data);
      })
      .catch((error: any) => {
        res.status(402).send({ message: error.message });
      });
  } catch (error: any) {
    res.status(402).send({ message: error.message });
  }
};

export default addArticle;
