"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseData = void 0;
var responseData = function (data, page, take) {
    var startIndex = (page - 1) * take;
    var endIndex = page * take;
    if (page && take) {
        return {
            success: true,
            message: "Successfully response",
            total: data.length,
            payload: data.slice(startIndex, endIndex),
            page: page,
            take: take,
        };
    }
    else {
        return {
            success: true,
            message: "Successfully response",
            total: Array.isArray(data) ? data.length : 1,
            payload: data,
        };
    }
};
exports.responseData = responseData;
