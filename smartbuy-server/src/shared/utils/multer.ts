import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";

// upload in local

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(
            null,
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

export const multerErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof multer.MulterError) {
        res.status(400).json({
            success: false,
            message: err.message,
            payload: null,
        });
    }
    next();
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            return cb(null, false);
        }
        cb(null, true);
    },
});

export default upload;
