const { Client } = require('pg');

const client = new Client({
  user: 'goaly',
  host: 'localhost',
  database: 'goaly',
  password: 'goaly',
  port: 5432,
});

client.connect();




function togglePassword(passwordId, eyeIconId) {
  let passwordField = document.getElementById(passwordId);
  let eyeIcon = document.getElementById(eyeIconId);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.src = "eye-open.png";
  } else {
    passwordField.type = "password";
    eyeIcon.src = "eye-close.png";
  }
}

function Verify() {
  var userRef = "Bob";
  var passRef = "Love";

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  

  if (user === userRef && pass === passRef) {
    alert("Connection Succeeded");
    window.location.href = "admindash.html";
  } else {
    alert("It seems you made a mistake...");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinkEls = document.querySelectorAll('.navs');

  navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
      // Remove 'active' class from all elements
      navLinkEls.forEach(el => {
        el.classList.remove('active');
      });
      
      // Add 'active' class to the clicked element
      navLinkEl.classList.add('active');
    });
  });
});
