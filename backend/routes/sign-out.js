const express = require('express');
const router = express.Router();

router.post('/sign-out', (req, res) => {
  req.session.destroy(() => { // Assuming session middleware is used
    res.redirect('/'); // Redirect to the homepage or sign-in page
  });
});

module.exports = router;
