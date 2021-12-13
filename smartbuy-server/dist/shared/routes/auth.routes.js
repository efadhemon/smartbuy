"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_controller_1 = __importDefault(require("../../modules/auth/auth.controller"));
var authRouter = express_1.default.Router();
// auth routes
authRouter.post("/register/user", auth_controller_1.default.userResister);
authRouter.post("/login/user", auth_controller_1.default.userLogin);
authRouter.post("/register/admin", auth_controller_1.default.adminResister);
authRouter.post("/login/admin", auth_controller_1.default.adminLogin);
exports.default = authRouter;
