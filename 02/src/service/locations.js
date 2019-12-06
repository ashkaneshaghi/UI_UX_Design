// using import instead of require
import  uuid from 'uuid';

//using map and ...
let locations = [
    {country: "Germany", city: "Frankfurt", numEmployees: 20},
    {country: "France", city: "Paris", numEmployees: 121},
    {country: "Russia", city: "Moscow", numEmployees: 2},
    {country: "USA", city: "Minneapoilis", numEmployees: 2001}
].map(l => (
    {...l, ...{id: uuid.v4()}}
));

//use es6 export and fat arrrow
export const getLocations = (n) => locations.slice(0, n);

//function that accepts location Object
//and appends it to locations array and returns new array of locations.
export const updateLocation = (location) => {

    // setting id on location if missing
    location.id = location.id || uuid.v4();
    const idx = locations.findIndex(l => {
        return l.id == location.id
    })

    if (idx === -1) {
        //append, no mutiation
        locations = [...locations, location];
    } else {
        //replace, no mutation
        locations = [
            ...locations.slice(0, idx-1),
            ...[location],
            ...locations.slice(idx+1)
        ]
    }
    return location;
}