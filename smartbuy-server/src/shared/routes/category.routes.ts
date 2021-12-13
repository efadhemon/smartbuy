import express from "express";
import categoryController from "../../modules/category/category.controller";

const categoryRouter = express.Router();

// category routes
categoryRouter.post("/", categoryController.create);
categoryRouter.get("/", categoryController.get);
categoryRouter.get("/:id", categoryController.getById);
categoryRouter.put("/:id", categoryController.updateById);
categoryRouter.delete("/:id", categoryController.deleteById);

export default categoryRouter;
