"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var adminSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
var Admin = mongoose_1.default.model("Admin", adminSchema);
exports.default = Admin;
