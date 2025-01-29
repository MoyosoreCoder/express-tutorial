const express = require("express");
const app = express.Router();

router.get("/", (req, res) => {
  console.log("Hello express");
  res.send("Hi");
  //res.download(server.js);
});

router.get("/users", (req, res) => {
  res.send("Hello users");
});
router.get("/users/new", (req, res) => {
  res.send("Hello new users");
});

//define the path
const userRouter = require("./routes/users");
//listen to server
app.listen(3000);
