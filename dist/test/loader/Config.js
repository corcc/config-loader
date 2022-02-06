"use strict";
exports.__esModule = true;
exports.module = exports.config = exports.json = void 0;
var _a = {
    from: 'test',
    to: 'lib'
}, from = _a.from, to = _a.to;
exports.json = {
    loadJSON: [{
            path: 'tsconfig'
        }, {
            path: 'package'
        }, {
            path: 'package-lock'
        }]
};
exports.config = {
    loadConfig: [{
            path: 'example.Config'
        }]
};
exports.module = {
    loadModule: [{
            path: 'Package'
        }, {
            module: 'Load',
            self: "".concat(require('path').join(__dirname, 'json')),
            from: from,
            to: to
        }]
};
