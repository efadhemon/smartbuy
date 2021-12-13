"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config/config"));
var cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config({
    cloud_name: config_1.default.cloudinary.cloud_name,
    api_key: config_1.default.cloudinary.api_key,
    api_secret: config_1.default.cloudinary.api_secret,
    secure: true,
});
exports.default = cloudinary_1.default;
