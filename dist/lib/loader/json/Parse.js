"use strict";
exports.__esModule = true;
exports.parseJSON = void 0;
function parseJSON(_a) {
    var json = _a.json;
    var parsed;
    try {
        parsed = JSON.parse(json);
    }
    catch (e) {
        var message = "Error while parse JSON\n\t\t from value\n\t\t\t'".concat(json, "'");
        throw Error(message);
    }
    return parsed;
}
exports.parseJSON = parseJSON;
