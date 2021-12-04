const express = require("express");
const router = express.Router();
const userController = require("../modules/users/users.controller");


router.get("/", function(req, res){
  res.send("congrats! App is working.")
});


router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

module.exports = router;
