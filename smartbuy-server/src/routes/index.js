const express = require("express");
const router = express.Router();
const authController = require("../modules/auth/auth.controller");
const userController = require("../modules/user/user.controller");
const productController = require("../modules/product/product.controller");
const categoryController = require("../modules/category/category.controller");


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

// category route
router.post("/category", categoryController.createCategory);
router.get("/category", categoryController.getCategories);
router.get("/category/:id", categoryController.getCategoryById);
router.put("/category/:id", categoryController.updateCategoryById);
router.delete("/category/:id", categoryController.deleteCategoryById);

module.exports = router;
