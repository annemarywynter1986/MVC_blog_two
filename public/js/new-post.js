// // Create new post public/js/new-post.js
// const newCircusPostFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#title-new-circus-post').value.trim();
//   const content = document.querySelector('#content-new-circus-post').value.trim();


  
//   if (title && content) {
//     const response = await fetch('/api/posts', {
//       method: 'POST',
//       body: JSON.stringify({ title, content }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard'); // When successful, load the dashboard page
//     } else {
//       alert('Failed to create a new post.'); // When unsuccessful, show alert
//     }
//   }
// };

// // Event listeners
// const newCircusPostForm = document.querySelector('.new-circus-post-form');
// if (newCircusPostForm) {
//   newCircusPostForm.addEventListener('submit', newCircusPostFormHandler);
// }

const newCircusPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-circus-post').value.trim();
  const content = document.querySelector('#content-new-circus-post').value.trim();
  const imageInput = document.querySelector('#image-new-circus-post');
  const imageFile = imageInput.files[0]; // Get the selected image file

  if (title && content && imageFile) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', imageFile);

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: formData,
    });
   

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create a new post.');
      console.log('hello');
    }
  }
};

const newCircusPostForm = document.querySelector('.new-circus-post-form');
if (newCircusPostForm) {
  newCircusPostForm.addEventListener('submit', (event) => {
    console.log('Submit button clicked');
    newCircusPostFormHandler(event);
  });
}


