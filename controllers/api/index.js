const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const seedUsers = require('./seed-users');
const seedPosts = require('./seed-posts');

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
(async () => {
    try {
      await seedUsers();
      await seedPosts();
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
  })();

module.exports = router;
