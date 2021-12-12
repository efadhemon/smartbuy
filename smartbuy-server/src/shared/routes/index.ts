import express, { Request, Response } from "express";
import adminRouter from "./admin.routes";
import authRouter from "./auth.routes";
import categoryRouter from "./category.routes";
import imageRouter from "./image.routes";
import productRouter from "./product.routes";
import userRouter from "./user.routes";

const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send("App is working.");
});


indexRouter.use("/auth", authRouter);
indexRouter.use("/admin", adminRouter);
indexRouter.use("/user", userRouter);
indexRouter.use("/category", categoryRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/upload", imageRouter);


export default indexRouter;
