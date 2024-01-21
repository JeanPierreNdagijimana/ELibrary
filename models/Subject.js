// Subject model

const mongoose = require('mongoose');
const shortid = require('shortid'); // To generate random characters

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    unique: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
    },
  year: {
    type: Number,
    required: true,
    },
  description: {
    type: String,
    required: true,
    },
});

// Generate a code before saving the subject
subjectSchema.pre('save', function (next) {
  // Take the first 3 letters of the subject name
  const prefix = this.name.slice(0, 3).toUpperCase();

  // Generate 5 random characters using shortid library
  const randomChars = shortid.generate().slice(0, 5);

  // Combine the prefix and random characters to form the code
  this.code = `${prefix}${randomChars}`;

  next();
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
