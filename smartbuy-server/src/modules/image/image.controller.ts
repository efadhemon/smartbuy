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
            payload: {
                url: image.secure_url,
                cloudinary_id: image.public_id,
            },
        });
    },
};

export default imageController;
