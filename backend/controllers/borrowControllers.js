const Borrow = require("../model/borrowModel");
const jwt = require("jsonwebtoken");

const borrowBook = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  const { bookId } = req.body;
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const borrowed = await Borrow.create({
      userId: _id,
      bookId,
    });
    res.status(200).json({ borrowed });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const returnBook = async (req, res) => {
  const { _id } = req.body; //borrow id
  try {
    const borrowedBook = await Borrow.findById(_id);

    if (!borrowedBook) {
      throw Error("Borrowed book not found");
    }
    if (borrowedBook.return_status) {
      throw Error("Book is already returned");
    }

    const dueDate = borrowedBook.dueDate;
    const returnDate = new Date();
    const daysLate = Math.max(
      0,
      Math.round((returnDate - dueDate) / (24 * 60 * 60 * 1000))
    );
    const fine = daysLate * 100; // Assuming a fine of 100 per day
    const returned = await Borrow.findByIdAndUpdate(
      _id,
      {
        return_status: true,
        returnDate,
        fine,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ returned });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getUserBorrowedBooks = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const borrowedBooks = await Borrow.find({ userId: _id })
      .populate({
        path: "userId",
        model: "User",
      })
      .populate({
        path: "bookId",
        model: "Book",
      });

    res.status(200).json({ borrowedBooks });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  borrowBook,
  returnBook,
  getUserBorrowedBooks,
};
