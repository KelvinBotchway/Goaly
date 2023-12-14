const { Client } = require('pg');

const client = new Client({
  user: 'goaly',
  host: 'localhost',
  database: 'goaly',
  password: 'goaly',
  port: 5432,
});

client.connect();


function Verify() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    client.query('SELECT * FROM users WHERE username = $1', [username], (err, res) => {
      if (err) {
        console.error(err);
        alert('Error verifying credentials');
        return;
      }
  
      if (res.rows.length === 0) {
        alert('Invalid username or password');
        return;
      }
  
      const user = res.rows[0];
      if (password !== user.password) {
        alert('Invalid username or password');
        return;
      }
  
      // User is authenticated
      // Implement your logic here
      alert('User authenticated successfully');
    });
  }

  
  function Verify() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatpassword').value;
  
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }
  
    client.query('UPDATE users SET password = $1 WHERE username = $2', [password, username], (err, res) => {
      if (err) {
        console.error(err);
        alert('Error updating password');
        return;
      }
  
      alert('Password updated successfully');
    });
  }
  