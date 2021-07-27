const router = require("express").Router();
const userRoutes = require("./userRoute");
const storyRoutes = require("./storyRoute");

// Post routes
router.use("/user", userRoutes);
router.use("/story", storyRoutes);

module.exports = router;