const updateFormHandler = async (event) => {
  event.preventDefault();

  // Get the post description, id, and title values from the form
  const post_id = event.target.getAttribute('data-id');
  const title = document.querySelector('#edit-title').value.trim();
  const description = document.querySelector('#edit-description').value.trim();

  // Send a POST request to create a new post
  if (title && description) {
    try {
      const response = await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      if (response.ok) {
        // Reload the page to display the new post
        document.location.replace(`/post/${post_id}`);
      } else {
        // Display an error message if the request was not successful
        console.error('Failed to update post:', response.statusText);
      }
    } catch (err) {
      console.error('Error updating post:', err);
    }
  }
};

document
  .querySelector('#update-btn')
  .addEventListener('click', updateFormHandler);
