import { multerErrorHandler } from "./shared/utils/multer";
import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import indexRouter from "./shared/routes/index";
require("./shared/db/db");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// app router
app.use("/api/v1", indexRouter);


/** Error handling */
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Not found");
    res.status(404).json({
        success: false,
        message: error.message,
        payload: null,
    });
});

app.use(multerErrorHandler);

export default app;
