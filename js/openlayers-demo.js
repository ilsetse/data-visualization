var map = new ol.Map({
	target: 'openlayers-demo',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-96, 37.8]),
		zoom: 4
	})
});
