import { Request, Response } from "express";
import cloudinary from "../../shared/utils/cloudinary";

const imageController = {
    postImage: async (req: Request, res: Response) => {
        const image = await cloudinary.v2.uploader.upload(
            `./upload/images/${req.file?.filename}`
        );
        res.send({
            success: true,
            message: "image uploaded successfully",
            url: image.secure_url,
        });
    },
};

export default imageController;
