// Function to handle the comment form submission
const commentFormHandler = async (event) => {
  event.preventDefault();

  // Get the comment and post ID values from the form
  const feedback = document.querySelector('#comment').value.trim();
  const post_id = document.querySelector('.feedback-form').dataset.id;

  // Send a POST request to create a new comment
  if (feedback) {
    try {
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ feedback, post_id }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      if (response.ok) {
        // Reload the page to display the new comment
        document.location.reload();
      } else {
        // Display an error message if the request was not successful
        console.error('Failed to create comment:', response.statusText);
      }
    } catch (err) {
      console.error('Error creating comment:', err);
    }
  }
};

// Attach the comment form submit event listener
document
  .querySelector('.feedback-form')
  .addEventListener('submit', commentFormHandler);
