const router = require('express').Router();
const { Post, Comments,User} = require('../models');



// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
          include:[{
            model:User,
            attributes: ['username']},
            {model:Comments,
              include:{model:User,attributes: ['username']},
            }
          ],
        });
        const posts = dbPostData.map((post) =>
        post.get({ plain: true })
        );
     
        console.log(posts[0].comments);

          res.render('homepage', {
            posts,

            loggedIn: req.session.loggedIn,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
});
      



module.exports=router