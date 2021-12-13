"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var category_controller_1 = __importDefault(require("../../modules/category/category.controller"));
var categoryRouter = express_1.default.Router();
// category routes
categoryRouter.post("/", category_controller_1.default.createCategory);
categoryRouter.get("/", category_controller_1.default.getCategories);
categoryRouter.get("/:id", category_controller_1.default.getCategoryById);
categoryRouter.put("/:id", category_controller_1.default.updateCategoryById);
categoryRouter.delete("/:id", category_controller_1.default.deleteCategoryById);
exports.default = categoryRouter;
