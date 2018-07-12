var mapboxAccessToken = 'pk.eyJ1IjoiaWxzZXRzZSIsImEiOiJjampmdWsxajYyNjUxM3BudmI5dWdtNXM3In0.3o9eNKEVSWoTQ4r1mICBWw';

var map = L.map('leaflet-demo').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light'
}).addTo(map);

loadData(statesData);

// global var
var geojson;
function loadData(d){
  geojson = L.geoJson(d, {
    style: style,
    onEachFeature: interaction
  }).addTo(map);
  
}


// get color depending on population density value
function getColor(d) {
		return d > 1000 ? '#5e3c58' :
				d > 500  ? '#6e4f68' :
				d > 200  ? '#7e6279' :
				d > 100  ? '#8e768a' :
				d > 50   ? '#9e8a9a' :
				d > 20   ? '#ae9dab' :
				d > 10   ? '#beb1bc' :
							'#ded8dd';
}

function style(d) {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    fillOpacity: 1,
    fillColor: getColor(d.properties.density)
  };
} // endof style

function highlightSelected(d){
  var layer = d.target;

  layer.setStyle({
    weight: 4,
    color: '#333',
    fillOpacity: 1
  });

  // todo: cross browser support
  layer.bringToFront(); // to cover dashed lines
} // endof highlightSelected

function resetHighlight(d) {
  geojson.resetStyle(d.target);
}

function zoomOnClick(d){
  map.fitBounds(d.target.getBounds());
}

function interaction(d, layer) {
  layer.on({
    mouseover: highlightSelected,
    mouseout: resetHighlight,
    click: zoomOnClick
  });
}

