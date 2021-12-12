import express from "express";
import productController from "../../modules/product/product.controller";

const productRouter = express.Router();

// product routes
productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.put("/:id", productController.updateProductById);
productRouter.delete("/:id", productController.deleteProductById);

export default productRouter;
