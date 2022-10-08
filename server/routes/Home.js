const express = require('express');
const router = express.Router();

const { getMoviesWithCategories, editMovieRating } = require('../controllers/Home');

router.get('/', getMoviesWithCategories);
router.put('/:id', editMovieRating);

module.exports = router;
