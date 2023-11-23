const express = require("express");
const { signup, login } = require("../controllers/userControllers");
const {
  borrowBook,
  returnBook,
  getUserBorrowedBooks,
} = require("../controllers/borrowControllers");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/borrow-book").post(requireAuth, borrowBook);
router.route("/return-book").post(requireAuth, returnBook);
router.route("/get-borrowed-books").get(requireAuth, getUserBorrowedBooks);

module.exports = router;
