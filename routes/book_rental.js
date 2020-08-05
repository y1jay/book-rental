const express = require("express");
const auth = require("../middleware/auth");
const {
  get_book,
  rental_book,
  my_rental,
  return_book,
} = require("../controllers/book_rental");
const router = express.Router();
router.route("/").get(get_book);
router.route("/rental_book").post(auth, rental_book);
router.route("/my_rental").get(auth, my_rental);
router.route("/:id").delete(auth, return_book);
module.exports = router;
