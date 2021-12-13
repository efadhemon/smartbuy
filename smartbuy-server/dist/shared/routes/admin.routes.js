"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var admin_controller_1 = __importDefault(require("../../modules/admin/admin.controller"));
var adminRouter = express_1.default.Router();
// admin routes
adminRouter.post("/", admin_controller_1.default.createAdmin);
adminRouter.get("/", admin_controller_1.default.getAdmins);
adminRouter.get("/:id", admin_controller_1.default.getAdminById);
adminRouter.put("/:id", admin_controller_1.default.updateAdminById);
adminRouter.delete("/:id", admin_controller_1.default.deleteAdminById);
exports.default = adminRouter;
