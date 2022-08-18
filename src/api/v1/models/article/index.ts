import { Schema, model } from "mongoose";
import IArticle from "../../interfaces/Article";

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      default: "--",
    },
    description: {
      type: String,
      require: true,
      default: "--",
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
    img: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  { timestamps: true }
);

const Article = model<IArticle>("Article", ArticleSchema);

export default Article;
