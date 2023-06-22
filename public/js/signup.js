// Define a function to handle the signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    // If all required fields are filled, send a POST request to create a new user
    const response = await fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// Add an event listener to the signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
