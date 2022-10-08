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
  const sql = `
    UPDATE movies
    SET rating_sum = rating_sum + ?, 
        rating_count = rating_count + 1, 
        rating = rating_sum / rating_count
    WHERE id=?
    `;
  con.query(sql, [req.body.rating, req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
