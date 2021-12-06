
const deleteTipFormHandler = async (e) => {
    e.preventDefault();
    const post = e.target;
    console.log(post.parentElement);
    const postID = JSON.parse(post.parentElement.getAttribute('id'));
    console.log(postID);

      const response = await fetch(`/api/dashboard/delete/${postID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/dashboard');
      } else {
        alert('Failed to delete tip');
      }
    
};
 
  document
  .querySelector('#deleteBtn')
  .addEventListener('click', deleteTipFormHandler);
