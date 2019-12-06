import express from 'express';

import {getLocations, updateLocation} from './service/locations';

import bodyParser from 'body-parser';

let app = express();
let PORT = 3000;

app.use(bodyParser.json());

// Static
app.use("/static", express.static("static"));

//add /lib to the list express static
app.use("/dist", express.static("dist"));


let router = express.Router();


router.get("/locations" , (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(getLocations(req.query.num));
});

router.post("/location", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(updateLocation(req.body));
});

app.use('/', router);

// Listening on given port above
app.listen(PORT, () => {
    console.log("Server is Up and Runnig\n http://localhost:3000/static\n Press Ctrl+C to Quit")
});
