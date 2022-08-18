import { Document } from "mongoose";
import IAuthor from "../../interfaces/Author";

const postArticle = async (Author: Document<unknown, any, IAuthor>) => {
  return await Author.save();
};

export default postArticle;
