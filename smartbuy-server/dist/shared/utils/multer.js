"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerErrorHandler = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
// upload in local
var storage = multer_1.default.diskStorage({
    destination: "./upload/images",
    filename: function (req, file, cb) {
        return cb(null, "".concat(file.fieldname, "_").concat(Date.now()).concat(path_1.default.extname(file.originalname)));
    },
});
var multerErrorHandler = function (err, req, res, next) {
    if (err instanceof multer_1.default.MulterError) {
        res.status(400).json({
            success: false,
            message: err.message,
            payload: null,
        });
    }
    next();
};
exports.multerErrorHandler = multerErrorHandler;
var upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: function (req, file, cb) {
        var ext = path_1.default.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            return cb(null, false);
        }
        cb(null, true);
    },
});
exports.default = upload;
