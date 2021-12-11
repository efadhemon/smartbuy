"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var admin_controller_1 = __importDefault(require("../../modules/admin/admin.controller"));
var auth_controller_1 = __importDefault(require("../../modules/auth/auth.controller"));
var category_controller_1 = __importDefault(require("../../modules/category/category.controller"));
var image_controller_1 = __importDefault(require("../../modules/image/image.controller"));
var product_controller_1 = __importDefault(require("../../modules/product/product.controller"));
var user_controller_1 = __importDefault(require("../../modules/user/user.controller"));
var router = express_1.default.Router();
router.get("/", function (req, res) {
    res.send("App is working.");
});
// auth routes
router.post("/auth/register/user", auth_controller_1.default.userResister);
router.post("/auth/login/user", auth_controller_1.default.userLogin);
router.post("/auth/register/admin", auth_controller_1.default.adminResister);
router.post("/auth/login/admin", auth_controller_1.default.adminLogin);
// admin routes
router.post("/admin", admin_controller_1.default.createAdmin);
router.get("/admin", admin_controller_1.default.getAdmins);
router.get("/admin/:id", admin_controller_1.default.getAdminById);
router.put("/admin/:id", admin_controller_1.default.updateAdminById);
router.delete("/admin/:id", admin_controller_1.default.deleteAdminById);
// user routes
router.post("/user", user_controller_1.default.createUser);
router.get("/user", user_controller_1.default.getUsers);
router.get("/user/:id", user_controller_1.default.getUserById);
router.put("/user/:id", user_controller_1.default.updateUserById);
router.delete("/user/:id", user_controller_1.default.deleteUserById);
// product routes
router.post("/product", product_controller_1.default.createProduct);
router.get("/product", product_controller_1.default.getProducts);
router.get("/product/:id", product_controller_1.default.getProductById);
router.put("/product/:id", product_controller_1.default.updateProductById);
router.delete("/product/:id", product_controller_1.default.deleteProductById);
// image route
router.use("/", image_controller_1.default);
// category routes
router.post("/category", category_controller_1.default.createCategory);
router.get("/category", category_controller_1.default.getCategories);
router.get("/category/:id", category_controller_1.default.getCategoryById);
router.put("/category/:id", category_controller_1.default.updateCategoryById);
router.delete("/category/:id", category_controller_1.default.deleteCategoryById);
var indexRouter = router;
exports.default = indexRouter;
