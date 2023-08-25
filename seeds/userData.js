// Importing Post model from ../models directory
const { User } = require("../models");
// Array of dummy blog post data
const userData = [
  {
    username: "sadclown",
    email: "sadclown@ecircusmustgoon.com",
    password: "password1",
  },
  {
    username: "showmeburlesque",
    email: "user2@example.com",
    password: "password0000",
  },
  {
    username: "iamhereforcomments",
    email: "user3@example.com",
    password: "password3",
  },
  {
    username: "zimasparkles",
    email: "zima@houseofyes.org",
    password: "realPerson123",
  },
  {
    username: "CentralGrader",
    email: "centralGrader@example.com",
    password: "password5",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;
