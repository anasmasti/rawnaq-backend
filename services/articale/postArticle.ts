const postArticle = async (Article) => {
  return await Article.save();
};

module.exports = postArticle;
