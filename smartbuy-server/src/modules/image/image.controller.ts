import { NextFunction, Request, Response } from "express";
import express from "express";
import multer from "multer";
import path from "path";
import { Error } from "mongoose";

const router = express.Router();

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(
            null,
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000  },
});

const postImage = async (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "image uploaded successfully",
        payload: {
            imageUrl: `http://localhost:3000/images/${req.file?.filename}`,
        },
    });
};

export const multerErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof multer.MulterError) {
        res.send({
            success: false,
            message: err.message + ', maximum size is 3000000 bytes',
            payload: {
                imageUrl: null,
            },
        });
    }
    next();
};

router.use("/images", express.static("upload/images"));
router.post("/upload/images", upload.single("image"), postImage);

router.use(multerErrorHandler);

const imageRoute = router;
export default imageRoute;
