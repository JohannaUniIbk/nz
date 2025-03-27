/*
Script für die neuseelandreise
*/
let lat = -38.690;
let lng = 176.080;
let zoom = 11;

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
            <b>Hello world!</b>
            <br>
            I am a popup.
        `).openPopup();