'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _locations = require('./service/locations');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 3000;

app.use(_bodyParser2.default.json());

// Static
app.use("/static", _express2.default.static("static"));

//add /lib to the list express static
app.use("/lib", _express2.default.static("lib"));

var router = _express2.default.Router();

// locations with passing a Parameter
router.get("/locations", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send((0, _locations.getLocations)(req.query.num));
});

// add locations POST api to add json location to
// locations array
router.post("/location", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send((0, _locations.updateLocation)(req.body));
});

app.use("/", router);

// Listening on given port above
app.listen(PORT, function () {
    console.log("Server is Up and Runnig\n http://localhost:3000/static\n Press Ctrl+C to Quit");
});