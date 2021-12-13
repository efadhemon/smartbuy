"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var productSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: Object,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: false,
    versionKey: false,
});
var Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
