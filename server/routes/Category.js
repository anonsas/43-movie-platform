const express = require('express');
const router = express.Router();

const { getAllCategories, createNewCategory } = require('../controllers/Category');

router.get('/', getAllCategories);
router.post('/', createNewCategory);

module.exports = router;
