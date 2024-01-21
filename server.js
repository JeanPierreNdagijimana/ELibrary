// This is the main file of the project


const express       = require('express');
const connectDB     = require('./config/db');
const Mongoose      = require('mongoose');
const passport      = require('passport');
const users         = require('./controllers/users');
const router        = express.Router();
const books         = require('./controllers/books');
const holidays      = require('./controllers/holidays');
const subjects      = require('./controllers/subjects');
const schedules     = require('./controllers/schedules');
const tasks         = require('./controllers/tasks');
const dotenv        = require('dotenv');
dotenv.config();
const app           = express();
const PORT          = process.env.PORT || 3000;
// Import your Mongoose models
const Subject       = require('./models/Subject');
const ClassSchedule = require('./models/Schedule');
const Task          = require('./models/Task');
const Holiday       = require('./models/Holiday');
const Book          = require('./models/Book');
const User          = require('./models/User');
const { response } = require('express');


// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Routes

// Main page from routes folder
app.use('/', require('./routes/index'));

//users routes
app.use('/users', require('./routes/users'));

//books routes
app.use('/books', require('./routes/books'));

//holidays routes
app.use('/holidays', require('./routes/holidays'));

//subjects routes
app.use('/subjects', require('./routes/subjects'));

//schedules routes
app.use('/schedules', require('./routes/schedules'));

//tasks routes
app.use('/tasks', require('./routes/tasks'));

// Passport middleware
app.use(passport.initialize()); // Passport config
require('./config/passport')(passport); // Routes



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
