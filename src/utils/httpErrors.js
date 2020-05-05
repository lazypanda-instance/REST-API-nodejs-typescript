"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HTTPClientError = /** @class */ (function (_super) {
    __extends(HTTPClientError, _super);
    function HTTPClientError(message) {
        var _this = this;
        if (message instanceof Object) {
            _this = _super.call(this, JSON.stringify(message)) || this;
        }
        else {
            _this = _super.call(this, message) || this;
        }
        _this.name = _this.constructor.name;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return HTTPClientError;
}(Error));
exports.HTTPClientError = HTTPClientError;
var HTTP400Error = /** @class */ (function (_super) {
    __extends(HTTP400Error, _super);
    function HTTP400Error(message) {
        if (message === void 0) { message = "Bad Request"; }
        var _this = _super.call(this, message) || this;
        _this.statusCode = 400;
        return _this;
    }
    return HTTP400Error;
}(HTTPClientError));
exports.HTTP400Error = HTTP400Error;
var HTTP401Error = /** @class */ (function (_super) {
    __extends(HTTP401Error, _super);
    function HTTP401Error(message) {
        if (message === void 0) { message = "Unauthorized"; }
        var _this = _super.call(this, message) || this;
        _this.statusCode = 401;
        return _this;
    }
    return HTTP401Error;
}(HTTPClientError));
exports.HTTP401Error = HTTP401Error;
var HTTP403Error = /** @class */ (function (_super) {
    __extends(HTTP403Error, _super);
    function HTTP403Error(message) {
        if (message === void 0) { message = "Forbidden"; }
        var _this = _super.call(this, message) || this;
        _this.statusCode = 403;
        return _this;
    }
    return HTTP403Error;
}(HTTPClientError));
exports.HTTP403Error = HTTP403Error;
var HTTP404Error = /** @class */ (function (_super) {
    __extends(HTTP404Error, _super);
    function HTTP404Error(message) {
        if (message === void 0) { message = "Not found"; }
        var _this = _super.call(this, message) || this;
        _this.statusCode = 404;
        return _this;
    }
    return HTTP404Error;
}(HTTPClientError));
exports.HTTP404Error = HTTP404Error;
