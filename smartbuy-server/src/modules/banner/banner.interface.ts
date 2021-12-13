import { Document } from "mongoose";

export default interface IBanner extends Document {
    type: "HERO_SLIDER" | "HOME_SLIDER" | "OFFER_SLIDER";
    url: string;
    isActive: boolean;
}