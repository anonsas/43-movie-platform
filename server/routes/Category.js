const express = require('express');
const router = express.Router();

const {
  getAllCategories,
  createNewCategory,
  deleteCategory,
} = require('../controllers/Category');

router.get('/', getAllCategories);
router.post('/', createNewCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
