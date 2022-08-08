const Article = require("../../models/article/index.ts");
const getArticleBySlug = require("../../services/articale/getArticleBySlug.ts");

const feshArticleBySlug = (req, res) => {
  try {
    getArticleBySlug(req.params.slug, Article)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(402).send({ message: error.message });
      });
  } catch (error) {
    res.status(402).send({ message: error.message });
  }
};

module.exports = feshArticleBySlug;
