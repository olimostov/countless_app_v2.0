const express = require('express');
const {
  getCategories,
  createCategory,
  getCategoryById
} = require('../controllers/categoriesControllers');
const router = express.Router();

router.route('/').get(getCategories).post(createCategory);

router.route('/:id').get(getCategoryById);

module.exports = router;
