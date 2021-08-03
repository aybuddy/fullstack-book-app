const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  authors: {
    type: [],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pageCount: Number,
  categories: String,
  thumbnailImage: String,
  listPrice: Number,
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
