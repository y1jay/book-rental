const connection = require("../db/mysql_connection");
const bcrypt = require("bcryptjs");

// @ desc    모든 책 목록 불러오는 API
// @ route   GET /api/v1/books

exports.get_book = async (req, res, next) => {
  let offset = req.query.offset;

  let query = `select * from book limit ${offset},25`;
  try {
    [rows] = await connection.query(query);
    res.status(200).json({ message: "책 목록", rows: rows });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
