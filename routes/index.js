//Main page

const express = require('express');
const router = express.Router();
import { signup, login, logout } from '../controllers/users';


// Define routes for the index page
router.get('/', (req, res) => {
  res.send('Welcome to the eLibrary index page!');
});

// Register a new user
router.post('/register', signup);

// Login
router.post('/login', login);

// Logout
router.get('/logout', logout);



module.exports = router;
