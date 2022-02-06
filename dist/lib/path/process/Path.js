"use strict";
exports.__esModule = true;
exports.getPathFromProcess = void 0;
var Path_1 = require("../Path");
var _a = {
    r: require('path').resolve,
    j: require('path').join
}, r = _a.r, j = _a.j;
function getPathFromProcess(_a) {
    var path = _a.path;
    return r(j(Path_1.cwd, path));
}
exports.getPathFromProcess = getPathFromProcess;
