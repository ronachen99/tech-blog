// Function to handle the post form submission
const postFormHandler = async (event) => {
  event.preventDefault();

  // Get the post content and title values from the form
  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-description').value.trim();

  // Send a POST request to create a new post
  if (title && description) {
    try {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      if (response.ok) {
        // Reload the page to display the new post
        document.location.reload();
      } else {
        // Display an error message if the request was not successful
        console.error('Failed to create post:', response.statusText);
      }
    } catch (err) {
      console.error('Error creating post:', err);
    }
  }
};

// Function to handle the delete action for a post
const deleteHandler = async (event) => {
  event.preventDefault();
  const post_id = event.target.getAttribute('data-id');
  try {
    const response = await fetch(`/api/post/${post_id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      // Reload the page to display the updated post list
      document.location.reload();
    } else {
      // Display an error message if the request was not successful
      console.error('Failed to delete post:', response.statusText);
    }
  } catch (err) {
    console.error('Error deleting post:', err);
  }
};

// Function to handle the update action for a post
const updateHandler = async (event) => {
  event.preventDefault();
  const post_id = event.target.getAttribute('data-id');
  document.location.replace(`/update/${post_id}`);
};

// Attach event listeners to update buttons
const updateButtons = document.querySelectorAll('.update-btn');
updateButtons.forEach((button) => {
  button.addEventListener('click', updateHandler);
});

// Attach event listeners to delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach((button) => {
  button.addEventListener('click', deleteHandler);
});

// Attach event listener to the post form submit event
document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);
