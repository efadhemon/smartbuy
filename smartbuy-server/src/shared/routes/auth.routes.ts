import express from "express";
import authController from "../../modules/auth/auth.controller";

const authRouter = express.Router();

// auth routes
authRouter.post("/register/user", authController.userResister);
authRouter.post("/login/user", authController.userLogin);
authRouter.post("/register/admin", authController.adminResister);
authRouter.post("/login/admin", authController.adminLogin);

export default authRouter;
