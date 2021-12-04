const express = require("express");
const router = express.Router();
const authController = require("../modules/auth/auth.controller");
const userController = require("../modules/user/user.controller");
const productController = require("../modules/product/product.controller");


router.get("/", function(req, res){
  res.send("App is working.")
});


// auth route
router.post("/auth/resister", authController.resister)
router.post("/auth/login", authController.login)

// user route
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

// product route
router.post("/products", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.put("/products/:id", productController.updateProductById);
router.delete("/products/:id", productController.deleteProductById);


module.exports = router;
