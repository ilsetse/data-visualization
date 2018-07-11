var map = new Datamap({
  element: document.getElementById("datamaps-demo"),
  scope: 'usa',
  fills: {
    defaultFill: '#fafafa', // Any hex, color name or rgb/rgba value
    fillOpacity: 0.7
  },
  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: true,
    highlightFillColor: '#AARRGGBB',
    highlightBorderColor: '#333',
    highlightBorderWidth: 4,
    borderColor: '#fff',
    borderWidth: 2
  },
  dataUrl: 'data/code-usDensity.json',
  dataType: 'json',
  fills: {
    '1': '#5e3c58',
    '2': '#6e4f68',
    '3': '#7e6279',
    '4': '#8e768a',
    '5': '#9e8a9a',
    '6': '#ae9dab',
    '7': '#beb1bc',
    '0': '#ded8dd',
    defaultFill: '#ded8dd'
  }
});


