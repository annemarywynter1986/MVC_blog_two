const { Post } = require("../models");

const postData = [
  {
    title: "Dirty Circus on Thursdays",
    content: "This is the content of the first blog post.",
    user_id: 1,
  },
  {
    title: "Space Cats this Saturdayt",
    content: "This is the content of the second blog post.",
    user_id: 2,
  },
  {
    title: "French Fries or French Sad Clown?",
    content: "This is the content of the third blog post.",
    user_id: 3,
  },
  {
    title: "Another circus  Blog Post",
    content: "noone reads it anyways.",
    user_id: 4,
  },
  {
    title: "This is must see",
    content: "This is the content of the fifth blog post.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
