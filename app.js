const express = require('express');
const bookRoutes = require('./routes/book.Routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/api/books', bookRoutes);

app.use(errorHandler);

module.exports = app;
