import IArticle from "./Article";

export default interface IAuthor {
  _id: string;
  full_name: string;
  articles: IArticle[];
}
