// Create new post public/js/new-post.js
const newCircusPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-circus-post').value.trim();
  const content = document.querySelector('#content-new-circus-post').value.trim();
  // const imageInput = document.querySelector('#image-input'); 

  if (title && content) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    // formData.append('image', imageInput.files[0]);

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: formData,
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
