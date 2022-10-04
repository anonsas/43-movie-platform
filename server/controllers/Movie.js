const con = require('../config/database').databaseConnection;

module.exports.getMovies = (req, res) => {
  const sql = `
  SELECT * FROM movies 
  ORDER BY id DESC`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.createMovie = (req, res) => {
  const sql = `
  INSERT INTO movies (title, price, category_id)
  VALUES (?, ?, ?);
  `;
  con.query(sql, [req.body.title, req.body.price, req.body.categoryID], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.editMovie = (req, res) => {
  const sql = `
  UPDATE movies
  SET title=?, price=?, category_id=?
  WHERE id=?
  `;
  con.query(
    sql,
    [req.body.title, req.body.price, req.body.categoryID, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};

module.exports.deleteMovie = (req, res) => {
  const sql = `
  DELETE FROM movies
  WHERE id=?;
  `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
