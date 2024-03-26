const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const csurf = require('csurf');

const app = express();
const PORT = process.env.PORT || 3000;

app.enable('trust proxy');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup csurf middleware
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

app.get('/', (req, res) => {
  // Pass the CSRF token to your view/template
  res.send(`Hello from the Backend! CSRF token is ${req.csrfToken()}`);
});

// Example protected post route
app.post('/protected', csrfProtection, (req, res) => {
  // Handle form submission
  // Logic here will only be executed if CSRF token is valid
  res.send('Protected data accessed');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
