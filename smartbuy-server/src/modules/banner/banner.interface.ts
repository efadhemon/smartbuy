import { Document } from "mongoose";

export default interface IBanner extends Document {
    type: "HERO_SLIDER" | "CAMPAIGN_SLIDER" | "OFFER_SLIDER";
    image: string;
    isActive: boolean;
}