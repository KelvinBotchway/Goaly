console.log("Hello world")

//Submit Button
function Verify() {
    var userRef = "Bob";
    var passRef = "Love";
    
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef && pass == passRef) {
    alert("Connection Suceeded")
    window.location.href = "newpass.html"
    
    } else {
    alert("It's seem you made a mistake...")
    }
  };