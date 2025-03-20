var map = L.map('map').setView([-38.690, 176.080], 11);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([-38.690, 176.080]).addTo(map);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();