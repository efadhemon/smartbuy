import express from "express";
import adminController from "../../modules/admin/admin.controller";

const adminRouter = express.Router();

// admin routes
adminRouter.post("/", adminController.create);
adminRouter.get("/", adminController.get);
adminRouter.get("/:id", adminController.getById);
adminRouter.put("/:id", adminController.updateById);
adminRouter.delete("/:id", adminController.deleteById);

export default adminRouter;
