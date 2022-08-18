import { Request, Response } from "express";
import { Document } from "mongoose";
import IArticle from "../../interfaces/Article";
import Article from "../../models/article";
import postArticle from "../../services/articale/postArticle";
import getAuthorById from "../../services/author/getAuthorByID";
import putAuthorArticle from "../../services/author/putAuthor";

const addArticle = async (req: Request, res: Response) => {
  try {
    const author = await getAuthorById(req.body.author);

    if (!author) {
      res.status(404).send({ message: "author not found !" });
    }

    const article = new Article({
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
      img: req.body.img,
      author: req.body.author,
    });

    await postArticle(article)
      .then(async (data: Document<unknown, any, IArticle>) => {
        res.json(data);
        await putAuthorArticle(req.body.author, data._id);
      })
      .catch((error: any) => {
        res.status(402).send({ message: error.message });
      });
  } catch (error: any) {
    res.status(402).send({ message: error.message });
  }
};

export default addArticle;
