import  uuid from 'uuid';

let locations = [
    {country: "Germany", city: "Frankfurt", numEmployees: 20},
    {country: "France", city: "Paris", numEmployees: 121},
    {country: "Russia", city: "Moscow", numEmployees: 2},
    {country: "USA", city: "Minneapoilis", numEmployees: 2001}
].map(l => (
    {...l, ...{id: uuid.v4()}}
));

export const getLocations = (n) => locations.slice(0, n);

export const updateLocation = (location) => {

    location.id = location.id || uuid.v4();
    const idx = locations.findIndex(l => {
        return l.id == location.id
    })

    if (idx === -1) {
        locations = [...locations, location];
    } else {
        locations = [
            ...locations.slice(0, idx-1),
            ...[location],
            ...locations.slice(idx+1)
        ]
    }
    return location;
}
