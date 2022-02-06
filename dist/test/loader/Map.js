"use strict";
exports.__esModule = true;
var module_1 = require("../../lib/loader/module");
var Config_1 = require("./Config");
var oe = Object.entries;
var fe = Object.fromEntries;
var loads = {
    index: {
        json: Config_1.json,
        config: Config_1.config,
        module: Config_1.module
    }
};
var loadResults = fe(oe(loads).map(function (_a) {
    var filename = _a[0], options = _a[1];
    var fileResult = fe(oe(options).map(function (_a) {
        var dir = _a[0], options = _a[1];
        var dirResults = fe(oe(options).map(function (_a) {
            var fn = _a[0], params = _a[1];
            var testFunction = (0, module_1.loadModule)({
                module: filename,
                self: "".concat(require('path').join(__dirname, dir)),
                from: 'test',
                to: 'lib'
            })[fn];
            var testResults = fe(params.map(function (testParam, index) {
                var result = (testFunction
                    ? testFunction(testParam)
                    : testFunction);
                return ["test".concat(index), result];
            }));
            return [fn, testResults];
        }));
        return [dir, dirResults];
    }));
    return [filename, fileResult];
}));
console.log(JSON.stringify(loadResults, null, 2));
