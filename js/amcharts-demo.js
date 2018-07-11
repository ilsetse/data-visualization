var map = AmCharts.makeChart( "amcharts-demo", {
  "type": "map",
  "theme": "light",
  "colorSteps": 8,
  
  "dataSets":[{
		"dataLoader": {
			"url": "data/datamaps-usDensity.json",
			"format": "json" }
  }],

  "areasSettings": {
    "autoZoom": true
  },

  "valueLegend": {
    "right": 10,
    "minValue": "little",
    "maxValue": "a lot!"
  }

} );
