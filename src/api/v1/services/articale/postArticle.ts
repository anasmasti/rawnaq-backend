import { Document } from "mongoose";
import IArticle from "../../interfaces/Article";

const postArticle = async (Article: Document<unknown, any, IArticle>) => {
  return await Article.save();
};

export default postArticle;
