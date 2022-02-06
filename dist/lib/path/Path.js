"use strict";
exports.__esModule = true;
exports.getProcessPath = exports.cwd = void 0;
exports.cwd = getProcessPath();
function getProcessPath() {
    return process.cwd();
}
exports.getProcessPath = getProcessPath;
