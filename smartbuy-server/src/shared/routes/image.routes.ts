import express from "express";
import imageController from "../../modules/image/image.controller";
import upload from "../utils/multer";

const imageRouter = express.Router();

imageRouter.use("/images", express.static("upload/images"));
imageRouter.post("/image", upload.single("image"), imageController.postImage);

export default imageRouter;
