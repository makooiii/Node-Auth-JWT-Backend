const router = require("express").Router();
const verify = require("./verifyToken");

// used verify as middleware
router.get("/", verify, (req, res) => {
  res.json({ posts: { title: "my first post", description: " Test description" } });
});

module.exports = router;
