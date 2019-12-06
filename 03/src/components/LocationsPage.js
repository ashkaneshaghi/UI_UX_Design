export default () => {
    fetch("/locations").then((res) => res.json()).then((locations) => {
        document.getElementById("root").innerHTML = `
        <ul>
            ${locations.map(l => `<li>${l.country}/${l.city}</li>`)
                .join('')}
        </ul>`;
    });
}
