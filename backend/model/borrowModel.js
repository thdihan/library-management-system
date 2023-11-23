// borrowSchema.js
const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  borrowDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
  dueDate: {
    type: Date,
    default: function () {
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14);
      return dueDate;
    },
  },
  return_status: {
    type: Boolean,
    default: false,
  },
  fine: {
    type: Number,
  },
});

const Borrow = mongoose.model("Borrow", borrowSchema);

module.exports = Borrow;
