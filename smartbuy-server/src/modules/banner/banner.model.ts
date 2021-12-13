import IBanner from "./banner.interface";
import mongoose from "mongoose";
const { Schema } = mongoose;

const bannerSchema = new Schema(
    {
        type: {
            type:  ["HERO_SLIDER" , "CAMPAIGN_SLIDER" , "OFFER_SLIDER"],
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
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
