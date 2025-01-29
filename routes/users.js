const express = require("express");
const router = express.Router();

// Route for "/users/"
router.get("/", (req, res) => {
  res.send("Hello users");
});

// Route for "/users/new"
router.get("/new", (req, res) => {
  res.send("Hello new users");
});

//post request
router.post("/", (req, res) => {
  res.send("Create user");
});

// Dynamic routes should be below static ones
router
  .route("/:id")
  .get((req, res) => {
    res.send(`User is ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleted user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Updated user with ID ${req.params.id}`);
  });

// Param middleware (fixed syntax)
router.param("id", (req, res, next, id) => {
  console.log(`User ID: ${id}`);
  next(); // Proceed to next middleware
});

// Export router
module.exports = router;
