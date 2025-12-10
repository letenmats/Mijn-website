const map = L.map('map').setView([51.25740, 4.67924], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

L.marker([51.25740, 4.67924])
  .addTo(map)
  .bindPopup("Schriekbos 79A")
  .openPopup();
