"use strict";
exports.__esModule = true;
exports.getPathFromSelf = void 0;
var _a = {
    r: require('path').resolve,
    j: require('path').join
}, r = _a.r, j = _a.j;
function getPathFromSelf(_a) {
    var module = _a.module, self = _a.self, from = _a.from, to = _a.to;
    var sourceDir = self;
    var targetDir = r(sourceDir.replace(from, to));
    var targetPath = r(j(targetDir, module));
    return targetPath;
}
exports.getPathFromSelf = getPathFromSelf;
