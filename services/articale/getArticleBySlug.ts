const getArticleBySlug = async (slug, article) => {
    return await article.find(
         { slug: slug }
      );
  };
  
  module.exports = getArticleBySlug;
  