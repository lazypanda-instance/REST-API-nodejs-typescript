"use strict";
exports.__esModule = true;
var http_1 = require("http");
var express_1 = require("express");
var utils_1 = require("./utils");
var middleware_1 = require("./middleware");
var errorHandlers_1 = require("./middleware/errorHandlers");
var services_1 = require("./services");
process.on("uncaughtException", function (e) {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", function (e) {
    console.log(e);
    process.exit(1);
});
var router = express_1["default"]();
utils_1.applyMiddleware(middleware_1["default"], router);
utils_1.applyRoutes(services_1["default"], router);
utils_1.applyMiddleware(errorHandlers_1["default"], router);
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
var server = http_1["default"].createServer(router);
server.listen(PORT, function () {
    return console.log("Server is running http://localhost:" + PORT + "...");
});
