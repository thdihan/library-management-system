//imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

//middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// route imports
const userRoutes = require("./routes/userRoutes");
const librarianRoutes = require("./routes/librarianRoutes");

//routes
app.use("", userRoutes);
app.use("/librarian", librarianRoutes);
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.post("/abcd", (req, res) => {
  res.send("Welcome");
});

//db connection
mongoose
  .connect(process.env.DB_URL, {})
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

//error handler
// app.use(errorHandler);

app.listen(process.env.PORT || 5001, () => {
  console.log(`App listening on http://localhost:${process.env.PORT}`);
});
