"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var lib_1 = require("../../lib");
function getSelf(p) {
    var _j = path_1["default"].join(path_1["default"].resolve(__dirname), "./".concat(p));
    var _r = path_1["default"].resolve(_j);
    return _r;
}
var loadJSON = (0, lib_1.loadModule)({
    module: 'index',
    self: getSelf('json'),
    from: 'test',
    to: 'lib'
}).loadJSON;
var pkgJSON = loadJSON({
    path: 'package' // Load JSON from pacakge.json by loadJSON
});
var tsconfigJSON = loadJSON({
    path: 'tsconfig' // Load JSON from tsconfig.json by loadJSON
});
var loadConfig = (0, lib_1.loadModule)({
    module: 'index',
    self: getSelf('config'),
    from: 'test',
    to: 'lib'
}).loadConfig;
var cfgMod = loadConfig({
    path: 'example.Config'
});
var loadModule = (0, lib_1.loadModule)({
    module: 'index',
    self: getSelf('module'),
    from: 'test',
    to: 'lib'
}).loadModule;
var pkgMod = loadModule({
    path: 'Package'
});
console.log({
    pkgJSON: pkgJSON,
    tsconfigJSON: tsconfigJSON,
    cfgMod: cfgMod,
    pkgMod: pkgMod
});
