const users = []; // Array to store registered users

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username is already taken
  if (users.find(user => user.username === username)) {
    alert('Username is already taken. Please choose a different username.');
    return;
  }

  // Add the new user to the users array
  users.push({ username, password });
  alert('Registration successful. You can now login with your credentials.');
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password match a registered user
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    document.getElementById('loginMessage').innerText = 'Login successful. Redirecting to secured page...';
    // Simulate redirect to secured page
    setTimeout(() => {
      window.location.href = 'secured-page.html';
    }, 2000);
  } else {
    document.getElementById('loginMessage').innerText = 'Invalid username or password. Please try again.';
  }
}
