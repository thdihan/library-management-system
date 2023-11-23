const Book = require("../model/bookModel");

const addBook = async (req, res) => {
  const { name, author, genre, description } = req.body;
  try {
    const newBook = await Book.create({
      name,
      author,
      genre,
      description,
    });
    res.status(200).json({ newBook });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  const { _id } = req.body;
  try {
    const deletedBook = await Book.findByIdAndRemove(_id);

    if (!deletedBook) {
      throw Error("Book not found");
    }
    res.status(200).json({ deletedBook });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  const { _id, name, author, genre, description } = req.body;
  const newData = {
    name,
    author,
    genre,
    description,
  };
  try {
    const updatedBook = await Book.findByIdAndUpdate(_id, newData, {
      new: true,
    });
    if (!updatedBook) {
      throw Error("Book not found");
    }
    res.status(200).json({ updatedBook });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  deleteBook,
  updateBook,
};
