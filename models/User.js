// user model
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String, // Handled by passport-local-mongoose
  role: {
    type: String,
    enum: ['student', 'lecturer', 'faculty_manager', 'admin'],
    required: true,
  },
  assignedSubjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClassSchedule' }],
  holidays: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Holiday' }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
