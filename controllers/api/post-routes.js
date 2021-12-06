const router = require('express').Router();
const { Post, Comments} = require('../../models');

router.get('/add', async (req, res) => {
    try {
          res.render('newpost'
          );
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
});
router.post('/add', async (req, res) => {
    try {
      const newPost = await Post.create({
        title: req.body.title,
        content: req.body.description,
        posting_date: req.body.date,
        user_id: req.session.user_id,
      });
       res.status(200).json(newPost);

    } catch (err) {
      res.status(400).json(err);
    }
});

router.post('/add', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.description,
      posting_date: req.body.date,
      user_id: req.session.user_id,
    });
    console.log(newPost);
    res.status(200).json(newPost);

  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/:id/addComment', async (req, res) => {
  try {
    const dbMyPostData = await Post.findAll({
      where:{id: req.params.id}});
  const post = dbMyPostData.map((post) =>
  post.get({ plain: true })
  );
  const post1= post[0];
    res.render('newcomment',post1
    );

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/:id/addComment', async (req, res) => {
  try {
    const newComment = await Comments.create({
      content: req.body.content,
      posting_date: req.body.date,
      user_id: req.session.user_id,
      post_id:  req.params.id,
    });
    console.log(newComment);
    res.status(200).json(newComment);

  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;