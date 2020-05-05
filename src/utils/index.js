"use strict";
exports.__esModule = true;
exports.applyMiddleware = function (middlewareWrappers, router) {
    for (var _i = 0, middlewareWrappers_1 = middlewareWrappers; _i < middlewareWrappers_1.length; _i++) {
        var wrapper = middlewareWrappers_1[_i];
        wrapper(router);
    }
};
exports.applyRoutes = function (routes, router) {
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var route = routes_1[_i];
        var method = route.method, path = route.path, handler = route.handler;
        router[method](path, handler);
    }
};
