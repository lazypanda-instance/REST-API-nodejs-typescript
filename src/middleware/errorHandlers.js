"use strict";
exports.__esModule = true;
var ErrorHandler = require("../utils/ErrorHandler");
var handle404Error = function (router) {
    router.use(function (req, res) {
        ErrorHandler.notFoundError();
    });
};
var handleClientError = function (router) {
    router.use(function (err, req, res, next) {
        ErrorHandler.clientError(err, res, next);
    });
};
var handleServerError = function (router) {
    router.use(function (err, req, res, next) {
        ErrorHandler.serverError(err, res, next);
    });
};
exports["default"] = [handle404Error, handleClientError, handleServerError];
