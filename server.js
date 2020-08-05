const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

const book_user = require("./routes/book_user");
const books = require("./routes/book_rental");
app.use("/api/v1/book_user", book_user);
app.use("/api/v1/books", books);

const PORT = process.env.PORT || 5700;

app.get("/", (req, res, next) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("App listening on port 5700!");
});
