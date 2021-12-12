import express from "express";
import adminController from "../../modules/admin/admin.controller";

const adminRouter = express.Router();

// admin routes
adminRouter.post("/", adminController.createAdmin);
adminRouter.get("/", adminController.getAdmins);
adminRouter.get("/:id", adminController.getAdminById);
adminRouter.put("/:id", adminController.updateAdminById);
adminRouter.delete("/:id", adminController.deleteAdminById);

export default adminRouter;
