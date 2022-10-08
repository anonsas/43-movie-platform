const con = require('../config/database').databaseConnection;

module.exports.getMoviesWithCategories = (req, res) => {
  const sql = `
  SELECT movies.*, categories.title AS categoryTitle, categories.id AS categoryID
  FROM movies
  INNER JOIN categories
  ON movies.category_id = categories.id
  ORDER BY movies.title
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.editMovieRating = (req, res) => {
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
