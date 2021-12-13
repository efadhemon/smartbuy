"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var category_controller_1 = __importDefault(require("../../modules/category/category.controller"));
var categoryRouter = express_1.default.Router();
// category routes
categoryRouter.post("/", category_controller_1.default.create);
categoryRouter.get("/", category_controller_1.default.get);
categoryRouter.get("/:id", category_controller_1.default.getById);
categoryRouter.put("/:id", category_controller_1.default.updateById);
categoryRouter.delete("/:id", category_controller_1.default.deleteById);
exports.default = categoryRouter;
