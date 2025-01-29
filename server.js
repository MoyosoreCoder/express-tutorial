const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello express");
  res.send("Hi");
  //res.download(server.js);
});

app.get("/users", (req, res) => {
  res.send("Hello users");
});
//listen to server
app.listen(3000);
