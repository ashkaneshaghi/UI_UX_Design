"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    fetch("/locations").then(function (res) {
        return res.json();
    }).then(function (locations) {
        document.getElementById("root").innerHTML = "\n        <ul>\n            " + locations.map(function (l) {
            return "<li>" + l.country + "/" + l.city + "</li>";
        }).join('') + "\n        </ul>";
    });
};