"use strict";
exports.__esModule = true;
var httpErrors_1 = require("../utils/httpErrors");
exports.notFoundError = function () {
    throw new httpErrors_1.HTTP404Error("Method not found.");
};
exports.clientError = function (err, res, next) {
    if (err instanceof httpErrors_1.HTTPClientError) {
        console.warn(err);
        res.status(err.statusCode).send(err.message);
    }
    else {
        next(err);
    }
};
exports.serverError = function (err, res, next) {
    console.error(err);
    if (process.env.NODE_ENV === "production") {
        res.status(500).send("Internal Server Error");
    }
    else {
        res.status(500).send(err.stack);
    }
};
