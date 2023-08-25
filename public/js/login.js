// Handler function for circus login form submission
const circusLoginFormHandler = async (event) => {
  event.preventDefault();
  // Get the values of the username and password input fields
  const username = document.querySelector('#username-circus-login').value.trim();
  const password = document.querySelector('#password-circus-login').value.trim();
  // If the input fields have values
  if (username && password) {
    // Send a POST request to the login endpoint with the input values as JSON data
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Username:', username);
    console.log('Password:', password);

    // If the request was successful, redirect to the homepage
    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      // If the request was unsuccessful, show an alert
      alert('Failed to log in.'); // When unsuccessful, show alert
    }
  }
};

// Event listener for the circus login form
const circusLoginForm = document.querySelector('.circus-login-form');
if (circusLoginForm) {
  circusLoginForm.addEventListener('submit', circusLoginFormHandler);
}
