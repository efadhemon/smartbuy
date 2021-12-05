import express, { Request, Response } from "express";
import authController from "../../modules/auth/auth.controller";
import productController from "../../modules/product/product.controller";
import userController from "../../modules/user/user.controller";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("App is working.");
});

// auth route
router.post("/auth/resister", authController.resister);
router.post("/auth/login", authController.login);

// user route
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);

// product route
router.post("/products", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.put("/products/:id", productController.updateProductById);
router.delete("/products/:id", productController.deleteProductById);

const indexRouter = router;

export default indexRouter;
