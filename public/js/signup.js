// Signup request
const circusSignupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      console.log('Signup successful.');
      document.location.replace('/'); // When successful, load the homepage
    } else {
      console.log('Signup failed.');
      alert('Failed to sign up.'); // When unsuccessful, show alert
    }
    
    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      alert('Failed to sign up.'); // When unsuccessful, show alert
    }
  }
};

// Event listener
const circusSignupForm = document.querySelector('#signup-form');
if (circusSignupForm) {
  circusSignupForm.addEventListener('submit', circusSignupFormHandler);
}
