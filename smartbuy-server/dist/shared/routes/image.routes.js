"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_controller_1 = __importDefault(require("../../modules/image/image.controller"));
var multer_1 = __importDefault(require("../utils/multer"));
var imageRouter = express_1.default.Router();
imageRouter.use("/images", express_1.default.static("upload/images"));
imageRouter.post("/image", multer_1.default.single("image"), image_controller_1.default.postImage);
exports.default = imageRouter;
