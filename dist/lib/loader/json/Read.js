"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.readJSON = void 0;
var process_1 = require("../../path/process");
var fs_1 = __importDefault(require("fs"));
function readJSON(_a) {
    var path = _a.path;
    var fullPath = (0, process_1.getPathFromProcess)({
        path: "".concat(path, ".json")
    });
    var readBuffer;
    var readString;
    var filterString;
    try {
        readBuffer = fs_1["default"].readFileSync("".concat(fullPath));
        readString = readBuffer.toString();
        filterString = readString.split('\n').filter(function (_) {
            var t = _.trim();
            var nt = (function () {
                var tn = t;
                while (tn.indexOf('\t') > -1) {
                    tn = tn.replace('\t', '');
                }
                return tn;
            })();
            return !nt.startsWith('/');
        }).map(function (s) {
            var f = s.indexOf('/*');
            var l = s.lastIndexOf('*/', f);
            if (f > -1 &&
                l > -1) {
                return s;
            }
            var r = s.substring(f, l);
            var a = s.replace(r, '');
            return a.startsWith('/') ? r : a;
        }).join('\n');
    }
    catch (e) {
        throw Error("Error while read JSON FIle '".concat(fullPath, "'"));
    }
    return filterString;
}
exports.readJSON = readJSON;
