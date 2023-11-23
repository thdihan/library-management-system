const requireAuth = require("../middlewares/requireAuth");
const express = require("express");
const router = express.Router();

const {
  addBook,
  getAllBooks,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

const { getAllUsers, deleteUser } = require("../controllers/userControllers");

router.route("/add-book").post(requireAuth, addBook);
router.route("/get-all-books").get(requireAuth, getAllBooks);
router.route("/delete-book").delete(requireAuth, deleteBook);
router.route("/update-book").put(requireAuth, updateBook);
router.route("/get-all-users").get(requireAuth, getAllUsers);
router.route("/delete-user").delete(requireAuth, deleteUser);

module.exports = router;
