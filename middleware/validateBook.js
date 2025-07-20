const { body } = require('express-validator');

const validateBook = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('genre').optional().isString().withMessage('Genre must be a string'),
  body('publishedYear').optional().isInt().withMessage('Published year must be an integer'),
];

module.exports = validateBook;
