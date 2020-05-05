"use strict";
exports.__esModule = true;
var common_1 = require("./common");
var apiDocs_1 = require("./apiDocs");
exports["default"] = [
    common_1.handleCors,
    common_1.handleBodyRequestParsing,
    common_1.handleCompression,
    apiDocs_1.handleAPIDocs
];
