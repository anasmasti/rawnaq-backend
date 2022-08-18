import Author from "../../models/author";

const putAuthorArticle = async (authorId: string, articleId: any) => {
  return await Author.updateOne(
    { _id: authorId },
    {
      $push: { articles: articleId },
    }
  );
};

export default putAuthorArticle;
