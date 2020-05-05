"use strict";
exports.__esModule = true;
var httpErrors_1 = require("../utils/httpErrors");
exports.checkSearchParams = function (req, res, next) {
    if (!req.query.q) {
        throw new httpErrors_1.HTTP400Error("Missing q parameter");
    }
    else {
        next();
    }
};
exports.checkProfileParams = function (req, res, next) {
    if (!req.query.q) {
        throw new httpErrors_1.HTTP400Error("Missing q parameter");
    }
    else {
        next();
    }
};
exports.checkAllCommentsParams = function (req, res, next) {
    if (!req.query.postId) {
        throw new httpErrors_1.HTTP400Error("Missing postId parameter");
    }
    else {
        next();
    }
};
exports.checkGetRequestParams = function (req, res, next) {
    next();
};
exports.checkPostRequestBody = function (req, res, next) {
    if (!req.body) {
        throw new httpErrors_1.HTTP400Error("Missing request body");
    }
    else if (!req.headers['authorization']) {
        throw new httpErrors_1.HTTP401Error();
    }
    else {
        next();
    }
};
exports.checkUnauthenticatedPostRequestBody = function (req, res, next) {
    if (!req.body) {
        throw new httpErrors_1.HTTP400Error("Missing request body");
    }
    else {
        next();
    }
};
