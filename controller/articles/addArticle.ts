const Article = require("../../models/article/index.ts");
const postArticle = require('../../services/articale/postArticle.ts')

const addArticle =  (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      description: req.body.description,
    });

    postArticle(article)
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

module.exports = addArticle;
