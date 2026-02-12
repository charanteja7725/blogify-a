const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import posts router
const postsRouter = require("./src/routes/posts.routes.js");
const router = require("./src/routes/posts.routes.js");

// Mount router
router.use("/api/v1/posts", postsRouter);

// Root route (optional)
router.get("/", (req, res) => {
  res.send("Blogify API Running...");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running o port ${PORT}`);
});

// Export app for testing
module.exports = app;
