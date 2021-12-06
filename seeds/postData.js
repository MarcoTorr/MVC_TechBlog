const { Post} = require('../models');

const postdata = [
  {
    title: 'Debugging',
    posting_date: '2021-10-04',
    content: 'If you modularize your working space, it is easier to debug',
    user_id: 1,
  },
  {
    title: 'Learning new tips',
    posting_date: '2021-11-04',
    content: 'If you practice and try to learn new things everyday, you will become a great developer',
    user_id: 2,
  },
  {
    title: 'Working fast',
    posting_date: '2021-12-04',
    content: 'Work smart and not hard',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;

