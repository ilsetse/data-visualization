var map = AmCharts.makeChart( "amcharts-demo", {
  "type": "map",
  "theme": "light",
  "colorSteps": 20,
  
  /*
  "dataSets":[{
		"dataLoader": {
			"url": "https://raw.githubusercontent.com/ilsetse/data-visualizations/master/data/amcharts-usDensity.json",
			"format": "json" }
  }],
*/

	"dataProvider": {
		"map": "usaLow",
		"getAreasFromMap": true,
		"areas": [{"id": "US-AL", "value": 94.65}, {"id": "US-AK", "value": 1.264}, {"id": "US-AZ", "value": 57.05}, {"id": "US-AR", "value": 56.43}, {"id": "US-CA", "value": 241.7}, {"id": "US-CO", "value": 49.33}, {"id": "US-CT", "value": 739.1}, {"id": "US-DE", "value": 464.3}, {"id": "US-FL", "value": 353.4}, {"id": "US-GA", "value": 169.5}, {"id": "US-HI", "value": 214.1}, {"id": "US-ID", "value": 19.15}, {"id": "US-IL", "value": 231.5}, {"id": "US-IN", "value": 181.7}, {"id": "US-IA", "value": 54.81}, {"id": "US-KS", "value": 35.09}, {"id": "US-KY", "value": 110.0}, {"id": "US-LA", "value": 105.0}, {"id": "US-ME", "value": 43.04}, {"id": "US-MD", "value": 596.3}, {"id": "US-MA", "value": 840.2}, {"id": "US-MI", "value": 173.9}, {"id": "US-MN", "value": 67.14}, {"id": "US-MS", "value": 63.5}, {"id": "US-MO", "value": 87.26}, {"id": "US-MT", "value": 6.858}, {"id": "US-NE", "value": 23.97}, {"id": "US-NV", "value": 24.8}, {"id": "US-NH", "value": 147.0}, {"id": "US-NJ", "value": 1189.0}, {"id": "US-NM", "value": 17.16}, {"id": "US-NY", "value": 412.3}, {"id": "US-NC", "value": 198.2}, {"id": "US-ND", "value": 9.916}, {"id": "US-OH", "value": 281.9}, {"id": "US-OK", "value": 55.22}, {"id": "US-OR", "value": 40.33}, {"id": "US-PA", "value": 284.3}, {"id": "US-RI", "value": 1006.0}, {"id": "US-SC", "value": 155.4}, {"id": "US-SD", "value": 98.07}, {"id": "US-TN", "value": 88.08}, {"id": "US-TX", "value": 98.07}, {"id": "US-UT", "value": 34.3}, {"id": "US-VT", "value": 67.73}, {"id": "US-VA", "value": 204.5}, {"id": "US-WA", "value": 102.6}, {"id": "US-WV", "value": 77.06}, {"id": "US-WI", "value": 105.2}, {"id": "US-WY", "value": 5.851}, {"id": "US-PR", "value": 1082.0}]},

  "areasSettings": {
    "autoZoom": false,
    "color": "#ae9dab",
    "colorSolid" : "#5e3c58",
    "balloonText": "",
    "alpha": 1,
    "outlineAlpha": 1,
    "outlineThickness": 2,
    "rollOverColor": undefined,
    "rollOverOutlineColor": "#333",
    "rollOverOutlineThickness": 4,
    "rollOverOutlineAlpha": 1
  }
});
