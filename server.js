const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Database connection
let db = new sqlite3.Database('./chinook.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the chinook database');
  }
});

// Serve static files (HTML, CSS, images)
app.use(express.static('public'));

// Handle form submission
app.get('/login', (req, res) => {
  const { username, password } = req.query;

  // Query the database for the provided username and password
  db.get('SELECT * FROM Admins WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      console.error(err.message);
      res.send('Error during login');
    } else if (row) {
      res.send('Login successful');
    } else {
      res.send('Invalid username or password');
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
