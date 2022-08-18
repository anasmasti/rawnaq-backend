import { Model } from "mongoose";
import IArticle from "../../interfaces/Article";

const getArticleBySlug = async (
  slug: string,
  Article: Model<IArticle, {}, {}, {}, any>
) => {
  return await Article.findOne({ slug: slug }).populate(
    "author",
    "full_name -_id"
  );
};

export default getArticleBySlug;
