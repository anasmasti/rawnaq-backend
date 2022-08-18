import { model, Schema } from "mongoose";
import IAuthor from "../../interfaces/Author";

const AuthorSchema = new Schema(
  {
    full_name: {
      type: String,
      require: true,
    },
    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  { timestamps: true }
);

const Author = model<IAuthor>("Author", AuthorSchema);

export default Author;
