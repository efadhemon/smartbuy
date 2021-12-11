"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var config = {
    bd: {
        uri: process.env.DB_URI || "http://localhost:3000/",
    },
    token: {
        secret: process.env.TOKEN_SECRET || "gkfdvbklfbreriobrtbjrtjbtgdsg",
    },
    server: {
        port: process.env.PORT || 3000,
    },
};
exports.default = config;
