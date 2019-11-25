var express = require("express");
var app = express();
const PORT = 3000;
var locations = require("./service/locations");

// Static
app.use("/static", express.static("static"));

// locations with passing a Parameter
app.get("/locations" , function(req, res) {
    res.set("Content-Type", "application/json");
    res.send(locations.getLocations(req.query.num));
});

// Listening on given port above
app.listen(PORT, () => {
    console.log("Server is Up and Runnig\n http://localhost:3000/static\n Press Ctrl+C to Quit")
});
