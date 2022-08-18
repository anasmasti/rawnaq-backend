import { Schema, model } from "mongoose";
import IArticle from "../../interfaces/Article";

const ArticleSchema = new Schema({
  title: String,
  description: String,
  slug: String,
});

const Article = model<IArticle>("Article", ArticleSchema);

export default Article;
