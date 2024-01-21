// users routes

const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

// Register a new user
router.post('/register', users.signup);

// Login
router.post('/login', users.login);

// Logout
router.get('/logout', users.logout);

// Add more routes as needed for user-related functionalities

module.exports = router;
