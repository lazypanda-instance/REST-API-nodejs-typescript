"use strict";
exports.__esModule = true;
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var compression_1 = require("compression");
exports.handleCors = function (router) {
    router.use(cors_1["default"]({ credentials: true, origin: true }));
};
exports.handleBodyRequestParsing = function (router) {
    router.use(body_parser_1["default"].urlencoded({ extended: true }));
    router.use(body_parser_1["default"].json());
};
exports.handleCompression = function (router) {
    router.use(compression_1["default"]());
};
