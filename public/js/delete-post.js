const deletePost = async (post_id) => {
    try {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        body: formData,
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to delete the post.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the post:", error);
    }
  };
  
  const deletePostHandler = (event) => {
    if (event.target.matches(".delete-post")) {
      const post_id = event.target.getAttribute("data-post-id");
      deletePost(post_id);
    }
  };
  
  document.addEventListener("click", deletePostHandler);
  