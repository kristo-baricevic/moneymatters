const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Adjust the path as necessary

class UserController {
  // Method to handle user sign-in
  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      
      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).send('Authentication failed');
      }

      // Assuming session is used for managing user sessions
      req.session.userId = user.id;
      res.send('User signed in successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }

  // Method to handle user sign-out
  signOut(req, res) {
    req.session.destroy(() => {
      res.send('User signed out successfully');
    });
  }
}

module.exports = new UserController();
