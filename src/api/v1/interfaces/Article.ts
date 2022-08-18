import Author from "./Author";

export default interface IArticle {
  title: string;
  description: string;
  slug: string;
  author: Author
}
