const express = require('express');
const router = express.Router();
const csrfProtection = require('csurf')({ cookie: true });
const bodyParser = require('body-parser');
const User = require('../models/user'); // Assuming you have a User model for your database

// Middleware for parsing form data
router.use(bodyParser.urlencoded({ extended: false }));

// Sign-in route
router.post('/sign-in', csrfProtection, async (req, res) => {
  const { username, password } = req.body;
  try {
    // Validate user credentials (this part depends on your User model and authentication logic)
    const user = await User.findByCredentials(username, password);
    if (user) {
      // Assuming you have some session management logic
      req.session.userId = user.id; // Store user id in session
      res.redirect('/dashboard'); // Redirect to a dashboard or home page
    } else {
      res.redirect('/sign-in?error=invalid'); // Redirect back to sign-in page with an error
    }
  } catch (error) {
    console.error(error);
    res.redirect('/sign-in?error=exception'); // Handle unexpected errors
  }
});

module.exports = router;
