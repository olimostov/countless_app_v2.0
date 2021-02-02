const Category = require('../models/Category');

// @desc    Get all categories
// @route   GET /api/v1/categories

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res
      .status(200)
      .json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get a particular category
// @route   GET /api/v1/category/:id
exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create a new category
// @route   POST /api/v1/categories
exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    console.log(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    // res.status(400).json({ success: false });
    console.log(error);
  }
};
