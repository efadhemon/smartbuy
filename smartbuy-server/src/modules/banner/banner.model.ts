import IBanner from "./banner.interface";
import mongoose from "mongoose";
const { Schema } = mongoose;

const bannerSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        type: {
            type:  String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Banner = mongoose.model<IBanner>("Banner", bannerSchema);
export default Banner;
