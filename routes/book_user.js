const express = require("express");
// const auth = require("../middleware/auth");
const { signUp } = require("../controllers/book_user");
const router = express.Router();
router.route("/").post(signUp);
module.exports = router;
