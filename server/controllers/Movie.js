const con = require('../config/database').databaseConnection;

module.exports.getMovies = (req, res) => {
  const sql = `SELECT * FROM movies`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.createMovie = (req, res) => {
  const sql = `
  INSERT INTO movies (title, price, rating, rating_sum, rating_count, category_id)
  VALUES (?, ?, ?, ?, ?, ?);
  `;
  con.query(
    sql,
    [
      req.body.title,
      req.body.price,
      req.body.rating,
      req.body.rating_sum,
      req.body.rating_count,
      req.body.category_id,
    ],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};

module.exports.editMovie = (req, res) => {
  const sql = `
  UPDATE movies
  SET title=?, price=?, rating=?, rating_sum=?, rating_count=?, category_id=?
  WHERE id=?
  `;
  con.query(
    sql,
    [
      req.body.title,
      req.body.price,
      req.body.rating,
      req.body.rating_sum,
      req.body.rating_count,
      req.body.category_id,
      req.params.id,
    ],
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
