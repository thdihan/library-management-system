const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //HERE THE USERNAME IS CONSIDERED EMAIL TO SEND THE NOTIFICATION VIA MAIL
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  type: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
