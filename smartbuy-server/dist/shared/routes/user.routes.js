"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("../../modules/user/user.controller"));
var userRouter = express_1.default.Router();
// user routes
userRouter.post("/", user_controller_1.default.create);
userRouter.get("/", user_controller_1.default.get);
userRouter.get("/:id", user_controller_1.default.getById);
userRouter.put("/:id", user_controller_1.default.updateById);
userRouter.delete("/:id", user_controller_1.default.deleteById);
exports.default = userRouter;
