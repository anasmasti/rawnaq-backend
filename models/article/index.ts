const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: String,
    description: String,
    slug: String
  });

  const Article = mongoose.model('Article', ArticleSchema);

  module.exports = Article