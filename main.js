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
    window.location.href = "newpass.html";
  } else {
    alert("It seems you made a mistake...");
  }
}
