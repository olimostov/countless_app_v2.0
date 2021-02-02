const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/v1/transactions

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find().populate('sub_category_Id');
    // .populate('sub_category_Id');
    res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

// @desc    Get a particular transaction
// @route   GET /api/v1/transactions/:id
exports.getTransactionById = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create a new transaction
// @route   POST /api/v1/transactions
exports.createTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body);
    console.log(req.body);
    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    // res.status(400).json({ success: false });
    console.log(error);
  }
};

// @desc    Update a particular transaction
// @route   PUT /api/v1/transactions/:id
exports.updateTransactionById = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!transaction) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete a particular transaction
// @route   DELETE /api/v1/transactions/:id
exports.deleteTransactionById = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
