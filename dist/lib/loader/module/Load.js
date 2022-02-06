"use strict";
exports.__esModule = true;
exports.loadModule = void 0;
var process_1 = require("../../path/process");
var self_1 = require("../../path/self");
function loadModule(_p) {
    if (!_p) {
        throw Error("Invalid path '".concat(JSON.stringify(_p), "'"));
    }
    var l = (function (p) {
        var path = p.path, module = p.module, self = p.self, from = p.from, to = p.to;
        if (typeof self != 'string') {
            return (0, process_1.getPathFromProcess)({
                path: path
            });
        }
        try {
            return (0, self_1.getPathFromSelf)({
                module: module,
                self: self,
                from: from,
                to: to
            });
        }
        catch (e) {
            throw Error(e);
        }
    })(_p);
    var module = require(l);
    return module;
}
exports.loadModule = loadModule;
