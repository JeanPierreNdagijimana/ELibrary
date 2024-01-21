// Database connection

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace 'your_database_url' with your actual MongoDB connection string
    await mongoose.connect('your_database_url', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the application on connection error
  }
};

module.exports = connectDB;
