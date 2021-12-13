"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var admin_routes_1 = __importDefault(require("./admin.routes"));
var auth_routes_1 = __importDefault(require("./auth.routes"));
var banner_routes_1 = __importDefault(require("./banner.routes"));
var category_routes_1 = __importDefault(require("./category.routes"));
var image_routes_1 = __importDefault(require("./image.routes"));
var product_routes_1 = __importDefault(require("./product.routes"));
var user_routes_1 = __importDefault(require("./user.routes"));
var indexRouter = express_1.default.Router();
indexRouter.use("/auth", auth_routes_1.default);
indexRouter.use("/admin", admin_routes_1.default);
indexRouter.use("/user", user_routes_1.default);
indexRouter.use("/category", category_routes_1.default);
indexRouter.use("/product", product_routes_1.default);
indexRouter.use("/upload", image_routes_1.default);
image_routes_1.default.use("/banner", banner_routes_1.default);
exports.default = indexRouter;
