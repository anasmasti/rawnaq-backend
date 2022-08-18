import { Model } from "mongoose";
import IArticle from "../../interfaces/Article";

const getAllArticles = async (Article: Model<IArticle, {}, {}, {}, any>) => {
  return await Article.find();
};

export default getAllArticles