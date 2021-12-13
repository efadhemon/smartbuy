import express, { Request, Response } from "express";
import adminRouter from "./admin.routes";
import authRouter from "./auth.routes";
import bannerRouter from "./banner.routes";
import categoryRouter from "./category.routes";
import imageRouter from "./image.routes";
import productRouter from "./product.routes";
import userRouter from "./user.routes";

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/admin", adminRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/category", categoryRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/banner", bannerRouter);
indexRouter.use("/upload", imageRouter);

export default indexRouter;
