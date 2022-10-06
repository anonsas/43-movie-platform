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
  INSERT INTO movies (title, price, category_id, image)
  VALUES (?, ?, ?, ?);
  `;
  con.query(
    sql,
    [req.body.title, req.body.price, req.body.categoryID, req.body.image],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};

module.exports.editMovie = (req, res) => {
  let sql;
  let request;

  if (req.body.deleteImage) {
    // Remove image
    sql = `
    UPDATE movies
    SET title=?, price=?, category_id=?, image=NULL
    WHERE id=?
    `;
    request = [req.body.title, req.body.price, req.body.categoryID, req.params.id];
  } else if (req.body.image) {
    // Adding new image
    sql = `
    UPDATE movies
    SET title=?, price=?, category_id=?, image=?
    WHERE id=?
    `;
    request = [
      req.body.title,
      req.body.price,
      req.body.categoryID,
      req.body.image,
      req.params.id,
    ];
  } else {
    // Leave the Image as it is
    sql = `
    UPDATE movies
    SET title=?, price=?, category_id=?
    WHERE id=?
    `;
    request = [req.body.title, req.body.price, req.body.categoryID, req.params.id];
  }

  con.query(sql, request, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
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
