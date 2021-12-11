"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var auth_validator_1 = require("../auth/auth.validator");
var responseData_1 = require("../../shared/utils/responseData");
var admin_model_1 = __importDefault(require("./admin.model"));
var admin_service_1 = __importDefault(require("./admin.service"));
var createAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, phoneExist, emailExist, salt, hashPassword, newAdmin, createdAdmin;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                error = (0, auth_validator_1.authValidation)({
                    phone: req.body.phone,
                    password: req.body.password,
                }).error;
                if (error)
                    return [2 /*return*/, res.send({ message: (_a = error === null || error === void 0 ? void 0 : error.details[0]) === null || _a === void 0 ? void 0 : _a.message })];
                return [4 /*yield*/, admin_model_1.default.findOne({ phone: req.body.phone })];
            case 1:
                phoneExist = _b.sent();
                if (phoneExist)
                    return [2 /*return*/, res.send({ message: "Phone Number is already exits" })];
                return [4 /*yield*/, admin_model_1.default.findOne({ phone: req.body.email })];
            case 2:
                emailExist = _b.sent();
                if (emailExist)
                    return [2 /*return*/, res.send({ message: "Email is already exits" })];
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
            case 3:
                salt = _b.sent();
                return [4 /*yield*/, bcryptjs_1.default.hash(req.body.password, salt)];
            case 4:
                hashPassword = _b.sent();
                newAdmin = __assign(__assign({}, req.body), { password: hashPassword });
                return [4 /*yield*/, admin_service_1.default.createAdmin(newAdmin)];
            case 5:
                createdAdmin = _b.sent();
                return [2 /*return*/, res.status(200).send((0, responseData_1.responseData)(createdAdmin))];
        }
    });
}); };
var getAdmins = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admins;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, admin_service_1.default.getAdmins()];
            case 1:
                admins = _a.sent();
                return [2 /*return*/, res.send((0, responseData_1.responseData)(admins, req.query.page, req.query.take))];
        }
    });
}); };
var getAdminById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var adminId, admin;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                adminId = req.params.id;
                return [4 /*yield*/, admin_service_1.default.getAdminById(adminId)];
            case 1:
                admin = _a.sent();
                return [2 /*return*/, res.send((0, responseData_1.responseData)(admin))];
        }
    });
}); };
var updateAdminById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var adminId, updatedData, updatedAdmin;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                adminId = req.params.id;
                updatedData = req.body;
                return [4 /*yield*/, admin_service_1.default.updateAdminById(adminId, updatedData)];
            case 1:
                updatedAdmin = _a.sent();
                return [2 /*return*/, res.send((0, responseData_1.responseData)(updatedAdmin))];
        }
    });
}); };
var deleteAdminById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var adminId, deletedAdmin;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                adminId = req.params.id;
                return [4 /*yield*/, admin_service_1.default.deleteAdminById(adminId)];
            case 1:
                deletedAdmin = _a.sent();
                return [2 /*return*/, res.send((0, responseData_1.responseData)(deletedAdmin))];
        }
    });
}); };
var adminController = {
    createAdmin: createAdmin,
    getAdmins: getAdmins,
    getAdminById: getAdminById,
    updateAdminById: updateAdminById,
    deleteAdminById: deleteAdminById,
};
exports.default = adminController;
