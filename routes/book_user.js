const express = require("express");
const auth = require("../middleware/auth");
const {
  signUp,
  Loginbook_lental,
  Logout,
} = require("../controllers/book_user");
const router = express.Router();
router.route("/").post(signUp);
router.route("/login").post(Loginbook_lental);
router.route("/logout").delete(auth, Logout);
module.exports = router;
