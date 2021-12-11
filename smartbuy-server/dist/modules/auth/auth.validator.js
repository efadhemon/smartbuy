"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
var joi_1 = __importDefault(require("joi"));
var regex_1 = require("../../shared/utils/regex");
var authValidation = function (data) {
    var schema = joi_1.default.object({
        phone: joi_1.default.string()
            .pattern(new RegExp(regex_1.BD_PHONE_NUMBER_PATTERN))
            .message("".concat(data.phone, " is not a valid phone number")),
        password: joi_1.default.string().min(6).required(),
    });
    return schema.validate(data);
};
exports.authValidation = authValidation;
