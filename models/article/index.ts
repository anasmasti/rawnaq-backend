
const ArticleSchema = new mongoose.Schema({
    title: String,
    descreption: String
  });

  const Article = mongoose.model('Article', ArticleSchema);

  module.exports = Article