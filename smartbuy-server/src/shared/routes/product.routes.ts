import express from "express";
import productController from "../../modules/product/product.controller";

const productRouter = express.Router();

// product routes
productRouter.post("/", productController.create);
productRouter.get("/", productController.get);
productRouter.get("/:id", productController.getById);
productRouter.put("/:id", productController.updateById);
productRouter.delete("/:id", productController.deleteById);

export default productRouter;
