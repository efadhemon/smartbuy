"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
var verify = function (req, res, next) {
    var token = req.header("auth-token");
    if (!token)
        return res.status(401).send("Access Denied");
    try {
        var verified = jsonwebtoken_1.default.verify(token, config_1.default.token.secret);
        // req.accepted = verified;
        next();
    }
    catch (err) {
        res.status(401).send("Invalid Token");
    }
};
module.exports.verify = verify;
