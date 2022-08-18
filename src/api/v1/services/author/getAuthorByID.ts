import Author from "../../models/author";

const getAuthorById = async (id: any) => {
  return await Author.findOne({ _id: id });
};

export default getAuthorById;
