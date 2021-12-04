const express = require("express");
const router = express.Router();
const authController = require("../modules/auth/auth.controller");
const userController = require("../modules/user/user.controller");


router.get("/", function(req, res){
  res.send("App is working.")
});


// auth route
router.post("/auth/resister", authController.resister)
router.post("/auth/login", authController.login)

// user route
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

module.exports = router;
