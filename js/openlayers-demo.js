var raster = new ol.layer.Tile({
	source: new ol.source.OSM()
});

/*
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'data/USA-Boredrs-of-All-States-within-United-States-and-Puerto-Rico.kml',
    format: new ol.format.KML({
      extractStyles: false // set to false to override color settings
    }),
    projection: 'EPSG:1324' // US state coordinate projection
  }),
  styleMap: styles
  
});
*/

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'data/usDensity.json',
    format: new ol.format.GeoJSON(),
  }),
  style: function(feature){
    return getStyle(feature)
  }
});

var getStyle = function(d) {
  if (d.get('density') > 1000) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#5e3c58' 
        })
      });
  } // 
  if (d.get('density') > 500) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#6e4f68' 
        })
      });
  } // 
  if (d.get('density') > 200) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#7e6279' 
        })
      });
  } // 
  if (d.get('density') > 100) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#8e768a' 
        })
      });
  } // 
  if (d.get('density') > 50) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#9e8a9a' 
        })
      });
  } // 
  if (d.get('density') > 20) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#ae9dab' 
        })
      });
  } // 
  if (d.get('density') > 10) {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#beb1bc' 
        })
      });
  } // 
  else{
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
        }),
      fill: new ol.style.Fill({
        color: '#ded8dd' 
        })
      });
  }
};


var map = new ol.Map({
	target: 'openlayers-demo',
  layers: [raster, vector],
	view: new ol.View({
		center: ol.proj.fromLonLat([-96, 37.8]),
		zoom: 4
	})
});


var featureOverlay = new ol.layer.Vector({
  source: new ol.source.Vector(),
  map: map,
  style: function(feature){
    highlightStyle = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#333',
        width: 4
        }),
      fill: new ol.style.Fill({
        color: 'rgba(0,0,0,0)' // transparent
      }),
      zIndex: 1
    });
    return highlightStyle;
  }
});


var highlight;
var highlightFeature = function (pixel) {
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
    });

    if (feature !== highlight) {
      if (highlight) {
          featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
          featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
  }
};



map.on('pointermove', function(evt) {
  if (evt.dragging) { return; }

  var pixel = map.getEventPixel(evt.originalEvent);
  highlightFeature(pixel);
});

map.on('click', function(evt) {
  console.log(evt.pixel);
});
