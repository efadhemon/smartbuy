import express, { Request, Response } from "express";
import adminController from "../../modules/admin/admin.controller";
import authController from "../../modules/auth/auth.controller";
import categoryController from "../../modules/category/category.controller";
import imageRoute from "../../modules/image/image.controller";
import productController from "../../modules/product/product.controller";
import userController from "../../modules/user/user.controller";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("App is working.");
});

// auth routes
router.post("/auth/register/user", authController.userResister);
router.post("/auth/login/user", authController.userLogin);
router.post("/auth/register/admin", authController.adminResister);
router.post("/auth/login/admin", authController.adminLogin);

// admin routes
router.post("/admin", adminController.createAdmin);
router.get("/admin", adminController.getAdmins);
router.get("/admin/:id", adminController.getAdminById);
router.put("/admin/:id", adminController.updateAdminById);
router.delete("/admin/:id", adminController.deleteAdminById);

// user routes
router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUserById);
router.delete("/user/:id", userController.deleteUserById);

// product routes
router.post("/product", productController.createProduct);
router.get("/product", productController.getProducts);
router.get("/product/:id", productController.getProductById);
router.put("/product/:id", productController.updateProductById);
router.delete("/product/:id", productController.deleteProductById);

// image route
router.use("/", imageRoute);

// category routes
router.post("/category", categoryController.createCategory);
router.get("/category", categoryController.getCategories);
router.get("/category/:id", categoryController.getCategoryById);
router.put("/category/:id", categoryController.updateCategoryById);
router.delete("/category/:id", categoryController.deleteCategoryById);

const indexRouter = router;
export default indexRouter;
