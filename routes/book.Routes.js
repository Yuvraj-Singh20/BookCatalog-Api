const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/book.controller');

const validateBook = require('../middleware/validateBook');
const { validationResult } = require('express-validator');

const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.post('/', validateBook, runValidation, createBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', validateBook, runValidation, updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
