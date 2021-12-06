const { Comments } = require('../models');

const commentsData = [
  {
    content: "I don't agree.",
    posting_date: "2021-10-01",
    user_id: 1,
    post_id:1,
  },
  {
    content: "Please give more info about this!",
    posting_date: "2021-10-04",
    user_id: 2,
    post_id:1,
  },
  {content: "So true!",
  posting_date: "2021-10-04",
  user_id: 1,
  post_id:2,
  },
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;  