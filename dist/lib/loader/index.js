"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.loadModule = exports.loadJSON = exports.loadConfig = void 0;
var config_1 = require("./config");
__createBinding(exports, config_1, "loadConfig");
var json_1 = require("./json");
__createBinding(exports, json_1, "loadJSON");
var module_1 = require("./module");
__createBinding(exports, module_1, "loadModule");
