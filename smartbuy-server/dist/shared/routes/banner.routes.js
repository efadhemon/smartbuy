"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var banner_controller_1 = __importDefault(require("../../modules/banner/banner.controller"));
var bannerRouter = express_1.default.Router();
// admin routes
bannerRouter.post("/", banner_controller_1.default.create);
bannerRouter.get("/", banner_controller_1.default.get);
bannerRouter.get("/:id", banner_controller_1.default.getById);
bannerRouter.put("/:id", banner_controller_1.default.updateByID);
bannerRouter.delete("/:id", banner_controller_1.default.deleteById);
exports.default = bannerRouter;
