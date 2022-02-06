"use strict";
exports.__esModule = true;
exports.loadConfig = void 0;
var module_1 = require("../module");
function loadConfig(_a) {
    var path = _a.path;
    var config = (0, module_1.loadModule)({
        path: path !== null && path !== void 0 ? path : 'Config'
    }).config;
    if (!config) {
        throw Error('Invalid Configuration');
    }
    return config;
}
exports.loadConfig = loadConfig;
