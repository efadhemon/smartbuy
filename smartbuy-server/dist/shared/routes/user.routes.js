"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("../../modules/user/user.controller"));
var userRouter = express_1.default.Router();
// user routes
userRouter.post("/", user_controller_1.default.createUser);
userRouter.get("/", user_controller_1.default.getUsers);
userRouter.get("/:id", user_controller_1.default.getUserById);
userRouter.put("/:id", user_controller_1.default.updateUserById);
userRouter.delete("/:id", user_controller_1.default.deleteUserById);
exports.default = userRouter;
