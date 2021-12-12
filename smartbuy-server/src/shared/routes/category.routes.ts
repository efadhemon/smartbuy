import express from "express";
import categoryController from "../../modules/category/category.controller";

const categoryRouter = express.Router();

// category routes
categoryRouter.post("/", categoryController.createCategory);
categoryRouter.get("/", categoryController.getCategories);
categoryRouter.get("/:id", categoryController.getCategoryById);
categoryRouter.put("/:id", categoryController.updateCategoryById);
categoryRouter.delete("/:id", categoryController.deleteCategoryById);

export default categoryRouter;
