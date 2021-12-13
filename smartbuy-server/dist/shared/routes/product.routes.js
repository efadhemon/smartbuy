"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_controller_1 = __importDefault(require("../../modules/product/product.controller"));
var productRouter = express_1.default.Router();
// product routes
productRouter.post("/", product_controller_1.default.create);
productRouter.get("/", product_controller_1.default.get);
productRouter.get("/:id", product_controller_1.default.getById);
productRouter.put("/:id", product_controller_1.default.updateById);
productRouter.delete("/:id", product_controller_1.default.deleteById);
exports.default = productRouter;
