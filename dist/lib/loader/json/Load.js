"use strict";
exports.__esModule = true;
exports.loadJSON = void 0;
var Parse_1 = require("./Parse");
var Read_1 = require("./Read");
function loadJSON(_a) {
    var path = _a.path;
    var jsonString = (0, Read_1.readJSON)({
        path: path
    });
    var jsonParsed = (0, Parse_1.parseJSON)({
        json: jsonString
    });
    return jsonParsed;
}
exports.loadJSON = loadJSON;
