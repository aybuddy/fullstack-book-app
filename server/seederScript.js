require('dotenv').config();

const seederData = require('./data/seederData');
const connectDB = require('./config/db');
const Book = require('./models/Book');

connectDB();

const importData = async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(seederData);

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('Error with data import');
    process.exit(1);
  }
};

importData();
