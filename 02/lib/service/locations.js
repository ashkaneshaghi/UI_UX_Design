"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateLocation = exports.getLocations = undefined;

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//using map and ...
var locations = [{ country: "Germany", city: "Frankfurt", numEmployees: 20 }, { country: "France", city: "Paris", numEmployees: 121 }, { country: "Russia", city: "Moscow", numEmployees: 2 }, { country: "USA", city: "Minneapoilis", numEmployees: 2001 }].map(function (l) {
    return (0, _extends3.default)({}, l, { id: _uuid2.default.v4() });
});

//use es6 export and fat arrrow
// using import instead of require
var getLocations = exports.getLocations = function getLocations(n) {
    return locations.slice(0, n);
};

//function that accepts location Object
//and appends it to locations array and returns new array of locations.
var updateLocation = exports.updateLocation = function updateLocation(location) {

    // setting id on location if missing
    location.id = location.id || _uuid2.default.v4();
    var idx = locations.findIndex(function (l) {
        return l.id == location.id;
    });

    if (idx === -1) {
        //append, no mutiation
        locations = [].concat((0, _toConsumableArray3.default)(locations), [location]);
    } else {
        //replace, no mutation
        locations = [].concat((0, _toConsumableArray3.default)(locations.slice(0, idx - 1)), [location], (0, _toConsumableArray3.default)(locations.slice(idx + 1)));
    }
    return location;
};