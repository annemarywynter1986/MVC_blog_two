// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Update the circus post
  const updateCircusPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-circus-post").value.trim();
    const content = document
      .querySelector("#content-update-circus-post")
      .value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); // When successful, load the dashboard page
      } else {
        alert("Failed to update a post."); // When unsuccessful, show alert
      }
    }
  };
  
  // Delete the circus post
  const deleteCircusPostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
      alert("Failed to delete a post."); // When unsuccessful, show alert
    }
  };
  
  // Event listeners
  const updateCircusPostButton = document.querySelector("#update-circus-post");
  
  if (updateCircusPostButton) {
    updateCircusPostButton.addEventListener("click", updateCircusPostFormHandler);
  }
  
  const deleteCircusPostButton = document.querySelector("#delete-circus-post");
  
  if (deleteCircusPostButton) {
    deleteCircusPostButton.addEventListener("click", deleteCircusPostFormHandler);
  }
  