"use strict";
exports.__esModule = true;
var swagger_ui_express_1 = require("swagger-ui-express");
var swagger_json_1 = require("../config/swagger.json");
exports.handleAPIDocs = function (router) {
    return router.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_json_1["default"]));
};
