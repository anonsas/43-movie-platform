const con = require('../config/database').databaseConnection;

module.exports.getCategories = (req, res) => {
  const sql = `SELECT * FROM categories`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.createCategory = (req, res) => {
  const sql = `
  INSERT INTO categories (title)
  VALUES (?);
  `;
  con.query(sql, [req.body.title], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.deleteCategory = (req, res) => {
  const sql = `
  DELETE FROM categories
  WHERE id=?;
  `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
