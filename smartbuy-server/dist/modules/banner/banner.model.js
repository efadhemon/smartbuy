"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var bannerSchema = new Schema({
    type: {
        type: ["HERO_SLIDER", "CAMPAIGN_SLIDER", "OFFER_SLIDER"],
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
}, {
    timestamps: false,
    versionKey: false,
});
var Banner = mongoose_1.default.model("Banner", bannerSchema);
exports.default = Banner;
