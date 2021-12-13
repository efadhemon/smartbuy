"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseData = void 0;
var responseData = function (data, req) {
    var page = req.query.page;
    var take = req.query.take;
    var method = req.method;
    var path = req.baseUrl.slice(8);
    path = path.charAt(0).toUpperCase() + path.slice(1);
    if (page && take) {
        var startIndex = (page - 1) * take;
        var endIndex = page * take;
        return {
            success: true,
            message: path + " " + messageHandler(method),
            total: data.length,
            payload: data.slice(startIndex, endIndex),
            page: page,
            take: take,
        };
    }
    else {
        return {
            success: true,
            message: path + " " + messageHandler(method),
            total: Array.isArray(data) ? data.length : 1,
            payload: data,
        };
    }
};
exports.responseData = responseData;
var messageHandler = function (method) {
    switch (method.toLowerCase()) {
        case "get":
            return "successfully get";
            break;
        case "post":
            return "created successfully";
            break;
        case "put":
        case "patch":
            return "updated successfully";
            break;
        case "delete":
            return "deleted successfully";
            break;
        default:
            return "operations successful";
    }
};
