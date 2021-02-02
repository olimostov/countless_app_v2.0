const express = require('express');
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransactionById,
  deleteTransactionById
} = require('../controllers/transactionsControllers');
const router = express.Router();

router.route('/').get(getTransactions).post(createTransaction);

router
  .route('/:id')
  .get(getTransactionById)
  .put(updateTransactionById)
  .delete(deleteTransactionById);

module.exports = router;
