function Verify() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch(`/login?username=${username}&password=${password}`)
    .then((response) => response.text())
    .then((data) => {
      alert(data); // Show the response message (e.g., Login successful, Invalid username or password)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
