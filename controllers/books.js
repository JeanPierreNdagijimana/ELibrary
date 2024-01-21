// Books controller file

const Book = require('../models/Book');

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error getting books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// ... (similar logic for update and delete)

module.exports = {
  createBook,
  getBooks,
  // ... (export other functions as needed)
};
