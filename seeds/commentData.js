const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Nice show! Must see`!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Aerielists were incredible!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Have you tried their famous popcorn on intermission?",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "I agree with you!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Freak show freaked me out ",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Great time!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "let's go see it!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
