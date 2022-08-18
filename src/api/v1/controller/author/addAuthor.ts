import { Request, Response } from "express";
import { Document } from "mongoose";
import IAuthor from "../../interfaces/Author";
import Author from "../../models/author";
import postAuthor from "../../services/author/postAuthor";

const addArticle = (req: Request, res: Response) => {
  try {
    const article = new Author({
      full_name: req.body.full_name
    });

    postAuthor(article)
      .then((data: Document<unknown, any, IAuthor>) => {
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
