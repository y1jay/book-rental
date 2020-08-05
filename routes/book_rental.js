const express = require("express");
const auth = require("../middleware/auth");
const { get_book } = require("../controllers/book_rental");
const router = express.Router();
router.route("/").get(get_book);

module.exports = router;
