// controllers/userController.js
const passport = require('passport');
const User = require('../models/User'); // Assuming you have a User model

const signup = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const newUser = await User.create({ username, role });
    await User.register(newUser, password);

    // Use Passport.js to authenticate the user after signup
    passport.authenticate('local')(req, res, () => {
      res.status(201).json({ message: 'User registered successfully', user: req.user });
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      return res.json({ message: 'Login successful', user: req.user });
    });
  })(req, res, next);
};

const logout = (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
};

module.exports = {
  signup,
  login,
  logout,
};
