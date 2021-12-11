"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var auth_validator_1 = require("./auth.validator");
var user_model_1 = __importDefault(require("../user/user.model"));
var config_1 = __importDefault(require("../../shared/config/config"));
var admin_model_1 = __importDefault(require("../admin/admin.model"));
//-------------------- user auth ----------------------------------------------
var userResister = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, phoneExist, salt, hashPassword, newUser, resistedUser, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                error = (0, auth_validator_1.authValidation)(req.body).error;
                if (error)
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                return [4 /*yield*/, user_model_1.default.findOne({ phone: req.body.phone })];
            case 1:
                phoneExist = _a.sent();
                if (phoneExist)
                    return [2 /*return*/, res.status(400).send("Phone Number is already exits")];
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
            case 2:
                salt = _a.sent();
                return [4 /*yield*/, bcryptjs_1.default.hash(req.body.password, salt)];
            case 3:
                hashPassword = _a.sent();
                newUser = new user_model_1.default({
                    phone: req.body.phone,
                    password: hashPassword,
                });
                return [4 /*yield*/, newUser.save()];
            case 4:
                resistedUser = _a.sent();
                token = jsonwebtoken_1.default.sign({ id: resistedUser._id }, config_1.default.token.secret);
                res.header("auth-token", token).send({
                    success: true,
                    message: "Register success",
                    payload: {
                        token: token,
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
var userLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, validPass, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1.default.findOne({ phone: req.body.phone })];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, res.status(400).send("Phone or Password is wrong")];
                return [4 /*yield*/, bcryptjs_1.default.compare(req.body.password, user.password)];
            case 2:
                validPass = _a.sent();
                if (!validPass)
                    return [2 /*return*/, res.status(400).send("Phone or Password is wrong")];
                token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.default.token.secret);
                res.header("auth-token", token).send({
                    success: true,
                    message: "login success",
                    payload: {
                        token: token,
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
//-------------------- admin auth ----------------------------------------------
var adminResister = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, phoneExist, salt, hashPassword, newAdmin, resistedAdmin, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                error = (0, auth_validator_1.authValidation)(req.body).error;
                if (error)
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                return [4 /*yield*/, admin_model_1.default.findOne({ phone: req.body.phone })];
            case 1:
                phoneExist = _a.sent();
                if (phoneExist)
                    return [2 /*return*/, res.status(400).send("Phone Number is already exits")];
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
            case 2:
                salt = _a.sent();
                return [4 /*yield*/, bcryptjs_1.default.hash(req.body.password, salt)];
            case 3:
                hashPassword = _a.sent();
                newAdmin = new admin_model_1.default({
                    phone: req.body.phone,
                    password: hashPassword,
                });
                return [4 /*yield*/, newAdmin.save()];
            case 4:
                resistedAdmin = _a.sent();
                token = jsonwebtoken_1.default.sign({ id: resistedAdmin._id }, config_1.default.token.secret);
                res.header("auth-token", token).send({
                    success: true,
                    message: "Register success",
                    payload: {
                        token: token
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var adminLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, validPass, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, admin_model_1.default.findOne({ phone: req.body.phone })];
            case 1:
                admin = _a.sent();
                if (!admin)
                    return [2 /*return*/, res.status(400).send("Phone or Password is wrong")];
                return [4 /*yield*/, bcryptjs_1.default.compare(req.body.password, admin.password)];
            case 2:
                validPass = _a.sent();
                if (!validPass)
                    return [2 /*return*/, res.status(400).send("Phone or Password is wrong")];
                token = jsonwebtoken_1.default.sign({ id: admin._id }, config_1.default.token.secret);
                res.header("auth-token", token).send({
                    success: true,
                    message: "Login success",
                    payload: {
                        token: token
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var authController = {
    userResister: userResister,
    userLogin: userLogin,
    adminResister: adminResister,
    adminLogin: adminLogin,
};
exports.default = authController;
