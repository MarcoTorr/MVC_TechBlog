const newComment= async (e) => {
    e.preventDefault();
    const post = e.target;
    const postid = JSON.parse(post.parentElement.getAttribute('id'));
    var today = new Date();
    var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const content = document.querySelector('#description-form').value.trim();
   
    const date=date1+' '+time;

    if (content) {
        console.log(1);
      const response = await fetch(`/api/post/${postid}/addComment`, {
        method: 'POST',
        body: JSON.stringify({content,date}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add new comment');
      }
    }
};
 
  document
  .querySelector('.commentBtn')
  .addEventListener('click', newComment);
