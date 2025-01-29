const express = require("express")
const app = express.Router()


router.get("/", (req, res) => {
  res.send("Hello users");
});
//always put a dynamic route up bofore the :id
router.get("/new", (req, res) => {
  res.send("Hello new users");
})

router.post("/", (req, res) => {
  res.send("create user")
})
//dynamic route with parameter
router.get("/:d", (req, res) => {
  res.send(`User is ${req.param.id}`)
})

router.put("/:d", (req, res) => {
  res.send(`update a user with ${req.param.id}`)
})
router.delete("/:d", (req, res) => {
  res.send(`delete a user with ${req.param.id}`)
})



//listen to server
app.listen(3000);


module.exports = router