const express = require('express');
const router = express.Router();

const {
  getMovies,
  createMovie,
  editMovie,
  deleteMovie,
} = require('../controllers/Movie');

router.get('/', getMovies);
router.post('/', createMovie);
router.put('/:id', editMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
