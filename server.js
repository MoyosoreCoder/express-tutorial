const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

//optional, this is for router
const userRouter = require("./routes/users.js");

//for logger middleware
app.use(logger);

app.use("/users", userRouter);

//beginning of codes
app.get("/", (req, res) => {
  console.log("Hello express");
  //res.send("Hi");
  //res.download(server.js);
  res.render("./index");
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
//listen to server
app.listen(3000);
