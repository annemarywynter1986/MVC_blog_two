// Create new post public/js/new-post.js
const newCircusPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-circus-post').value.trim();
  const content = document.querySelector('#content-new-circus-post').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard'); // When successful, load the dashboard page
    } else {
      alert('Failed to create a new post.'); // When unsuccessful, show alert
    }
  }
};

// Event listeners
const newCircusPostForm = document.querySelector('.new-circus-post-form');
if (newCircusPostForm) {
  newCircusPostForm.addEventListener('submit', newCircusPostFormHandler);
}
