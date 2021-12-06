const router = require('express').Router();
const { Post,User} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',withAuth, async (req, res) => {
    try {
        if(!req.session.user_id){
          res
          .status(400)
          .json({ message: 'You need to log in!' });
        return;
        }   
        const dbMyPostData = await Post.findAll({
            where:{user_id: req.session.user_id}
            });    
        const myposts = dbMyPostData.map((post) =>
        post.get({ plain: true })
        );
          res.render('dashboard', {
            myposts,
            loggedIn: req.session.loggedIn,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
          
        }
});

router.get('/update/:id',withAuth, async (req, res) => {
  try {
    const dbMyPostData = await Post.findAll({
      where:{id: req.params.id}});
  const mypost = dbMyPostData.map((post) =>
  post.get({ plain: true })
  );
  const myposts= mypost[0];
  console.log(myposts)
    res.render('updateTip', myposts
    );

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/update/:id', async (req, res) => {
    try {
      const newUpdate = await Post.update({
        title: req.body.title,
        content: req.body.description},
        {where: {
          id: req.params.id}
      });
      res.status(200).json(newUpdate);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.get('/delete/:id',withAuth, async (req, res) => {
  try {
    const dbMyPostData = await Post.findAll({
      where:{id: req.params.id}});
  const mypost = dbMyPostData.map((post) =>
  post.get({ plain: true })
  );
  const myposts= mypost[0];
  console.log(myposts)
    res.render('delete', myposts
    );

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
        where: {
            id: req.params.id,
        },
        });
        console.log(1)
        if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
        }
        console.log(2)
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


  
module.exports = router;