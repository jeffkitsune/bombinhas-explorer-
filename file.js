// Iniciar o mapa
var map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-48.5737, -27.3065], // Long, Lat para Bombinhas
    zoom: 12,
    pitch: 45,
});

map.on('load', function() {
    // Adicionar marcadores do arquivo JSON
    fetch('markers.json')
      .then(response => response.json())
      .then(data => {
          data.forEach(marker => {
              new maplibregl.Marker()
                .setLngLat(marker.coordinates)
                .setPopup(new maplibregl.Popup().setHTML(`<h3>${marker.name}</h3><p>${marker.description}</p><img src="${marker.image}" alt="${marker.name}" style="width:100%">`))
                .addTo(map);
          });
      });
});
