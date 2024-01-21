//Books model

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // Assuming the photo is stored as a URL or file path
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
