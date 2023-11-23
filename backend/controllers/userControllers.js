const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const secret = "mysecret123";

const generateToken = (_id) => {
  return jwt.sign({ _id }, secret, { expiresIn: "30d" });
};

const signup = async (req, res) => {
  const { username, password, type } = req.body;
  console.log("REQ", username, password, type);
  try {
    const exists = await User.findOne({ username });
    if (exists) {
      throw Error("Username already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      type,
    });
    res.status(200).json({ newUser });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).json({
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const exists = await User.findOne({ username });
    if (!exists) {
      throw Error("User doesn't exist");
    }
    const match = bcrypt.compare(password, exists.password);
    if (!match) {
      throw Error("Invalid password");
    }

    const token = generateToken(exists._id);

    res
      .status(200)
      .json({ username: exists.username, token, type: exists.type });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });

    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { _id } = req.body;
  try {
    const deletedUser = await User.findByIdAndDelete(_id);

    if (!deletedUser) {
      throw Error("User not found");
    }

    res.status(200).json({ deletedUser });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  signup,
  login,
  getAllUsers,
  deleteUser,
};
