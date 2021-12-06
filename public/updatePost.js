
const updateTipFormHandler = async (e) => {
    e.preventDefault();
    const post = e.target;
    const postID = JSON.parse(post.parentElement.getAttribute('id'));
    const title = document.querySelector('#title-form').value.trim();
    const description = document.querySelector('#description-form').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/dashboard/update/${postID}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/dashboard');
      } else {
        alert('Failed to update tip');
      }
    }
};
 
  document
  .querySelector('.btn-submit')
  .addEventListener('click', updateTipFormHandler);
