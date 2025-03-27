/*
Script für die neuseelandreise
*/
let lat = -38.690;
let lng = 176.080;
let zoom = 11;

let stop = {
    nr.: 17,
    title: Taupo,
    user: johannauniibk,
    lat: -38.690,
    lng: 176.080,
    zoom: 11,
}

//Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);

//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    //MArker zeichnen
}).addTo(map);
let marker = L.marker([-38.690, 176.080]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup(`
            <h2>Taupo</h2>
            <ul>
                <li>Geogr. Breite: ${lat.toFixed(5)}° </li>
                <li>Geogr. Länge: ${lng.toFixed(5)}°</li>
            </ul>
          
        `).openPopup();

        let coarse ={
                title:"Taupo,",
                semester: "25S",
                Stunden: 3,
                typ: "VU",
        };
        console.log("title", course.title);
        console.log("semester", course.semester)
        console.log("Stunden", course.Stunden)
        console.log