import { Document } from "mongoose";

export default interface IBanner extends Document {
    image: string;
    title: string;
    type: "HERO_SLIDER" | "CAMPAIGN_SLIDER" | "OFFER_SLIDER";
    url: string;
}
