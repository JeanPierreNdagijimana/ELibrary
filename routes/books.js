// books routes

const express = require('express');
const router = express.Router();
const books = require('../controllers/books');

// Create a new book
router.post('/', books.createBook);

// Get all books
router.get('/', books.getBooks);

// Get a specific book by ID
router.get('/:id', books.getBookById);

// Update a book
router.put('/:id', books.updateBook);

// Delete a book
router.delete('/:id', books.deleteBook);

// Add more routes as needed for book-related functionalities

module.exports = router;
